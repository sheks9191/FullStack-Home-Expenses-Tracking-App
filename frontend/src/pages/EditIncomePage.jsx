import { Form, redirect, useNavigation ,useLoaderData} from "react-router-dom"
import { EditWrapper } from "../styledComponents/EditPageStyle";
import { customAPI } from "../utils/utils"
import { toast } from "react-toastify"


const incomeUrl = '/income/'
export const loader = (store) => async ({params:{id:incomeID}}) => {
    

    const response = await customAPI.get(`${incomeUrl}${incomeID}`,{
        headers:{
            authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
        }
    })
    
    return response.data;
}
export const action = (store) => async ({request,params:{id:incomeID}}) => {
    
    try {
     const formData = await request.formData();
     const {incomeType,incomeAmount} = Object.fromEntries(formData)
     const formatData = {incomeType,incomeAmount:+incomeAmount}

    const response = await customAPI.patch(`${incomeUrl}${incomeID}`, formatData,{
        headers:{
            authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
        }
    })
    
    toast.success('Edited Successfully ')
    return redirect('/incomes')
    } catch (error) {
       
     const errorMsg = error?.response?.data?.msg || 'Invalid Inputs'
      toast.error(errorMsg)
      return error
    }

    
} 
const EditIncomePage = () => {
    const {income:{incomeType,incomeAmount}} = useLoaderData();
    const navigation = useNavigation();
    const submitting = navigation.state === 'loading';
  return (
   <EditWrapper>

    <div className="edit-content">
        <Form method="PATCH" className="edit-form">
            <h4>{incomeType}</h4>
            <h5>Edit</h5>
            <div className="input-container">
                  <input type="text" name="incomeType" defaultValue={incomeType} required />
                  <input type="text" name='incomeAmount' defaultValue={incomeAmount} required />
           </div>
        
       <button type="submit" disabled={submitting}>{submitting ? 'Submitting...':'Submit'}</button>
    </Form>
    </div>
  
</EditWrapper>
  )
}

export default EditIncomePage