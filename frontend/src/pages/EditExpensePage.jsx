import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom"
import { customAPI } from "../utils/utils"
import { EditWrapper } from "../styledComponents/EditPageStyle"
import { toast } from "react-toastify"

const expenseUrl = '/expense/'
export const loader = (store) => async ({params:{id:expenseID}}) => {
    

    const response = await customAPI.get(`${expenseUrl}${expenseID}`,{
        headers:{
            authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
        }
    })
    // console.log(response.data)
    return response.data;
}
export const action = (store) => async ({request,params:{id:expenseID}}) => {
    
    try {
     const formData = await request.formData();
     const {expenseType,expenseAmount} = Object.fromEntries(formData)
     const formatData = {expenseType,expenseAmount:+expenseAmount}

    const response = await customAPI.patch(`${expenseUrl}${expenseID}`, formatData,{
        headers:{
            authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
        }
    })
    
    toast.success('Edited Successfully ')
    return redirect('/expenses')
    } catch (error) {
       
     const errorMsg = error?.response?.data?.msg || 'Invalid Inputs'
      toast.error(errorMsg)
      return error
    }

    
} 
const EditExpensePage = () => {
    const {expense:{expenseAmount,expenseType}} = useLoaderData()
    const navigation = useNavigation()
    const submitting = navigation.state === 'loading';
    
  return (
<EditWrapper>

    <div className="edit-content">
        <Form method="PATCH" className="edit-form">
            <h4>{expenseType}</h4>
            <h5>Edit</h5>
            <div className="input-container">
                  <input type="text" name="expenseType" defaultValue={expenseType} required />
                  <input type="text" name='expenseAmount' defaultValue={expenseAmount} required />
           </div>
        
       <button type="submit" disabled={submitting}>{submitting ? 'Submitting...':'Submit'}</button>
    </Form>
    </div>
  
</EditWrapper>
  
  )
}

export default EditExpensePage