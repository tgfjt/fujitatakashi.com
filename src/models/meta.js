const extend = require('extend')

module.exports = (state, emitter) => {
  state.meta = extend({
    title: 'FujitaTakashi.com',
    url: 'https://fujitatakashi.com/',
    description: 'The Web Develover loves science! JavaScript, Front-end, Browser, Languages and etc.',
    author: {
      name: 'Takashi Fujita',
      aka: 'tgfjt',
      avatar: '/img/tgfjt.png'
    },
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/tgfjt'
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/tgfjt'
      },
      {
        label: 'npm',
        url: 'https://www.npmjs.com/~tgfjt'
      },
      {
        label: 'Pinboard',
        url: 'https://pinboard.in/u:tgfjt'
      }
    ]
  }, state.meta)

  emitter.on('increment', function (count) {
    state.meta.count += count
    emitter.emit('render')
  })

  return state
}
