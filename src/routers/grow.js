const express = require('express')
const merchantAuth = require('../middleware/merchantAuth')
const growService = require('../services/grow')
const router = new express.Router()

router.post('/grows', merchantAuth, async (req, res) => {
    try {
        const response = await growService.create({
            ...req.body,
            merchant: req.merchant
        })

        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router
