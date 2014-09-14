(function (g, d, script) {
  'use strict';

  var run = setTimeout.bind(this, script);

  if (d.readyState !== 'complete') {
    g.addEventListener('load', run, true);
  } else {
    run();
  }
})(window, document, function() {
  'use strict';

  var getJson = function(url) {
    return $.ajax({
      url: url,
      dataType: 'json'
    })
  }

  var PIE_COLORS = [
    '#1f77b4',
    '#aec7e8',
    '#ff7f0e',
    '#ffbb78',
    '#2ca02c',
    '#98df8a',
    '#d62728',
    '#ff9896',
    '#9467bd',
    '#c5b0d5',
    '#8c564b',
    '#c49c94',
    '#e377c2',
    '#f7b6d2',
    '#7f7f7f',
    '#c7c7c7',
    '#bcbd22',
    '#dbdb8d',
    '#17becf',
    '#9edae5'
  ]

  var svgWidth = 250;
  var svgHeight = 250;

  var svg = d3.select('#graph').append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

  var pie = d3.layout.pie().value(function(d) { return d; })

  var color = d3.scale.ordinal().range(PIE_COLORS);

  var arc = d3.svg.arc().innerRadius(0).outerRadius(100);
  var g = svg.append('g');

  $.when(getJson('https://api.github.com/users/tgfjt/repos?per_page=1000'))
    .then(function(d1) {
      return $.Deferred()
        .resolve(d1
          .map(function(item) { return item.language })
          .filter(function(item) { return !!item }))
    })
    .done(function(lang) {
      var langList = _.chain(lang)
        .countBy(function(item) {
          return item
        })
        .pairs()
        .sortBy(function(item) {
          return -item[1]
        })
        .tap(function(item) {
          var $list = $('#graphlist')
          var lists = ''
          item.forEach(function(item, i) {
            lists += '<li>'
            lists += '<span class="dot" style="background:' + PIE_COLORS[i] + '"></span>'
            lists += item[0] + '<span>: ' + item[1]+ '</span></li>'
          })

          $list.html(lists)
        })
        .map(function(item) {
          return item[1]
        })
        .value()

      var sum = _.reduce(langList, function(sum, num) {
        return sum + num
      });

      g.selectAll('path')
        .data(pie(_.map(langList, function(k) {
          return (k / sum) * 100
        })))
        .enter()
        .append('path')
        .attr('stroke', '#234141')
        .attr('transform', 'translate('+svgWidth/2+', '+svgHeight/2+')')
        .transition()
        .duration(500)
        .attrTween('d', function(d) {
          var interpolate = d3.interpolate({
            startAngle: 0,
            endAngle: 0
          }, {
            startAngle: d.startAngle,
            endAngle: d.endAngle
          });
          return function(t) {
            return arc(interpolate(t));
          }
        })
        .attr('fill', function (d, i) { return color(i); }) 
    })
});
