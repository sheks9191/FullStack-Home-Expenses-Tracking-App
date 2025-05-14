import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./features/ui/uiSlice";
import expenseReducer from "./features/expense/expenseSlice"
import incomeReducer  from "./features/income/incomeSlice";


export const store = configureStore({

    reducer: {
       ui:uiReducer,
       expense:expenseReducer,
       income:incomeReducer,
    }
})