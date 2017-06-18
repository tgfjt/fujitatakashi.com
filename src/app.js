const choo = require('choo')

const app = choo()

app.use(require('./models/meta'))

app.route('/', require('./pages/mainView'))

module.exports = app
