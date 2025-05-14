import { createSlice } from "@reduxjs/toolkit";


const defaultState = {
    incomeInputs:{
        incomeType:'',
        incomeAmount:'',
    }
  
}

const incomeSlice = createSlice({
    name:'income',
    initialState:defaultState,
    reducers:{
        handleChange:(state,{payload:{name,value}}) => {
            state.incomeInputs.incomeType = name,
            state.incomeInputs.incomeAmount = value
        }
    },
})




export const {handleChange} = incomeSlice.actions;
export default incomeSlice.reducer;