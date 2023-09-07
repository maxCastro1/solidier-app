import React, { useDeferredValue, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
const Navbar = () => {
  
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(()=>{
  if(!user){
    const userFromStorage = JSON.parse(localStorage.getItem('user'));
    setUser(userFromStorage);
  }
  },[location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser('')
    navigate('/'); 
  };
  return (
    <div className='landing_page_nav-bar'>
      {!user && <Link to='login'>Login</Link>}
      {!user && <Link to='register'>Sign Up</Link>}
      {user && (
        <>
          {user  && <Link to='/home/dashboard'>Dashboard</Link>}
          <button onClick={handleLogout}>Log Out</button>
        </>
      )}
    </div>
  )
}

export default Navbar