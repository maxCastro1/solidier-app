import React from 'react'
import { useNavigate} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Components/sidebar/SideBar'
import './HomePage.css'
const HomePage = () => {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  if (!user){
    navigate('/login')
  }
  return (
    <div className="home_container">
        {(user.role === 'admin' || user.role === "staff") && <SideBar />}
        <Outlet/>
      </div>

        )
}

        export default HomePage