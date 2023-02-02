import React from "react";
import "./base.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavbarIn() {
    return (
        <>
            <header>
                <div id="brand">
                    <a href="">
                        <FontAwesomeIcon icon={faLeaf} style={{ color: "#A1C298" }} />
                        <b> &nbsp; FoodSaviour</b>
                    </a>
                </div>

                <div className="nav" id="desktop-menu">
                    <ul>
                        <li><a href="/tracker" className="nav-link px-3">Tracker</a></li>
                        {/*{% if 'user non-profit managers/CEO' in request.session.Roles  %}*/}
                        <li><a href="/network" className="nav-link px-3">Network</a></li>
                        {/*{% elif 'user non-profit warehouse boss' in request.session.Roles %}*/}
                        <li><a href="/network" className="nav-link px-3">Network</a></li>
                        {/*{% elif 'admin' in request.session.Roles %}*/}
                        <li><a href="/network" className="nav-link px-3">Network</a></li>
                        {/*{% endif %}

                        {% if 'admin' in request.session.Roles %}*/}
                        <li><a href="/admin" className="nav-link px-3">Admin</a></li>
                        {/*{% endif %}*/}

                        <li><a href="/profile" className="nav-link px-3"><FontAwesomeIcon icon={faUser} />
                        &nbsp; Profile</a></li>
                        <li id="signup">
                            <a href="/">
                                <Button className="register btn btn-outline-success" variant="outline-success">
                                    Logout
                                </Button>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="nav">
                        <ul className="mobile-menu">
                            <li><a href="tracker/" className="nav-link px-3">Tracker</a></li>
                            {/*{% if 'user non-profit managers/CEO' in request.session.Roles  %}*/}
                            <li><a href="network/" className="nav-link px-3">Network</a></li>
                            {/*{% elif 'user non-profit warehouse boss' in request.session.Roles %}*/}
                            <li><a href="network/" className="nav-link px-3">Network</a></li>
                            {/*{% elif 'admin' in request.session.Roles %}*/}
                            <li><a href="network/" className="nav-link px-3">Network</a></li>
                            {/*{% endif %}
                            
                            {% if 'admin' in request.session.Roles %}*/}
                            <li><a href="admin/" className="nav-link px-3">Admin</a></li>
                            {/*{% endif %}*/}

                            <li><a href="profile" className="nav-link px-3"><FontAwesomeIcon icon={faUser} />
                                Profile</a></li>
                            <li id="signup">
                                <a href="/">
                                    <Button className="register btn btn-outline-success" variant="outline-success">
                                        Logout
                                    </Button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavbarIn;