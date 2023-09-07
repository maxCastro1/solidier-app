import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';

const PageTwo = ({ setPage, formData, setFormData }) => {

    const [eror, setEror] = useState(false)

    const initialValues = {
        placeOfResidence: {
            village: '',
            cell: '',
            sector: '',
            district: '',
            province: '',
        },
        educationLevel: '',
        otherSkills: '',
        vulnerabilityIndicators: {
            lackOfShelter: '',
            landless: '',
            lackOfSkills: '',
            disability: '',
            totalScore: 0,
        },
        plannedProject: '',
        applicantSignature: '',
        recommendations: '',
    };

    const validate = (values) => {
        const errors = {};
      
        // Validate Place of Residence
        if (!values.placeOfResidence) {
          errors.placeOfResidence = 'Place of Residence is required';
        }
      
          if (!values.placeOfResidence.village) {
            errors.placeOfResidence = {
              ...errors.placeOfResidence, village: 'Village is required',
            };
          }
        
          if (!values.placeOfResidence.cell) {
            errors.placeOfResidence = {
              ...errors.placeOfResidence, cell: 'Cell is required',
            };
          }
        
          if (!values.placeOfResidence.sector) {
            errors.placeOfResidence = {
              ...errors.placeOfResidence, sector: 'Sector is required',
            };
          }
        
          if (!values.placeOfResidence.district) {
            errors.placeOfResidence = {
              ...errors.placeOfResidence,district: 'District is required',
            };
          }
        
          if (!values.placeOfResidence.province) {
            errors.placeOfResidence = {
              ...errors.placeOfResidence, province: 'Province is required',
            };
          }
      
        // Validate Education Level
        if (!values.educationLevel) {
          errors.educationLevel = 'Education Level is required';
        }
      
        // Validate Other Skills
        if (!values.otherSkills) {
          errors.otherSkills = 'Other Skills is required';
        }
      
        // Validate Vulnerability Indicators
        const {
          lackOfShelter,
          landless,
          lackOfSkills,
          disability,
        } = values.vulnerabilityIndicators;
      
        if (lackOfShelter < 0 || lackOfShelter > 10) {
            errors.vulnerabilityIndicators = {
              ...errors.vulnerabilityIndicators,
              lackOfShelter: 'Lack of Shelter should be between 0 and 10',
            };
          }
        
          if (landless < 0 || landless > 10) {
            errors.vulnerabilityIndicators = {
              ...errors.vulnerabilityIndicators,
              landless: 'Landless should be between 0 and 10',
            };
          }
        
          if (lackOfSkills < 0 || lackOfSkills > 10) {
            errors.vulnerabilityIndicators = {
              ...errors.vulnerabilityIndicators,
              lackOfSkills: 'Lack of Skills should be between 0 and 10',
            };
          }
        
          if (disability < 0 || disability > 10) {
            errors.vulnerabilityIndicators = {
              ...errors.vulnerabilityIndicators,
              disability: 'Disability should be between 0 and 10',
            };
          }
      
        // if (!totalScore) {
        //   errors.vulnerabilityIndicators = {
        //     ...errors.vulnerabilityIndicators,
        //     totalScore: 'Total Score is required',
        //   };
        // }
      
        // Validate Planned Project
        if (!values.plannedProject) {
          errors.plannedProject = 'Planned Project is required';
        }
      
        // Validate Applicant Signature
        if (!values.applicantSignature) {
          errors.applicantSignature = 'Applicant Signature is required';
        }
      
        // Validate Recommendations
        if (!values.recommendations) {
          errors.recommendations = 'Recommendations are required';
        }
      
        return errors;
      };
    
      const formik = useFormik({
        initialValues: initialValues,
        validate: validate,
    });
      
    useEffect(() => {
        // Calculate the total score and set it in formik values
        const totalScores =
          formik.values.vulnerabilityIndicators.lackOfShelter +
          formik.values.vulnerabilityIndicators.landless +
          formik.values.vulnerabilityIndicators.lackOfSkills +
          formik.values.vulnerabilityIndicators.disability;
        formik.setFieldValue('vulnerabilityIndicators.totalScore', totalScores);
      }, [formik.values.vulnerabilityIndicators]); 
    const handleNext = () => {
        // Validate the current page's fields
        setEror(false)
        const errors = validate(formik.values);
      
        if (Object.keys(errors).length === 0) {
        //   Fields are valid, update formData and move to the next page
          setFormData(prevFormData => ({
            ...prevFormData,
            ...formik.values, // Update formData with current form page values
          }));
          console.log(formik.values)
          console.log(formData)
   
          setPage(3); // Move to the next page
        }
        else{
            setEror(true)
            setTimeout(() => {
                setEror(false)
              }, 3000);
        }
      };
//       const totalScores = formik.values.vulnerabilityIndicators.lackOfShelter +
//      formik.values.vulnerabilityIndicators.landless +
//      formik.values.vulnerabilityIndicators.lackOfSkills +
//       formik.values.vulnerabilityIndicators.disability;
//   formik.setFieldValue('vulnerabilityIndicators.totalScore', totalScores);
    return (
        <div className='send-req-cont page-two'>

<div>
{eror && <p className='error'>Please fill all the fields </p>}
    <h2 style={{ marginBottom: '1rem' }} className='page-three-title'>Place of Residence</h2>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Village:</span>
        <input
            type='text'
            name='placeOfResidence.village'
            value={formik.values.placeOfResidence.village}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.placeOfResidence && formik.touched.placeOfResidence.village && formik.errors.placeOfResidence && formik.errors.placeOfResidence.village ? (
            <div className="error">{formik.errors.placeOfResidence.village}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Cell:</span>
        <input
            type='text'
            name='placeOfResidence.cell'
            value={formik.values.placeOfResidence.cell}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.placeOfResidence && formik.touched.placeOfResidence.cell &&formik.errors.placeOfResidence &&formik.errors.placeOfResidence.cell ? (
            <div className="error">{formik.errors.placeOfResidence.cell}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Sector:</span>
        <input
            type='text'
            name='placeOfResidence.sector'
            value={formik.values.placeOfResidence.sector}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.placeOfResidence && formik.touched.placeOfResidence.sector && formik.errors.placeOfResidence && formik.errors.placeOfResidence.sector ? (
            <div className="error">{formik.errors.placeOfResidence.sector}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>District:</span>
        <input
            type='text'
            name='placeOfResidence.district'
            value={formik.values.placeOfResidence.district}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.placeOfResidence && formik.touched.placeOfResidence.district && formik.errors.placeOfResidence && formik.errors.placeOfResidence.district ? (
            <div className="error">{formik.errors.placeOfResidence.district}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Province:</span>
        <input
            type='text'
            name='placeOfResidence.province'
            value={formik.values.placeOfResidence.province}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.placeOfResidence && formik.touched.placeOfResidence.province && formik.errors.placeOfResidence && formik.errors.placeOfResidence.province ? (
            <div className="error">{formik.errors.placeOfResidence.province}</div>
        ) : null}
    </div>
    <hr />
    <div className="form-group request-send-inputs">
        <span className='request-title'>Education Level:</span>
        <input
            type='text'
            name='educationLevel'
            value={formik.values.educationLevel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.educationLevel && formik.errors.educationLevel ? (
            <div className="error">{formik.errors.educationLevel}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Other Skills:</span>
        <input
            type='text'
            name='otherSkills'
            value={formik.values.otherSkills}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.otherSkills && formik.errors.otherSkills ? (
            <div className="error">{formik.errors.otherSkills}</div>
        ) : null}
    </div>
</div>

<div>
    <h2 style={{ marginBottom: '1rem' }} className='page-three-title'>Vulnerability Indicators</h2>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Lack of Shelter:</span>
        <input
            type='number'
            name='vulnerabilityIndicators.lackOfShelter'
            value={formik.values.vulnerabilityIndicators.lackOfShelter}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.vulnerabilityIndicators && formik.touched.vulnerabilityIndicators.lackOfShelter && formik.errors.vulnerabilityIndicators && formik.errors.vulnerabilityIndicators.lackOfShelter ? (
            <div className="error">{formik.errors.vulnerabilityIndicators.lackOfShelter}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Landless:</span>
        <input
            type='number'
            name='vulnerabilityIndicators.landless'
            value={formik.values.vulnerabilityIndicators.landless}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.vulnerabilityIndicators && formik.touched.vulnerabilityIndicators.landless && formik.errors.vulnerabilityIndicators && formik.errors.vulnerabilityIndicators.landless ? (
            <div className="error">{formik.errors.vulnerabilityIndicators.landless}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Lack of Skills:</span>
        <input
            type='number'
            name='vulnerabilityIndicators.lackOfSkills'
            value={formik.values.vulnerabilityIndicators.lackOfSkills}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.vulnerabilityIndicators && formik.touched.vulnerabilityIndicators.lackOfSkills && formik.errors.vulnerabilityIndicators && formik.errors.vulnerabilityIndicators.lackOfSkills ? (
            <div className="error">{formik.errors.vulnerabilityIndicators.lackOfSkills}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Disability:</span>
        <input
            type='number'
            name='vulnerabilityIndicators.disability'
            value={formik.values.vulnerabilityIndicators.disability}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.vulnerabilityIndicators && formik.touched.vulnerabilityIndicators.disability && formik.errors.vulnerabilityIndicators && formik.errors.vulnerabilityIndicators.disability ? (
            <div className="error">{formik.errors.vulnerabilityIndicators.disability}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Total Score:</span>
        <span>{formik.values.vulnerabilityIndicators.totalScore}</span>
    </div>

    <hr />
    <div className="form-group request-send-inputs">
        <span className='request-title'>Planned Project:</span>
        <input
            type='text'
            name='plannedProject'
            value={formik.values.plannedProject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.plannedProject && formik.errors.plannedProject ? (
            <div className="error">{formik.errors.plannedProject}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Applicant Signature:</span>
        <input
            type='text'
            name='applicantSignature'
            value={formik.values.applicantSignature}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.applicantSignature && formik.errors.applicantSignature ? (
            <div className="error">{formik.errors.applicantSignature}</div>
        ) : null}
    </div>
    <div className="form-group request-send-inputs">
        <span className='request-title'>Recommendations:</span>
        <input
            type='text'
            name='recommendations'
            value={formik.values.recommendations}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.recommendations && formik.errors.recommendations ? (
            <div className="error">{formik.errors.recommendations}</div>
        ) : null}
    </div>

                <div className='req-button-cont'>
                    <button  type="button" className='button-next' onClick={() => setPage(1)}>Previous</button>
                    <button  type="button" className='button-next' onClick={handleNext}>Next</button>
                  
                </div>
            </div>

        </div>


    )}
        


export default PageTwo