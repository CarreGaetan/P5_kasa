import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import './styles/index.scss'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/about.jsx"
import AppartmentPage from "./pages/AppartmentPage.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Appartment/:id",
    element: <AppartmentPage />
  },
  {
    path: "/about",
    element: <About />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
