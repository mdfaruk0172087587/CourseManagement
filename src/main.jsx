import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/Router.jsx'
import AuthProvider from './contex/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
    <div className='bg-[#EFF6FF]'>
       <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </div>
   </HelmetProvider>
  </StrictMode>,
)
