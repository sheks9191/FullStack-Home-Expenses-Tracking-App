import { toast } from "react-toastify"
import { customAPI } from "../utils/utils"
import { redirect } from "react-router-dom"

export const action = (store) => async ({params}) => {
 
     const {id:budgetID} = params
     try {
        await customAPI.delete(`/budget/${budgetID}`, {
            headers:{
                authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
            }
        })
        toast.success('Budget Deleted Successfully')
        
     } catch (error) {
        (error.response.data.msg) 
     }

     return redirect('/budget')
}