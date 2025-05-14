const express = require('express');
const router = express.Router()
const demoUser = require('../middleware/demo-user')


const {getAllBudgets,createBudget,deleteBudget} = require('../controllers/homeEx')

router.route('/').get(getAllBudgets).post(demoUser,createBudget)

router.route('/:id').delete(demoUser,deleteBudget)


module.exports = router