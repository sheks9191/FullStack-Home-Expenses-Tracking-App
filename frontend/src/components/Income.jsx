import { useDispatch, useSelector } from "react-redux"
import { setInputTextId } from "../features/ui/uiSlice";
import { handleChange } from "../features/income/incomeSlice";
import AddInputComponent from "./AddInputComponent";

const Income = ({incomeItem}) => {
  
  const {inputTextId} = useSelector(store => store.ui);
   const {incomeInputs} = useSelector(store => store.income)
  const dispatch = useDispatch();
  const {id,income} = incomeItem
  
  const handleIncomeInput = (e) => {
    dispatch(handleChange({name:e.target.name,value:e.target.value}))

    
  }

  const handleTextID = () => {
     dispatch(setInputTextId({textID:id}))
  }

  return (
  
  
  <AddInputComponent handleInput={handleIncomeInput} item ='income' handleTextID={handleTextID} inputTextId={inputTextId} id={id} itemName={income} itemAmount={incomeInputs.incomeAmount}/> 
  
  )
}

export default Income