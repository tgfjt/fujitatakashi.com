const html = require('choo/html')

module.exports = (state, emit) => {
  return html`
    <header>
      <h1>${state.meta.author.name}<small><span itemprop="alternateName">${state.meta.author.aka}</span></small></h1>
      <meta content="${state.meta.author.name.split(' ')[0]}" itemprop="givenName">
      <meta content="${state.meta.author.name.split(' ')[1]}" itemprop="familyName">
      <img src="${state.meta.author.avatar}" alt="" itemprop="image">
    </header>
  `
}
