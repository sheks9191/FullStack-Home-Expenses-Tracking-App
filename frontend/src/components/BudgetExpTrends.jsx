import { useLoaderData } from "react-router-dom"
import BudgetExp from "./BudgetExp"


const BudgetExpTrends = () => {
  const {allBudget,expenseObj} = useLoaderData()

  const expenseObjKeys = Object.keys(expenseObj)
 
  let budgetsArray = allBudget.map(budget => {
    const {date,month} = budget
   
    if(expenseObjKeys.includes(`${date.substring(0,4)}-${month}`)){
      budget.monthlyExpenses = (expenseObj[`${date.substring(0,4)}-${month}`]);
    }else {
      budget.monthlyExpenses = 0
    }
    return budget 
  })
 budgetsArray = budgetsArray.sort((a,b) => new Date(`${b.date.substring(0,4)}-${b.month}`) - new Date(`${a.date.substring(0,4)}-${a.month}`))
 
  
  return (
    <div>
         <h5>Budget Trends</h5>
        
       <div className="monthly-budgets">
        {budgetsArray.length > 0 ? budgetsArray.map(budget => {
          return <BudgetExp key={budget._id} budget={budget}/>
        }) : <span>Budget List Is Empty</span>}
       </div>


    </div>
  )
}

export default BudgetExpTrends