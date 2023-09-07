import React, {useEffect, useState} from 'react'
import DemobilizationRequestCard from '../../sub-components/DemobilizationRequestCard/DemobilizationRequestCard'
import './Pending.css'
import { Link } from 'react-router-dom'
import Loader from '../../sub-components/Loader/Loader'
import axios from 'axios'
const Pending = () => {


   const [loading, setLoading] = useState(true)
   const [pendindReq, setPendingReq] = useState([])
   const [errorMessage, setErrorMessage] = useState(false)
   const user = JSON.parse(localStorage.getItem('user'));
      useEffect(() => {
        setLoading(true)
    
            try {
                axios.get(`http://localhost:8000/request/pending`,)
                    .then(response => {
                      setPendingReq(response.data)
                        setLoading(false)


                    })
            } catch (error) {

                console.log(error)
                setLoading(false)
                setErrorMessage(true)

            }
        

    }, []);

    if (loading) {
      return <Loader height={'87vh'} />; // You can display a loading indicator while fetching data
  }
  if (errorMessage) {
      return <div className='dasboard-cont ' style={{ height: '100vh' }}>
          <h1 className="text-center">Something went wrong try again. </h1></div>;
  }

  const req = [
    {
      "name": "John Doe",
      "status": "Active",
      "date": "2023-08-20",
      "description": "John Doe is an active member of the team."
    },
    {
      "name": "Jane Smith",
      "status": "Inactive",
      "date": "2023-08-22",
      "description": "Jane Smith is currently inactive and on leave."
    },
    {
      "name": "Bob Johnson",
      "status": "Pending",
      "date": "2023-08-25",
      "description": "Bob Johnson's status is pending review."
    },
    {
      "name": "Alice Brown",
      "status": "Active",
      "date": "2023-08-27",
      "description": "Alice Brown is an active team member."
    }
  ]
  return (
    <div className='dashboard-cont'>
      <h1 className='cont-title'>Pending Request</h1>
      <div className='dashboard-cont-upper'>
        <div>  
          <h3 className='cont-sub-title'>Demobilization Requests</h3>
          </div>
     
        <div className='dashboard-cont-lower-request-cont'>
          {pendindReq?.map((req,index) => {
            return(
              <DemobilizationRequestCard req={req} Processed={true} key={index}/>
            )
          
          })}
        </div>
      </div>
    </div>
  )
}

export default Pending