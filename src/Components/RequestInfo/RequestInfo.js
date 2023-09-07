import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './requestInfo.css'
import Loader from '../../sub-components/Loader/Loader';
import axios from 'axios';
import moment from 'moment'; // Import moment
const RequestInfo = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'));

    const [requestData, setrequestData] = useState([]);


    console.log(id)
    useEffect(() => {
        setLoading(true)
        if (id) {
            try {
                axios.get(`http://localhost:8000/request/${id}`,)
                    .then(response => {
                        setrequestData(response.data)
                        setLoading(false)


                    })
            } catch (error) {

                console.log(error)
                setLoading(false)
                setErrorMessage(true)

            }
        }

    }, []);
    if (loading) {
        return <Loader height={'87vh'} />; // You can display a loading indicator while fetching data
    }
    if (errorMessage || !user) {
        return <div className='dasboard-cont ' style={{ height: '100vh' }}>
            <h1 className="text-center">Something went wrong try again. </h1></div>;
    }

    let sectorDate;
    let socialDate;
    let personDate;
    let exCombatantDate;
    let Provincial;
    let RDRP;
    let place;

    if (requestData) {
        sectorDate = moment(requestData?.details?.approvalAuthorities?.sectorExecutiveSecretary?.date).format('MMMM D, YYYY');
        socialDate = moment(requestData?.details?.approvalAuthorities?.socialAffairsOfficer?.date).format('MMMM D, YYYY');
        personDate = moment(requestData?.details?.approvalAuthorities?.personOfIntegrity?.date).format('MMMM D, YYYY');
        exCombatantDate = moment(requestData?.details?.approvalAuthorities?.exCombatantRepresentatives[0]?.date).format('MMMM D, YYYY');
        Provincial = moment(requestData?.details?.approvalAuthorities?.provincialReintegrationOfficer?.date).format('MMMM D, YYYY');
        RDRP = moment(requestData?.details?.approvalAuthorities?.rdrpTechSecretariatResolution?.date).format('MMMM D, YYYY');
        place = moment(requestData?.details?.dateAndPlaceOfIssue).format('MMMM D, YYYY');
    }

    return (
        <div className='dashboard-cont'>
            <h1 className='cont-title'>Request Details</h1>
            <div className='request-details-body'>
                <div className='request-details'>
                    <div className='request-title-cont'>
                        <div>
                            <span className='request-title'>Names:</span>
                            <span>{requestData?.details?.names}</span>
                        </div>
                        <div>
                            <span className='request-title'>Demob Number:</span>
                            <span>{requestData?.details?.demobNumber}</span>
                        </div>
                        <div>
                            <span className='request-title'>National Identity:</span>
                            <span>{requestData?.details?.nationalIdentity}</span>
                        </div>
                        <div>
                            <span className='request-title'>Date and Place of Issue:</span>
                            <span>{place}</span>
                        </div>
                        <div>
                            <span className='request-title'>Telephone:</span>
                            <span>{requestData?.details?.telephone}</span>
                        </div>
                        <div>
                            <span className='request-title'>Sex:</span>
                            <span>{requestData?.details?.sex}</span>
                        </div>
                        <div>
                            <span className='request-title'>Year of Birth:</span>
                            <span>{requestData?.details?.yearOfBirth}</span>
                        </div>
                        <div>
                            <span className='request-title'>Year of First Recruitment:</span>
                            <span>{requestData?.details?.yearOfFirstRecruitment}</span>
                        </div>
                        <div>
                            <span className='request-title'>Year of Demobilization:</span>
                            <span>{requestData?.details?.yearOfDemobilization}</span>
                        </div>
                        <h2>Details</h2>
                        <div>
                            <span className='request-title'>Phase:</span>
                            <span>{requestData?.details?.phase}</span>
                        </div>
                        <div>
                            <span className='request-title'>Fathers' Names:</span>
                            <span>{requestData?.details?.fathersNames}</span>
                        </div>
                        <div>
                            <span className='request-title'>Mothers' Names:</span>
                            <span>{requestData?.details?.mothersNames}</span>
                        </div>
                        <div>
                            <span className='request-title'>Source of Livelihood:</span>
                            <span>{requestData?.details?.sourceOfLivelihood}</span>
                        </div>
                        <div>
                            <span className='request-title'>Marital Status:</span>
                            <span>{requestData?.details?.maritalStatus}</span>
                        </div>
                        <div>
                            <span className='request-title'>Partner Name:</span>
                            <span>{requestData?.details?.partner?.name}</span>
                        </div>
                        <div>
                            <span className='request-title'>Partner ID Number:</span>
                            <span>{requestData?.details?.partner?.idNumber}</span>
                        </div>
                        <div>
                            <span className='request-title'>Partner Telephone:</span>
                            <span>{requestData?.details?.partner?.telephone}</span>
                        </div>
                        <div>
                            <span className='request-title'>Number of Children:</span>
                            <span>{requestData?.details?.numberOfChildren}</span>
                        </div>
                        <hr />
                        <h2>Place of Residence </h2>
                        <div>
                            <span className='request-title'>Village:</span>
                            <span>{requestData?.details?.placeOfResidence?.village}</span>
                        </div>
                        <div>
                            <span className='request-title'>Cell:</span>
                            <span>{requestData?.details?.placeOfResidence?.cell}</span>
                        </div>
                        <div>
                            <span className='request-title'>Sector:</span>
                            <span>{requestData?.details?.placeOfResidence?.sector}</span>
                        </div>
                        <div>
                            <span className='request-title'>District:</span>
                            <span>{requestData?.details?.placeOfResidence?.district}</span>
                        </div>
                        <div>
                            <span className='request-title'>Province:</span>
                            <span>{requestData?.details?.placeOfResidence?.province}</span>
                        </div>
                        <div>
                            <span className='request-title'>Education Level:</span>
                            <span>{requestData?.details?.educationLevel}</span>
                        </div>
                        <div>
                            <span className='request-title'>Other Skills:</span>
                            <ul>
                                {requestData?.details?.otherSkills?.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        <h2>Vulnerability Indicators </h2>
                        <div>
                            <span className='request-title'>Lack of Shelter:</span>
                            <span>{requestData?.details?.vulnerabilityIndicators?.lackOfShelter}</span>
                        </div>
                        <div>
                            <span className='request-title'>Landless:</span>
                            <span>{requestData?.details?.vulnerabilityIndicators?.landless}</span>
                        </div>
                        <div>
                            <span className='request-title'>Lack of Skills:</span>
                            <span>{requestData?.details?.vulnerabilityIndicators?.lackOfSkills}</span>
                        </div>
                        <div>
                            <span className='request-title'>Disability:</span>
                            <span>{requestData?.details?.vulnerabilityIndicators?.disability}</span>
                        </div>
                        <div>
                            <span className='request-title'>Total Score:</span>
                            <span>{requestData?.details?.vulnerabilityIndicators?.totalScore}</span>
                        </div>
                        <hr />
                        <div>
                            <span className='request-title'>Planned Project:</span>
                            <span>{requestData?.details?.plannedProject}</span>
                        </div>
                        <div>
                            <span className='request-title'>Applicant Signature:</span>
                            <span>{requestData?.details?.applicantSignature}</span>
                        </div>
                        <div>
                            <span className='request-title'>Recommendations:</span>
                            <span>{requestData?.details?.recommendations}</span>
                        </div>
                        <hr />
                        <h2>Approval Authorities</h2>
                        <div>
                            <div>

                                <p className='request-title'>Sector Executive Secretary:</p>
                                <div className='request-details-more'>
                                    <span>{requestData?.details?.approvalAuthorities?.sectorExecutiveSecretary?.name}</span>
                                    <span>{sectorDate}</span>
                                    <span>{requestData?.details?.approvalAuthorities?.sectorExecutiveSecretary?.signature}</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <span className='request-title'>Social Affairs Officer:</span>
                                <div className='request-details-more'>
                                    <span>{requestData?.details?.approvalAuthorities?.socialAffairsOfficer?.name}</span>
                                    <span>{socialDate}</span>
                                    <span>{requestData?.details?.approvalAuthorities?.socialAffairsOfficer?.signature}</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <span className='request-title'>Person of Integrity:</span>
                                <div className='request-details-more'>
                                    <span>{requestData?.details?.approvalAuthorities?.personOfIntegrity?.name}</span>
                                    <span>{personDate}</span>
                                    <span>{requestData?.details?.approvalAuthorities?.personOfIntegrity?.signature}</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <span className='request-title'>Ex-Combatant Representatives:</span>
                                <ul className='next'>
                                    {requestData?.details?.approvalAuthorities?.exCombatantRepresentatives?.map((representative, index) => (
                                        <li key={index} className='next-cont'>
                                            <div>
                                                <span className='request-titles'>Name:</span> <span>{representative?.name}</span>
                                            </div>
                                            <div>
                                                <span className='request-titles'>Date:</span> <span> {exCombatantDate}</span>
                                            </div>
                                            <div>
                                                <span className='request-titles'>Signature:</span> <span> {representative?.signature}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <span className='request-title'>Provincial Reintegration Officer:</span>
                                <div className='request-details-more'>
                                    <span>{requestData?.details?.approvalAuthorities?.provincialReintegrationOfficer?.name}</span>
                                    <span>{Provincial}</span>
                                    <span>{requestData?.details?.approvalAuthorities?.provincialReintegrationOfficer?.signature}</span>
                                    <span>{requestData?.details?.approvalAuthorities?.provincialReintegrationOfficer?.district}</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <span className='request-title'>RDRP Tech Secretariat Resolution:</span>
                                <div className='request-details-more'>
                                    <span>{requestData?.details?.approvalAuthorities?.rdrpTechSecretariatResolution?.name}</span>
                                    <span>{requestData?.details?.approvalAuthorities?.rdrpTechSecretariatResolution?.date}</span>
                                    <span>{requestData?.details?.approvalAuthorities?.rdrpTechSecretariatResolution?.signature}</span>
                                    <span>{requestData?.details?.approvalAuthorities?.rdrpTechSecretariatResolution?.resolution}</span>
                                    <span>{RDRP}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                {(
                    (user.role === 'staff' && requestData.status === 'pending') || (user.role === 'admin')
                ) &&
                    requestData.status !== 'approved' &&
                    (
                        <div className='request-botton-cont reqest-info-button'>
                            <button className='request-botton-decline'>Decline</button>
                            <button className='request-botton-accept'>Accept</button>
                        </div>
                    )}


            </div>
        </div>
    );
};

export default RequestInfo;
