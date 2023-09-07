import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'; // Import moment

const DemobilizationRequestCard = ({req , Processed ,user}) => {
  const formattedDate = moment(req?.createdAt).format('MMMM D, YYYY');
  return (
    <Link to = {`/home/Request/${req?._id}`}>
    <div className='dashboard-cont-lower-request'>
    <h4>Demobilization Request</h4>
    <div className='request-title-cont'>
    <div><span className='request-title'>Names: </span><span>{req?.userId?.firstName}</span> <span>{req?.userId?.lastName}</span></div>
    <div><span className='request-title'>Status: </span><span>{req?.status}</span></div>
    <div><span className='request-title'>Date: </span><span>{formattedDate}</span></div>
    <div>
    <span className='request-title'>Category: </span><span>{req?.category}</span>
    </div>
    { Processed && <div className='request-botton-cont'>
      <button className='request-botton-details'>Details</button>
      <button className='request-botton-accept'>Accept</button>
      <button className='request-botton-decline'>Decline</button>
    </div> }
   {user &&  <button className='request-botton-cancel'>Cancel</button>}

    </div>

  </div>
    </Link>

  )
}

export default DemobilizationRequestCard