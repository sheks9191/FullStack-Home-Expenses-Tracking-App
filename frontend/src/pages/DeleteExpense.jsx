
import { toast } from "react-toastify"
import { customAPI } from "../utils/utils"
import { redirect } from "react-router-dom"

export const action = (store) => async ({params}) => {
 
     const {id:expenseID} = params
     try {
        await customAPI.delete(`/expense/${expenseID}`, {
            headers:{
                authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
            }
        })
        toast.success('Expense Deleted Successfully')
        
     } catch (error) {
        (error.response.data.msg) 
     }

     return redirect('/expenses')
}
