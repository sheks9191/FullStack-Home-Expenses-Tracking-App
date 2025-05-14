const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    incomeType:{
        type:String,
        required:[true]
    },

    incomeAmount:{
        type:Number,
        required:[true, 'Please input a valid amount']
    },

    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    }
},{timestamps:true})

module.exports = mongoose.model('Income', IncomeSchema)