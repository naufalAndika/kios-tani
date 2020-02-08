const express = require('express')
require('./db/mongoose')
const merchantRouter = require('../src/routers/merchant')
const farmerRouter = require('../src/routers/farmer')
const growRouter = require('../src/routers/grow')
const plantRouter = require('../src/routers/plant')

const app = express()

app.use(express.json())
app.use(merchantRouter)
app.use(farmerRouter)
app.use(growRouter)
app.use(plantRouter)

module.exports = app
