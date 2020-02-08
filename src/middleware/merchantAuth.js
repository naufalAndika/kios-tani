const jwt = require('jsonwebtoken')
const Merchant = require('../models/merchant')

const merchantAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')        
        const decoded = jwt.verify(token, 'KIOSTANI')
        
        const merchant = await Merchant.findOne({
            _id: decoded._id,
            'tokens.token': token
        })
        
        if (!merchant) {
            throw new Error()
        }

        req.merchantToken = token
        req.merchant = merchant
        next()
    } catch (e) {
        res.status(401).send('please authenticate')
    }
}

module.exports = merchantAuth
