import React from 'react'
import './landingPage.css'
import img from '../../img/upscaled-min.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='landing_page_container'>
            <div className='landing_page_body'>
                <div className='landing_page_body_left'>
                    <h1>Welcome to Demobilization Request System</h1>
                    <h2> Streamlining the Demobilization Process for Soldiers</h2>
                    <p>Let’s get started</p>
                <div className='landing_page_body_left_button_cont'> 
                    <Link to={'login'} className='button'>Login</Link>
                    <Link to={'login'}className='button'>Register</Link>
                    
                </div>
                </div>
                <div className='landing_page_body_rigth'>
                    <img src={img} alt='soldier'></img>
                </div>
             
            </div>
           
        </div>
    )
}

export default LandingPage