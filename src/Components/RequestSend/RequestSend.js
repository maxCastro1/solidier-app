import React, { useState, useNavigate } from 'react'
import PageOne from './pageOne'
import PageTwo from './pageTwo'
import PageThree from './pageThree'
import axios from 'axios';
import transformFormData from '../../sub-components/DataTransformation/DataTrasformation';


const RequestSend = () => {
    const [page, setPage] = useState(3);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
          names: '',
          demobNumber: '',
          nationalIdentity: '',
          telephone: '',
          sex: 'Male', 
          yearOfBirth: '',
          yearOfFirstRecruitment: '',
          yearOfDemobilization: '',
          phase:'',
          fathersNames:'',
          mothersNames:'',
          sourceOfLivelihood:'',
          maritalStatus:'',
          partner: {
            name:'',
            idNumber: '',
            telephone: '',
          },
          numberOfChildren:'',
          placeOfResidence:{
            village: '',
            cell: '',
            sector: '',
            district: '',
            province: '',
          },
          educationLevel: '',
          otherSkills: '',
          vulnerabilityIndicators:{
            lackOfShelter: '',
            landless: '',
            lackOfSkills: '',
            disability: '',
            totalScore: '',
          },
          plannedProject: '',
          applicantSignature: '',
          recommendations: '',
          approvalAuthorities: {
            sectorExecutiveSecretary: {
                name: '',
                date: '',
                telephone: '',
              },
              socialAffairsOfficer: {
                name: '',
                date: '',
                telephone: '',
              },
              personOfIntegrity: {
                name: '',
                date: '',
                telephone: '',
              },
              exCombatantRepresentatives: {
                name: '',
                date: '',
                telephone: '',
              },
              provincialReintegrationOfficer: {
                name: '',
                date: '',
                telephone: '',
                district: '',
              },
              rdrpTechSecretariatResolution: {
                name: '',
                date: '',
                resolution: '',
                position: '',
              },
          }
        
      });
      const handleSubmit = async() => {

   const url = 'http://localhost:8000/request/';

        try {
          const userId = '64f049177a7f6bb59e0ba5e8'
          const newRequest = transformFormData(userId,formData)
          console.log(newRequest)
          const response = await axios.post(url, newRequest);
          console.log('Response from server:', response.data);
          navigate('/home/Dashboard')

        } catch (error) {
          // Handle any errors that occurred during the request
          console.error('Error:', error);
      
          // You can also display an error message to the user or log it for debugging.
        }
      };
    return (
        <div className='dashboard-cont'>
            <h1 className='cont-title' >Send Request</h1>
            <div className='page-indicator-cont'>
                <div className={`page-indicator ${page === 1 ? 'active-page' : ''}`}>1</div>
                <div className={`page-indicator ${page === 2 ? 'active-page' : ''}`}>2</div>
                <div className={`page-indicator ${page === 3 ? 'active-page' : ''}`}>3</div>
            </div>
            <form className='forms-cont' >
                {page === 1 && <PageOne setPage={setPage}  formData={formData} setFormData={setFormData}/>}
                {page === 2 && <PageTwo setPage={setPage}  formData={formData} setFormData={setFormData}/>}
                {page === 3 && <PageThree setPage={setPage} formData={formData} setFormData={setFormData} onSubmit={handleSubmit}/>}
            </form>

        </div>
    )
}

export default RequestSend