import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Home from './pages/Home/Home.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout></MainLayout>,
  errorElement: <div>This is error page</div>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
    </RouterProvider>
  </React.StrictMode>,
)
