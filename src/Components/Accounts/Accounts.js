import React, { useState } from 'react';
import './accounts.css';
import UserCard from '../../sub-components/UserCard/UserCard';
import StaffCard from '../../sub-components/StaffCard/StaffCard';
import CreateStaff from '../../sub-components/CreateStaff/CreateStaff';

const Accounts = () => {
  const [choice, setChoice] = useState('users');

  return (
    <div className='dashboard-cont'>
      <h1 className='cont-title'>Accounts</h1>
      <div>
        <div className='account-nav'>
          <button onClick={() => setChoice('users')}  className={choice === "users" ? 'active-button' : ''}>Users</button>
          <button onClick={() => setChoice('staff')} className={choice === "staff" ? 'active-button' : ''}>Staff</button>
          <button onClick={() => setChoice('create')} className={choice === "create" ? 'active-button' : ''}>Create Staff</button>
        </div>
        <div className='account-cont'>
             {choice === 'users' && <h1 className='cont-title'>Users</h1>}
             {choice === 'staff' && <h1 className='cont-title'>Staff</h1>}
             {choice === 'create' && <h1 className='cont-title'>Create Staff</h1>}
          {/* Render the appropriate content based on the choice */}
          {choice === 'users' && <UserCard />}
          {choice === 'staff' && <StaffCard />}
          {choice === 'create' && <CreateStaff /> }
        </div>
      </div>
    </div>
  );
};

export default Accounts;
