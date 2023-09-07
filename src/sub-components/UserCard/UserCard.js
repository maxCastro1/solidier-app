import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserCard = () => {
  const data = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "status": "Active",
      "email": "alice@example.com",
      "role": "User",
      "registrationDate": "2023-08-18T09:15:00Z"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "status": "Active",
      "email": "bob@example.com",
      "role": "User",
      "registrationDate": "2023-08-18T10:30:00Z"
    },
    {
      "id": 3,
      "name": "Charlie Brown",
      "status": "Inactive",
      "email": "charlie@example.com",
      "role": "User",
      "registrationDate": "2023-08-18T11:45:00Z"
    }
  ];

  const [userData, setUserData] = useState(data);

  return (
    <div className='account-cont'>
      {userData.map((user, index) => (
           <Link to={`/home/Profile/${user.id}`}  key={index}>
        <div className='dashboard-cont-lower-request'>
          <div>
            <span className='user-card-name'>Names: </span>
            <span>{user.name}</span>
          </div>
          <div>
            <span className='user-card-name'>Request Status: </span>
            <span>{user.status}</span>
          </div>
          <div>
            <span className='user-card-name'>Date created: </span>
            <span>{user.registrationDate}</span>
          </div>
          <button className='account-decline'>Delete</button>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default UserCard;
