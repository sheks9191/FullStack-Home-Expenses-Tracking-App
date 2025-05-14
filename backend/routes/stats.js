const express = require('express')
const router = express.Router()

const { statsInfo } = require('../controllers/homeEx')

router.route('/').get(statsInfo)

module.exports = router

