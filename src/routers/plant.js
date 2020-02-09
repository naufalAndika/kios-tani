const express = require('express')
const plantService = require('../services/plant')
const router = new express.Router()

router.post('/plants', async (req, res) => {
    try {
        const response = await plantService.create(req.body)
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.get('/plants', async (req, res) => {
    try {
        const response = await plantService.list()
        res.status(200).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router
