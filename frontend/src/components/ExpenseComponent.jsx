
import moment from "moment"
import ItemComponent from "./ItemComponent";

const ExpenseComponent = ({expense}) => {
   
 


    const {expenseType,expenseAmount,createdAt,_id:expenseID} = expense
     
    const expenseInitial = expenseType.substring(0,1)
    const date = moment(createdAt).format('MMM Do, YY')
    

  return (
    <ItemComponent itemType={expenseType}itemAmount={expenseAmount} date={date} itemID={expenseID} item='expense' itemInitial={expenseInitial}/>
  )
}

export default ExpenseComponent