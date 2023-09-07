import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'

const ErrorPage = () => {
  const user = true
  return (
    <div className='error_body'>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
     
      <u><Link to="/">Go to Home Page</Link></u>
      {/* {user ? <u><Link to="/home">Go to Dashboard</Link></u> :  <u><Link to="/">Go to Home Page</Link></u>} */}
    </div>
  );
}

export default ErrorPage;
