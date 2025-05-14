import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getUserFromLS = () => JSON.parse(localStorage.getItem('loginUser')) || null;
const getCurrencyFromLS = () =>localStorage.getItem('unit')||'en-NG NGN' 

const defaultState = {
    user: getUserFromLS(),
    toggleLogout:false,
    toggleLinkIncomeItems:false,
    toggleLinkExpenseItems:false,
    inputTextId: '' ,
    toggleStatsTitle:false,
    toggleStatsChart:false,
    toggleMenu:false,
    currencyValue:getCurrencyFromLS()
}



const uiSlice = createSlice({
    name:'ui',
    initialState:defaultState,
    reducers: {
        loginUser:(state,{payload:{loginUser,loginUserToken}}) => {
            const userObj = {...loginUser,loginUserToken}
          state.user = userObj
          localStorage.setItem('loginUser',JSON.stringify(userObj))
        },

        logoutUser:(state)=> {
          state.user = null
          localStorage.removeItem('loginUser');
          localStorage.removeItem('navText')
          toast.success("You've Successfully Logout")
        },

        setToggleLogout:(state) => {
          state.toggleLogout = !state.toggleLogout
        } ,

         setToggleLinkIncomeItems:(state) => {
          state.toggleLinkIncomeItems = !state.toggleLinkIncomeItems
        } ,

         setToggleLinkExpenseItems:(state) => {
          state.toggleLinkExpenseItems = !state.toggleLinkExpenseItems
        } ,



          setInputTextId:(state,{payload:{textID}})=> {
            if(state.inputTextId === textID){
                state.inputTextId = '';
                return
            }
            state.inputTextId = textID
            
        }, 

          setToggleStatsTitle:(state) => {
          state.toggleStatsTitle = !state.toggleStatsTitle
        } ,

          setToggleStatsChart:(state) => {
          state.toggleStatsChart = !state.toggleStatsChart
        } ,

            setToggleMenu:(state) => {
          state.toggleMenu = !state.toggleMenu
        } ,

        setCurrencyValue:(state,{payload}) => {
            localStorage.setItem('unit',payload)
            state.currencyValue = payload
            
        },
        
    }

})



export const {loginUser,logoutUser,setToggleLogout,setToggleLinkIncomeItems,setToggleLinkExpenseItems,setNavText,setPageIconId,setInputTextId,setToggleStatsTitle,setToggleStatsChart,setToggleMenu,setCurrencyValue} = uiSlice.actions
export default uiSlice.reducer;