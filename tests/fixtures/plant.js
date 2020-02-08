const mongoose = require('mongoose')

const plantOne = {
    _id: new mongoose.Types.ObjectId(),
    name: 'Kentang',
    yields: 20000
}

const plantTwo = {
    _id: new mongoose.Types.ObjectId(),
    name: 'Padi',
    yields: 8000
}

const plantThree = {
    _id: new mongoose.Types.ObjectId(),
    name: 'Jagung',
    yields: 12000
}

module.exports = {
    plantOne,
    plantTwo,
    plantThree
}
