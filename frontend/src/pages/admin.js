import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css'
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
function Admin() {


    const [formData, setFormData] = useState({
       
        role: [],
        metrics: [],
        network_CEO: '',
        readwrite_CEO: '',

      
      });

    


    return (

       

        <><div id="role-settings-container" className="container-lg col-md-auto">
            <form className="form" action="" id="perms" method="post" >
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
                            <td> <input type="checkbox" id="role" name="role[]" value="User non-profit managers/CEO"  onChange={(e) => {  if(e.target.checked){ setFormData({ ...formData, role: e.target.value })}}} />User non-profit managers/CEO</td>
                            <td>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-CEO[]"
                                        value="Fresh Produce" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-CEO[]"
                                        value="Metric #2" />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-CEO[]"
                                      value="Metric #3" />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics[]-CEO"
                                        value="Metric #4" />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-CEO[]"
                                        value="Metric #5" />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="form-check ">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="network" name="network_CEO" onChange={(e) => { setFormData({ ...formData, network_CEO: e.target.value })}}>
                                            <option value="allow">Allow</option>
                                            <option value="dont allow">Dont Allow</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="form-check">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="readwrite" name="readwrite_CEO" onChange={(e) => { setFormData({ ...formData, readwrite_CEO: e.target.value })}}>
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
                            <td><input type="checkbox" id="role" name="role[]" value="User non-profit warehouse boss" onChange={(e) => {  if(e.target.checked){ setFormData({ ...formData, role: e.target.value })}}} />User non-profit warehouse boss</td>
                            <td>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-warehouse[]"
                                         value="Fresh Produce" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-warehouse[]"
                                       value="Metric #2" />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-warehouse[]"
                                        value="Metric #3" />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-warehouse[]"
                                      value="Metric #4" />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-warehouse[]"
                                        value="Metric #5" />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="form-check ">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="network" name="network-warehouse" onChange={(e) => {  setFormData({ ...formData, network: e.target.value })}}>
                                            <option value="allow">Allow</option>
                                            <option value="dont allow">Dont Allow</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="form-check">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="readwrite" name="readwrite-warehouse" onChange={(e) => {   setFormData({ ...formData, readwrite: e.target.value })}}>
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
                            <td><input type="checkbox" id="role" name="role[]" value="Admin" onChange={(e) => {  if(e.target.checked){ setFormData({ ...formData, role: e.target.value })}}} />Admin</td>
                            <td>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Admin[]"
                                        value="Fresh Produce" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Admin[]"
                                         value="Metric #2" />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Admin[]"
                                         value="Metric #3" />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics[]"
                                        value="Metric #4" />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Admin[]"
                                         value="Metric #5" />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="form-check ">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="network" name="network-Admin" onChange={(e) => { setFormData({ ...formData, network: e.target.value })}}>
                                            <option value="allow">Allow</option>
                                            <option value="dont allow">Dont Allow</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="form-check">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="readwrite" name="readwrite-Admin" onChange={(e) => {  if(e.target.checked){ setFormData({ ...formData, role: e.target.value })}}}>
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
                            <td><input type="checkbox" id="role" name="role[]" value="User non-profit volunteer" onChange={(e) => {  if(e.target.checked){ setFormData({ ...formData, role: e.target.value })}}} />User non-profit volunteer</td>
                            <td>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-volunteer[]"
                                        value="Fresh Produce" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-volunteer[]"
                                       value="Metric #2" />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-volunteer[]"
                                       value="Metric #3" />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-volunteer[]"
                                       value="Metric #4" />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-volunteer[]"
                                        value="Metric #5" />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="form-check ">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="network" name="network-volunteer" onChange={(e) => { setFormData({ ...formData, network: e.target.value })}}>
                                            <option value="allow">Allow</option>
                                            <option value="dont allow">Dont Allow</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="form-check">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="readwrite" name="readwrite-volunteer" onChange={(e) => {  setFormData({ ...formData, readwrite: e.target.value })}}>
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
                            <td><input type="checkbox" id="role" name="role" value="Sponsors" onChange={(e) => {  if(e.target.checked){ setFormData({ ...formData, role: e.target.value })}}} />Sponsors</td>
                            <td>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Sponsors[]"
                                        value="Fresh Produce" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics[]"
                                        value="Metric #2" />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault"  type="checkbox" id="flexCheckDefault" name="metrics-Sponsors[]"
                                        value="Metric #3" />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Sponsors[]"
                                        value="Metric #4" />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Sponsors[]"
                                         value="Metric #5" />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="form-check ">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="network" name="network-Sponsors" onChange={(e) => {  setFormData({ ...formData, network: e.target.value })}}>
                                            <option value="allow">Allow</option>
                                            <option value="dont allow">Dont Allow</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="form-check">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="readwrite" name="readwrite-Sponsors" onChange={(e) => {   setFormData({ ...formData, readwrite: e.target.value })}}>
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
                            <td><input type="checkbox" id="role" name="role[]" value="Experts" onChange={(e) => {  if(e.target.checked){ setFormData({ ...formData, role: e.target.value })}}} />Experts</td>
                            <td>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Experts[]"
                                         value="Fresh Produce" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fresh Produce
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Experts[]"
                                        value="Metric #2 /" />
                                    <label className="form-check-label" for="flexCheckDefault2">
                                        Metric #2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Experts[]"
                                         value="Metric #3" />
                                    <label className="form-check-label" for="flexCheckDefault3">
                                        Metric #3
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Experts[]"
                                       value="Metric #4" />
                                    <label className="form-check-label" for="flexCheckDefault4">
                                        Metric #4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input flexCheckDefault" type="checkbox" id="flexCheckDefault" name="metrics-Experts[]"
                                       value="Metric #5" />
                                    <label className="form-check-label" for="flexCheckDefault5">
                                        Metric #5
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="form-check ">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="network" name="network-Experts" onChange={(e) => {  setFormData({ ...formData, network: e.target.value })}}>
                                            <option value="allow">Allow</option>
                                            <option value="dont allow">Dont Allow</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="form-check">
                                    <div className="col-md-auto">
                                        <select className="form-select" id="readwrite" name="readwrite-Experts" onChange={(e) => {   setFormData({ ...formData, readwrite: e.target.value })}}>
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
                <button type="submit" for="perms" className="btn btn-outline-success">Save</button>

            </form>

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