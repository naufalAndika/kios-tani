const express = require('express')
require('./db/mongoose')
const merchantRouter = require('../src/routers/merchant')
const farmerRouter = require('../src/routers/farmer')
const growRouter = require('../src/routers/grow')
const plantRouter = require('../src/routers/plant')
const harvestRouter = require('../src/routers/harvest')
const productRouter = require('../src/routers/product')

const app = express()

app.use(express.json())
app.use(merchantRouter)
app.use(farmerRouter)
app.use(growRouter)
app.use(plantRouter)
app.use(harvestRouter)
app.use(productRouter)

module.exports = app
