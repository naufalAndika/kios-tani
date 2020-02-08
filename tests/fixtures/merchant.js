const mongoose = require('mongoose')

const merchantOneId = new mongoose.Types.ObjectId
const merchantOne = {
    _id: merchantOneId,
    name: 'Kios Tani Donowarih',
    email: 'kiostanidonowarih@gmail.com',
    password: 'kiostanidonowarih',
    address: 'Jalan Raya Donowarih 21 Karang Ploso',
    phone: '081234567876'
}

module.exports = {
    merchantOne,
    merchantOneId
}
