import { useLoaderData } from "react-router-dom"
import ExpenseComponent from "./ExpenseComponent";

const ExpensesComponent = () => {
  const {allExpense} = useLoaderData()

  if(allExpense.length === 0){

    return ( 
    <div className="empty-list ">
         <h5>Expense List Is Empty</h5>
    </div>
     )
  }

 
  return (
    <div className="items-component">
        {allExpense.map(expense => <ExpenseComponent expense={expense} key={expense._id}/>)}
    </div>
  )
}

export default ExpensesComponent