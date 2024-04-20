import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Cart from './components/Cart.jsx'
import SummerMainPage from './components/SummerMainPage.jsx'
import Navbar from './components/Navbar.jsx'


import { store } from './app/store.js'
import { Provider } from 'react-redux' 

const router = createBrowserRouter([
  {
    path:"/",
    element: <> <Navbar /> <App /></>,
    
  },
  {
    path:"/login",
    element: <> <Navbar /> <Login /> </>
  },
  {
    path: "/Cart",
    element: <><Navbar /> <Cart /> </>
  },
  {
    path: "/summer-products",
    element: <><Navbar /> <SummerMainPage /></>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
