import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './network.css';
import axios, { all } from 'axios';
var filter = 'Product';

function PublicSharing() {
    const [getData, setData] = useState([]);
  

    const fetchData = async () => {
        const response = await fetch("http://localhost:8000/api/networkPull/");
        const data = await response.json();
        return setData(data);
      }
    
      const fetchDataSharing = async () => {
        const response = await fetch("http://localhost:8000/api/networkPullSharing/");
        const data = await response.json();
        return setData(data);
      }
    
      const fetchDataReceiving = async () => {
        const response = await fetch("http://localhost:8000/api/networkPullReceiving/");
        const data = await response.json();
        return setData(data);
      }
    
    
      useEffect(() => {
        fetchData();
      }, [])
    
      const [posts, setPosts] = useState({
        product: '',
        Type: '',
        Units: '',
        Quantity: '',
        Description: '',
        Email: ''
      });
    
      const [showModal, setShowModal] = useState(false);
      posts.Quantity = parseInt(posts.Quantity)
      const handleClose = () => setShowModal(false);
      const handleShow = () => setShowModal(true);
    
    
     return (
        <>
    
        <div className="container-lg col-md-auto">
            <div className="container-fluid">
              <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                  onChange={(event) => {
                    axios.post(
                      "http://127.0.0.1:8000/api/networkSearch/",
                      {
                        filter: filter,
                        input: event.target.value
                      },
                      {
                        headers: {
                          "Content-type": "application/json",
                        }
                      }
                    )
                      .then(response => {
                        if (response.status == 200) {
                          setData(response.data);
                          console.log(response.data)
                        }
                      })
                      .catch(err => console.warn(err));
                  }}
                />
              </div>

              <div className="select">
                <select name="format" className="form-select"
                  onChange={(event) => {
                    filter = event.target.value;
                  }}
                >
                  <option value="Email" >Filter by: Email</option>
                  <option value="Product" selected>Filter by: Product</option>
                </select>
              </div>

              <div className="select">
                <select name="format" className="form-select">
                  <option selected disabled>Sort By: Latest Activity</option>
                  <option value="pdf">Latest activity</option>
                  <option value="txt">Date Created</option>
                  <option value="epub">Top: Past day</option>
                  <option value="fb2">Top: Past week</option>
                  <option value="mobi">Top: Past month</option>
                </select>
              </div>

              <div>
                <Button type="Button" className="create_btn btn btn-success" onClick={handleShow}>Create Post</Button>
              </div>
            </div>

            <div className="container-md">
              <div className="tab container-sm">
                <Button className="tablinks btn btn-light" onClick={(e) => { { fetchData() } }} id="defaultOpen">
                  💬 All Posts</Button><br />
                <Button className="tablinks btn btn-light" onClick={(e) => { { fetchDataSharing() } }}  >📣 Sharing</Button><br />
                <Button className="tablinks btn btn-light" onClick={(e) => { { fetchDataReceiving() } }}>💬 Receiving</Button><br />
              </div>

              <div id="disc">
                {getData && getData.length > 0 && getData.map((userObj) => (
                  <div class='card'>
                    <h5 class='card-header m-0'>
                      <span>{userObj.product} - {userObj.Quantity} {userObj.Units}</span>
                    </h5>
                   
                    <div class='card-body'>
                      <h6 class='card-text'>
                        {userObj.Description}
                      </h6>
                      {/* <a href='"+ url_mask + "' id='postbutton' class='btn btn-outline-success'>Comment</a>*/}
                      <p><small>Posted By: <br /> Contact: {userObj.Email}</small></p>
                      <p class='text-success'> {userObj.Type} </p>

                    </div>
                  </div>
                )).reverse()}
              </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <div className="form-group">
                    <label htmlFor="product">Product</label>
                    <input type="text" className="form-control" id="product" placeholder="Enter product name"
                      onChange={(event) => {
                        setPosts({ ...posts, product: event.target.value })
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter your Email"
                      onChange={(event) => {
                        setPosts({ ...posts, Email: event.target.value })
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" step="any" className="form-control" id="quantity" placeholder="Enter quantity"
                      onChange={(event) => {
                        setPosts({ ...posts, Quantity: event.target.value })
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="units">Units</label>
                    <select className="form-control" id="units"
                      onChange={(event) => {
                        setPosts({ ...posts, Units: event.target.value })
                      }}
                    >
                      <option>Choose an option</option>
                      <option>lbs</option>
                      <option>kgs</option>
                    </select>
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea className="form-control" id="desc" rows="3"
                      onChange={(event) => {
                        setPosts({ ...posts, Description: event.target.value })
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select className="form-control" id="type"
                      onChange={(event) => {
                        setPosts({ ...posts, Type: event.target.value })
                      }}
                    >
                      <option>Choose an option</option>
                      <option>Sharing</option>
                      <option>Receiving</option>
                    </select>
                  </div>

                  <Button variant="primary" type="submit"
                    onClick={(e) => {
                      axios.post(
                        "http://127.0.0.1:8000/api/networkInsert/",
                        {
                          product: posts.product,
                          Type: posts.Type,
                          Quantity: posts.Quantity,
                          Units: posts.Units,
                          Description: posts.Description,
                          Email: posts.Email,
                        },
                        {
                          headers: {
                            "Content-type": "application/json",
                          }
                        }
                      )
                        .then(response => {
                          if (response.status == 201) {
                            handleClose(e); //Close modal
                            //window.alert("Your form has been submitted succesfully")
                            fetchData();
                          }
                        })
                        .catch(err => console.warn(err));
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </>
     );
}

export default PublicSharing;