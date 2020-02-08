const express = require('express')
const merchantAuth = require('../middleware/merchantAuth')
const productService = require('../services/product')
const router = new express.Router()

router.post('/products', merchantAuth, async (req, res) => {
    try {
        const response = await productService.create({
            ...req.body,
            merchant: req.merchant
        })
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.patch('/products/:id', merchantAuth, async (req, res) => {
    try {
        const response = await productService.addStock(req.params.id, req.body.harvest)
        res.status(200).send(response)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.get('/products', async (req, res) => {
    try {
        const query = req.query.q
        const response = await productService.search(query)
        res.status(200).send(response)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.get('/products/:id', async (req, res) => {
    try {
        const response = await productService.detail(req.params.id)
        res.status(200).send(response)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router
