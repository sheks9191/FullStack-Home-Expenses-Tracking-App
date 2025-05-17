import { BudgetExpTrends, MonthlyBudget } from "../components"
import { BudgetWrapper } from "../styledComponents/BudgetStyle"
import { customAPI } from "../utils/utils";

// const budgetQuery =(store) => {
  
//   return {
//     queryKey:['budget'],
//     queryFn:() => customAPI.get('/budget',{
//     headers:{
//       authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
//     }
//   })
//   }
// }

export const loader = (store) => async() => {

  const response = await customAPI.get('/budget',{
    headers:{
      authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
  
  return response.data
}

const Budget = () => {
  return (
    <BudgetWrapper>
      <MonthlyBudget/>
      <BudgetExpTrends/>
    </BudgetWrapper>
  )
}

export default Budget
