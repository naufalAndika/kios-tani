const Merchant = require('../../src/models/merchant')

const setupDatabase = async () => {
    await Merchant.deleteMany()
}

module.exports = {
    setupDatabase
}
