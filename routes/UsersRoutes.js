const express = require('express')
const usersService = require('../services/UsersService')

const router = express.Router()

router.post('/buy-product', async (req, res, next) => {
  try {
    res.json(await usersService.buyProduct(req, res, next))
  } catch (error) {
    console.error(error.message)
    next(error)
  }
})

module.exports = router
