const express = require('express')
const router = express.Router()
const demoUser = require('../middleware/demo-user')

const { getAllIncomes,getIncome,createNewIncome,updateIncome,deleteIncome} = require('../controllers/homeEx')


router.route('/').get(getAllIncomes).post(demoUser,createNewIncome)

router.route('/:id').get(getIncome).patch(demoUser,updateIncome).delete(demoUser,deleteIncome)



module.exports = router