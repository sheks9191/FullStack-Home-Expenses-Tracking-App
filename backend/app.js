require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean')

// const corsOrigin ={
//     origin:'http://localhost:5173',
//     credentials:true,            
//     optionSuccessStatus:200
// }
// app.use(cors(corsOrigin));

// connectDB

const connectDB = require('./db/connect')
const authenticate = require('./middleware/authentication')

// Routers
const authRouter = require('./routes/auth')
const incomeRouter = require('./routes/income')
const expenseRouter = require('./routes/expense')
const budgetRouter = require('./routes/budget')
const statsRouter = require('./routes/stats')

//Error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// ...
app.set('trust proxy', 1);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// Routes

app.use('/api/v2/auth', authRouter )
app.use('/api/v2/income',authenticate,incomeRouter)
app.use('/api/v2/expense',authenticate,expenseRouter)
app.use('/api/v2/budget',authenticate,budgetRouter)
app.use('/api/v2/stats',authenticate,statsRouter)

// Use
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()