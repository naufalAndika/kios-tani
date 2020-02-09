const express = require('express')
const merchantService = require('../services/merchant')
const merchantAuth = require('../middleware/merchantAuth')
const router = new express.Router()

router.get('/merchants', async (req, res) => {
    try {
        const response = await merchantService.list()
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
}) 

router.post('/merchants', async (req, res) => {        
    try {
        const response = await merchantService.create(req.body)
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.post('/merchants/login', async (req, res) => {
    try {
        const response = await merchantService.login(req.body.email, req.body.password)
        res.status(200).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.post('/merchants/logout', merchantAuth, async (req, res) => {
    try {
        const response = await merchantService.logout(req.merchant)
        res.status(200).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router
