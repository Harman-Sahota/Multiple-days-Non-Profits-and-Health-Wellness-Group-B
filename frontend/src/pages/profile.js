import 'bootstrap/dist/css/bootstrap.min.css';
import profileCSS from './profile.module.css';
import blank_profile from '../images/blank-profile-picture.png';
import Button from 'react-bootstrap/Button';

function Profile() {
     return (
         <section>
             <div className="container p-4">
                 <div className="row">
                     <div className="col-4">
                         <div className="card">
                             <div className="card-header bg-transparent text-center">
                                 <br />
                                 <img className={`${profileCSS.profile_img}`} src={blank_profile} />
                                 <br />
                                 <br />
                             </div>
                             <div className="card-body">
                                <p>User's full name will be displayed here.</p>
                                <p>User's email will be displayed here.</p>
                                 {/*<p><b>{{ request.session.FirstName }} {{ request.session.LastName }}</b></p>
                                 <p>{{ request.session.Email }}</p>*/}
                             </div>
                         </div>
                     </div>
                     <div className="col-8">
                         <div className="card">
                             <div className="card-header bg-transparent text-center"><b>Profile</b></div>
                             <div className="card-body">
                                     <div className="row">
                                         <div className="col-4">
                                             <p>Name: </p>
                                             <p>Email: </p>
                                             <p>Organization Name: </p>
                                             <p>Role(s): </p>
                                         </div>
                                         <div className="col-8">
                                            {/* 
                                            <p>{{ request.session.FirstName }} {{ request.session.LastName }}</p>
                                             <p>{{ request.session.Email }}</p>
                                             <p>{{ request.session.Organization }}</p>
                                             <p>{{ request.session.Roles | title | cut:"["|cut:"]"|cut:"'" }}</p>
                            */}
                                         </div>
                                     </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
     );
 }

 export default Profile;