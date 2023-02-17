import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileCSS from './profile.module.css';
import blank_profile from '../images/blank-profile-picture.png';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import fourcss from './fourcss.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    const [all, setAll] = useState({
        FirstName: localStorage.getItem('firstname'),
        LastName: localStorage.getItem('lastname'),
        Roles: localStorage.getItem('roles'),
        Consent: localStorage.getItem('consent'),
        Organization: localStorage.getItem('organization')
    });

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const userId = localStorage.getItem('id');

    window.onload = function () {
        if (localStorage.getItem('roles').includes('user non-profit managers/CEO')) {
            document.getElementById('manager_ceo').checked = true;
        }
        if (localStorage.getItem('roles').includes('user non-profit warehouse boss')) {
            document.getElementById('warehouse_boss').checked = true;
        }
        if (localStorage.getItem('roles').includes('user non-profit volunteer')) {
            document.getElementById('volunteer').checked = true;
        }
        if (localStorage.getItem('roles').includes('Sponsors')) {
            document.getElementById('sponsor').checked = true;
        }
        if (localStorage.getItem('roles').includes('admin')) {
            document.getElementById('admin').checked = true;
        }
        if (localStorage.getItem('roles').includes('experts')) {
            document.getElementById('expert').checked = true;
        }
        if (localStorage.getItem('consent') == 'consented') {
            document.getElementById('consented').checked = true;
        }
        if (localStorage.getItem('consent') == 'unconsented') {
            document.getElementById('unconsented').checked = true;
        }
    }

    var role_str = [];

    if (localStorage.getItem('firstname') != null) {
        return (
            <section>
                <div className="container p-4">
                    <div className="card">
                        <form>
                            <div className={`${profileCSS.card_head} card-header bg-transparent text-center`}>
                                <b>Profile</b>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <b>Name: </b>
                                    </div>

                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-auto'>
                                                <input type="text" id="fname" name="fname" placeholder={localStorage.getItem('firstname')} size="20" disabled
                                                    onChange={(e) => {
                                                        localStorage.removeItem('firstname');
                                                        localStorage.setItem('firstname', e.target.value);
                                                        setAll({ ...all, FirstName: localStorage.getItem('firstname') })
                                                    }} />
                                            </div>
                                            <div className='col-auto'>
                                                <input type="text" id="lname" name="lname" placeholder={localStorage.getItem('lastname')} size="20" disabled
                                                    onChange={(e) => {
                                                        localStorage.removeItem('lastname');
                                                        localStorage.setItem('lastname', e.target.value);
                                                        setAll({ ...all, LastName: localStorage.getItem('lastname') })
                                                    }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger" onClick={(e) => {
                                            document.getElementById('fname').disabled = false;
                                            document.getElementById('lname').disabled = false;
                                        }} >
                                            Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                        </Button>
                                    </div>
                                </div>

                                <br />

                                <div className="row">
                                    <div className="col-3">
                                        <b>Email: </b>
                                    </div>

                                    <div className='col-6'>
                                        <input type="email" id="email" name="email" placeholder={localStorage.getItem('email')} size="50" disabled />
                                    </div>
                                </div>

                                <br />

                                <div className="row">
                                    <div className="col-3">
                                        <b>Organization Name: </b>
                                    </div>

                                    <div className='col-6'>
                                        <input type="text" id="org" name="org" placeholder={localStorage.getItem('organization')} size="50" disabled onChange={(e) => {
                                            localStorage.removeItem('organization');
                                            localStorage.setItem('organization', e.target.value);
                                            setAll({ ...all, Organization: localStorage.getItem('organization') })
                                        }} />
                                    </div>

                                    <div className='col-3'>
                                        <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger" onClick={(e) => {
                                            document.getElementById('org').disabled = false;
                                        }}>
                                            Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                        </Button>
                                    </div>
                                </div>

                                <br />

                                <div className="row">
                                    <div className="col-3">
                                        <b>Role(s): </b>
                                    </div>

                                    <div className='col-6'
                                        onChange={(e) => {
                                            localStorage.removeItem('roles');
                                            if (e.target.checked) {
                                                role_str.push(e.target.value);
                                            }
                                        }}>
                                        <label for="manager_ceo" className='checkbox-inline'>
                                            <input type="checkbox" id="manager_ceo" name="roles" value="user non-profit managers/CEO" disabled
                                            />
                                            User non-profit managers/CEO</label>
                                        <br />
                                        <label for="warehouse_boss">
                                            <input type="checkbox" id="warehouse_boss" name="roles" value="user non-profit warehouse boss" disabled />
                                            User non-profit warehouse boss</label>
                                        <br />
                                        <label for="volunteer">
                                            <input type="checkbox" id="volunteer" name="roles" value="user non-profit volunteer" disabled />
                                            User non-profit volunteer</label>
                                        <br />
                                        <label for="sponsor" className='checkbox-inline'>
                                            <input type="checkbox" id="sponsor" name="roles" value="sponsor" disabled />
                                            Sponsor</label>
                                        <br />
                                        <label for="admin">
                                            <input type="checkbox" id="admin" name="roles" value="admin" disabled />
                                            Admin</label>
                                        <br />
                                        <label for="expert">
                                            <input type="checkbox" id="expert" name="roles" value="expert" disabled />
                                            Expert</label>
                                    </div>

                                    <div className='col-3'>
                                        <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger" onClick={(e) => {
                                            document.getElementById('manager_ceo').disabled = false;
                                            document.getElementById('warehouse_boss').disabled = false;
                                            document.getElementById('volunteer').disabled = false;
                                            document.getElementById('sponsor').disabled = false;
                                            document.getElementById('admin').disabled = false;
                                            document.getElementById('expert').disabled = false;
                                        }}>
                                            Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                        </Button>
                                    </div>
                                </div>

                                <br />

                                <div className='row'>
                                    <div className="col-3">
                                        <b>Consent: </b>
                                    </div>

                                    <div className='col-6' onChange={(e) => {
                                        localStorage.removeItem('consent');
                                        if (e.target.checked) {
                                            localStorage.setItem('consent', e.target.value);
                                        }
                                        setAll({ ...all, Consent: localStorage.getItem('consent') })
                                    }}>
                                        <label for="consented">
                                            <input type="radio" id="consented" name="consent" value="consented" disabled />
                                            Yes, I consent to sharing my data.</label>
                                        <label for="unconsented">
                                            <input type="radio" id="unconsented" name="consent" value="unconsented" onChange={handleShow} disabled />
                                            No, I want to stop sharing my data.</label>
                                    </div>

                                    <div className='col-3' >
                                        <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger" onClick={() => {
                                            document.getElementById('consented').disabled = false;
                                            document.getElementById('unconsented').disabled = false;
                                        }}>
                                            Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <Button className={`${profileCSS.save_btn} btn btn-outline-success`} id="saveBtn" variant="outline-sucess" onClick={() => {
                                    localStorage.setItem('roles', role_str);
                                    setAll({ ...all, Roles: localStorage.getItem('roles') })
                                    console.log(JSON.stringify(all));

                                    axios.put(
                                        `http://127.0.0.1:8000/api/profileUpdate/${userId}`,
                                        {
                                            FirstName: all.FirstName,
                                            LastName: all.LastName,
                                            Roles: all.Roles,
                                            Consent: all.Consent,
                                            Organization: all.Organization
                                        },
                                        {
                                            headers: {
                                                "Content-type": "application/json",
                                            }
                                        }
                                    )
                                        .then(response => {
                                            if (response.status == 201) {
                                                console.log('yes');
                                                window.location.replace("http://localhost:3000/profile/");

                                            }
                                        })
                                        .catch(err => console.warn(err));
                                }}>
                                    Save
                                </Button>

                                <Modal show={showModal} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Consent Withdrawal Confirmation</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Are you sure you want to withdraw your consent?</p>

                                        If this was a mistake, please change the consent option back to 'Yes, I consent to sharing my data'. <br /><br/>
                                        If this was not a mistake, please ensure you have taken the time to download your data before you confirm the withdrawal as your account will be deactivated <b>immediately</b> after you click 'Save'.
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        );
    }
    else if (localStorage.getItem('firstname') == null) {

        return (
            <section>
                <div className="flex-container">
                    <div className="text-center">
                        <h1 className="heading1">
                            <span className="fade-in" id="digit1">4</span>
                            <span className="fade-in" id="digit2">0</span>
                            <span className="fade-in" id="digit3">4</span>
                        </h1>
                        <h3 className=" heading3 fadeIn">YOU MUST LOGIN TO VIEW THIS PAGE</h3>
                        <a href='/login'><Button type="button" class='btn btn-primary ' name="button">Login</Button></a>
                    </div>
                </div>
            </section >
        );
    }
}

export default Profile;