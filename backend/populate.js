require('dotenv').config();

const expenseData = require('./demo-expenses.json');
const incomeData = require('./demo-incomes.json');
const budgetData = require('./demo-budgets.json')

const Expenses = require('./models/Expenses');
const Incomes = require('./models/Income');
const Budgets = require('./models/Budget')

const connectDB = require('./db/connect');


const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI) 
      await Expenses.create(expenseData) ;
      await Incomes.create(incomeData);
      await Budgets.create(budgetData);
      process.exit(0)
    } catch (error) {
      console.log(error);
      process.exit(1)  
    }
}

start();
