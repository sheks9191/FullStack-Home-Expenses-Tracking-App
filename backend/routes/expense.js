const express = require('express')
const router = express.Router()
const demoUser = require('../middleware/demo-user')

const {getAllExpenses,getExpense,createNewExpense,updateExpense,deleteExpense} = require('../controllers/homeEx')


router.route('/').get(getAllExpenses).post(demoUser,createNewExpense)

router.route('/:id').get(getExpense).patch(demoUser,updateExpense).delete(demoUser,deleteExpense)



module.exports = router