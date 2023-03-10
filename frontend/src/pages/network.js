import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './network.css';
import fourcss from './fourcss.css';
import axios, { all } from 'axios';
import { local } from 'd3-selection';

var filter = 'Product';
function SearchBar() {

  const [getData, setData] = useState([]);
  const [getSharedData, setSharedData] = useState([]);
  const [getGraphData, setGraphData] = useState([]);
  const [getNameData, setNameData] = useState([]);

  const fetchSharedData = async () => {
    axios.post(
      "http://localhost:8000/api/postsPullShared/",
      {
        Email: localStorage.getItem('email')
      },
      {
        headers: {
          "Content-type": "application/json",
        }
      }
    )
      .then(response => {
        if (response.status == 200) {
          setSharedData(response.data);
        }
      })
      .catch(err => console.warn(err));
  }

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

  const fetchDataCreator = async () => {
    axios.post(
      "http://127.0.0.1:8000/api/networkPullCreator/",
      {
        Email: localStorage.getItem('email')
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
        }
      })
      .catch(err => console.warn(err));
  }


  useEffect(() => {
    fetchData();
    fetchSharedData();
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


  if (new Date().getTime() > localStorage.getItem('expiry') && (localStorage.roles)) {
    const response = window.confirm("Your session has expired. Do you still want to be logged in?");

    if (response) {
      localStorage.removeItem('expiry');
      const date = new Date().setHours(new Date().getHours() + 1);
      localStorage.setItem('expiry', date)
    }
  }
  {
    if (new Date().getTime() < localStorage.getItem('expiry') && localStorage.roles) {
      return (
        <>
          <div className="container-md col-md-auto table-responsive-sm">
            <h3>Shared with:</h3>
            <table class="table table-striped table-bordered table-hover table-sm">
              <tr>
                <th>Email</th>
                <th>Graph</th>
              </tr>
              {getSharedData && getSharedData.length > 0 && getSharedData.map((sharedObj) => (
                <tr>
                  <td>{sharedObj.shared_with}</td>
                  <td><Button variant='outline-primary' className='btn btn-outline-primary' onClick={(event) => {
                    axios.post(
                      "http://localhost:8000/api/NetworkGraphing/",
                      {
                        user_email: localStorage.getItem('email'),
                        compare_email: sharedObj.shared_with
                      },
                      {
                        headers: {
                          "Content-type": "application/json",
                        }
                      }
                    )
                      .then(response => {
                        if (response.status == 200) {
                          setGraphData(response.data);
                        }
                      })
                      .catch(err => console.warn(err));
                  }}>Compare Data</Button></td>
                </tr>
              ))}
            </table>
          </div>
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
                <Button className="tablinks btn btn-light" onClick={(e) => { { fetchDataCreator() } }}>💬 My Posts</Button><br />
              </div>

              <div id="disc">
                {getData && getData.length > 0 && getData.map((userObj) => (

                    axios.post(
                      "http://localhost:8000/api/postsPullName/",
                      {
                        Email: userObj.Email
                      },
                      {
                        headers: {
                          "Content-type": "application/json",
                        }
                      }
                    )
                      .then(response => {
                        if (response.status == 200) {
                          setNameData(response.data);
                        }
                      })
                      .catch(err => console.warn(err));
                  
                  <div class='card'>
                    <h5 class='card-header m-0'>
                      <span>{userObj.product} - {userObj.Quantity} {userObj.Units}</span>

                      {(() => {
                        if (userObj.Email == localStorage.getItem('email') && userObj.Type == 'Sharing') {
                          return (
                            <select id='status'

                              onChange={(event) => {
                                if (event.target.value == 'closed') {
                                  var a = prompt('enter the email of the person you shared your products with');
                                  if (a === '') {
                                    alert('value of the email cannot be empty, please try again')
                                    document.getElementById('status').value = 'open'
                                  } else {

                                    axios.put(
                                      `http://127.0.0.1:8000/api/networkUpdate/${userObj.id}`,


                                      {
                                        "shared_with": a,
                                        "product": userObj.product,
                                        "Quantity": userObj.Quantity,
                                        "Units": userObj.Units
                                      },
                                      {
                                        headers: {
                                          "Content-type": "application/json",
                                        }
                                      }

                                    )
                                      .then(response => {
                                        if (response.status == 201) {
                                          window.alert('post status successfully changed to closed');
                                        }

                                        fetchSharedData();
                                        fetchData();
                                        fetchDataCreator();
                                        fetchDataReceiving();
                                        fetchDataSharing();

                                      })
                                      .catch(err => console.warn(err));

                                  }
                                }
                              }}

                            >
                              {(() => {
                                if (userObj.state == 'open') {
                                  // document.getElementById('status').style.borderColor = 'green';
                                  return (
                                    <><option selected> open </option><option> closed </option></>
                                  )
                                } else {
                                  // document.getElementById('status').style.borderColor = 'red';
                                  return (
                                    <><option> open </option><option selected> closed </option></>
                                  )
                                }
                              })()}
                            </select>
                          )
                        } else { }
                      })()}
                    </h5>
                    <div class='card-body'>
                      <h6 class='card-text'>
                        {userObj.Description}
                      </h6>
                      {/* <a href='"+ url_mask + "' id='postbutton' class='btn btn-outline-success'>Comment</a>*/}
                      {getNameData && getNameData.length > 0 && getNameData.map((nameObj) => (
                        
                        <p><small>Posted By: {nameObj.FirstName} {nameObj.LastName} </small> </p>
                      ))}
                      <p><small>Contact: {userObj.Email}</small></p>

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
                          Email: localStorage.getItem("email"),
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
      )
    }
    else if (new Date().getTime() > localStorage.getItem('expiry') && !(localStorage.roles)) {
      return (
        <section>
          <div className="flex-container">
            <div className="text-center">
              <h1 className='heading1'>
                <span className="fade-in" id="digit1">4</span>
                <span className="fade-in" id="digit2">0</span>
                <span className="fade-in" id="digit3">4</span>
              </h1>
              <h3 className="heading3 fadeIn">YOU MUST LOGIN TO VIEW THIS PAGE</h3>
              <a href='/login'><Button type="button" class='btn btn-primary ' name="button">Login</Button></a>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default SearchBar;

