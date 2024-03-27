import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import { RouterProvider } from 'react-router-dom'
import Routes from './Routers/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='max-w-[1280px] mx-auto overflow-x-hidden'>    
    <RouterProvider router={Routes}/>
  </div>
  </React.StrictMode>,
)
