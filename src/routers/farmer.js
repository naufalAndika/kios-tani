const express = require('express')
const merchantAuth = require('../middleware/merchantAuth')
const farmerService = require('../services/farmer')
const router = new express.Router()

router.post('/farmers', merchantAuth, async (req, res) => {
    try {
        const response = await farmerService.create({
            ...req.body,
            merchant: req.merchant
        })

        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.get('/farmers/:id', async (req, res) => {
    try {
        const response = await farmerService.list(req.params.id)
        res.status(200).send(response)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router
