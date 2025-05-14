import { toast } from "react-toastify"
import { customAPI } from "../utils/utils"
import { redirect } from "react-router-dom"

export const action = (store) => async () => {
     
    const expenseData = store.getState().expense.expenseInputs

    if(expenseData.expenseAmount === '' || +expenseData.expenseAmount < 0 ){
        toast.error('Invalid Input')
        return redirect('/expenses') 
    }
     try {
        await customAPI.post(`/expense`,{expenseType:expenseData.expenseType,expenseAmount:+expenseData.expenseAmount},{
            headers:{
                authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
            }
        })
        toast.success('Expense Added Successfully')
        
     } catch (error) {
        (error.response.data.msg) 
     }

     return redirect('/expenses')  
   
}
