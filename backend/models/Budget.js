const mongoose = require('mongoose')

const BudgetSchema = new mongoose.Schema({
    month:{
        type:String,
        required:[true]
    },

    amount:{
        type:Number,
        required:[true, 'Please input a valid amount']
    },

     date:{
        type:Date,
        required:[true, 'Please input a valid date']
    },

    uniqueID:{
        type:String,
        required:true
    },

    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    },
},{timestamps:true})


module.exports = mongoose.model('Budgets', BudgetSchema)