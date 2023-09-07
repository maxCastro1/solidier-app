import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StaffCard = ({ staff }) => {
  const data = [
    {
      "id": 1,
      "name": "John Doe",
      "approved": 10,
      "declined": 2,
      "date": "2023-08-19T12:30:00Z"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "approved": 8,
      "declined": 1,
      "date": "2023-08-19T13:45:00Z"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "approved": 5,
      "declined": 3,
      "date": "2023-08-19T14:15:00Z"
    }
  ];

  const [staffData, setStaffData] = useState(data);

  return (
    <div className='account-cont'>
      {staffData.map((staff, index) => (
        <Link to={`/home/Profile/${staff.id}`} key={index}>
        <div className='dashboard-cont-lower-request' >
          <div>
            <span className='user-card-name'>Name: </span>
            <span>{staff.name}</span>
          </div>
          <div>
            <span className='user-card-name'>Request approved: </span>
            <span>{staff.approved}</span>
          </div>
          <div>
            <span className='user-card-name'>Request Declined: </span>
            <span>{staff.declined}</span>
          </div>
          <div>
            <span className='user-card-name'>Date created: </span>
            <span>{staff.date}</span>
          </div>
          <button className='account-decline'>Delete</button>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default StaffCard;
