import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Shop from './components/Shop/Shop';
import About from './components/About';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: 'shop',
        element: <Shop></Shop>,
        loader:()=> fetch('Phone.json')
      },
      
      {
        path: 'about',
        element: <About></About>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
