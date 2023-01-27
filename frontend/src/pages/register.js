import React, { useState } from "react";

import SignUpInfo from "../components/Step1";
import PersonalInfo from "../components/Step2";
import OtherInfo from "../components/Step3";
import Confirm from "../components/Step4";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
function Form() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Roles: [],
    Consent: "",
    Organization: "",
  });

  formData.Roles = formData.Roles.toString();

  const FormTitles = ["Personal Info", "Pick your Roles", "Consent", "Confirm"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Confirm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="body">
      <div className="form-register">
        <div className="form-container-register">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="progressbar">
            <div
              style={{
                width:
                  page === 0
                    ? "33.3%"
                    : page == 1
                      ? "66.6%"
                      : page == 2
                        ? "88.8%"
                        : "100%",
              }}
            ></div>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <Button
              variant="btn btn-success"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Back
            </Button>
            <Button
              id="submit"
              variant="btn btn-success"
              onClick={(e) => {
                if (page === FormTitles.length - 1) {
                  console.log(JSON.stringify(formData));
                } else {
                  var EmailValidRegex =
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                  var PasswordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

                  if (page === 0) {
                    if (
                      formData.FirstName != "" &&
                      formData.LastName != "" &&
                      !/\d/.test(formData.FirstName) &&
                      !/\d/.test(formData.LastName) &&
                      formData.Email != "" &&
                      formData.Email.match(EmailValidRegex) &&
                      formData.Password != "" &&
                      formData.Password.match(PasswordRegex) &&
                      document.getElementById("confirm").value  == formData.Password &&
                      formData.Organizatio != ""
                    ) {
                      setPage((currPage) => currPage + 1);
                    }

                    if (
                      formData.FirstName == "" ||
                      formData.LastName == "" ||
                      formData.Email == "" ||
                      formData.Password == "" ||
                      formData.Organization == "" ||
                      document.getElementById("confirm").value == ""
                    ) {
                      window.alert("fields cannot be empty");
                    }

                    if (
                      /\d/.test(formData.LastName) ||
                      /\d/.test(formData.LastName)
                    ) {
                      window.alert(
                        "First Name and Last Name cannot have numbers, please check if you entered a number in one of these fields"
                      );
                    }

                    if (
                      formData.FirstName == "" ||
                      /\d/.test(formData.FirstName)
                    ) {
                      if (
                        document
                          .getElementById("firstname")
                          .hasAttribute("success")
                      )
                        document
                          .getElementById("firstname")
                          .classList.remove("success");
                      document
                        .getElementById("firstname")
                        .classList.add("error");
                    } else {
                      if (
                        document
                          .getElementById("firstname")
                          .hasAttribute("error")
                      )
                        document
                          .getElementById("firstname")
                          .classList.remove("error");
                      document
                        .getElementById("firstname")
                        .classList.add("success");
                    }

                    if (
                      formData.LastName == "" ||
                      /\d/.test(formData.LastName)
                    ) {
                      if (
                        document
                          .getElementById("lastname")
                          .hasAttribute("success")
                      )
                        document
                          .getElementById("lastname")
                          .classList.remove("success");
                      document
                        .getElementById("lastname")
                        .classList.add("error");
                    } else {
                      if (
                        document
                          .getElementById("lastname")
                          .hasAttribute("error")
                      )
                        document
                          .getElementById("lastname")
                          .classList.remove("error");
                      document
                        .getElementById("lastname")
                        .classList.add("success");
                    }

                    if (
                      formData.Email == "" ||
                      !formData.Email.match(EmailValidRegex)
                    ) {
                      if (
                        document.getElementById("Email").hasAttribute("success")
                      )
                        document
                          .getElementById("Email")
                          .classList.remove("success");
                      document.getElementById("Email").classList.add("error");
                      if (
                        !formData.Email.match(EmailValidRegex) &&
                        formData.Email != ""
                      ) {
                        window.alert("Email is not valid");
                      }
                    } else {
                      if (
                        document.getElementById("Email").hasAttribute("error")
                      )
                        document
                          .getElementById("Email")
                          .classList.remove("error");
                      document.getElementById("Email").classList.add("success");
                    }

                    if (
                      formData.Password == "" ||
                      !formData.Password.match(PasswordRegex)
                    ) {
                      if (
                        document
                          .getElementById("Password")
                          .hasAttribute("success")
                      )
                        document
                          .getElementById("Password")
                          .classList.remove("success");
                      document
                        .getElementById("Password")
                        .classList.add("error");
                      if (
                        !formData.Email.match(PasswordRegex) &&
                        formData.Password != ""
                      ) {
                        window.alert(
                          "Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        );
                      }
                    } else {
                      if (
                        document
                          .getElementById("Password")
                          .hasAttribute("error")
                      )
                        document
                          .getElementById("Password")
                          .classList.remove("error");
                      document
                        .getElementById("Password")
                        .classList.add("success");
                    }

                    if (
                      !(document.getElementById("confirm").value  == formData.Password) ||
                      document.getElementById("confirm").value  == ""
                    ) {
                      if (
                        document
                          .getElementById("confirm")
                          .hasAttribute("success")
                      )
                        document
                          .getElementById("confirm")
                          .classList.remove("success");
                      document.getElementById("confirm").classList.add("error");
                      if (document.getElementById("confirm").value  != "")
                        window.alert("confirm Password doesnt match Password");
                    } else {
                      if (
                        document.getElementById("confirm").hasAttribute("error")
                      )
                        document
                          .getElementById("confirm")
                          .classList.remove("error");
                      document
                        .getElementById("confirm")
                        .classList.add("success");
                    }

                    if (formData.Organizatio == "") {
                      if (
                        document.getElementById("org").hasAttribute("success")
                      )
                        document
                          .getElementById("org")
                          .classList.remove("success");
                      document.getElementById("org").classList.add("error");
                    } else {
                      if (document.getElementById("org").hasAttribute("error"))
                        document
                          .getElementById("org")
                          .classList.remove("error");
                      document.getElementById("org").classList.add("success");
                    }
                  }

                  if (page === 1) {
                    if (formData.Roles.length == "0") {
                      window.alert("you must pick atleast one role");
                      document
                        .getElementById("flexCheckDefault1")
                        .classList.add("error");
                      document
                        .getElementById("flexCheckDefault2")
                        .classList.add("error");
                      document
                        .getElementById("flexCheckDefault3")
                        .classList.add("error");
                      document
                        .getElementById("flexCheckDefault4")
                        .classList.add("error");
                      document
                        .getElementById("flexCheckDefault5")
                        .classList.add("error");
                      document
                        .getElementById("flexCheckDefault6")
                        .classList.add("error");
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }

                  if (page === 2) {
                    if (formData.Consent == "not-Consent") {
                      window.alert("you must consent to continue");
                      document
                        .getElementById("flexCheckDefault1")
                        .classList.add("consent-check1");
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
