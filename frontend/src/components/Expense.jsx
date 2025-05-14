import { useDispatch, useSelector } from "react-redux"
import { setInputTextId } from "../features/ui/uiSlice";
import { handleChange } from "../features/expense/expenseSlice";
import AddInputComponent from "./AddInputComponent";


const Expense = ({expenseItem}) => {
 
  const {inputTextId} = useSelector(store => store.ui);
  const {expenseInputs} = useSelector(store => store.expense)
  const dispatch = useDispatch();
  const {id, expense} = expenseItem

  const handleExpenseInput = (e) => {
    dispatch(handleChange({name:e.target.name,value:e.target.value}))

    
  }

  const handleTextID = () => {
     dispatch(setInputTextId({textID:id}))
  }

 
  return (
    <AddInputComponent  handleInput={handleExpenseInput} item='expense' handleTextID={handleTextID} inputTextId={inputTextId} id={id} itemName={expense} itemAmount={expenseInputs.expenseAmount}/>
  )
}

export default Expense