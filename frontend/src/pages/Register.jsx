import { Form, Link, redirect, useNavigation } from "react-router-dom"
import { SigningWrapper } from "../styledComponents/SigningStyles"
import { FormInput, Logo } from "../components"
import { customAPI } from "../utils/utils";
import { toast } from "react-toastify";


 export const action = async ({request}) => {
   const formData = await request.formData();
   const regData = Object.fromEntries(formData);

   try {
     await customAPI.post('/auth/register',regData)
     toast.success('Account Created Successfully')
     return redirect('/login') 
   } catch (error) {
     const errorMsg = error?.response?.data?.msg || 'Check Register Details'
    toast.error(errorMsg)
    return error
   }

    
  }

const Register = () => {

  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'

  return (
    <SigningWrapper>
      <Form method="POST" className="form">
        <Logo/>
        <h4>Register</h4>
        <FormInput name="name" type="text" label="first name"/>

        <FormInput name="lastName" type="text" label="last name"/>

        <FormInput name="email" type="email" label="email"/>

        <FormInput name="password" type="password" label="password"/>
        
        <button type="submit" className="btn btn-block" disabled={submitting}>{submitting?'Submitting...':'Submit'}</button>
        <p>Already a member? <Link to="/login" className="link">Login</Link></p>
      </Form>

    </SigningWrapper>
  )
}

export default Register