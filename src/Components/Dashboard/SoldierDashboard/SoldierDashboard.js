import React from 'react'
import './soldier.css'
import DemobilizationRequestCard from '../../../sub-components/DemobilizationRequestCard/DemobilizationRequestCard'
import { Link } from 'react-router-dom'

const SoldierDashboard = () => {

const req = true
  return (
    <div className='soldier-cont'>
        <h1>Your Resquest.</h1>
        {req === true ? (
               <div className='req-card'>
               <div className='req-card-left'>
                   <p>No Request</p>
                   <p>Create request</p>
               </div>
               <div className='req-card-right'>
                   <Link to={'/home/Request/send'}>+</Link>
               </div>
            </div>
        ) : <DemobilizationRequestCard  user={true}/>}
    
   
    </div>
  )
}

export default SoldierDashboard