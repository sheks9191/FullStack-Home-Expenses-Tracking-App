
const Expenses = require('../models/Expenses')
const Incomes = require('../models/Income')
const Budgets = require('../models/Budget')
const mongoose = require('mongoose')
const moment = require('moment')
const {BadRequestError, NotFoundError} = require('../errors')

const {StatusCodes} = require('http-status-codes')





// Income Controllers
const getAllIncomes = async (req,res) => {

    const {user:{userID},query:{search,page,limit,sort}} = req

    const incomesObj = {createdBy:userID}

    if(search){
      incomesObj.incomeType = { $regex: search, $options: 'i' };
    }

    const currentPage = +page || 1;
    const pageLimit = +limit ||21;
    const incomeSkip = (currentPage - 1) * pageLimit;

    // let tempIncome = await Incomes.find(incomesObj).skip(incomeSkip).limit(pageLimit)

    let tempIncome =Incomes.find(incomesObj).skip(incomeSkip).limit(pageLimit)

       if(sort === 'oldest'){
         tempIncome = tempIncome.sort('createdAt')
     }
 
      if(sort === 'newest'){
         tempIncome = tempIncome.sort('-createdAt')
     }

     const allIncome = await tempIncome

    const totalIncomes = await Incomes.countDocuments(incomesObj)
    const noOfPages = Math.ceil(totalIncomes/pageLimit)

    res.status(StatusCodes.OK).json({allIncome, noHits:allIncome.length,totalIncomes,currentPage,noOfPages})
}

const getIncome = async (req,res) => {
    const{user:{userID},params:{id:incomeID}} = req
    const income = await Incomes.findOne({
        _id:incomeID,
        createdBy:userID,
    })

     if(!income){
        throw new NotFoundError(`No income with the id ${incomeID} `);
        
    }
    res.status(StatusCodes.OK).json({income})
}

const createNewIncome = async (req,res) => {
   const {user:{userID}} = req
   req.body.createdBy = userID
   const income = await Incomes.create(req.body)
   res.status(StatusCodes.CREATED).json({income})

}

const updateIncome = async (req,res) => {
    const {user:{userID},params:{id:incomeID},body:{incomeType,incomeAmount} } = req
    
    if(incomeType === '' || incomeAmount === ''){
        throw new BadRequestError('incomeType or incomeAmount fields cannot be empty')
    }

    const updatedIncome = await Incomes.findOneAndUpdate({_id:incomeID, createdBy:userID}, req.body, {new:true,runValidators:true})
     
     if(!updatedIncome){
        throw new NotFoundError(`No income with the id ${incomeID} `);
        
    }

    res.status(StatusCodes.OK).json({updatedIncome})

}

const deleteIncome = async (req,res) => {
    const {user:{userID},params:{id:incomeID}} = req
    const deletedIncome = await Incomes.findOneAndDelete({_id:incomeID,createdBy:userID})

    if(!deletedIncome){
       throw new NotFoundError(`No income with the id ${incomeID} `); 
    }
    res.status(StatusCodes.OK).send('Income Removed Successfully')
}

// Expenses Controllers

const getAllExpenses = async (req,res) => {
    const {user:{userID},query:{search,page,limit,sort}} = req
    

    const expensesObj = {createdBy:userID}

    if(search){
        expensesObj.expenseType = { $regex: search, $options: 'i' };
    }

    const currentPage = +page || 1;
    const pageLimit = +limit ||21;
    const expenseSkip = (currentPage - 1) * pageLimit;
    
    

    let tempExpense = Expenses.find(expensesObj).skip(expenseSkip).limit(pageLimit)

     if(sort === 'oldest'){
         tempExpense = tempExpense.sort('createdAt')
     }
 
      if(sort === 'newest'){
         tempExpense = tempExpense.sort('-createdAt')
     }

     const allExpense = await tempExpense

    const totalExpenses = await Expenses.countDocuments(expensesObj)
    const noOfPages = Math.ceil(totalExpenses/pageLimit)
    

    res.status(StatusCodes.OK).json({allExpense, noHits:allExpense.length, totalExpenses, currentPage, noOfPages})
}


const getExpense = async (req,res) => {
    const{user:{userID},params:{id:expenseID}} = req
    const expense = await Expenses.findOne({
        _id:expenseID,
        createdBy:userID,
    })

     if(!expense){
        throw new NotFoundError(`No expense with the id ${expenseID} `);
        
    }
    res.status(StatusCodes.OK).json({expense})
}

const createNewExpense = async (req,res) => {
    const {user:{userID}} = req
    req.body.createdBy = userID
    const expense = await Expenses.create(req.body)
    res.status(StatusCodes.CREATED).json({expense})
}

const updateExpense = async (req,res) => {
    const {user:{userID},params:{id:expenseID},body:{expenseType,expenseAmount}} = req

    
    if(expenseType === '' || expenseAmount === '' ){
        throw new BadRequestError('Invalid Inputs')
    }
    
    if(expenseAmount < 0){
      throw new BadRequestError('Invalid Amount')  
    }


    const updatedExpense = await Expenses.findOneAndUpdate({_id:expenseID, createdBy:userID},req.body,{new:true,runValidators:true})

    if(!updatedExpense){
        throw new NotFoundError(`No expense with the id ${expenseID} `);
        
    }
    res.status(StatusCodes.OK).json({updatedExpense})
}



const deleteExpense = async (req,res) => {
    
    const {user:{userID},params:{id:expenseID}} = req

    const deletedExpense = await Expenses.findOneAndDelete({_id:expenseID, createdBy:userID})

      if(!deletedExpense){
        throw new NotFoundError(`No expense with the id ${expenseID} `);
        
    }

    res.status(StatusCodes.OK).send('Expense Removed Successfully')

}

