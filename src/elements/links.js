const html = require('choo/html')

module.exports = (state, emit) => {
  return html`
    <nav>
      <ul>
        ${state.meta.links.map(link => html`<li><a href="${link.url}" itemprop="url">${link.label}</a></li>`)}
      </ul>
    </nav>
  `
}
