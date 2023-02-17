// import 'bootstrap/dist/css/bootstrap.min.css';
// import commentCSS from './comment.module.css';
// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
// import fourcss from './fourcss.css';

// function Comment() {

//     const [comment, setComment] = useState({
//         Comments: ''
//     });


//     var j = JSON.stringify(comment);
//     console.log(j);
//     {if(localStorage.getItem('firstname') != null){
      
//     return (

       
//         <section>
//             <div id="main" className={`${commentCSS.container_lg} container-lg col-md-auto`}>
//                 <a id={`${commentCSS.home} home`} className="btn btn-success" href="network/" >Go Back</a>

//                 <div className={`${commentCSS.container_sm} container-sm col-md-auto`}>
//                     {/*
//                     <h2 className="display-6"> {{ request.resolver_match.kwargs.product }} -  {{ request.resolver_match.kwargs.qty }}  {{ request.resolver_match.kwargs.units }} </h2>
//                     <p className="mb-0 h6"> {{ request.resolver_match.kwargs.description | replace_underscore }} </p>
//                     <p className="mb-0 text-success"> {{ request.resolver_match.kwargs.status }} </p> */}
//                     <div className='row'>
//                         <div className='col-10'>
//                             <h3>Post Title</h3>
//                             <p>Date posted:</p>
//                         </div>
//                         <div className='col-2'>
//                             <p style={{ textAlign: 'right' }}>Username</p>
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <p>Post description will be displayed here.</p>
//                     </div>
//                 </div>

//                 <div className={`${commentCSS.container_sm} container-sm col-md-auto ${commentCSS.form} form`}>
//                     {/*{% csrf_token %}*/}
//                     <div className="form-group">
//                         <textarea className="form-control" id="comment" rows="5" name="comment" placeholder="Type in your comment here."
//                             onChange={(event) => {
                                
//                                 setComment({ ...comment, Comments: event.target.value })
//                             }}>
//                         </textarea>

//                         <Button type="submit" id="sub" className={`${commentCSS.sub} btn btn-secondary`} for="comment"
//                             onClick={(e) => {
//                                 axios.post(
//                                     "http://127.0.0.1:8000/api/commentInsert/",
//                                     {
//                                         Comments: comment.Comments,
//                                     },
//                                     {
//                                         headers: {
//                                             "Content-type": "application/json",
//                                         }
//                                     }
//                                 )
//                                     .then(response => {
//                                         if (response.status == 201) {
//                                             console.log('yes');
//                                         }
//                                     })
//                                     .catch(err => console.warn(err));
//                             }}

//                         >Comment</Button>
//                     </div>
//                 </div>

//                 <div className={`${commentCSS.container_sm} container-sm col-md-auto ${commentCSS.form} form`}>
//                     <h3>Comments</h3>
//                     {/*{% for i in Object %}*/}
//                     <div className={`${commentCSS.card} card border-secondary mb-3`}>
//                         <div className="card-body">
//                             <p className="card-text">
//                                 <p>Username</p>
//                                 <p>Comment</p>
//                                 {/*{{i.5}}*/}
//                             </p>
//                         </div>
//                     </div>
//                     {/*{% endfor %}*/}
//                 </div>

//             </div>
  
//         </section >
                      
//     );  }
//     else if(localStorage.getItem('firstname') == null) {

//         return(
//             <section>
//             <div className="flex-container">
//                 <div className="text-center">
//                     <h1>
//                         <span className="fade-in" id="digit1">4</span>
//                         <span className="fade-in" id="digit2">0</span>
//                         <span className="fade-in" id="digit3">4</span>
//                     </h1>
//                     <h3 className="fadeIn">YOU MUST LOGIN TO VIEW THIS PAGE</h3>
//                     <a href='/login'><Button type="button" class = 'btn btn-primary 'name="button">Login</Button></a>
//                 </div>
//             </div>
//         </section>
//         );

//     }}
// }

// export default Comment;