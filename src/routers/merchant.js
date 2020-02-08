const express = require('express')
const Merchant = require('../models/merchant')
const merchantService = require('../services/merchant')
const router = new express.Router()

router.post('/merchants', async (req, res) => {        
    const merchant = new Merchant(req.body)

    try {
        const response = await merchantService.create(req.body)
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
