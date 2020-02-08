const express = require('express')
require('./db/mongoose')
const merchantRouter = require('../src/routers/merchant')
const farmerRouter = require('../src/routers/farmer')

const app = express()

app.use(express.json())
app.use(merchantRouter)
app.use(farmerRouter)

module.exports = app
