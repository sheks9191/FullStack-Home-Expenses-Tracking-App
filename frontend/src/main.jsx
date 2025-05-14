import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './store.js'


createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <App />
    <ToastContainer position='top-center'/>
  </Provider>
  
)
