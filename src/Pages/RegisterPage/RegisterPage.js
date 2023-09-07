import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
 
        <div className='login_page_body'>
        <div className='login_page_body_cont'>
                <div className='login_page_body_cont-left'>
                <h1>Create an Account</h1>
                <h2>Register to access the Demobilization Request System.</h2>
                </div>
                <div className='login_page_body_cont-right'>
                    <h3>Register Here</h3>
                    <div className='form'>
                    <div className='form-field'>
                        <input type='text' placeholder='Demob number'/>
                        <label>Demob number.</label>
                    </div>
                    <div className='form-field'>
                  
                        <input type='text' placeholder='Firstname'/>
                        <label>First name.</label>
                    </div>
                    {/* <div className='form-field'>
                    <label>First name.</label>
                        <input type='text' placeholder='Fiestname'/>
                    </div> */}
                    <div className='form-field'>
            
                        <input type='text' placeholder='Lastname'/>
                        <label>Last name.</label>
                    </div>
                    <div className='form-field'>
         
                        <input type='text' placeholder='Email'/>
                        <label>Email.</label>
                    </div>
                    <div className='form-field'>
                  
                        <input type='passord' placeholder='password'/>
                        <label>Password.</label>
                    </div>
                    <div className='form-field'>
                   
                        <input type='password' placeholder='password'/>
                        <label>Confirmpassword.</label>
                    </div>
                        <button>Login</button>        
                    </div>
                    <div className='login_page_body_cont-right-bottom'>
                        <span>Already have an account?<u><Link href='/#'> Log In</Link></u>.</span></div>
                </div>
        </div> 
        </div>
      
  )
}

export default RegisterPage