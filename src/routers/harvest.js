const express = require('express')
const router = new express.Router()
const merchantAuth = require('../middleware/merchantAuth')
const harvestService = require('../services/harvest')

router.post('/harvests', merchantAuth, async (req, res) => {
    try {
        const response = await harvestService.create(req.body)
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router
