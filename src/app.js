const choo = require('choo')
const css = require('sheetify')

const app = choo()

css('./assets/css/style.css')

app.use(require('./models/meta'))

app.route('/', require('./pages/mainView'))

module.exports = app
