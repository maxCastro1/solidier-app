import React from 'react'
import DemobilizationRequestCard from '../../sub-components/DemobilizationRequestCard/DemobilizationRequestCard'

const Processed = () => {
  const [sort, setSort] = ['']
  const req = [
    {
      "name": "John Doe",
      "status": "Active",
      "date": "2023-08-20",
      "description": "John Doe is an active member of the team."
    },
    {
      "name": "Jane Smith",
      "status": "Inactive",
      "date": "2023-08-22",
      "description": "Jane Smith is currently inactive and on leave."
    },
    {
      "name": "Bob Johnson",
      "status": "Pending",
      "date": "2023-08-25",
      "description": "Bob Johnson's status is pending review."
    },
    {
      "name": "Alice Brown",
      "status": "Active",
      "date": "2023-08-27",
      "description": "Alice Brown is an active team member."
    }
  ]
  return (
    <div className='dashboard-cont'>
      <h1 className='cont-title'>Processed Request</h1>
      <div className='dashboard-cont-upper'>
        <div>
        <h3 className='cont-sub-title'>Demobilization Requests</h3>
        <div className="form-group">
        <label>Sort:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">All</option>
          <option value="Declined">Declined</option>
          <option value="Accepted">Accepted</option>
          {/* Add more category options */}
        </select>
      </div>
        </div>
     
        <div className='dashboard-cont-lower-request-cont'>
          {req.map((req,index) => {
            return(
              <DemobilizationRequestCard req={req} key={index} Processed={false}/>
            )
          
          })}
        </div>
      </div>
    </div>
  )
}

export default Processed