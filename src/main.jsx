import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import ErrorPage from './ErrorPage.jsx'
import AddBooks from './pages/AddBooks.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import SelectedCatrgory from './pages/Category/SelectedCatrgory.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout></MainLayout>,
  errorElement: <ErrorPage></ErrorPage>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/add-books',
      element: <AddBooks></AddBooks>
    },
    {
      path: '/category/:category',
      element: <SelectedCatrgory></SelectedCatrgory>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}>
          <MainLayout></MainLayout>
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
