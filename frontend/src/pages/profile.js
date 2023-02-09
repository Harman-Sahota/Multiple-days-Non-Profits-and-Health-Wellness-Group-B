import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileCSS from './profile.module.css';
import blank_profile from '../images/blank-profile-picture.png';
import Button from 'react-bootstrap/Button';
import fourcss from './fourcss.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    if (localStorage.getItem('firstname') != null) {
        return (
            <section>
                <div className="container p-4">
                    <div className="card">
                        <div className={`${profileCSS.card_head} card-header bg-transparent text-center`}>
                            <b>Profile</b>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <b>Name: </b>
                                </div>

                                <div className='col-6'>
                                    <p>{localStorage.getItem('firstname')}</p>
                                </div>

                                <div className='col-3'>
                                    <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger">
                                        Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                    </Button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <b>Email: </b>
                                </div>

                                <div className='col-6'>
                                    <p>Email displayed here</p>
                                </div>

                                <div className='col-3'>
                                    <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger">
                                        Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                    </Button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <b>Organization Name: </b>
                                </div>

                                <div className='col-6'>
                                    <p>Organization name displayed here</p>
                                </div>

                                <div className='col-3'>
                                    <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger">
                                        Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                    </Button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <b>Role(s): </b>
                                </div>

                                <div className='col-6'>
                                    <p>Role displayed here</p>
                                </div>

                                <div className='col-3'>
                                    <Button className={`${profileCSS.edit_btn} btn btn-outline-danger`} variant="outline-danger">
                                        Edit <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#DC143C	" }} />
                                    </Button>
                                </div>
                            </div>
                        </div>
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
              <a href='/login'><Button type="button" class = 'btn btn-primary 'name="button">Login</Button></a>
          </div>
      </div>
  </section>
        );

    }
}

export default Profile;