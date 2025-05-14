import { createSlice } from "@reduxjs/toolkit";


const defaultState = {

    expenseInputs:{

    expenseType:'',
    expenseAmount:'',
    
   } 

}



const expenseSlice = createSlice({
    name:'expense',
    initialState:defaultState,
    reducers:{
       handleChange:(state,{payload:{name,value}}) => {
        state.expenseInputs.expenseType = name,
        state.expenseInputs.expenseAmount = value    
       },

    },

    
})

export const {handleChange} = expenseSlice.actions;
export default expenseSlice.reducer;