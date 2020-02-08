const express = require('express')
const router = new express.Router()
const userAuth = require('../middleware/userAuth')
const purchaseService = require('../services/purchase')
const multer = require('multer')

router.post('/purchases', userAuth, async (req, res) => {
    try {
        const response = await purchaseService.create({
            ...req.body,
            buyer: req.user
        })
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

const upload = multer({
    dest: 'payment'
})

router.post('/purchases/:id/payment', userAuth, upload.single('payment'), async (req, res) => {
    try {
        const response = await purchaseService.pay(req.params.id)
        res.status(200).send(response)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router
