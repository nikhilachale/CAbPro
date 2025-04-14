import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import CarLoader from './components/CarLoader';
function layout() {
  return (
    <>
    <CarLoader/>
<Header/>
     

<Outlet/>
      
      <Footer/>
      
    </>
  )
}

export default layout
