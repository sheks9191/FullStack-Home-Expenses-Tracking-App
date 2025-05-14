
import { IncomesComponent,PaginationComponent, SearchComponent,SortingComponent } from "../components"
import { ItemWrapper } from "../styledComponents/ItemsStyles"
import { customAPI } from "../utils/utils"
import { useLoaderData } from "react-router-dom"


const incomeUrl = '/income'

const incomesQuery =(params,store) => {
  const {search,page,sort} = params
  return {
    queryKey:['incomes',search ?? '',page ?? '',sort ?? ''],
    queryFn:() => customAPI.get(incomeUrl,{
    params,
    headers:{
      authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
  }
}



export const loader = (queryClient,store) => async ({request}) => {

  const searchParam = new URL(request.url).searchParams.entries();

  const params = Object.fromEntries([...searchParam]);

  const response = await queryClient.ensureQueryData(incomesQuery(params,store))

  return response.data
}





const Income = () => {

 const {totalIncomes,noOfPages} = useLoaderData();

  return (
   
    <ItemWrapper>
      <SearchComponent/>
      <div className="item-header">
        <h5>Total: <span className="items-count">{totalIncomes}</span> Income{totalIncomes > 1 &&'s'}</h5>
         <SortingComponent/>
      </div> 
      <IncomesComponent/>
      {noOfPages > 1 && <PaginationComponent/>}
    </ItemWrapper>
  )
}

export default Income