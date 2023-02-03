import 'bootstrap/dist/css/bootstrap.min.css';
import commentCSS from './comment.module.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Comment() {

    const [comment, setComment] = useState({
        Comments: ''
    });


    var j = JSON.stringify(comment);
    console.log(j);

    return (
        <section>
            <div id="main" className={`${commentCSS.container_lg} container-lg col-md-auto`}>
                <a id={`${commentCSS.home} home`} className="btn btn-success" href="network/" >Go Back</a>

                <div className={`${commentCSS.container_sm} container-sm col-md-auto`}>
                    {/*
                    <h2 className="display-6"> {{ request.resolver_match.kwargs.product }} -  {{ request.resolver_match.kwargs.qty }}  {{ request.resolver_match.kwargs.units }} </h2>
                    <p className="mb-0 h6"> {{ request.resolver_match.kwargs.description | replace_underscore }} </p>
                    <p className="mb-0 text-success"> {{ request.resolver_match.kwargs.status }} </p>
    */}
                    <p>Full post with details will be displayed here.</p>
                </div>

                <div className={`${commentCSS.container_sm} container-sm col-md-auto ${commentCSS.form} form`}>
                    {/*{% csrf_token %}*/}
                    <div className="form-group">
                        <textarea className="form-control" id="comment" rows="5" name="comment" placeholder="Say something"
                            onChange={(event) => {
                                setComment({ ...comment, Comments: event.target.value })
                            }}></textarea>

                        <button type="submit" id={`${commentCSS.sub} sub`} className="btn btn-secondary" for="comment"
                            onClick={(e) => {
                                axios.post(
                                    "http://127.0.0.1:8000/api/commentInsert/",
                                    {
                                        Comments: comment.Comments,
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
                                        }
                                    })
                                    .catch(err => console.warn(err));
                            }}

                        >Comment</button>
                    </div>
                </div>

                <div className={`${commentCSS.container_sm} container-sm col-md-auto ${commentCSS.form} form`}>
                    {/*{% for i in Object %}*/}
                    <div className={`${commentCSS.card} card border-secondary mb-3`}>
                        <div className="card-header bg-transparent">{/*{{i.6}}*/}</div>
                        <div className="card-body">
                            <p className="card-text">
                                {/*{{i.5}}*/}
                            </p>
                        </div>
                    </div>
                    {/*{% endfor %}*/}
                </div>

            </div>

        </section >
    );
}

export default Comment;