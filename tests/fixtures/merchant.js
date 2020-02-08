const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const merchantOneId = new mongoose.Types.ObjectId
const merchantOne = {
    _id: merchantOneId,
    name: 'Kios Tani Donowarih',
    email: 'kiostanidonowarih@gmail.com',
    password: 'kiostanidonowarih',
    address: 'Jalan Raya Donowarih 21 Karang Ploso',
    phone: '081234567876',
    tokens: [{
        token: jwt.sign({ _id: merchantOneId }, 'KIOSTANI')
    }]
}

module.exports = {
    merchantOne,
    merchantOneId
}
