import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileCSS from './profile.module.css';
import blank_profile from '../images/blank-profile-picture.png';
import Button from 'react-bootstrap/Button';
import fourcss from './fourcss.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    const [all, setAll] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Roles: '',
        Consent: '',
        Organization: ''
    });

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
        if (localStorage.getItem('roles').includes('sponsor')) {
            document.getElementById('sponsor').checked = true;
        }
        if (localStorage.getItem('roles').includes('admin')) {
            document.getElementById('admin').checked = true;
        }
        if (localStorage.getItem('roles').includes('expert')) {
            document.getElementById('expert').checked = true;
        }
        if (localStorage.getItem('consent') == 'consented') {
            document.getElementById('consented').checked = true;
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
                                                        setAll({ ...all, FirstName: localStorage.getItem('firstname')})
                                                    }} />
                                            </div>
                                            <div className='col-auto'>
                                                <input type="text" id="lname" name="lname" placeholder={localStorage.getItem('lastname')} size="20" disabled
                                                    onChange={(e) => {
                                                        localStorage.removeItem('lastname');
                                                        localStorage.setItem('lastname', e.target.value);
                                                        setAll({ ...all, LastName: localStorage.getItem('lastname')})
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
                                        <input type="email" id="email" name="email" placeholder={localStorage.getItem('email')} size="50" disabled
                                            onChange={(e) => {
                                                localStorage.removeItem('email');
                                                localStorage.setItem('email', e.target.value);
                                                setAll({ ...all, Email: localStorage.getItem('email')})
                                            }} />
                                    </div>

                                    <div className='col-3'>
                                        <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger" onClick={(e) => {
                                            document.getElementById('email').disabled = false;
                                        }}>
                                            Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                        </Button>
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
                                            setAll({ ...all, Organization: localStorage.getItem('organization')})
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
                                            if(e.target.checked){
                                                localStorage.setItem('consent', e.target.value);
                                            }
                                            setAll({ ...all, Consent: localStorage.getItem('consent')})
                                        }}>
                                        <label for="consented">
                                            <input type="radio" id="consented" name="consent" value="consented" disabled />
                                            Yes, I consent to sharing my data.</label>
                                        <label for="unconsented">
                                            <input type="radio" id="unconsented" name="consent" value="unconsented" disabled />
                                            No, I want to stop sharing my data.</label>
                                    </div>

                                    <div className='col-3' >
                                        <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger" onClick={(e) => {
                                            document.getElementById('consented').disabled = false;
                                            document.getElementById('unconsented').disabled = false;

                                        }}>
                                            Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <Button className={`${profileCSS.edit_btn} btn btn-outline-success`} variant="outline-sucess" onClick={(e) => {
                                localStorage.setItem('roles', role_str);
                                setAll({ ...all, Roles: role_str});
                                
                                
                                console.log(all);
                            }}>
                                Save
                            </Button>
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