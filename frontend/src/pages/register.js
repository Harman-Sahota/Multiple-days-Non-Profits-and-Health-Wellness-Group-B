import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterCSS from './register.module.css';
import Button from 'react-bootstrap/Button';
function Register() {

    const progress = document.getElementById("progress");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const consent1 = document.getElementById("consent-check1");
    const consent2 = document.getElementById("consent-check2");
    const consent3 = document.getElementById("consent-check3");
    const circles = document.querySelectorAll(".circle");
    const confirmpassword = document.getElementById("confirm-password");
    const password = document.getElementById("Password");
    const submit = document.getElementById("submit")
    let currentActive = 1;
    var result = false;
    var a, c, d, e;

    function nextClick() {

        c = `card_${currentActive}`;

        if (currentActive + 1 < circles.length)
            d = `card_${currentActive + 1}`;
        else
            d = "card_3"

        if (c == 'card_1') {
            validateFirstName();
            validateLastName();
            ValidateEmail();
            validatePassword();
            validateConfirmPassword();
            validateOrg();
            result = validateFirstName() && validateLastName() && ValidateEmail() && validatePassword() && validateConfirmPassword() && validateOrg();
        }
        if (c == 'card_2') {
            validateRoles();
            result = validateRoles();
        }

        if (c == 'card_3') {
            CheckboxChecked();
            result = CheckboxChecked();
        }
        if (result) {
            a = document.getElementById(`${c}`);
            e = document.getElementById(d);

            a.style.display = "none";
            e.style.display = "block";


            currentActive++;
            if (currentActive > circles.length) {
                currentActive = circles.length;
            }
            update();
        } else {
            if (c == 'card_1') {
                window.alert('Please Fill in all the fields correctly');
            }
            if (c == 'card_2') {
                window.alert('Please choose a role');
            }
        }
    }

    function prevClick() {


        c = `card_${currentActive}`;
        if (currentActive - 1 > 1)
            d = `card_${currentActive - 1}`;
        else
            d = "card_1"
        a = document.getElementById(c);
        e = document.getElementById(d);
        console.log(a.id);
        a.style.display = "none";
        e.style.display = "block";

        currentActive--;

        if (currentActive < 1) {
            currentActive = 1;
        }

        update();

    }


    function update() {
        circles.forEach((circle, idx) => {
            if (idx < currentActive) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });

        const actives = document.querySelectorAll(".active");

        progress.style.width = ((actives.length - 2) / (circles.length - 1)) * 100 + "%";

        if (currentActive === 1) {
            prev.disabled = true;
            submit.disabled = true;
        } else if (currentActive === circles.length) {
            next.disabled = true;
            //checked();

        } else {
            prev.disabled = false;
            next.disabled = false;
            submit.disabled = true;
        }
    }

    function CheckboxChecked() {
        if (consent1.checked == false) {
            consent1.style.border = "red 2px solid";
            submit.disabled = true;



        }
        if (consent2.checked == false) {
            consent2.style.border = "red 2px solid";


        }
        if (consent3.checked == false) {
            consent3.style.border = "red 2px solid";


        }

        if (consent2.checked == true) {
            alert("you must agree to continue")
        }

        if (consent3.checked == true) {
            alert("sample information")
        }

        if (consent1.checked == true || consent2.checked == true || consent3.checked == true) {
            return true;
        } else {
            return false;
        }


    }

    function changeconsent1() {
        if (consent1.checked == true) {
            consent1.style.border = "green 2px solid";
            consent2.style.border = "grey 1px solid";
            consent2.checked = false;
            consent3.style.border = "grey 1px solid";
            consent3.checked = false;
            submit.disabled = false;


        } else {
            submit.disabled = true;


        }
    }

    function changeconsent2() {
        if (consent2.checked == true) {
            consent2.style.border = "green 2px solid";
            consent1.style.border = "grey 1px solid";
            consent1.checked = false;
            consent3.style.border = "grey 1px solid";
            consent3.checked = false;
            submit.disabled = true;
            alert("you must agree to continue")
        }
    }

    function changeconsent3() {
        if (consent3.checked == true) {
            consent3.style.border = "green 2px solid";
            consent1.style.border = "grey 1px solid";
            consent1.checked = false;
            consent2.style.border = "grey 1px solid";
            consent2.checked = false;
            submit.disabled = true;
            alert("sample information")
        }
    }

    function validateRoles() {
        const role1 = document.getElementById("flexCheckDefault1");
        const role2 = document.getElementById("flexCheckDefault2");
        const role3 = document.getElementById("flexCheckDefault3");
        const role4 = document.getElementById("flexCheckDefault4");
        const role5 = document.getElementById("flexCheckDefault5");
        const role6 = document.getElementById("flexCheckDefault6");

        if (role1.checked || role2.checked || role3.checked || role4.checked || role5.checked || role6.checked) {
            role1.style.border = "grey 1px solid";
            role2.style.border = "grey 1px solid";
            role3.style.border = "grey 1px solid";
            role4.style.border = "grey 1px solid";
            role5.style.border = "grey 1px solid";
            role6.style.border = "grey 1px solid";
            return true;
        } else {
            role1.style.border = "red 1px solid";
            role2.style.border = "red 1px solid";
            role3.style.border = "red 1px solid";
            role4.style.border = "red 1px solid";
            role5.style.border = "red 1px solid";
            role6.style.border = "red 1px solid";
            return false;
        }
    }



    function validateOrg() {
        const organization = document.getElementById("organization");
        if (organization.value.trim() == "") {
            organization.style.border = "red 2px solid";
            return false;
        } else {
            organization.style.border = "green 1px solid";
            return true;
        }
    }


    function validateConfirmPassword() {

        var regex = /^[A-Za-z]\w{7,14}$/;
        if (confirmpassword.value.trim() == "") {
            confirmpassword.style.border = "red 2px solid";
            return false;
        } else if (!confirmpassword.value.match(regex)) {
            confirmpassword.style.border = "red 2px solid";
            document.getElementById("passerror3").style.display = "block";
            return false;
        } else if (password.value != confirmpassword.value) {
            document.getElementById("passerror3").style.display = "block";
            return false;
        } else {
            confirmpassword.style.border = "green 1px solid";
            document.getElementById("passerror3").style.display = "none";
            return true;
        }

    }

    function validatePassword() {

        var regex = /^[A-Za-z]\w{7,14}$/;
        if (password.value.trim() == "") {
            password.style.border = "red 2px solid";
        } else if (!password.value.match(regex)) {
            password.style.border = "red 2px solid";
            document.getElementById("passerror1").style.display = "block";
            return false;
        } else {
            password.style.border = "green 1px solid";
            document.getElementById("passerror1").style.display = "none";
            return true;
        }
    }

    function ValidateEmail() {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const email = document.getElementById("email");
        if (email.value.trim() == "" || !email.value.match(validRegex)) {
            email.style.border = "red 2px solid";
            return false;
        } else {
            email.style.border = "green 1px solid";
            return true;
        }
    }

    function validateLastName() {
        var regex = /^[a-z0-9]+$/i;
        const lastNameControl = document.getElementById("lastname");
        if (lastNameControl.value.trim() == "" || !lastNameControl.value.match(regex)) {
            lastNameControl.style.border = "red 2px solid";
            return false;
        } else {
            lastNameControl.style.border = "green 1px solid";
            return true;
        }
    }

    function validateFirstName() {
        var regex = /^[a-z0-9]+$/i;
        const firstnameControl = document.getElementById("firstname");
        if (firstnameControl.value.trim() == "" || !firstnameControl.value.match(regex)) {
            firstnameControl.style.border = "red 2px solid";
            return false;
        } else {
            firstnameControl.style.border = "green 1px solid";
            return true;
        }
    }






    const myStyle = {
        fontSize: "10px",
        color: "red",
        display: "none",
        minHeight: "10px",
    };

    return (


        <div className={`col-md=auto ${RegisterCSS.contain}`}>
            <h3>Create An Account</h3>
            <div className={`${RegisterCSS.progress_container}`}>
                <div className={`${RegisterCSS.progress}`} id="progress"> </div>
                <div className={`${RegisterCSS.circle} ${RegisterCSS.active}`}><i className="fa-solid fa-1"></i></div>
                <div className={`${RegisterCSS.circle}`}><i className="fa-solid fa-2"></i></div>
                <div className={`${RegisterCSS.circle}`}><i className="fa-solid fa-3"></i></div>
            </div>

            <div className="card-group">
                <div className={` card-1 active col-md-auto ${RegisterCSS.card}`} id={` card_1 ${RegisterCSS.card_1}`}>
                    <div className="card-body">
                        <form className="form-inside" action="" method="post" id="register">
                            <input type="text" className={` form-control form-floating name-form ${RegisterCSS.text_input}`} id="firstname" name="firstname" placeholder="First Name" />
                            <input type="text" className={` form-control form-floating name-form ${RegisterCSS.text_input}`} id="lastname" name="lastname" placeholder="Last Name" />
                            <input type="email" className={` form-control form-floating name-form ${RegisterCSS.text_input}`} id="email" name="email" placeholder="Email" />
                            <input type="password" className={` form-control form-floating name-form ${RegisterCSS.text_input}`} id="Password" name="password" placeholder="Password" />
                            <span id="passerror1" style={myStyle} >[7 to 16 chars which contain only characters, numerics, underscore & first character must be a letter]</span>
                            <input type="password" className={` form-control form-floating name-form ${RegisterCSS.text_input}`} id="confirm-password" name="confirm-password" placeholder="Confirm Password" />
                            <span id="passerror3" style={myStyle}>Password and Confirm password not matched.</span>
                        </form><input type="text" className={` form-control form-floating name-form ${RegisterCSS.text_input}`} id="organization" name="organization" placeholder="Organization" />
                    </div>
                </div>
            </div>



            <div className="card-group">
                <div className={`card-2 active col-md-auto ${RegisterCSS.card}`} id={`${RegisterCSS.card_2}`}>
                    <div className="card-body">
                        <h5>Choose your roles:</h5>

                        <div className={`form-check  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input flexCheckDefault"
                                type="checkbox"
                                id="flexCheckDefault1"
                                onChange={validateRoles}
                                name="roles[]"
                                value="user non-profit managers/CEO"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                user non-profit managers/CEO
                            </label>
                        </div>
                        <div className={`form-check  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input flexCheckDefault"
                                type="checkbox"
                                id="flexCheckDefault2"
                                onChange={validateRoles}
                                name="roles[]"
                                value="user non-profit warehouse boss"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault2">
                                user non-profit warehouse boss
                            </label>
                        </div>
                        <div className={`form-check  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input flexCheckDefault"
                                type="checkbox"
                                id="flexCheckDefault3"
                                onChange={validateRoles}
                                name="roles[]"
                                value="user non-profit volunteer"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                                user non-profit volunteer
                            </label>
                        </div>
                        <div className={`form-check  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input flexCheckDefault"
                                type="checkbox"
                                id="flexCheckDefault4"
                                onChange={validateRoles}
                                name="roles[]"
                                value="sponsors"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault4">
                                sponsors
                            </label>
                        </div>
                        <div className={`form-check  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input flexCheckDefault"
                                type="checkbox"
                                id="flexCheckDefault5"
                                onChange={validateRoles}
                                name="roles[]"
                                value="admin"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault5">
                                admin
                            </label>
                        </div>
                        <div className={`form-check  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input flexCheckDefault"
                                type="checkbox"
                                id="flexCheckDefault6"
                                onChange={validateRoles}
                                name="roles[]"
                                value="experts "
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault6">
                                experts
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card-group">
                <div className={`card-3 active col-md-auto ${RegisterCSS.card}`} id={`${RegisterCSS.card_3}`}>
                    <div className="card-body">
                        <h5>Consent:</h5>
                        <textarea readOnly rows="5" cols="auto" value="  The information you enter will be stored in a secure database
                            that meets Canadian privacy regulations. If you have any
                            concerns, please contact UBC Behavioural Research Ethics Council
                            (BREB) about Barb Marcolin's study or call Dr. Marcolin at
                            (250)807-9637 to ask any questions.">

                        </textarea>
                        <div className={`consent  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="consent-check1"
                                onChange={changeconsent1}
                                name="consent"
                                value="consented"
                            />
                            <label
                                className="form-check-label consent-text"
                                htmlFor="consent-check1"
                            >
                                I accept
                            </label>
                        </div>
                        <div className={`consent  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="consent-check2"
                                onChange={changeconsent2}
                                name="consent-disagree"
                                value="not-consented"
                            />
                            <label
                                className={`form-check-label ${RegisterCSS.consent_text}`}
                                htmlFor="consent-check2"
                            >
                                I refuse
                            </label>
                        </div>
                        <div className={`consent  ${RegisterCSS.form_check}`}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="consent-check3"
                                onChange={changeconsent3}
                                name="consent-disagree"
                                value="info-consented"
                            />
                            <label
                                className={`form-check-label ${RegisterCSS.consent_text}`}
                                htmlFor="consent-check3"
                            >
                                More Info
                            </label>
                        </div>
                    </div>
                </div>
            </div>



            <div id={`${RegisterCSS.wrapper}`}>
                <div className={`${RegisterCSS.buttons}`}>
                    <button className={`btn btn-success form-floating name-form ${RegisterCSS.btn}`} id="prev" onClick={prevClick} disabled type="button">Prev</button>
                    <button className={`btn btn-success form-floating name-form ${RegisterCSS.btn}`} id="next" onClick={nextClick} type="button">Next</button>
                    <button className={`btn btn-primary form-floating name-form ${RegisterCSS.btn}`} id="submit" type="submit" disabled form="register">Register</button>
                </div>
            </div>





        </div>


    );

}

export default Register;

