import { toast } from "react-toastify"
import { customAPI } from "../utils/utils"
import { redirect } from "react-router-dom"

export const action = (store) => async () => {
     
    const incomeData = store.getState().income.incomeInputs

     if(incomeData.incomeAmount === '' || +incomeData.incomeAmount < 0 ){
        toast.error('Invalid Input')
        return redirect('/incomes')
    }
     try {
        await customAPI.post(`/income`,{incomeType:incomeData.incomeType,incomeAmount:+incomeData.incomeAmount} ,{
            headers:{
                authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
            }
        })
        toast.success('Income Added Successfully')
        
     } catch (error) {
        (error.response.data.msg) 
     }

     return redirect('/incomes')
   
   
}
