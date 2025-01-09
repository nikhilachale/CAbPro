import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Home from './Home.jsx'
import ReviewsPage from './components/ ReviewsPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="reviews" element={<ReviewsPage/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)