import React, { useState, useEffect, useRef } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./network.css";
import fourcss from "./fourcss.css";
import axios, { all } from "axios";
import { local } from "d3-selection";
import * as d3 from "d3";

var filter = "Product";
var time_filter = "http://localhost:8000/api/networkPull/";

function LineChart({ data }) {
  const chartRef = useRef(null);
  const margin = { top: 20, right: 30, bottom: 10, left: 50 };
  const width = 500;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3.select(chartRef.current).select("svg");
  
    if (data) {
      const xScale = d3
      .scalePoint()
      .rangeRound([0, width])
      .padding(0.2)
      .domain(data.map((d) => d.category));

    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, (d) => Math.max(d.ClientsA, d.ClientB)) + 20]);

    const line = d3
      .line()
      .x((d) => xScale(d.category))
      .y((d) => yScale(d.ClientsA));

      svg.select(".blue-line").remove(); // remove-existing-blue-line-- ls
      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 1.5)
        .attr("d", line)
        .classed("blue-line", true);
  
      const line2 = d3.line()
        .x(d => xScale(d.category))
        .y(d => yScale(d.ClientB));
  
      svg.select(".red-line").remove(); // Remove existing red line
      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr("d", line2)
        .classed("red-line", true);
  
      const xAxis = d3.axisBottom(xScale);
  
      svg.select(".x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);
  
      const yAxis = d3.axisLeft(yScale);
  
      svg
         .select(".y-axis")
         .attr("transform", `translate(${30}, 0)`)
         .call(yAxis);
    } else {
      // Remove existing lines when data is null or undefined
      svg.select(".blue-line").remove();
      svg.select(".red-line").remove();
    }
  
  }, [data, height, width]);
  

  return (
    <div ref={chartRef}>
      <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
}

