
const mongoose = require('mongoose')


const ExpenseSchema = new mongoose.Schema({
    expenseType:{
        type:String,
        required:[true]
    },

    expenseAmount:{
        type:Number,
        required:[true, 'Please input a valid amount']
    },

    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    },

},{timestamps:true})


module.exports = mongoose.model('Expenses', ExpenseSchema)
