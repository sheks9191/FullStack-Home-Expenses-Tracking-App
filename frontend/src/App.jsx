import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


import { AppLayout, Budget, Charts, EditExpensePage,EditIncomePage, Error, Expenses, Incomes, Landing, Login, ProtectedRoutes, Register, Settings, Summary } from "./pages"


import { action as registerAction } from "./pages/Register"
import { action as loginAction } from "./pages/Login"
import { action as addIncomeAction } from "./pages/AddIncome"
import { action as addExpenseAction } from "./pages/AddExpense"
import { action as editExpenseAction } from "./pages/EditExpensePage"
import { action as editIncomeAction } from "./pages/EditIncomePage"
import { action as settingsAction } from "./pages/Settings"
import { action as deleteIncomeAction } from "./pages/DeleteIncome"
import { action as deleteExpenseAction} from "./pages/DeleteExpense"
import { action as deleteBudgetAction } from "./pages/DeleteBudget"
import { action as budgetAction } from "./components/MonthlyBudget"
import { loader as expenseLoader } from "./pages/Expenses"
import { loader as incomeLoader } from "./pages/Incomes"
import { loader as editExpenseLoader } from "./pages/EditExpensePage"
import { loader as editIncomeLoader } from "./pages/EditIncomePage"
import { loader as chartsLoader } from "./pages/Charts"
import { loader as summaryLoader } from "./pages/Summary"
import { loader as budgetLoader } from "./pages/Budget"



import { store } from "./store"

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      staleTime:1000 * 60 * 5
    }
  }
})

const router = createBrowserRouter([
  {
    path:'stats/',
    element:<ProtectedRoutes>
        <AppLayout/>
      </ProtectedRoutes>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Charts/>,
        loader:chartsLoader(queryClient,store),
      },

      {
        path:'incomes',
        element:<Incomes/>,
        loader:incomeLoader(queryClient,store),
      },

       {
        path:'add-income',
        action:addIncomeAction(store),
      },

       {
        path:'incomes/income/:id',
        element:<EditIncomePage/>,
        action:editIncomeAction(store),
        loader:editIncomeLoader(store),
      },

      {
        path:'delete-income/:id',
        action:deleteIncomeAction(store),
      },

       {
        path:'budget',
        element:<Budget/>,
        action:budgetAction(store),
        loader:budgetLoader(queryClient,store),

      },
        {
        path:'delete-budget/:id',
        action:deleteBudgetAction(store),
      },

      {
        path:'expenses',
        element:<Expenses/>,
        loader:expenseLoader(queryClient,store),

      },

       {
        path:'add-expense',
        action:addExpenseAction(store),
      },

      {
        path:'expenses/expense/:id',
        element:<EditExpensePage/>,
        action:editExpenseAction(store),
        loader:editExpenseLoader(store), 
      },

       {
        path:'delete-expense/:id',
        action:deleteExpenseAction(store),
      },
 
      {
        path:'settings',
        element:<Settings/>,
        action:settingsAction(store),
      },

        {
        path:'summary',
        element:<Summary/>,
        loader:summaryLoader(queryClient,store),
      },

    ]
  },

    {
    path:'/',
    element:<Landing/>,
    errorElement:<Error/>
  },

  {
    path:'/register',
    element:<Register/>,
    action:registerAction,
    errorElement:<Error/>
  },

   {
    path:'/login',
    element:<Login/>,
    action:loginAction(store),
    errorElement:<Error/>
  }


])


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
     <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
