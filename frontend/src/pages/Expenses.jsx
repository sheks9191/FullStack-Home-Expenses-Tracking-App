
import { ExpensesComponent, PaginationComponent, SearchComponent,SortingComponent} from "../components"
import { ItemWrapper } from "../styledComponents/ItemsStyles"
import { useLoaderData } from "react-router-dom"
import { customAPI } from "../utils/utils"


const expenseUrl = '/expense'

const expensesQuery =(params,store) => {
  const {search,page,sort} = params
  return {
    queryKey:['expenses',search ?? '',page ?? '',sort ?? ''],
    queryFn:() => customAPI.get(expenseUrl,{
      params,
      headers:{
      authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
  }
}

export const loader =(queryClient,store) => async ({request}) => {
  const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);

    const response = await queryClient.ensureQueryData(expensesQuery(params,store))
    
    return response.data
}



const Expenses = () => {
  
 const {totalExpenses,noOfPages} = useLoaderData();
  
  return (
    <ItemWrapper $itemCount={totalExpenses.length < 6}>
      
      <SearchComponent/>
      <div className="item-header">
      <h5>Total: <span className="items-count">{totalExpenses}</span> Expense{totalExpenses > 1 &&'s'}</h5>
      <SortingComponent/>
      </div>
      <ExpensesComponent/>
      {noOfPages > 1 && <PaginationComponent/>}
    </ItemWrapper>
  )
}

export default Expenses