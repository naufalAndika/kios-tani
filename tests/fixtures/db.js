const Merchant = require('../../src/models/merchant')
const { merchantOne } = require('./merchant')

const setupDatabase = async () => {
    await Merchant.deleteMany()
    await new Merchant(merchantOne).save()
}

module.exports = {
    setupDatabase
}
