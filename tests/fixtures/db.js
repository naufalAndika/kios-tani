const Merchant = require('../../src/models/merchant')
const Farmer = require('../../src/models/farmer')
const { merchantOne } = require('./merchant')

const setupDatabase = async () => {
    await Merchant.deleteMany()
    await Farmer.deleteMany()
    await new Merchant(merchantOne).save()
}

module.exports = {
    setupDatabase
}
