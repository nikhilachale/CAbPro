import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Home from './Home.jsx'
import ReviewsPage from './components/ ReviewsPage.jsx'
import ContactInfo from './components/ContactInfo.jsx'


const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="reviews" element={<ReviewsPage/>} />
      <Route path="contact" element={<ContactInfo/>} />
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)