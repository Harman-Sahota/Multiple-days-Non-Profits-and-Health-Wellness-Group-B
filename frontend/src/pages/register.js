import "bootstrap/dist/css/bootstrap.min.css";
import registerCSS from "./register.module.css";
import "./register"
function Register() {
  const myStyle = {
    fontSize: "10px",
    color: "red",
    display: "none",
    minHeight: "10px",
  };

  return (
    <div className={`col-md-auto ${registerCSS.contain}`}>
      <h3>Create An Account</h3>
      <div className={registerCSS.progress_container}>
        <div className={registerCSS.progress} id="progress">
          {" "}
        </div>
        <div className={`active ${registerCSS.circle}`}>
          <i className="fa-solid fa-1"></i>
        </div>
        <div className={` ${registerCSS.circle}`}>
          <i className="fa-solid fa-2"></i>
        </div>
        <div className={`${registerCSS.circle}`}>
          <i className="fa-solid fa-3"></i>
        </div>
      </div>
      <form className="form-inside" action="" method="post" id="register">
        <div className="card-group">
          <div className={`card-1 active col-md-auto ${registerCSS.card}`} id={registerCSS.card_1}>
            <div className="card-body">
              <input
                type="text"
                className={`form-control form-floating name-form ${registerCSS.text_input}`}
                id="firstname"
                name="firstname"
                placeholder="First Name"
              />
              <input
                type="text"
                className={`form-control form-floating name-form ${registerCSS.text_input}`}
                id="lastname"
                name="lastname"
                placeholder="Last Name"
              />
              <input
                type="email"
                className={`form-control form-floating name-form ${registerCSS.text_input}`}
                id="email"
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                className={`form-control form-floating name-form ${registerCSS.text_input}`}
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
                className={`form-control form-floating name-form ${registerCSS.text_input}`}
                id="confirm-password"
                placeholder="Confirm Password"
              />
              <span id="passerror3" style={myStyle}>
                Password and Confirm password not matched.
              </span>

              <input
                type="text"
                className={`form-control form-floating name-form ${registerCSS.text_input}`}
                id="organization"
                name="organization"
                placeholder="Organization Name"
              />
            </div>
          </div>
        </div>

        <div className="card-group">
          <div className={`card-2 active col-md-auto ${registerCSS.card}`} id={registerCSS.card_2}>
            <div className="card-body">
              <h5>Choose your roles:</h5>

              <div className={`form-check  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input flexCheckDefault"
                  type="checkbox"
                  id="flexCheckDefault1"
                  onchange="validateRoles()"
                  name="roles[]"
                  value="user non-profit managers/CEO"
                />
                <label className="form-check-label" for="flexCheckDefault1">
                  user non-profit managers/CEO
                </label>
              </div>
              <div className={`form-check  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input flexCheckDefault"
                  type="checkbox"
                  id="flexCheckDefault2"
                  onchange="validateRoles()"
                  name="roles[]"
                  value="user non-profit warehouse boss"
                />
                <label className="form-check-label" for="flexCheckDefault2">
                  user non-profit warehouse boss
                </label>
              </div>
              <div className={`form-check  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input flexCheckDefault"
                  type="checkbox"
                  id="flexCheckDefault3"
                  onchange="validateRoles()"
                  name="roles[]"
                  value="user non-profit volunteer"
                />
                <label className="form-check-label" for="flexCheckDefault3">
                  user non-profit volunteer
                </label>
              </div>
              <div className={`form-check  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input flexCheckDefault"
                  type="checkbox"
                  id="flexCheckDefault4"
                  onchange="validateRoles()"
                  name="roles[]"
                  value="sponsors"
                />
                <label className="form-check-label" for="flexCheckDefault4">
                  sponsors
                </label>
              </div>
              <div className={`form-check  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input flexCheckDefault"
                  type="checkbox"
                  id="flexCheckDefault5"
                  onchange="validateRoles()"
                  name="roles[]"
                  value="admin"
                />
                <label className="form-check-label" for="flexCheckDefault5">
                  admin
                </label>
              </div>
              <div className={`form-check  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input flexCheckDefault"
                  type="checkbox"
                  id="flexCheckDefault6"
                  onchange="validateRoles()"
                  name="roles[]"
                  value="experts "
                />
                <label className="form-check-label" for="flexCheckDefault6">
                  experts
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="card-group">
          <div className={`card-3 active col-md-auto ${registerCSS.card}`} id={registerCSS.card_3}>
            <div className="card-body">
              <h5>Consent:</h5>
              <textarea readonly rows="5" cols="auto">
                The information you enter will be stored in a secure database
                that meets Canadian privacy regulations. If you have any
                concerns, please contact UBC Behavioural Research Ethics Council
                (BREB) about Barb Marcolin's study or call Dr. Marcolin at
                (250)807-9637 to ask any questions.
              </textarea>
              <div className={`consent  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="consent-check1"
                  onchange="changeconsent1()"
                  name="consent"
                  value="consented"
                />
                <label
                  className="form-check-label consent-text"
                  for="consent-check1"
                >
                  I accept
                </label>
              </div>
              <div className={`consent  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="consent-check2"
                  onchange="changeconsent2()"
                  name="consent-disagree"
                  value="not-consented"
                />
                <label
                  className={`form-check-label ${registerCSS.consent_text}`}
                  for="consent-check2"
                >
                  I refuse
                </label>
              </div>
              <div className={`consent  ${registerCSS.form_check}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="consent-check3"
                  onchange="changeconsent3()"
                  name="consent-disagree"
                  value="info-consented"
                />
                <label
                  className={`form-check-label ${registerCSS.consent_text}`}
                  for="consent-check3"
                >
                  More Info
                </label>
              </div>
            </div>
          </div>
        </div>
        <div id={registerCSS.wrapper}>
          <div className={registerCSS.buttons}>
            <button
              className={`btn-success form-floating name-form ${registerCSS.btn}`}
              id="prev"
              disabled
              type="button"
            >
              Prev
            </button>
            <button
              className={`btn-success form-floating name-form ${registerCSS.btn}`}
              id="next"
              type="button"
            >
              Next
            </button>
            <button
              className={`btn-success form-floating name-form ${registerCSS.btn}`}
              id="submit"
              type="submit"
              disabled
              form="register"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
