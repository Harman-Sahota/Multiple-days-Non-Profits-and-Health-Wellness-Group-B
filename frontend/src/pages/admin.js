import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css'
import axios from 'axios'
import React, { useState } from "react";
let temp = [];
let temp_warehouse = [];
function Admin() {

    const [CEO, setCEO] = useState({

        role: '',
        metrics: [],
        network: '',
        readwrite: ''

    });
    const [warehouse, setwarehouse] = useState({

        role: '',
        metrics: [],
        network: '',
        readwrite: ''

    });
    const [admin, setAdmin] = useState({

        role: '',
        metrics: [],
        network: '',
        readwrite: ''

    });

    const [volunteer, setVolunteer] = useState({

        role: '',
        metrics: [],
        network: '',
        readwrite: ''

    });


    const [Sponsors, setSponsors] = useState({

        role: '',
        metrics: [],
        network: '',
        readwrite: ''

    });

    const [Experts, setExperts] = useState({

        role: '',
        metrics: [],
        network: '',
        readwrite: ''

    });

    CEO.metrics = CEO.metrics.toString();
    warehouse.metrics = warehouse.metrics.toString();
    admin.metrics = admin.metrics.toString();
    volunteer.metrics = volunteer.metrics.toString();
    Sponsors.metrics = Sponsors.metrics.toString();
    Experts.metrics = Experts.metrics.toString();
  
    var jsonData = []
    jsonData.push( 
    JSON.parse(JSON.stringify(CEO)),
    JSON.parse(JSON.stringify(warehouse)),
    JSON.parse(JSON.stringify(admin)),
    JSON.parse(JSON.stringify(volunteer)),
    JSON.parse(JSON.stringify(Sponsors)),
    JSON.parse(JSON.stringify(Experts)),
    );
    var j = JSON.stringify(jsonData);
    console.log(j);


    return (

        <><div id="role-settings-container" className="container-lg col-md-auto">

            <h3 className="h3">Data Permissions:</h3>
            <h5 className="h5">Inside Organization: </h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Role</th>
                        <th scope="col">Metric Access</th>
                        <th scope="col">Network Access</th>
                        <th scope="col">Read/Write Access</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th scope="row">1</th>
                        <td> <input type="checkbox" id="role" name="role[]" value="User non-profit managers/CEO"

                            onChange={(e) => {
                                if (e.target.checked) {

                                    setCEO({ ...CEO, role: e.target.value });



                                } else if (!e.target.checked) {

                                    setCEO({ ...CEO, role: '' });

                                }



                            }}

                        />User non-profit managers/CEO</td>
                        <td>
                            <div

                                onChange={(e) => {
                                    if (e.target.checked) {
                                        temp.push(e.target.value);
                                        setCEO({ ...CEO, metrics: temp });


                                    } else {
                                        temp.pop(e.target.value);
                                        setCEO({ ...CEO, metrics: temp });

                                    }



                                }}


                            >
                                <div className="form-check">
                                    <input

                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault1"
                                        name="metrics[]"
                                        value="Fresh Produce"
                                    />
                                    <label className="form-check-label" for="flexCheckDefault1">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault2"
                                        name="metrics[]"
                                        value="metric#2"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault3"
                                        name="metrics[]"
                                        value="Metric#3"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault4"
                                        name="metrics[]"
                                        value="Metric#4"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault5"
                                        name="metrics[]"
                                        value="Metric#5"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check ">
                                <div className="col-md-auto">
                                    <select className="form-select" id="network" name="network-CEO" onChange={(event) =>
                                        setCEO({ ...CEO, network: event.target.value })

                                    }>
                                        <option value="allow">Allow</option>
                                        <option value="dont allow">Dont Allow</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <div className="col-md-auto">
                                    <select className="form-select" id="readwrite" name="readwrite-CEO" onChange={(event) =>
                                        setCEO({ ...CEO, readwrite: event.target.value })

                                    }>
                                        <option value="read">Read</option>
                                        <option value="write">Write</option>
                                        <option value="both">Both</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td><input type="checkbox" id="role" name="role[]" value="User non-profit warehouse boss"


                            onChange={(e) => {
                                if (e.target.checked) {

                                    setwarehouse({ ...warehouse, role: e.target.value });



                                } else if (!e.target.checked) {

                                    setwarehouse({ ...warehouse, role: '' });

                                }



                            }}



                        />User non-profit warehouse boss</td>
                        <td>
                            <div

                                onChange={(e) => {
                                    if (e.target.checked) {
                                        temp.push(e.target.value);
                                        setwarehouse({ ...warehouse, metrics: temp_warehouse });


                                    } else {
                                        temp.pop(e.target.value);
                                        setCEO({ ...warehouse, metrics: temp_warehouse });

                                    }



                                }}


                            >
                                <div className="form-check">
                                    <input

                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault1"
                                        name="metrics[]"
                                        value="Fresh Produce"
                                    />
                                    <label className="form-check-label" for="flexCheckDefault1">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault2"
                                        name="metrics[]"
                                        value="metric#2"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault3"
                                        name="metrics[]"
                                        value="Metric#3"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault4"
                                        name="metrics[]"
                                        value="Metric#4"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault5"
                                        name="metrics[]"
                                        value="Metric#5"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check ">
                                <div className="col-md-auto">
                                    <select className="form-select" id="network" name="network-warehouse"

                                        onChange={(event) =>
                                            setwarehouse({ ...warehouse, network: event.target.value })

                                        }

                                    >
                                        <option value="allow">Allow</option>
                                        <option value="dont allow">Dont Allow</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <div className="col-md-auto">
                                    <select className="form-select" id="readwrite" name="readwrite-warehouse"
                                        onChange={(event) =>
                                            setwarehouse({ ...warehouse, network: event.target.value })

                                        }
                                    >
                                        <option value="read">Read</option>
                                        <option value="write">Write</option>
                                        <option value="both">Both</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                        <td><input type="checkbox" id="role" name="role[]" value="Admin"



                            onChange={(e) => {
                                if (e.target.checked) {

                                    setAdmin({ ...admin, role: e.target.value });



                                } else if (!e.target.checked) {

                                    setAdmin({ ...admin, role: '' });

                                }



                            }}


                        />Admin</td>
                        <td>
                            <div

                                onChange={(e) => {
                                    if (e.target.checked) {
                                        temp.push(e.target.value);
                                        setAdmin({ ...Admin, metrics: temp });


                                    } else {
                                        temp.pop(e.target.value);
                                        setCEO({ ...Admin, metrics: temp });

                                    }



                                }}


                            >
                                <div className="form-check">
                                    <input

                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault1"
                                        name="metrics[]"
                                        value="Fresh Produce"
                                    />
                                    <label className="form-check-label" for="flexCheckDefault1">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault2"
                                        name="metrics[]"
                                        value="metric#2"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault3"
                                        name="metrics[]"
                                        value="Metric#3"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault4"
                                        name="metrics[]"
                                        value="Metric#4"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault5"
                                        name="metrics[]"
                                        value="Metric#5"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check ">
                                <div className="col-md-auto">
                                    <select className="form-select" id="network" name="network-Admin"

                                        onChange={(event) =>
                                            setAdmin({ ...Admin, network: event.target.value })

                                        }

                                    >
                                        <option value="allow">Allow</option>
                                        <option value="dont allow">Dont Allow</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <div className="col-md-auto">
                                    <select className="form-select" id="readwrite" name="readwrite-Admin"

                                        onChange={(event) =>
                                            setAdmin({ ...Admin, network: event.target.value })

                                        }


                                    >
                                        <option value="read">Read</option>
                                        <option value="write">Write</option>
                                        <option value="both">Both</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">4</th>
                        <td><input type="checkbox" id="role" name="role[]" value="User non-profit volunteer"

                            onChange={(e) => {
                                if (e.target.checked) {

                                    setVolunteer({ ...volunteer, role: e.target.value });



                                } else if (!e.target.checked) {

                                    setCEO({ ...volunteer, role: '' });

                                }



                            }}

                        />User non-profit volunteer</td>
                        <td>

                            <div

                                onChange={(e) => {
                                    if (e.target.checked) {
                                        temp.push(e.target.value);
                                        setVolunteer({ ...volunteer, metrics: temp });


                                    } else {
                                        temp.pop(e.target.value);
                                        setVolunteer({ ...volunteer, metrics: temp });

                                    }



                                }}


                            >
                                <div className="form-check">
                                    <input

                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault1"
                                        name="metrics[]"
                                        value="Fresh Produce"
                                    />
                                    <label className="form-check-label" for="flexCheckDefault1">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault2"
                                        name="metrics[]"
                                        value="metric#2"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault3"
                                        name="metrics[]"
                                        value="Metric#3"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault4"
                                        name="metrics[]"
                                        value="Metric#4"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault5"
                                        name="metrics[]"
                                        value="Metric#5"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check ">
                                <div className="col-md-auto">
                                    <select className="form-select" id="network" name="network-CEO" onChange={(event) =>
                                        setVolunteer({ ...volunteer, network: event.target.value })
                                    }>
                                        <option value="allow">Allow</option>
                                        <option value="dont allow">Dont Allow</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <div className="col-md-auto">
                                    <select className="form-select" id="readwrite" name="readwrite-CEO" onChange={(event) =>
                                        setVolunteer({ ...volunteer, readwrite: event.target.value })

                                    }>
                                        <option value="read">Read</option>
                                        <option value="write">Write</option>
                                        <option value="both">Both</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>

                        </td>
                 
                           
                            
                    </tr>
                </tbody>
            </table>

            <h5 className="h5">Outside Organization: </h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Role</th>
                        <th scope="col">Metric Access</th>
                        <th scope="col">Network Access</th>
                        <th scope="col">Read/Write Access</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><input type="checkbox" id="role" name="role" value="Sponsors"

                            onChange={(e) => {
                                if (e.target.checked) {

                                    setCEO({ ...CEO, role: e.target.value });

                                } else if (!e.target.checked) {

                                    setCEO({ ...CEO, role: '' });

                                }

                            }}
                        />Sponsors</td>
                        <td>
                            <div

                                onChange={(e) => {
                                    if (e.target.checked) {
                                        temp.push(e.target.value);
                                        setCEO({ ...CEO, metrics: temp });


                                    } else {
                                        temp.pop(e.target.value);
                                        setCEO({ ...CEO, metrics: temp });

                                    }

                                }}>
                                <div className="form-check">
                                    <input

                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault1"
                                        name="metrics[]"
                                        value="Fresh Produce"
                                    />
                                    <label className="form-check-label" for="flexCheckDefault1">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault2"
                                        name="metrics[]"
                                        value="metric#2"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault3"
                                        name="metrics[]"
                                        value="Metric#3"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault4"
                                        name="metrics[]"
                                        value="Metric#4"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault5"
                                        name="metrics[]"
                                        value="Metric#5"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check ">
                                <div className="col-md-auto">
                                    <select className="form-select" id="network" name="network-Sponsors" onChange={(event) =>
                                        setCEO({ ...Sponsors, network: event.target.value })

                                    }>
                                        <option value="allow">Allow</option>
                                        <option value="dont allow">Dont Allow</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <div className="col-md-auto">
                                    <select className="form-select" id="readwrite" name="readwrite-Sponsors" onChange={(event) =>
                                        setCEO({ ...Sponsors, readwrite: event.target.value })

                                    }>
                                        <option value="read">Read</option>
                                        <option value="write">Write</option>
                                        <option value="both">Both</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td><input type="checkbox" id="role" name="role[]" value="Experts"

                            onChange={(e) => {
                                if (e.target.checked) {

                                    setExperts({ ...Experts, role: e.target.value });

                                } else if (!e.target.checked) {

                                    setExperts({ ...Experts, role: '' });

                                }

                            }}

                        />Experts</td>
                        <td>
                            <div

                                onChange={(e) => {
                                    if (e.target.checked) {
                                        temp.push(e.target.value);
                                        setCEO({ ...CEO, metrics: temp });


                                    } else {
                                        temp.pop(e.target.value);
                                        setCEO({ ...CEO, metrics: temp });

                                    }

                                }}>
                                <div className="form-check">
                                    <input

                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault1"
                                        name="metrics[]"
                                        value="Fresh Produce"
                                    />
                                    <label className="form-check-label" for="flexCheckDefault1">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault2"
                                        name="metrics[]"
                                        value="metric#2"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault3"
                                        name="metrics[]"
                                        value="Metric#3"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault4"
                                        name="metrics[]"
                                        value="Metric#4"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input flexCheckDefault"
                                        type="checkbox"
                                        id="flexCheckDefault5"
                                        name="metrics[]"
                                        value="Metric#5"

                                    />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check ">
                                <div className="col-md-auto">
                                    <select className="form-select" id="network" name="network-Experts" onChange={(event) =>
                                        setExperts({ ...Experts, network: event.target.value })

                                    }>
                                        <option value="allow">Allow</option>
                                        <option value="dont allow">Dont Allow</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <div className="col-md-auto">
                                    <select className="form-select" id="readwrite" name="readwrite-Experts" onChange={(event) =>
                                        setExperts({ ...Experts, network: event.target.value })

                                    }>
                                        <option value="read">Read</option>
                                        <option value="write">Write</option>
                                        <option value="both">Both</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" for="perms" id='sub' className="btn btn-outline-success"
            
            onClick={(e) => {

                axios.post(
                    "http://127.0.0.1:8000/api/adminInsert/",
                    [
                     
                     {
                     role: CEO.role,
                     metrics: CEO.metrics,
                     network: CEO.network,
                     readwrite: CEO.readwrite
                    },
                    {
                        role: warehouse.role,
                        metrics: warehouse.metrics,
                        network: warehouse.network,
                        readwrite: warehouse.readwrite
                    },
                    {
                        role: admin.role,
                        metrics: admin.metrics,
                        network: admin.network,
                        readwrite: admin.readwrite
                    },
                    {
                        role: volunteer.role,
                        metrics: volunteer.metrics,
                        network: volunteer.network,
                        readwrite: volunteer.readwrite
                    },
                    {
                        role: Sponsors.role,
                        metrics: Sponsors.metrics,
                        network: Sponsors.network,
                        readwrite: Sponsors.readwrite
                    },
                    {
                        role: Experts.role,
                        metrics: Experts.metrics,
                        network: Experts.network,
                        readwrite: Experts.readwrite
                    }


                    ],
                    {
                      headers: {
                        "Content-type": "application/json",
                      }
                    }

                  )



            }}
            
            
            >Save</button>



        </div><div id="role-settings-container" className="container-lg col-md-auto">
                <h3 className="h3">Pending Accounts:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Roles</th>
                            <th scope="col">Approve/Decline</th>
                        </tr>
                    </thead>
                    <form className="form-approve" id="approve-form" action="" method="post">
                        <tbody>




                            { /* </form>{%} for i in Object %{'}'}
                            {%} if i.3 == Null %{'}'} */}
                            <tr>
                                <th scope="row">
                                    <div className="form-check ">
                                        <input className="form-check-input flexCheckDefault-5" type="checkbox" id="flexCheckDefault-5" name="id[]"
                                            value="{{forloop.counter}}" />
                                        <label className="form-check-label" for="flexCheckDefault-5">
                                            {/*{ forloop,: .counter }*/}
                                        </label>
                                    </div>
                                </th>

                                <td>{/*{ i, .0: }*/}</td>

                                <td>{/*{ i, .1: }*/}</td>

                                <td>{/*{ i, .2: }*/}</td>

                                <td>
                                    <div className="form-check ">
                                        <div className="col-md-auto">
                                            <select className="form-select" id="approve" name="approve[]">
                                                <option name='approve' value="approve">Approve</option>
                                                <option name='decline' value="decline">Decline</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/*% endif %*/}
                            {/*% endfor %*/}


                        </tbody>
                        <button type="submit" for="approve-form" className="btn btn-outline-success">Save</button>
                    </form>
                </table>

            </div >
        </>

    );
}

export default Admin;