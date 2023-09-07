import React, { useState } from 'react'
import './send.css'
import { useFormik } from 'formik';

const PageOne = ({ setPage, formData, setFormData }) => {


  const [eror , setEror] = useState(false)
    const initialValues = {
        names: '',
        demobNumber: '',
        nationalIdentity: '',
        telephone: '',
        sex: 'Male',
        yearOfBirth: '',
        yearOfFirstRecruitment: '',
        yearOfDemobilization: '',
        category:'',
        phase: '',
        fathersNames: '',
        mothersNames: '',
        sourceOfLivelihood: '',
        maritalStatus: '',
        partner: {
            name: '',
            idNumber: '',
            telephone: '',
        },
        numberOfChildren: '',
    };
    const validate = (values) => {
        const errors = {};

        // Add validation rules for each field
        if (!values.names) {
            errors.names = 'Names are required';
        }

        if (!values.demobNumber) {
            errors.demobNumber = 'Demob Number is required';
        }

        if (!values.nationalIdentity) {
            errors.nationalIdentity = 'National Identity is required';
        }

        if (!values.telephone) {
            errors.telephone = 'Telephone is required';
        }

        if (!values.yearOfBirth) {
            errors.yearOfBirth = 'Year of Birth is required';
        }

        if (!values.yearOfFirstRecruitment) {
            errors.yearOfFirstRecruitment = 'Year of First Recruitment is required';
        }

        if (!values.yearOfDemobilization) {
            errors.yearOfDemobilization = 'Year of Demobilization is required';
        }
        if (!values.category) {
            errors.category = 'Year of Demobilization is required';
        }

        if (!values.phase) {
            errors.phase = 'Phase is required';
        }

        if (!values.fathersNames) {
            errors.fathersNames = "Father's Names are required";
        }

        if (!values.mothersNames) {
            errors.mothersNames = "Mother's Names are required";
        }

        if (!values.sourceOfLivelihood) {
            errors.sourceOfLivelihood = 'Source of Livelihood is required';
        }

        if (!values.maritalStatus) {
            errors.maritalStatus = 'Marital Status is required';
        }

        if (!values.partner.name) {
            errors.partner = { ...errors.partner, name: 'Partner Name is required' };
        }

        if (!values.partner.idNumber) {
            errors.partner = { ...errors.partner, idNumber: 'Partner ID Number is required' };
        }

        if (!values.partner.telephone) {
            errors.partner = { ...errors.partner, telephone: 'Partner Telephone is required' };
        }

        if (!values.numberOfChildren) {
            errors.numberOfChildren = 'Number of Children is required';
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
          setFormData(prevFormData => ({
            ...prevFormData,
            ...formik.values, // Update formData with current form page values
          }));
          console.log(formik.values)
          console.log(formData)
   
          setPage(2); // Move to the next page
        }
        else{
            setEror(true)
            setTimeout(() => {
                setEror(false)
              }, 3000);
        }
      };
      

    return (
        <div className='send-req-cont'>
            <div>
                {eror && <p className='error'>Please fill all the fields </p>}
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Names:</span>
                    <input type='text' name='names' value={formik.values.names}  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.names && formik.errors.names ? <div className="error">{formik.errors.names}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Demob Number:</span>
                    <input type='text' name='demobNumber' value={formik.values.demobNumber}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.demobNumber && formik.errors.demobNumber ? <div className="error">{formik.errors.demobNumber}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>National Identity:</span>
                    <input type='number' name='nationalIdentity' value={formik.values.nationalIdentity}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.nationalIdentity && formik.errors.nationalIdentity ? <div className="error">{formik.errors.nationalIdentity}</div> : null}
                    {formik.touched.telephone && formik.errors.telephone ? <div className="error">{formik.errors.telephone}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Telephone:</span>
                    <input type='number' name='telephone' value={formik.values.telephone}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Sex:</span>
                    <select name='sex' type='select'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.sex}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {formik.touched.sex && formik.errors.sex ? <div className="error">{formik.errors.sex}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Year of Birth:</span>
                    <input type='number' name='yearOfBirth' value={formik.values.yearOfBirth}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.yearOfBirth && formik.errors.yearOfBirth ? <div className="error">{formik.errors.yearOfBirth}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Year of First Recruitment:</span>
                    <input type='number' name='yearOfFirstRecruitment' value={formik.values.yearOfFirstRecruitment}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.yearOfFirstRecruitment && formik.errors.yearOfFirstRecruitment ? <div className="error">{formik.errors.yearOfFirstRecruitment}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Year of Demobilization:</span>
                    <input type='number' name='yearOfDemobilization' value={formik.values.yearOfDemobilization}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.yearOfDemobilization && formik.errors.yearOfDemobilization ? <div className="error">{formik.errors.yearOfDemobilization}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Category:</span>
                    <select name='category' type='select'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.category}>
                        <option value="Medical">Medical</option>
                        <option value="Age">Age</option>
                    </select>
                    {formik.touched.sex && formik.errors.category ? <div className="error">{formik.errors.category}</div> : null}
                </div>
            </div>
            <div>
                <h2 className='page-three-title'>Details</h2>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Phase:</span>
                    <input type='text' name='phase' value={formik.values.phase}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.phase && formik.errors.phase ? <div className="error">{formik.errors.phase}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Fathers' Names:</span>
                    <input type='text' name="fathersNames" value={formik.values.fathersNames}   onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.fathersNames && formik.errors.fathersNames ? <div className="error">{formik.errors.fathersNames}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Mothers' Names:</span>
                    <input type='text' name="mothersNames" value={formik.values.mothersNames}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.mothersNames && formik.errors.mothersNames ? <div className="error">{formik.errors.mothersNames}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Source of Livelihood:</span>
                    <input type='text' name="sourceOfLivelihood" value={formik.values.sourceOfLivelihood}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.sourceOfLivelihood && formik.errors.sourceOfLivelihood ? <div className="error">{formik.errors.sourceOfLivelihood}</div> : null}
                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Marital Status:</span>
                    <select name="maritalStatus"   type='select'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.maritalStatus}>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Divorced/Separated">Divorced/Separated</option>
                    </select>
                    {formik.touched.maritalStatus && formik.errors.maritalStatus && formik.errors.maritalStatus && formik.errors.maritalStatus ? <div className="error">{formik.errors.maritalStatus}</div> : null}

                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Partner Name:</span>
                    <input type='text' name="partner.name" value={formik.values.partner.name}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.partner && formik.touched.partner.name && formik.errors.partner && formik.errors.partner.name ? <div className="error">{formik.errors.partner.name}</div> : null}


                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Partner ID Number:</span>
                    <input type='number' name="partner.idNumber" value={formik.values.partner.idNumber}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                    {formik.touched.partner && formik.touched.partner.idNumber && formik.errors.partner && formik.errors.partner.idNumber ? <div className="error">{formik.errors.partner.idNumber}</div> : null}

                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Partner Telephone:</span>
                    <input type='number' name="partner.telephone" value={formik.values.partner.telephone}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                    {formik.touched.partner && formik.touched.partner.telephone && formik.errors.partner && formik.errors.partner.telephone ? <div className="error">{formik.errors.partner.telephone}</div> : null}

                </div>
                <div className="form-group request-send-inputs">
                    <span className='request-title'>Number of Children:</span>
                    <input type='number' name="numberOfChildren" value={formik.values.numberOfChildren}    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.numberOfChildren && formik.errors.numberOfChildren ? <div className="error">{formik.errors.numberOfChildren}</div> : null}
                </div>
                <div className='req-button-cont'>
                <button type="button"   className='button-next'  onClick={handleNext}>Next</button>
                </div>
            </div>

        </div>
    )
}

export default PageOne