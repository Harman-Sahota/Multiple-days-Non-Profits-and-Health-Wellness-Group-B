import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Step2 = ({ handleNext, handlePrev }) => {
    return (

        <form>
            <h3 className='animations'>Choose your roles</h3>
            <br/>
            <ProgressBar animated now={55} className='animations' variant='info'/>
            <br/>

            <div className="form-check">
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
            <div className="form-check">
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
            <div className="form-check">
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
            <div className="form-check">
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
            <div className="form-check">
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
            <div className="form-check">
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


            <div className='Buttons'>

                <Button onClick={handlePrev} className='btn' variant='btn btn-success'>Back</Button>
                <Button onClick={handleNext} className='btn' variant='btn btn-success'>Next</Button>
            </div>
        </form>


    );
}

export default Step2;
