const Merchant = require('../../src/models/merchant')
const Farmer = require('../../src/models/farmer')
const Plant = require('../../src/models/plant')
const { merchantOne } = require('./merchant')
const { plantOne, plantThree, plantTwo } = require('./plant')

const setupDatabase = async () => {
    await Merchant.deleteMany()
    await Farmer.deleteMany()
    await Plant.deleteMany()
    await new Plant(plantOne).save()
    await new Merchant(merchantOne).save()
}

module.exports = {
    setupDatabase
}
