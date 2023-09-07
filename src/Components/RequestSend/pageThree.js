import { useFormik } from 'formik';
import React, { useState } from 'react'

const PageThree = ({ setPage, formData, setFormData , onSubmit}) => {
    const [eror, setEror] = useState(false)

    const initialValues = {
        sectorExecutiveSecretary: {
            name: '',
            date: '',
            telphone: '',
        },
        socialAffairsOfficer: {
            name: '',
            date: '',
            telphone: '',
        },
        personOfIntegrity: {
            name: '',
            date: '',
            telphone: '',
        },
        exCombatantRepresentatives: [
            {
                name: '',
                date: '',
                telphone: '',
            }
        ],
        provincialReintegrationOfficer: {
            name: '',
            date: '',
            telphone: '',
            district: '',
        },
        rdrpTechSecretariatResolution: {
            name: '',
            date: '',
            resolution: '',
            position: '',
        },

    }
    const validate = (values) => {
        const errors = {};

        if (!values.sectorExecutiveSecretary) {
            errors.sectorExecutiveSecretary = "Approval sector are required";
        }
        if (!values.sectorExecutiveSecretary.name) {
            errors.sectorExecutiveSecretary = {
                ...errors.sectorExecutiveSecretary, name: 'Name is required',
            }
        }
        if (!values.sectorExecutiveSecretary.date) {
            errors.sectorExecutiveSecretary = {
                ...errors.sectorExecutiveSecretary, date: 'Date is required',
            }
        }
        if (!values.sectorExecutiveSecretary.telphone) {
            errors.sectorExecutiveSecretary = {
                ...errors.sectorExecutiveSecretary, telphone: 'Telphone is required',
            }
        }
        if (!values.socialAffairsOfficer) {
            errors.sectorExecutiveSecretary = "Approval sector are required";
        }
        if (!values.socialAffairsOfficer.name) {
            errors.socialAffairsOfficer = {
                ...errors.socialAffairsOfficer, name: 'Name is required',
            }
        }
        if (!values.socialAffairsOfficer.date) {
            errors.socialAffairsOfficer = {
                ...errors.socialAffairsOfficer, date: 'Date is required',
            }
        }
        if (!values.socialAffairsOfficer.telphone) {
            errors.socialAffairsOfficer = {
                ...errors.socialAffairsOfficer, telphone: 'Telphone is required',
            }
        }
        if (!values.personOfIntegrity) {
            errors.sectorExecutiveSecretary = "Approval sector are required";
        }
        if (!values.personOfIntegrity.name) {
            errors.personOfIntegrity = {
                ...errors.personOfIntegrity, name: 'Name is required',
            }
        }
        if (!values.personOfIntegrity.date) {
            errors.personOfIntegrity = {
                ...errors.personOfIntegrity, date: 'Date is required',
            }
        }
        if (!values.personOfIntegrity.telphone) {
            errors.personOfIntegrity = {
                ...errors.personOfIntegrity, telphone: 'Telphone is required',
            }
        }
        if (!values.exCombatantRepresentatives) {
            errors.exCombatantRepresentatives = [];
      
            values.exCombatantRepresentatives.forEach((representative, index) => {
              const representativeErrors = {};
      
              if (!representative.name) {
                representativeErrors.name = 'Name is required';
              }
      
              if (!representative.date) {
                representativeErrors.date = 'Date is required';
              }
      
              if (!representative.telphone) {
                representativeErrors.telphone = 'Telephone is required';
              }
      
              // Add representative errors to the array
              errors.exCombatantRepresentatives[index] = representativeErrors;
            });
          }
          if (!values.provincialReintegrationOfficer) {
            errors.sectorExecutiveSecretary = "Approval sector are required";
        }
        if (!values.provincialReintegrationOfficer.name) {
            errors.provincialReintegrationOfficer = {
                ...errors.provincialReintegrationOfficer, name: 'Name is required',
            }
        }
        if (!values.provincialReintegrationOfficer.date) {
            errors.provincialReintegrationOfficer = {
                ...errors.provincialReintegrationOfficer, date: 'Date is required',
            }
        }
        if (!values.provincialReintegrationOfficer.telphone) {
            errors.provincialReintegrationOfficer = {
                ...errors.provincialReintegrationOfficer, telphone: 'Telphone is required',
            }
        }
        if (!values.provincialReintegrationOfficer.district) {
            errors.provincialReintegrationOfficer = {
                ...errors.provincialReintegrationOfficer, district: 'District  is required',
            }
        }
          if (!values.rdrpTechSecretariatResolution) {
            errors.rdrpTechSecretariatResolution = "Approval sector are required";
        }
        if (!values.rdrpTechSecretariatResolution.name) {
            errors.rdrpTechSecretariatResolution = {
                ...errors.rdrpTechSecretariatResolution, name: 'Name is required',
            }
        }
        if (!values.rdrpTechSecretariatResolution.date) {
            errors.rdrpTechSecretariatResolution = {
                ...errors.rdrpTechSecretariatResolution, date: 'Date is required',
            }
        }
        if (!values.rdrpTechSecretariatResolution.resolution) {
            errors.rdrpTechSecretariatResolution = {
                ...errors.rdrpTechSecretariatResolution, resolution: 'Resolution is required',
            }
        }
        if (!values.rdrpTechSecretariatResolution.position) {
            errors.rdrpTechSecretariatResolution = {
                ...errors.rdrpTechSecretariatResolution, position: 'Position  is required',
            }
        }


        return errors;
    };

    const formik = useFormik({
        initialValues: initialValues,
        validate: validate,
    });
    const handleNext = () => {
        // Validate the current page's fields
        setEror(false)
        const errors = validate(formik.values);
      
        if (Object.keys(errors).length === 0) {
        //   Fields are valid, update formData and move to the next page
        const data = {
            approvalAuthorities: {
                ...formik.values,
            }
        }
          setFormData(prevFormData => ({
            ...prevFormData,
            ...data, // Update formData with current form page values
          }));
          console.log(data)
        //   console.log(formData)
   
          onSubmit();
        }
        else{
            setEror(true)
            setTimeout(() => {
                setEror(false)
              }, 3000);
        }
      };
    return (
        <div className='page-three'>
             {eror && <p className='error'>Please fill all the fields </p>}
            <h2 className='page-three-title'>Approval Authorities</h2>
            <div className="form-group request-send-inputs">
                <span className='request-title'>Social Affairs Officer:</span>
                <div className='reauest-details-more'>
                    <span className='request-title'>Name</span>
                    <input
                        type='text'
                        name='sectorExecutiveSecretary.name'
                        value={formik.values.sectorExecutiveSecretary.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.sectorExecutiveSecretary && formik.touched.sectorExecutiveSecretary.name && formik.errors.sectorExecutiveSecretary && formik.errors.sectorExecutiveSecretary.name ? (
                        <div className="error">
                            {formik.errors.sectorExecutiveSecretary.name}
                        </div>
                    ) : null}
                     <span className='request-title'>Date</span>
                    <input
                        type='date'
                        name='sectorExecutiveSecretary.date'
                        value={formik.values.sectorExecutiveSecretary.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.sectorExecutiveSecretary && formik.touched.sectorExecutiveSecretary.date && formik.errors.sectorExecutiveSecretary && formik.errors.sectorExecutiveSecretary.date ? (
                        <div className="error">
                            {formik.errors.sectorExecutiveSecretary.date}
                        </div>
                    ) : null}
                    <span className='request-title'>Telephone</span>
                    <input
                        type='number'
                        name='sectorExecutiveSecretary.telphone'
                        value={formik.values.sectorExecutiveSecretary.telphone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.sectorExecutiveSecretary && formik.touched.sectorExecutiveSecretary.telphone && formik.errors.sectorExecutiveSecretary && formik.errors.sectorExecutiveSecretary.telphone ? (
                        <div className="error">
                            {formik.errors.sectorExecutiveSecretary.telphone}
                        </div>
                    ) : null} 
                </div>
            </div>
            <hr />
           <div className="form-group request-send-inputs">
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Social Affairs Officer:</span>
                    <div className='reauest-details-more'>
                        <span className='request-title'>Name</span>
                        <input
                            type='text'
                            name='socialAffairsOfficer.name'
                            value={formik.values.socialAffairsOfficer.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></input>
                        {formik.touched.socialAffairsOfficer?.name && formik.errors.socialAffairsOfficer?.name ? (
                            <div className="error">
                                {formik.errors.socialAffairsOfficer.name}
                            </div>
                        ) : null}
                        <span className='request-title'>Date</span>
                        <input
                            type='date'
                            name='socialAffairsOfficer.date'
                            value={formik.values.socialAffairsOfficer.date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></input>
                        {formik.touched.socialAffairsOfficer?.date && formik.errors.socialAffairsOfficer?.date ? (
                            <div className="error">
                                {formik.errors.socialAffairsOfficer.date}
                            </div>
                        ) : null}
                        <span className='request-title'>Telephone</span>
                        <input
                            type='number'
                            name='socialAffairsOfficer.telphone'
                            value={formik.values.socialAffairsOfficer.telphone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></input>
                        {formik.touched.socialAffairsOfficer?.telphone && formik.errors.socialAffairsOfficer?.telphone ? (
                            <div className="error">
                                {formik.errors.socialAffairsOfficer.telphone}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <hr />
            
            <div className="form-group request-send-inputs">
                <span className='request-title'>Person of Integrity:</span>
                <div className='reauest-details-more'>
                    <span className='request-title'>Name</span>
                    <input
                        type='text'
                        name='personOfIntegrity.name'
                        value={formik.values.personOfIntegrity.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.personOfIntegrity?.name && formik.errors.personOfIntegrity?.name ? (
                        <div className="error">
                            {formik.errors.personOfIntegrity.name}
                        </div>
                    ) : null}
                    <span className='request-title'>Date</span>
                    <input
                        type='date'
                        name='personOfIntegrity.date'
                        value={formik.values.personOfIntegrity.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.personOfIntegrity?.date && formik.errors.personOfIntegrity?.date ? (
                        <div className="error">
                            {formik.errors.personOfIntegrity.date}
                        </div>
                    ) : null}
                    <span className='request-title'>Telephone</span>
                    <input
                        type='number'
                        name='personOfIntegrity.telphone'
                        value={formik.values.personOfIntegrity.telphone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.personOfIntegrity?.telphone && formik.errors.personOfIntegrity?.telphone ? (
                        <div className="error">
                            {formik.errors.personOfIntegrity.telphone}
                        </div>
                    ) : null}
                </div>
            </div>
          
            <hr />
            <div className="form-group request-send-inputs">
                <span className='request-title'>Ex-Combatant Representatives:</span>
                <div className='reauest-details-more'>
                    <span className='request-title'>Name</span>
                    <input
                        type='text'
                        name='exCombatantRepresentatives[0].name'
                        value={formik.values.exCombatantRepresentatives[0].name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.exCombatantRepresentatives && formik.touched.exCombatantRepresentatives[0]?.name && formik.errors.exCombatantRepresentatives && formik.errors.exCombatantRepresentatives[0]?.name ? (
                        <div className="error">
                            {formik.errors.exCombatantRepresentatives[0].name}
                        </div>
                    ) : null}
                    <span className='request-title'>Date</span>
                    <input
                        type='date'
                        name='exCombatantRepresentatives[0].date'
                        value={formik.values.exCombatantRepresentatives[0].date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.exCombatantRepresentatives && formik.touched.exCombatantRepresentatives[0]?.date && formik.errors.exCombatantRepresentatives && formik.errors.exCombatantRepresentatives[0]?.date ? (
                        <div className="error">
                            {formik.errors.exCombatantRepresentatives[0].date}
                        </div>
                    ) : null}
                    <span className='request-title'>Telephone</span>
                    <input
                        type='number'
                        name='exCombatantRepresentatives[0].telphone'
                        value={formik.values.exCombatantRepresentatives[0].telphone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.exCombatantRepresentatives && formik.touched.exCombatantRepresentatives[0].telphone && formik.errors.exCombatantRepresentatives && formik.errors.exCombatantRepresentatives[0].telphone ? (
                        <div className="error">
                            {formik.errors.exCombatantRepresentatives[0].telphone}
                        </div>
                    ) : null}
                </div>
            </div>
                
            <hr />
            <div className="form-group request-send-inputs">
                <span className='request-title'>Provincial Reintegration Officer:</span>
                <div className='reauest-details-more'>
                    <span className='request-title'>Name</span>
                    <input
                        type='text'
                        name='provincialReintegrationOfficer.name'
                        value={formik.values.provincialReintegrationOfficer.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.provincialReintegrationOfficer && formik.touched.provincialReintegrationOfficer.name && formik.errors.provincialReintegrationOfficer && formik.errors.provincialReintegrationOfficer.name ? (
                        <div className="error">
                            {formik.errors.provincialReintegrationOfficer.name}
                        </div>
                    ) : null}
                    <span className='request-title'>Date</span>
                    <input
                        type='date'
                        name='provincialReintegrationOfficer.date'
                        value={formik.values.provincialReintegrationOfficer.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.provincialReintegrationOfficer && formik.touched.provincialReintegrationOfficer.date && formik.errors.provincialReintegrationOfficer && formik.errors.provincialReintegrationOfficer.date ? (
                        <div className="error">
                            {formik.errors.provincialReintegrationOfficer.date}
                        </div>
                    ) : null}
                    <span className='request-title'>Telephone</span>
                    <input
                        type='number'
                        name='provincialReintegrationOfficer.telphone'
                        value={formik.values.provincialReintegrationOfficer.telphone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.provincialReintegrationOfficer && formik.touched.provincialReintegrationOfficer.telphone && formik.errors.provincialReintegrationOfficer && formik.errors.provincialReintegrationOfficer.telphone ? (
                        <div className="error">
                            {formik.errors.provincialReintegrationOfficer.telphone}
                        </div>
                    ) : null}
                    <span className='request-title'>District</span>
                    <input
                        type='text'
                        name='provincialReintegrationOfficer.district'
                        value={formik.values.provincialReintegrationOfficer.district}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.provincialReintegrationOfficer && formik.touched.provincialReintegrationOfficer.district && formik.errors.provincialReintegrationOfficer && formik.errors.provincialReintegrationOfficer.district ? (
                        <div className="error">
                            {formik.errors.provincialReintegrationOfficer.district}
                        </div>
                    ) : null}
                </div>
            </div>
                  
            <hr />
            <div className="form-group request-send-inputs">
                <span className='request-title'>RDRP Tech Secretariat Resolution:</span>
                <div className='reauest-details-more'>
                    <span className='request-title'>Name</span>
                    <input
                        type='text'
                        name='rdrpTechSecretariatResolution.name'
                        value={formik.values.rdrpTechSecretariatResolution.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.rdrpTechSecretariatResolution?.name && formik.errors.rdrpTechSecretariatResolution?.name ? (
                        <div className="error">
                            {formik.errors.rdrpTechSecretariatResolution.name}
                        </div>
                    ) : null}
                    <span className='request-title'>Date</span>
                    <input
                        type='date'
                        name='rdrpTechSecretariatResolution.date'
                        value={formik.values.rdrpTechSecretariatResolution.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.rdrpTechSecretariatResolution?.date && formik.errors.rdrpTechSecretariatResolution?.date ? (
                        <div className="error">
                            {formik.errors.rdrpTechSecretariatResolution.date}
                        </div>
                    ) : null}

                    <span className='request-title'>Resolotion</span>
                    <input
                        type='text'
                        name='rdrpTechSecretariatResolution.resolution'
                        value={formik.values.rdrpTechSecretariatResolution.resolution}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.rdrpTechSecretariatResolution?.resolution && formik.errors.rdrpTechSecretariatResolution?.resolution ? (
                        <div className="error">
                            {formik.errors.rdrpTechSecretariatResolution.resolution}
                        </div>
                    ) : null}
                    <span className='request-title'>Position</span>
                    <input
                        type='text'
                        name='rdrpTechSecretariatResolution.position'
                        value={formik.values.rdrpTechSecretariatResolution.position}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.rdrpTechSecretariatResolution?.position && formik.errors.rdrpTechSecretariatResolution?.position ? (
                        <div className="error">
                            {formik.errors.rdrpTechSecretariatResolution.position}
                        </div>
                    ) : null}
                </div>
            </div>
            <div className='req-button-cont'>
                <button className='button-next' onClick={() => setPage(2)}>Previous</button>
                <button className='button-next' type= 'button' onClick={handleNext}>Submit</button>
            </div>



        </div >
    )
}

export default PageThree