const Merchant = require('../../src/models/merchant')
const Farmer = require('../../src/models/farmer')
const Plant = require('../../src/models/plant')
const Grow = require('../../src/models/grow')
const Harvest = require('../../src/models/harvest')
const { merchantOne } = require('./merchant')
const { plantOne, plantThree, plantTwo } = require('./plant')
const { farmerOne } = require('./farmer')
const { growOne } = require('./grow')

const setupDatabase = async () => {
    await Merchant.deleteMany()
    await Farmer.deleteMany()
    await Plant.deleteMany()
    await Grow.deleteMany()
    await Harvest.deleteMany()
    await new Plant(plantOne).save()
    await new Merchant(merchantOne).save()
    await new Farmer(farmerOne).save()
    await new Grow(growOne).save()
}

module.exports = {
    setupDatabase
}
