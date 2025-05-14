import { currencyUpdate } from "../utils/utils";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { MdOutlineAccessTime,MdDelete } from "react-icons/md";
import { Form } from "react-router-dom";

const BudgetExp = ({budget}) => {

    
    const {_id,amount,date,month,monthlyExpenses} = budget
    const formattedMonth = month.substring(0,3);
    const formattedDate = date.substring(0,4);
    const formattedAmount = currencyUpdate(amount)
    const formattedMonthlyExpenses = currencyUpdate(monthlyExpenses)
    const monthlyBalance = currencyUpdate(amount - monthlyExpenses) 

  return (
    <section className="budget-exp">
        <div className="header">
            <span className="month">{formattedMonth}</span>
            <span className="date">{formattedDate}</span>
        </div>
           <div className="content">
             <p>Budget: <span className="currency">{formattedAmount}</span></p>
             <p>Expense: <span>{formattedMonthlyExpenses}</span></p>
             <p className={(amount - monthlyExpenses) <= 0 ? 'negative' : 'positive'}>Balance: <span>{monthlyBalance} {(amount - monthlyExpenses) <=0 ?<FaArrowDownLong/> : <FaArrowUpLong/>}</span></p>
           </div>
           <Form method="POST" action={`../delete-budget/${_id}`} className="delete-icon">
                  <button type="submit" className="btn-delete"><MdDelete/></button>
            </Form>  
          
    </section>
  )
}

export default BudgetExp