// Budget Controllers
const getAllBudgets = async (req,res) => {
    const {user:{userID},query:{sort}} = req

    
     
    let tempBudget = Budgets.find({createdBy:userID})
    
     if(sort === 'oldest'){
         tempBudget = tempBudget.sort('createdAt')
     }
 
      if(sort === 'newest'){
         tempBudget = tempBudget.sort('-createdAt')
     }
    const allBudget = await tempBudget



    let expenseStats = await Expenses.aggregate([
    {$match:{createdBy:new mongoose.Types.ObjectId(userID)}},
    {
        $group:{
            _id:{year:{$year:'$createdAt'}, month:{$month:'$createdAt'}},
            count:{$sum: 1},
            totalAmount:{$sum:'$expenseAmount'},
        }


    },
    {$sort:{'_id.year':-1,'_id.month':-1}},
    
  ])
 
  const expenseObj  = {};
  const monthNames = {1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'}

for(let expense of expenseStats){
    const {totalAmount,_id:{year, month}} = expense
    expenseObj[`${year}-${monthNames[month]}`]=totalAmount
}

    res.status(StatusCodes.OK).json({allBudget,expenseObj})

}

const createBudget = async (req,res) => {
    const {user:{userID},body:{uniqueID}} = req
    const uniqueMonth = await Budgets.findOne({uniqueID:uniqueID+userID,createdBy:userID})
    if(uniqueMonth){
      throw new NotFoundError('Selected month already exist');  
    }
    req.body.createdBy = userID
    req.body.uniqueID = uniqueID+userID
    const budget = await Budgets.create(req.body)
    res.status(StatusCodes.CREATED).json({budget})
}

const deleteBudget = async (req,res) => {
      const {user:{userID},params:{id:budgetID}} = req

    const deletedBudget = await Budgets.findOneAndDelete({_id:budgetID, createdBy:userID})

      if(!deletedBudget){
        throw new NotFoundError(`No expense with the id ${budgetID} `);
        
    }

    res.status(StatusCodes.OK).send('Budget Removed Successfully')
}

// Stats Controller

const statsInfo = async (req,res) => {
    const {userID} = req.user
    let expenseSummary = await Expenses.aggregate([
        {$match:{createdBy:new mongoose.Types.ObjectId(userID)}},
        {$group:{_id:'$expenseType',totalAmount:{$sum:'$expenseAmount'}, count:{$sum: 1}}}

    ])

   expenseSummary = expenseSummary.map(expense => {
    const {_id:name,totalAmount,count} = expense
    return {name,totalAmount, count}
  })

 let expenseStats = await Expenses.aggregate([
    {$match:{createdBy:new mongoose.Types.ObjectId(userID)}},
    {
        $group:{
            _id:{year:{$year:'$createdAt'}, month:{$month:'$createdAt'}, day:{$dayOfMonth:'$createdAt'}},
            count:{$sum: 1},
            totalAmount:{$sum:'$expenseAmount'},
        }


    },
    {$sort:{'_id.year':-1,'_id.month':-1,'_id.dayOfMonth':-1}},
    
  ])

   expenseStats = expenseStats.map(expense => {
    const {_id:{year,month,day},count,totalAmount} =expense
     let dateArray = [month,day,year].join('-')
    let date = moment(dateArray,"MM-DD-YYYY").format('MMM Do')
    let currentDate = [year,month,day].join('-')
    return {totalAmount,count,date,currentDate}
  })

   const expenseTotal = expenseStats.reduce((acc,cur) => {
      const {totalAmount} = cur
      return acc+=totalAmount
    },0)


  const expenseCount = await Expenses.countDocuments({createdBy:userID})


    let incomeSummary = await Incomes.aggregate([
        {$match:{createdBy:new mongoose.Types.ObjectId(userID)}},
        {$group:{_id:'$incomeType',totalAmount:{$sum:'$incomeAmount'}, count:{$sum: 1}}} 
    ])

  incomeSummary = incomeSummary.map(income => {
    const {_id:name,totalAmount,count} = income
    return {name,totalAmount, count}
  })
   
  let incomeStats = await Incomes.aggregate([
    {$match:{createdBy:new mongoose.Types.ObjectId(userID)}},
    {
        $group:{
            _id:{year:{$year:'$createdAt'}, month:{$month:'$createdAt'}, day:{$dayOfMonth:'$createdAt'}},
            count:{$sum: 1},
            totalAmount:{$sum:'$incomeAmount'},
        }


    },
    {$sort:{'_id.year':-1,'_id.month':-1,'_id.dayOfMonth':-1}},
    
  ])

  

  incomeStats = incomeStats.map(income => {
    const {_id:{day,month,year},count,totalAmount} =income
    let dateArray = [month,day,year].join('-')
    let currentDate = [year,month,day].join('-')
    
    
    let date = moment(dateArray,"MM-DD-YYYY").format('MMM Do')
    return {totalAmount,count,date,currentDate}
  })

    const incomeTotal = incomeStats.reduce((acc,cur) => {
      const {totalAmount} = cur
      return acc+=totalAmount
    },0)

    const incomeCount = await Incomes.countDocuments({createdBy:userID}) 
    

  res.status(StatusCodes.OK).json({incomeStats,expenseStats,incomeSummary,expenseSummary,incomeTotal,expenseTotal,expenseCount,incomeCount})
}

module.exports = {
    getAllIncomes,getIncome,createNewIncome,updateIncome,deleteIncome,getAllExpenses,getExpense,createNewExpense,updateExpense,deleteExpense,getAllBudgets,createBudget,deleteBudget,statsInfo
}