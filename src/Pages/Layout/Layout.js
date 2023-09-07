import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const Layout = () => {
  return (
    <div className='main-body'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout