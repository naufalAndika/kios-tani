const mongoose = require('mongoose')
const { plantOne } = require('./plant')
const { farmerOne } = require('./farmer')
const { merchantOneId } = require('./merchant')

const growOne = {
    _id: new mongoose.Types.ObjectId(),
    plant: plantOne._id,
    landArea: 12000,
    farmer: farmerOne._id,
    merchant: merchantOneId
}

module.exports = {
    growOne
}
