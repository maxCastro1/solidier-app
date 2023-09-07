import React, { useState } from 'react';
import './createstaff.css'
const CreateStaff = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        demobNumber: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Send a POST request to your backend to create a staff user
        try {
          const response = await fetch('/api/register-staff', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // User was successfully created as staff
            // You can redirect or show a success message here
          } else {
            // Handle errors (e.g., duplicate email, validation errors) here
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <div>
          <h2>Fill the form to register a staff member.</h2>
          <form onSubmit={handleSubmit} className='form-staff'>
            <div className='form-staff-field'>
              <label htmlFor="firstName">First Name.</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-staff-field'>
              <label htmlFor="lastName">Last Name.</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-staff-field'>
              <label htmlFor="email">Email.</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-staff-field'>
              <label htmlFor="password">Password.</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-staff-field'>
              <label htmlFor="demobNumber">ID Number.</label>
              <input
                type="text"
                id="demobNumber"
                name="demobNumber"
                value={formData.demobNumber}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register as Staff</button>
          </form>
        </div>
      );
    };


export default CreateStaff





