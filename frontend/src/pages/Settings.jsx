import { CurrencySettings, ProfileSettings } from "../components"
import { loginUser } from "../features/ui/uiSlice";
import { SettingsWrapper } from "../styledComponents/SettingsStyles"
import { customAPI } from "../utils/utils";
import { toast } from "react-toastify";

 export const action = (store) => async ({request}) => {
   const formData = await request.formData();
   const updatedData = Object.fromEntries(formData);

   try {
     const response = await customAPI.patch('/auth/update-user',updatedData,{
        headers:{
            authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
        }
    })
     toast.success('Account Updated Successfully')
     store.dispatch(loginUser(response.data))
    
   } catch (error) {
     const errorMsg = error?.response?.data?.msg || 'Check Your Details'
    toast.error(errorMsg)
    
   }

    return null
  }
const Settings = () => {
  return (
    <SettingsWrapper>
     <CurrencySettings/>
     <ProfileSettings/>
    </SettingsWrapper>
  )
}

export default Settings