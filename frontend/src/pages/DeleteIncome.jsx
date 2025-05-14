import { toast } from "react-toastify"
import { customAPI } from "../utils/utils"
import { redirect } from "react-router-dom"

export const action = (store) => async ({params}) => {
 
     const {id:incomeID} = params
     try {
        await customAPI.delete(`/income/${incomeID}`, {
            headers:{
                authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
            }
        })
        toast.success('Income Deleted Successfully')
        
     } catch (error) {
        (error.response.data.msg) 
     }

     return redirect('/incomes')
}

