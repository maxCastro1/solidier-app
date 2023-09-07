import React, {useState} from 'react'
import './loginPage.css'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleLogin = async (e) => {
    e.preventDefault();
  if (!formData.email || !formData.password) {
    setError('Please Fill all the fields');
    return 
  }  

const url = 'http://localhost:8000/user/login';
axios.post(url, formData)
  .then(response => {
    console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data.user));
     navigate('/home/Dashboard');
  })
  .catch(error => {
    setError('Incorect Email or Password')
    console.log(error);
  });

  };
  return (
    <div className='login_page_body'>
    <div className='login_page_body_cont'>
            <div className='login_page_body_cont-left'>
            <h1>Welcome Back</h1>
            <h2>Log in to access the Demobilization Request System.</h2>
            </div>
         
            <div className='login_page_body_cont-right'>
                <h3>Login Here</h3>
                {error && <p className='error'>{error}</p>}
                <form className='form'  onSubmit={handleLogin} >
                    <div className='form-field'>
                    <input  
                    placeholder='Username'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete='false'
                    />
                       <label>Email.</label>
                    </div>
                    <div className='form-field'>
                 
                    <input
                    placeholder='password'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    />
                    <label>Passworrd.</label>
                    </div>  
                    <button type="submit" >Login</button>      
                </form>
                <div className='login_page_body_cont-right-bottom'>
                    <a href='/#'>Forgot Password?</a>
                    <span>Don't have an account? <u><Link to='register'>Register</Link></u>.</span></div>
            </div>
    </div> 
    </div>
  )
}

export default LoginPage