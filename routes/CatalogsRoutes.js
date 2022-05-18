const express = require('express');
const catalogsService = require('../services/CatalogsService')

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        res.json(await catalogsService.create())
    } catch(error) {
        console.error(error.message)
        next(error)
    }
})

module.exports = router