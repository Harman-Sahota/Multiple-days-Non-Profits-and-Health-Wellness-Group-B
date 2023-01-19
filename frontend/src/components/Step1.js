import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function SignUpInfo({ formData, setFormData }) {
  return (


    <div className="sign-up-container">
          <input
        className="text_input"
        id="firstname"
        type="text"
        placeholder="First Name"
        value={formData.firstname}
        onChange={(event) => 
          setFormData({ ...formData, firstName: event.target.value })
         
        }
      />
         <input
          id="lastname"
        className="text_input"
        type="text"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
      <input
      id="email"
        className="text_input"
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />

      <input
       className="text_input"
        type="password"
        id = "password"
        placeholder="Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input 
      className="text_input"
        type="password"
        id="confirm"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input 
      id="org"
      className="text_input"
        type="text"
        placeholder="Organization"
        value={formData.organization}
        onChange={(event) =>
          setFormData({ ...formData, organization: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;