import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './profile.css'
const Profile = () => {
    const data = [
        {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "role": "user",
        "registrationDate": "2023-08-20T10:00:00Z"
      }
      ]
  // You can fetch user data from your backend using useEffect
  const [userData, setUserData] = useState(data);
  const {id} = useParams();
//   check if user currently logged in is admin or owner account


//   useEffect(() => {
//     // Fetch user data from the backend here
//     // Replace the below code with your actual API call
//     fetch('/api/user-profile')
//       .then((response) => response.json())
//       .then((data) => setUserData(data))
//       .catch((error) => console.error(error));
//   }, []);

  return (
    <div className='dashboard-cont profile-cont'>
      <h2 className='cont-title'>User Profile</h2>
      {userData ? (
        <div className='profile-cont' >
          <p>
            <span className='request-title'>Name:</span> <span>{userData[0].name}</span>
          </p>
          <p>
            <span className='request-title'>Email:</span> <span>{userData[0].email}</span>
          </p>
          <p>
            <span className='request-title'>Role:</span> <span>{userData[0].role}</span>
          </p>
          <p>
            <span className='request-title'>Registration Date:</span><span> {userData[0].registrationDate}</span>
          </p>
          <button className='account-decline'>Delete Acount</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
