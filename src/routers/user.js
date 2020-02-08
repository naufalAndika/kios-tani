const express = require('express')
const router = new express.Router()
const userService = require('../services/user')

router.post('/users', async (req, res) => {
    try {
        const response = await userService.create(req.body)
        res.status(201).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const response = await userService.login(req.body.email, req.body.password)
        res.status(200).send(response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router
