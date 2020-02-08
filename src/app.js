const express = require('express')
require('./db/mongoose')
const merchantRouter = require('../src/routers/merchant')

const app = express()

app.use(express.json())
app.use(merchantRouter)

module.exports = app
