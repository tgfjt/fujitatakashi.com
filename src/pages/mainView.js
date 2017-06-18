const html = require('choo/html')

const header = require('../elements/header')
const links = require('../elements/links')

module.exports = function mainView (state, emitter) {
  return html`
    <div class="intro">
      ${header(state, emitter)}
      ${links(state, emitter)}
    </div>
  `
}
