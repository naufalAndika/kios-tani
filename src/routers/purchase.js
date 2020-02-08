const express = require('express')
const router = new express.Router()
const userAuth = require('../middleware/userAuth')
const userService = require('../services/purchase')

router.post('/purchases', userAuth, async (req, res) => {
    try {
        const response = await userService.create({
            ...req.body,
            buyer: req.user
        })
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router
