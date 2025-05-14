import { StatsGraphs, StatsHeader } from "../components"
import { GraphWrapper } from "../styledComponents/GraphStyles"
import { customAPI } from "../utils/utils"

const statsUrl = '/stats'
const chartsQuery =(store) => {
  
  return {
    queryKey:['charts'],
    queryFn:() => customAPI(statsUrl,{
    headers:{
      authorization: `Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
  }
}

export const loader =(queryClient,store) => async () => {
  
  const response = await queryClient.ensureQueryData(chartsQuery(store))
  
  return response.data
}

const Charts = () => {


  return (
    <GraphWrapper>
      <StatsHeader/>
      <StatsGraphs/>
    </GraphWrapper>
  )
}

export default Charts