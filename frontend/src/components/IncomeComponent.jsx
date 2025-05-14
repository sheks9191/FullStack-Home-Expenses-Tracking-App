import moment from "moment"
import ItemComponent from "./ItemComponent";


const IncomeComponent = ({income}) => {


     const {incomeType,incomeAmount,createdAt,_id:incomeID} = income
     const incomeInitial = incomeType.substring(0,1)
     const date = moment(createdAt).format('MMM Do, YY')
  
  return (
    <ItemComponent itemType={incomeType} itemAmount={incomeAmount} date={date} itemID={incomeID} item='income' itemInitial={incomeInitial}/>
  )
}

export default IncomeComponent