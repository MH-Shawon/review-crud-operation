import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from 'react-router-dom'
import router from './Routes/router.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Providers/AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
  </AuthProvider>
  
    
  </React.StrictMode>,
)
