import { useLoaderData } from "react-router-dom"
import IncomeComponent from "./IncomeComponent"


const IncomesComponent = () => {
    const {allIncome} = useLoaderData()


  if(allIncome.length === 0){

    return ( 
    <div className="empty-list ">
         <h5>Income List Is Empty</h5>
    </div>
     )
  }

    
  return (
   <div className="items-component">
       {allIncome.map(income => <IncomeComponent key={income._id} income={income}/>)}
   </div>
  )
}

export default IncomesComponent