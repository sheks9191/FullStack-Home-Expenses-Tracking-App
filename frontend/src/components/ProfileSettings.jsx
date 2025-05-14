import { Form, useNavigation } from "react-router-dom"
import { FormInput} from "../components"
import { useSelector } from "react-redux";


const ProfileSettings = () => {
  const {user:{name,lastName,email}} = useSelector(store => store.ui)
  
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  return (
    <div className="profile-component">
    <h5>Profile Settings</h5>
     <Form method="PATCH"  className="profile-form">
        <FormInput name="name" type="text" label="first name" defaultValue={name} />

        <FormInput name="lastName" type="text" label="last name" defaultValue={lastName}/>

        <FormInput name="email" type="email" label="email" defaultValue={email}/>
       
        
        <button type="submit" className="profile-btn btn-block" disabled={submitting}><span>{submitting?'Submitting...':'Save Changes'}</span></button>
      </Form>
    </div>
  )
}

export default ProfileSettings