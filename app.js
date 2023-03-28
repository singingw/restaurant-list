const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}//判別開發環境

const app = express()
const port = process.env.PORT

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(routes)

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})