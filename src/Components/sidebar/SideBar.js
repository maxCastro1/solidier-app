import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
 const user = 'admin'
  return (
    <div className='side-bar_container'>
      <h2>Menu</h2>
      <div className='Side-bar_links_cont'>
        <NavLink to={'Dashboard'} className='Side-bar_links'  activeclassname="active-link">Dashboard</NavLink>
        <NavLink to={'Request/Pending'} className='Side-bar_links'  activeclassname="active-link">pending</NavLink>
        <NavLink to={'Request/Processed'} className='Side-bar_links'  activeclassname="active-link">processed</NavLink>
        <NavLink to={'report'} className='Side-bar_links'  activeclassname="active-link">report</NavLink>
        {user === 'admin' && <NavLink to={'accounts'} className='Side-bar_links'  activeclassname="active-link">Accounts</NavLink>}
      </div>

    </div>
  )
}

export default SideBar