import React, { useEffect, useState } from 'react'
import './dashboard.css'
import DemobilizationRequestCard from '../../sub-components/DemobilizationRequestCard/DemobilizationRequestCard';
import SoldierDashboard from './SoldierDashboard/SoldierDashboard';
import Loader from '../../sub-components/Loader/Loader';
import axios from 'axios';
const Dahsboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [allRequest, setAllRequest] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [stat, setStat] = useState([])

  let stats = [
    {
    name: "Pending Request",
    value:"10",
    color:"#8A0707",
    index:'totalPending'
  },  {
    name: " Accepted Request",
    value:"18",
    color:"#333333",
    index:'acceptedCount',

  },
  {
    name: " Declined Request",
    value:"78",
    color:"#354A21",
    index:'declinedCount'
  },
  {
    name: " Total Request",
    value:"180",
    color:"#00008B",
    index:'totalCount'
  }
];
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
  

  useEffect(()=>{
     setLoading(true)
    try {
      axios.get('http://localhost:8000/request/', )
      .then(response => {
        setAllRequest(response.data)
        console.log(response.data)
        setLoading(false)
      })
      
    } catch (error) {
       console.log(error)
       setLoading(false)
    }

  },[])


  useEffect (()=>{
    try {
      axios.get('http://localhost:8000/report/', )
      .then(response => {
        setStat(response.data)
        console.log(response.data)
      })
      
    } catch (error) {
       console.log(error)
    }
  }, [])




  if(Loading){
    return <Loader height={'87vh'}/>
  }
  return (
    <div className='dashboard-cont'>
      <div className='dashboard-cont-upper'>
        <h1>Welcome to Dashboard</h1><br/>
        <div className='dashboard-card-cont'>
          {user.role === 'soldier' ? 
          <SoldierDashboard/> : (
            <>
          {stats?.map((i,index)=>{
            // console.log(stat[i.index])
            console.log(stat)
          return(
            <div key={index} className={`dashboard-stats-card card${index+1}`}>
              
              <div>
                <p className='dashboard-stats-card-name'>{i.name}</p>
              </div>
              <div>
                <p className='dashboard-stats-card-value'>{Object.keys(stat).length > 0 ? stat[i.index] : '0'}</p>
              </div>
            </div>
          )
         })}
            </>
          )
        }
    
        </div>
      </div>
      {user.role === 'admin' && (   
      <div className='dashboard-cont-lower'>
        <h3>Demobilization Requests</h3>
        <div className='dashboard-cont-lower-request-cont'>
          {allRequest?.map((req,index)=>{
            return (
                <DemobilizationRequestCard req={req} key={index}/>
            )
          })}
        </div>
      </div>)}
   

    </div>
  )
}

export default Dahsboard