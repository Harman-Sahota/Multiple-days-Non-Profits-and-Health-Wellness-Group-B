// import 'bootstrap/dist/css/bootstrap.min.css';
// import profileCSS from './profileCSS.module.css';
// import Button from 'react-bootstrap/Button';

// function Profile() {
//     return (
//         <section>
//             <div className="container p-4">
//                 <div className="row">
//                     <div className="col-4">
//                         <div className="card">
//                             <div className="card-header bg-transparent text-center">
//                                 <br />
//                                 <img className={`${profileCSS.profile_img}`} src="../../static/postlogin/images/blank-profile-picture.png" />
//                                 <br />
//                                 <br />
//                             </div>
//                             <div className="card-body">
//                                 <p><b>{{ request.session.FirstName }} {{ request.session.LastName }}</b></p>
//                                 <p>{{ request.session.Email }}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-8">
//                         <div className="card">
//                             <div className="card-header bg-transparent text-center"><b>Profile</b></div>
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-4">
//                                         <p>Account Status: </p>
//                                     </div>
//                                     <div className="col-8">
//                                         {% if request.session.Status == "approve" %}
//                                         <p>Approved</p>
//                                         {% elif request.session.Status == "decline" %}
//                                         <p style="margin-bottom: 0;">Declined</p>
//                                         <span style="font-size: 0.75em; color: red;">If this was a mistake, please contact your admin.</span>
//                                         {% else  %}
//                                         <p>Pending</p>
//                                         {% endif %}
//                                     </div>
//                                 </div>
//                                 <hr/>
//                                     <div className="row">
//                                         <div className="col-4">
//                                             <p>Name: </p>
//                                             <p>Email: </p>
//                                             <p>Organization Name: </p>
//                                             <p>Role(s): </p>
//                                         </div>
//                                         <div className="col-8">
//                                             <p>{{ request.session.FirstName }} {{ request.session.LastName }}</p>
//                                             <p>{{ request.session.Email }}</p>
//                                             <p>{{ request.session.Organization }}</p>
//                                             <p>{{ request.session.Roles | title | cut:"["|cut:"]"|cut:"'" }}</p>
//                                         </div>
//                                     </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Profile;