const express = require('express')
const app = express()
const path = require('node:path')

const port = process.env.EPINIO_ENV_PORT || 80

app.use(express.static(path.resolve(__dirname, 'src/views')))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`servert started at ${port}`)
})