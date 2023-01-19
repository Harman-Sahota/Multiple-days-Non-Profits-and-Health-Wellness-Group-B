import React, { useState } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css';
import LoginCSS from './login.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
const RegistrationForm = () => {
   
  const [currentStep, setCurrentStep] = useState(1);

    const handleNext = (percentage) => {
        setCurrentStep(currentStep + 1);
    
       
    }

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
       
    }
    const handleSubmit = () => {
        setCurrentStep(currentStep - 1);
    }
 
    switch (currentStep) {
        case 1:
            return<div className='card'><Step1 handleNext={handleNext} /></div>;
        case 2:
            return <div className='card'><Step2 handleNext={handleNext} handlePrev={handlePrev} /></div>;
        case 3:
            return <div className='card'><Step3 handlePrev={handlePrev} /></div>;
        default:
            return <div className='card'><Step1 handleNext={handleNext} /></div>;
    }
}

export default RegistrationForm;
