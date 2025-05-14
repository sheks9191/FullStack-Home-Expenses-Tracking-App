import { toast } from "react-toastify";
import { BudgetMonths, customAPI } from "../utils/utils"
import FormInput from "./FormInput"
import { Form, redirect, useNavigation } from "react-router-dom"

export const action = (store) => async ({request}) => {
   
    const formData = await request.formData();
    const {month,amount,date} = Object.fromEntries(formData)
   
    const year = date.split('-')[0]
    const uniqueID = month+year
    console.log(uniqueID)

    const data = {month,amount:+amount,date,uniqueID}
    

    if(isNaN(data.amount) || data.amount < 0){

        toast.error('Invalid Amount')
        return redirect('/budget')
    }
   
   
    try {
        await customAPI.post('/budget',data,{
        headers:{
            authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
        }
    })

    toast.success(`${month} ${year} budget created successfully !`)
    } catch (error) {
    const errorMsg = error?.response?.data?.msg || 'Check Your Details'
    toast.error(errorMsg)  
    }

    return null
}

const MonthlyBudget = () => {
   const navigation = useNavigation();
  const submitting = navigation.state === 'submitting'
  return (

    <Form method="POST" className="monthly-budget">
        <div className="select">
            <label htmlFor="month">Select Month</label>
             <select name="month" id="month" className="form-select">
              {BudgetMonths.map(({month,id}) => {
                return <option value={month} key={id}>{month}</option>
              })}
             </select>
        </div>
        <FormInput name="amount" type="text" label="Budget Amount"/>
        <FormInput name="date" type="date" label="Budget Date"/>

        <div className="budget-btn">
          <button type="submit" className="btn-block">{submitting ? 'Submitting...' : 'Submit'}</button>
        </div>
         
    </Form>
  )
}

export default MonthlyBudget