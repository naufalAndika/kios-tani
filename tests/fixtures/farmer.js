const mongoose = require('mongoose')
const { merchantOneId } = require('../fixtures/merchant')

const farmerOne = {
    _id: new mongoose.Types.ObjectId,
    name: 'Suyono Mardi',
    identityNumber: '350713180699012',
    landArea: 35000,
    merchant: merchantOneId
}

module.exports = {
    farmerOne
}
