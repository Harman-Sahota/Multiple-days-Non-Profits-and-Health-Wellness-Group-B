import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Step4({ formData }) {

    return (
             <>
             <p>First Name: {formData.firstName}</p>
             <p>Last Name: {formData.lastName}</p>
             <p>Email: {formData.email}</p>
             <p>Organization: {formData.organization}</p>
             <p>Roles: {formData.roles}</p>
             <p>Consent: {formData.consented}</p>
             </>
    );
}

export default Step4;