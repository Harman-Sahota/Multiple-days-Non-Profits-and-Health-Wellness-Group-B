import React from 'react';
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Step1 = ({ handleNext }) => {

    const myStyle = {
        fontSize: "10px",
        color: "red",
        display: "none",
        minHeight: "10px",
    };

    return (

        <form>
            <h3 className='animations'>Personal Details</h3>
            <br/>
            <ProgressBar animated now={20} className='animations' variant='info'/>
            <br/>
            <input
                type="text"
                className="form-control form-floating name-form text_input"
                id="firstname"
                name="firstname"
                placeholder="First Name"
            />
            <input
                type="text"
                className="form-control form-floating name-form text_input"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
            />
            <input
                type="email"
                className="form-control form-floating name-form text_input"
                name="email"
                placeholder="Email"
            />
            <input
                type="password"
                className="form-control form-floating name-form text_input"
                id="password"
                name="password"
                placeholder="Password"
            />
            <span id="passerror1" style={myStyle}>
                [7 to 16 chars which contain only characters, numerics,
                underscore & first character must be a letter]
            </span>
            <input
                type="password"
                className="form-control form-floating name-form text_input"
                id="confirm-password"
                placeholder="Confirm Password"
            />
            <span id="passerror3" style={myStyle}>
                Password and Confirm password not matched.
            </span>

            <input
                type="text"
                className="form-control form-floating name-form text_input"
                id="organization"
                name="organization"
                placeholder="Organization Name"
            />
            <div className='Buttons'>
                <Button onClick={handleNext} className='btn' variant='btn btn-success'>Next</Button>
            </div>

        </form>

    );
}

export default Step1;
