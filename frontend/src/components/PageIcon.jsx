import { NavLink } from "react-router-dom"
import { expensesArray, incomeArray } from "../utils/utils"
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import Expense from "./Expense"
import Income from "./Income"
import { useDispatch, useSelector } from "react-redux"
import { setToggleLinkExpenseItems, setToggleLinkIncomeItems} from "../features/ui/uiSlice";


const PageIcon = ({pageIcon}) => {
  const {toggleLinkIncomeItems,toggleLinkExpenseItems} = useSelector(store => store.ui)
  const dispatch = useDispatch();

  const {icon,text,link} = pageIcon
  
 
  return (

    <div>
      <NavLink to={link} className="page-icon">
       
        <span className="icon">{icon}</span>
        <span className="icon-text">{text}</span>
      </NavLink>
     

    {
      
      text === 'Incomes' && 

     <div className="link-items">
       <button type="button" onClick={() => dispatch(setToggleLinkIncomeItems())} className="link-items-btn">{toggleLinkIncomeItems?<FaAngleUp/>:<FaAngleDown/>}</button>
      {toggleLinkIncomeItems && incomeArray.map((incomeItem)=> <Income key={incomeItem.id} incomeItem={incomeItem}/>)}
     </div>
    
    }
    
      {

      text === 'Expenses' && 
      
      <div className="link-items">
        <button type="button" onClick={() => dispatch(setToggleLinkExpenseItems())} className="link-items-btn">{toggleLinkExpenseItems?<FaAngleUp/>:<FaAngleDown/>}</button>
        {toggleLinkExpenseItems && expensesArray.map((expenseItem)=> <Expense key={expenseItem.id} expenseItem={expenseItem}/>)}   
      </div>

      }
  
    </div>
    
  )
}

export default PageIcon