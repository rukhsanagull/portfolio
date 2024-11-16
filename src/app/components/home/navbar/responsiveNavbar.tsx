"use client"
import React, { useState } from 'react'
import MobileNavbar from './mobileNavbar'
import Navbar from './navbar'
const ResponsiveNavbar = () => {
  const [showNavbar,setShowNavbar] = useState(false);

  const showNavHandler = () => setShowNavbar(true);
  const closeNavHandler = () => setShowNavbar(false);
  return (
    <div>
     <Navbar openNav={showNavHandler}/>
     <MobileNavbar showNavbar={showNavbar} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNavbar
