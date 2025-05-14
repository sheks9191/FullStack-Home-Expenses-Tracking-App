import { BudgetExpTrends, MonthlyBudget } from "../components"
import { BudgetWrapper } from "../styledComponents/BudgetStyle"
import { customAPI } from "../utils/utils";

const budgetQuery =(store) => {
  
  return {
    queryKey:['budget'],
    queryFn:() => customAPI.get('/budget',{
    headers:{
      authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
  }
}

export const loader = (queryClient,store) => async() => {

  const response = await queryClient.ensureQueryData(budgetQuery(store))
  
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