// searchBar function
function SearchBar() {


  const [getData, setData] = useState([]);
  const [getSharedData, setSharedData] = useState([]);
  const [getGraphData, setGraphData] = useState([]);

  //graph stuff- Jordan's Work- more work will be implemented eventually


  

  const fetchSharedData = async () => {
    axios
      .post(
        "http://localhost:8000/api/postsPullShared/",
        {
          Email: localStorage.getItem("email"),
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          setSharedData(response.data);
        }
      })
      .catch((err) => console.warn(err));
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/networkPull/");
    const data = await response.json();
    return setData(data);
  };

  const fetchDataSharing = async () => {
    const response = await fetch(
      "http://localhost:8000/api/networkPullSharing/"
    );
    const data = await response.json();
    return setData(data);
  };

  const fetchDataReceiving = async () => {
    const response = await fetch(
      "http://localhost:8000/api/networkPullReceiving/"
    );
    const data = await response.json();
    return setData(data);
  };

  const fetchDataCreator = async () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/networkPullCreator/",
        {
          Email: localStorage.getItem("email"),
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          setData(response.data);
        }
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    fetchData();
    fetchSharedData();
  }, []);

  const [posts, setPosts] = useState({
    product: "",
    Type: "",
    Units: "",
    Quantity: "",
    Description: "",
    Email: "",
  });

  const [showModal, setShowModal] = useState(false);
  posts.Quantity = parseInt(posts.Quantity);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  if (
    new Date().getTime() > localStorage.getItem("expiry") &&
    localStorage.roles
  ) {
    const response = window.confirm(
      "Your session has expired. Do you still want to be logged in?"
    );

    if (response) {
      localStorage.removeItem("expiry");
      const date = new Date().setHours(new Date().getHours() + 1);
      localStorage.setItem("expiry", date);
    }
  }

  {
    if (
      new Date().getTime() < localStorage.getItem("expiry") &&
      localStorage.roles
    ) {
      return (
        <>
          <div className="share_box container-md col-md-auto">
            <div className="row">
              <div className="col">
                <h3>Shared with:</h3>
                <div className="row">
                  <div className="col-6">
                    <h6>
                      <strong>Email</strong>
                    </h6>
                  </div>
                  <div className="col-4">
                    <h6>
                      <strong>Graph</strong>
                    </h6>
                  </div>
                </div>
                {getSharedData &&
                  getSharedData.length > 0 &&
                  getSharedData.map((sharedObj) => (
                    <div className="row share_list">
                      <div className="col-6 email">{sharedObj.shared_with}</div>
                      <div className="col-4">
                        <button
                          type="button"
                          className="graph_btn btn btn-outline-primary"
                          onClick={(event) => {
                        
                            axios
                              .post(
                                "http://localhost:8000/api/NetworkGraphing/",
                                {
                                  user_email: localStorage.getItem("email"),
                                  compare_email: sharedObj.shared_with,
                                },
                                {
                                  headers: {
                                    "Content-type": "application/json",
                                  },
                                }
                              )
                              .then((response) => {
                                if (response.status == 200) {
                                  if (
                                    response.data["comparee"][
                                    "percentClients__sum"
                                    ] == null
                                  ) {
                                    alert(
                                      "this user is a non registered user (or the user has no data and no data) is available to compare, only user data displayed in graph"
                                    );
                                  }
                                  const data = [
                                    { category: "Clients", ClientsA: response.data['user']['percentClients__sum'], ClientB: response.data['comparee']['percentClients__sum'] },
                                    { category: "Animal_Feed", ClientsA: response.data['user']['percentAFeed__sum'], ClientB: response.data['comparee']['percentAFeed__sum'] },
                                    { category: "Partner_Network", ClientsA: response.data['user']['percentPartNet__sum'], ClientB: response.data['comparee']['percentPartNet__sum'] },
                                    { category: "Landfill", ClientsA: response.data['user']['percentLandfill__sum'], ClientB: response.data['comparee']['percentLandfill__sum'] },
                                  ];
                                  
                        
                                  setGraphData(data);
                                  console.log(getGraphData)
                                  LineChart(getGraphData)

                                }
                              })
                              .catch((err) => console.warn(err));
                          }}
                        >
                          Compare Data
                        </button>
                      </div>
                    </div>  
                  ))}
              </div>
              <div className="col graph_box chart chart-container">
              <LineChart data={getGraphData}/>
              </div>
            </div>
          </div>
          <div className="container-lg col-md-auto">
            <div className="container-fluid">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(event) => {
                    axios
                      .post(
                        "http://127.0.0.1:8000/api/networkSearch/",
                        {
                          filter: filter,
                          input: event.target.value,
                        },
                        {
                          headers: {
                            "Content-type": "application/json",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.status == 200) {
                          setData(response.data);
                        }
                      })
                      .catch((err) => console.warn(err));
                  }}
                />
              </div>

              <div className="select">
                <select
                  name="format"
                  className="form-select"
                  onChange={(event) => {
                    filter = event.target.value;
                  }}
                >
                  <option value="Email">Filter by: Email</option>
                  <option value="Product" selected>
                    Filter by: Product
                  </option>
                </select>
              </div>

              <div className="select">
                <select
                  name="format"
                  className="form-select"
                  onChange={async (event) => {
                    if (event.target.value == "default") {
                      time_filter = "http://localhost:8000/api/networkPull/";
                    }
                    if (event.target.value == "Past Hour") {
                      time_filter = "http://localhost:8000/api/Past_Hour/";
                    } else if (event.target.value == "Past day") {
                      time_filter = "http://localhost:8000/api/Past_Day/";
                    } else if (event.target.value == "Past week") {
                      time_filter = "http://localhost:8000/api/Past_Week/";
                    } else if (event.target.value == "Past month") {
                      time_filter = "http://localhost:8000/api/Past_Month/";
                    } else if (event.target.value == "Past 6 months") {
                      time_filter = "http://localhost:8000/api/Past_6Months/";
                    }

                    const response = await fetch(time_filter);
                    const data = await response.json();
                    setData(data);
                    console.log(getData);
                  }}
                >
                  <option value="default" selected>
                    Filter By Time
                  </option>
                  <option value="Past Hour">Past Hour</option>
                  <option value="Past day">Past day</option>
                  <option value="Past week">Past week</option>
                  <option value="Past month">Past month</option>
                  <option value="Past 6 months">Past 6 months</option>
                </select>
              </div>

              <div>
                <Button
                  type="Button"
                  className="create_btn btn btn-success"
                  onClick={handleShow}
                >
                  Create Post
                </Button>
              </div>
            </div>

            <div className="container-md p-0">
              <div className="tab container-sm">
                <Button
                  className="tablinks btn btn-light"
                  onClick={(e) => {
                    {
                      fetchData();
                    }
                  }}
                  id="defaultOpen"
                >
                  💬 All Posts
                </Button>
                <br />
                <Button
                  className="tablinks btn btn-light"
                  onClick={(e) => {
                    {
                      fetchDataSharing();
                    }
                  }}
                >
                  📣 Sharing
                </Button>
                <br />
                <Button
                  className="tablinks btn btn-light"
                  onClick={(e) => {
                    {
                      fetchDataReceiving();
                    }
                  }}
                >
                  💬 Receiving
                </Button>
                <br />
                <Button
                  className="tablinks btn btn-light"
                  onClick={(e) => {
                    {
                      fetchDataCreator();
                    }
                  }}
                >
                  💬 My Posts
                </Button>
                <br />
              </div>

              <div id="disc">
                {getData &&
                  getData.length > 0 &&
                  getData
                    .map((userObj) => (
                      <div class="card">
                        <h5 class="card-header m-0">
                          <span>
                            {userObj.product} - {userObj.Quantity}{" "}
                            {userObj.Units}
                          </span>

                          {(() => {
                            if (
                              userObj.Email == localStorage.getItem("email") &&
                              userObj.Type == "Sharing"
                            ) {
                              return (
                                <select
                                  id="status"
                                  onChange={(event) => {
                                    if (event.target.value == "closed") {
                                      var a = prompt(
                                        "enter the email of the person you shared your products with"
                                      );
                                      if (a === "") {
                                        alert(
                                          "value of the email cannot be empty, please try again"
                                        );
                                        document.getElementById(
                                          "status"
                                        ).value = "open";
                                      } else {
                                        axios
                                          .put(
                                            `http://127.0.0.1:8000/api/networkUpdate/${userObj.id}`,

                                            {
                                              shared_with: a,
                                              product: userObj.product,
                                              Quantity: userObj.Quantity,
                                              Units: userObj.Units,
                                            },
                                            {
                                              headers: {
                                                "Content-type":
                                                  "application/json",
                                              },
                                            }
                                          )
                                          .then((response) => {
                                            if (response.status == 201) {
                                              window.alert(
                                                "post status successfully changed to closed"
                                              );
                                            }

                                            fetchSharedData();
                                            fetchData();
                                            fetchDataCreator();
                                            fetchDataReceiving();
                                            fetchDataSharing();
                                          })
                                          .catch((err) => console.warn(err));
                                      }
                                    }
                                  }}
                                >
                                  {(() => {
                                    if (userObj.state == "open") {
                                      // document.getElementById('status').style.borderColor = 'green';
                                      return (
                                        <>
                                          <option selected> open </option>
                                          <option> closed </option>
                                        </>
                                      );
                                    } else {
                                      // document.getElementById('status').style.borderColor = 'red';
                                      return (
                                        <>
                                          <option> open </option>
                                          <option selected> closed </option>
                                        </>
                                      );
                                    }
                                  })()}
                                </select>
                              );
                            } else {
                            }
                          })()}
                        </h5>
                        <div class="card-body">
                          <h6 class="card-text">{userObj.Description}</h6>
                          {/* <a href='"+ url_mask + "' id='postbutton' class='btn btn-outline-success'>Comment</a>*/}
                          <p class="text-success"> {userObj.Type} </p>

                          <div className="contact_me">
                            <small>
                              <strong>Contact email: </strong>
                              {userObj.Email} <br />
                              Posted on:{" "}
                              {new Date(userObj.date_time).toLocaleString(
                                "default",
                                {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}{" "}
                              at{" "}
                              {new Date(userObj.date_time).toLocaleTimeString(
                                "default",
                                { hour: "2-digit", minute: "2-digit" }
                              )}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))
                    .reverse()}
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
                    <input
                      type="text"
                      className="form-control"
                      id="product"
                      placeholder="Enter product name"
                      onChange={(event) => {
                        setPosts({ ...posts, product: event.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="number"
                      step="any"
                      className="form-control"
                      id="quantity"
                      placeholder="Enter quantity"
                      onChange={(event) => {
                        setPosts({ ...posts, Quantity: event.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="units">Units</label>
                    <select
                      className="form-control"
                      id="units"
                      onChange={(event) => {
                        setPosts({ ...posts, Units: event.target.value });
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
                    <textarea
                      className="form-control"
                      id="desc"
                      rows="3"
                      onChange={(event) => {
                        setPosts({ ...posts, Description: event.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select
                      className="form-control"
                      id="type"
                      onChange={(event) => {
                        setPosts({ ...posts, Type: event.target.value });
                      }}
                    >
                      <option>Choose an option</option>
                      <option>Sharing</option>
                      <option>Receiving</option>
                    </select>
                  </div>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      axios
                        .post(
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
                            },
                          }
                        )
                        .then((response) => {
                          if (response.status == 201) {
                            handleClose(e); //Close modal
                            //window.alert("Your form has been submitted succesfully")
                            fetchData();
                          }
                        })
                        .catch((err) => console.warn(err));
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
    } else if (
      new Date().getTime() > localStorage.getItem("expiry") &&
      !localStorage.roles
    ) {
      return (
        <section>
          <div className="flex-container">
            <div className="text-center">
              <h1 className="heading1">
                <span className="fade-in" id="digit1">
                  4
                </span>
                <span className="fade-in" id="digit2">
                  0
                </span>
                <span className="fade-in" id="digit3">
                  4
                </span>
              </h1>
              <h3 className="heading3 fadeIn">
                YOU MUST LOGIN TO VIEW THIS PAGE
              </h3>
              <a href="/login">
                <Button type="button" class="btn btn-primary " name="button">
                  Login
                </Button>
              </a>
            </div>
          </div>

        </section>

      );
    }
  }
}

export default SearchBar;
