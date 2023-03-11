import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import trackerCSS from "./tracker.module.css";
import fourcss from "./fourcss.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import * as d3Fetch from "d3-fetch";
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Selection from "d3-selection";
import * as d3Axis from "d3-axis";
import * as d3ScaleChromatic from "d3-scale-chromatic";
import * as d3 from "d3";

function Tracker() {
  const [getData, setData] = useState([]);
  const [getPercentageData, setPercentageData] = useState([]);
  const [getCategoryData, setCategoryData] = useState([]);

  const [graphPercentageData, setGraphPercentageData] = useState([]);
  const [graphCategoryData, setGraphCategoryData] = useState([]);

  const [trackers, setTrackers] = useState({
    Category: "Fresh Produce",
    Description: "",
    Quantity: "",
    Qunits: "lb",
    amountToClients: "",
    amountToAFeed: "",
    amountToCompost: "",
    amountToPartnerNetwork: "",
    Email: "",
    Organization: "",
  });

  const quantity = useRef();
  const clients = useRef();
  const animalFeed = useRef();
  const compost = useRef();
  const partnerNetwork = useRef();
  const landFill = useRef();

  const percentClients = useRef();
  const percentAnimalFeed = useRef();
  const percentCompost = useRef();
  const percentPartnerNetwork = useRef();
  const percentLandFill = useRef();
  // console.log(getPercentageData);
  // console.log(getCategoryData);
  // console.log(graphingPercentageData());
  // console.log(graphingCategoryData());

  useEffect(() => {
    fetchData();
    fetchPercentageChartData();
    fetchCategoryChartData();

    // setInterval(calculateLandFillPercent(), 500);
    const interval = setInterval(function () {
      calculateLandFillAndPercentsWrapper();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const percentsPieChartRef = useRef();
  useEffect(() => {
    function percentsPieChart() {
      // d3.select("body").selectAll("svg").remove();
      const width = 500;
      const height = 450;
      const margin = 40;

      const radius = Math.min(width, height) / 2 - margin;

      // const svg = d3.select(percentsPieChartRef.current);

      // svg.selectAll("*").remove();

      // svg
      //   .append("svg")
      //   .attr("width", width)
      //   .attr("height", height)
      //   .append("g")
      //   .attr("transform", `translate(${width / 2},${height / 2})`);

      const svg = d3
        .select(percentsPieChartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      const data = { ...graphPercentageData };

      const dataEntries = Object.entries(data);

      const colorScales = Object.keys(data).reduce((obj, key) => {
        obj[key] = d3.scaleOrdinal().domain([key]).range([d3.schemeDark2[key]]);
        return obj;
      }, {});

      const color = d3
        .scaleOrdinal()
        // .domain(["a", "b", "c", "d", "e", "f", "g", "h"])
        // .domain(Object.keys(data))
        .domain(dataEntries.map((entry) => entry[0]))
        .range(d3.schemeDark2);

      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d[1]);

      const data_ready = pie(Object.entries(data));

      const arc = d3
        .arc()
        .innerRadius(radius * 0.5) // This is the size of the donut hole
        .outerRadius(radius * 0.8);

      const outerArc = d3
        .arc()
        .innerRadius(radius * 0.8)
        .outerRadius(radius * 0.8);

      svg
        .selectAll("allSlices")
        .data(data_ready)
        // .data(d3.entries(data))
        .join("path")
        .attr("d", arc)
        // .attr("fill", (d) => color(d.data[1]))
        .attr("fill", (d) => color(d.data[0]))
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);

      svg
        .selectAll("allPolylines")
        .data(data_ready)
        .join("polyline")
        .attr("stroke", "black")
        .style("fill", "none")
        .attr("stroke-width", 1)
        .attr("points", function (d) {
          const posA = arc.centroid(d); // line insertion in the slice
          const posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
          const posC = outerArc.centroid(d); // Label position = almost the same as posB
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
          posC[0] = radius * 0.8 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
          return [posA, posB, posC];
        });

      svg
        .selectAll("allLabels")
        .data(data_ready)
        .join("text")
        .text((d) => d.data[0])
        .attr("transform", function (d) {
          const pos = outerArc.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          pos[0] = radius * 0.81 * (midangle < Math.PI ? 1 : -1);
          return `translate(${pos})`;
        })
        .style("text-anchor", function (d) {
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midangle < Math.PI ? "start" : "end";
        });

      return () => {
        // svg.remove();
        d3.select("body").selectAll("svg").remove();
        // svg.selectAll("*").remove();
      };
    }

    if (percentsPieChartRef.current) {
      percentsPieChart();
    }
  });

  const categoryPieChartRef = useRef();
  useEffect(() => {
    function categoryPieChart() {
      const width = 500;
      const height = 450;
      const margin = 40;

      const radius = Math.min(width, height) / 2 - margin;

      const svg = d3
        .select(categoryPieChartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      const data = { ...graphCategoryData };

      const dataEntries = Object.entries(data);

      const colorScales = Object.keys(data).reduce((obj, key) => {
        obj[key] = d3.scaleOrdinal().domain([key]).range([d3.schemeDark2[key]]);
        return obj;
      }, {});

      const color = d3
        .scaleOrdinal()
        // .domain(["a", "b", "c", "d", "e", "f", "g", "h"])
        // .domain(Object.keys(data))
        .domain(dataEntries.map((entry) => entry[0]))
        .range(d3.schemeDark2);

      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d[1]);

      const data_ready = pie(Object.entries(data));

      const arc = d3
        .arc()
        .innerRadius(radius * 0.5) // This is the size of the donut hole
        .outerRadius(radius * 0.8);

      const outerArc = d3
        .arc()
        .innerRadius(radius * 0.8)
        .outerRadius(radius * 0.8);

      svg
        .selectAll("allSlices")
        .data(data_ready)
        // .data(d3.entries(data))
        .join("path")
        .attr("d", arc)
        // .attr("fill", (d) => color(d.data[1]))
        .attr("fill", (d) => color(d.data[0]))
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);

      svg
        .selectAll("allPolylines")
        .data(data_ready)
        .join("polyline")
        .attr("stroke", "black")
        .style("fill", "none")
        .attr("stroke-width", 1)
        .attr("points", function (d) {
          const posA = arc.centroid(d); // line insertion in the slice
          const posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
          const posC = outerArc.centroid(d); // Label position = almost the same as posB
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
          posC[0] = radius * 0.8 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
          return [posA, posB, posC];
        });

      svg
        .selectAll("allLabels")
        .data(data_ready)
        .join("text")
        .text((d) => d.data[0])
        .attr("transform", function (d) {
          const pos = outerArc.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          pos[0] = radius * 0.81 * (midangle < Math.PI ? 1 : -1);
          return `translate(${pos})`;
        })
        .style("text-anchor", function (d) {
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midangle < Math.PI ? "start" : "end";
        });
    }

    if (categoryPieChartRef.current) {
      categoryPieChart();
    }
  });

  // function pieChartWrapper() {
  //   percentsPieChart();
  //   // categoryPieChart();
  // }

  async function fetchData() {
    const response = await fetch("http://127.0.0.1:8000/api/trackerPull/");
    const data = await response.json();
    return setData(data);
  }

  async function fetchPercentageChartData() {
    const response = await fetch(
      "http://localhost:8000/api/trackerPercentageSum/"
    );
    const data = await response.json();
    setGraphPercentageData(graphingPercentageData());
    return setPercentageData(data);
  }

  async function fetchCategoryChartData() {
    const response = await fetch(
      "http://localhost:8000/api/trackerCategorySum/"
    );
    const data = await response.json();
    setGraphCategoryData(graphingCategoryData());
    return setCategoryData(data);
  }

  function graphingPercentageData() {
    const data = {
      "Clients %": getPercentageData["percentClients__sum"],
      "Compost %": getPercentageData["percentCompost__sum"],
      "Feed %": getPercentageData["percentAFeed__sum"],
      "Landfill %": getPercentageData["percentLandfill__sum"],
      "Partner Network %": getPercentageData["percentPartNet__sum"],
    };

    return data;
    // return { ...getPercentageData };

    // for (let key in getPercentageData) {
    // data.push(
    //   Object.create({
    //     category: key,
    //     number: getPercentageData[key],
    //   })
    // );
    // }
  }

  function graphingCategoryData() {
    let data = {};

    for (let i = 0; i < getCategoryData.length; i++)
      for (let key in getCategoryData[i]) {
        data[key] = getCategoryData[i][key];
        // let obj = {
        //   category: key,
        //   number: getCategoryData[i][key],
        // };
        // data.push(obj);
      }

    return data;
  }

  function calculateLandFillAndPercentsWrapper() {
    calculateLandFill();
    calculatePercent();
    calculateLandFillPercent();
  }

  function calculateLandFill() {
    const sum =
      Number(clients.current.value) +
      Number(animalFeed.current.value) +
      Number(compost.current.value) +
      Number(partnerNetwork.current.value);
    const diff = Number(quantity.current.value) - Number(sum);

    landFill.current.value = Number(diff);
  }

  function calculateLandFillPercent() {
    const sum =
      Number(percentClients.current.value) +
      Number(percentAnimalFeed.current.value) +
      Number(percentCompost.current.value) +
      Number(percentPartnerNetwork.current.value);

    const diff = 100 - Number(sum);

    percentLandFill.current.value = Number(diff).toFixed(2);
  }

  function calculatePercent() {
    percentClients.current.value = (
      Number(Number(clients.current.value) / Number(quantity.current.value)) *
      100
    ).toFixed(2);
    percentAnimalFeed.current.value = (
      Number(
        Number(animalFeed.current.value) / Number(quantity.current.value)
      ) * 100
    ).toFixed(2);
    percentCompost.current.value = (
      Number(Number(compost.current.value) / Number(quantity.current.value)) *
      100
    ).toFixed(2);
    percentPartnerNetwork.current.value = (
      Number(
        Number(partnerNetwork.current.value) / Number(quantity.current.value)
      ) * 100
    ).toFixed(2);
  }

  // Downloading CSV
  function downloadCSV(csv, filename) {
    const csvFile = new Blob([csv], { type: "text/csv" });
    const downloadLink = document.createElement("a");

    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  // Exporting Table to CSV
  function exportTableToCSV(filename) {
    var csv;
    const rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
      var row = [],
        cols = rows[i].querySelectorAll("td, th");

      for (var j = 0; j < cols.length - 1; j++) row.push(cols[j].innerText);

      csv.push(row.join(","));
    }
    downloadCSV(csv.join("\n"), filename);
  }

  var trackerData = JSON.stringify(trackers);
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

  // const fetchData = async () => {
  //   const response = await fetch("http://127.0.0.1:8000/api/trackerPull/");
  //   const data = await response.json();
  //   return setData(data);
  // };

  // const fetchPercentageChartData = async () => {
  //   const response = await fetch(
  //     "http://localhost:8000/api/trackerPercentageSum/"
  //   );
  //   const data = await response.json();
  //   setGraphPercentageData(graphingPercentageData());
  //   return setPercentageData(data);
  // };

  // const fetchCategoryChartData = async () => {
  //   const response = await fetch(
  //     "http://localhost:8000/api/trackerCategorySum/"
  //   );
  //   const data = await response.json();
  //   setGraphCategoryData(graphingCategoryData());
  //   return setCategoryData(data);
  // };

  {
    if (
      new Date().getTime() < localStorage.getItem("expiry") &&
      localStorage.roles
    ) {
      return (
        <div className="container p-2">
          <p>
            <strong>Welcome, {localStorage.getItem("firstname")}!</strong>
          </p>
          <div className="card">
            <div className="card-header">
              <h3>Enter tracker data:</h3>
            </div>
            <div className="card-body">
              <div id="form-wrapper">
                <div className="tracker-data-entry" id="tracker">
                  <Form.Group>
                    {/* {% csrf_token %} */}
                    <div className="row">
                      <div className="col-md-auto">
                        <label htmlFor="category">Category</label>
                        <br />
                        <select
                          className="form-select"
                          id="category"
                          name="category"
                          onChange={(event) => {
                            setTrackers({
                              ...trackers,
                              Category: event.target.value,
                            });
                          }}
                        >
                          <option selected>Fresh Produce</option>
                          <option>Meat</option>
                          <option>Canned Food</option>
                          <option>Bread</option>
                          <option>Dairy</option>
                          <option>Reclaimed</option>
                        </select>
                      </div>
                      <div className="col-md-auto">
                        <label htmlFor="description">Description</label>
                        <br />
                        <input
                          type="text"
                          id="description"
                          className={`form-control input-text ${trackerCSS["customised-input"]}`}
                          placeholder="Description"
                          name="description"
                          onChange={(event) => {
                            setTrackers({
                              ...trackers,
                              Description: event.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="col-md-auto">
                        <label htmlFor="quantity">Quantity</label>
                        <br />
                        <input
                          type={`text`}
                          id="quantity"
                          className={`form-control input-text ${trackerCSS["customised-input"]}`}
                          placeholder="Quantity"
                          name="quantity"
                          ref={quantity}
                          onKeyUp={calculateLandFillAndPercentsWrapper}
                          onChange={(event) => {
                            setTrackers({
                              ...trackers,
                              Quantity: event.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="col-md-auto">
                        <label htmlFor="qunits">Units</label>
                        <br />
                        <select
                          className="form-select"
                          id="qunits"
                          name="qunits"
                          onChange={(event) => {
                            setTrackers({
                              ...trackers,
                              Qunits: event.target.value,
                            });
                          }}
                        >
                          <option selected>lbs</option>
                          <option>kgs</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <div className="row">
                          <div className="col-auto">
                            <label htmlFor="amount">Amount</label>
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-input"]}`}
                              id="clients"
                              name="clients"
                              ref={clients}
                              min={0}
                              // style={{ width: "10em" }}
                              onKeyUp={calculateLandFillAndPercentsWrapper}
                              // onkeyup="calculateLandfill(); calculatePercent()
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  amountToClients: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-input"]}`}
                              id="animalFeed"
                              name="animalFeed"
                              ref={animalFeed}
                              min={0}
                              onKeyUp={calculateLandFillAndPercentsWrapper}
                              // onkeyup="calculateLandfill(); calculatePercent()"
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  amountToAFeed: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-input"]}`}
                              id="compost"
                              name="compost"
                              ref={compost}
                              min={0}
                              onKeyUp={calculateLandFillAndPercentsWrapper}
                              // onkeyup="calculateLandfill(); calculatePercent()"
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  amountToCompost: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-input"]}`}
                              id="partnerNetwork"
                              name="partnerNetwork"
                              ref={partnerNetwork}
                              min={0}
                              onKeyUp={calculateLandFillAndPercentsWrapper}
                              // onKeyUp={() => {calculateLandfill(); calculatePercent()}}
                              // onkeyup="calculateLandfill(); calculatePercent()"
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  amountToPartnerNetwork: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-input"]}`}
                              id="landFill"
                              name="landFill"
                              ref={landFill}
                              min={0}
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  amountToLandfill: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-auto">
                            <label htmlFor="percent">% Diverted to:</label>
                            <br />
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-smaller-input"]}`}
                              id="percentClients"
                              name="percentClients"
                              ref={percentClients}
                              min={0}
                              value={0}
                              max={100}
                              onLoad={calculateLandFillPercent}
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  percentClients: event.target.value,
                                });
                              }}
                              // onLoad={() => calculateLandfillPercent()}
                              // onload="calculateLandfillPercent()"
                              readonly
                            />
                          </div>
                          <div className="col d-flex align-items-center">
                            Clients
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-smaller-input"]}`}
                              id="percentAnimalFeed"
                              name="percentAnimalFeed"
                              ref={percentAnimalFeed}
                              min={0}
                              value={0}
                              max={100}
                              onLoad={calculateLandFillPercent}
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  percentAFeed: event.target.value,
                                });
                              }}
                              // onLoad={() => calculateLandfillPercent()}
                              // onload="calculateLandfillPercent()"
                              readonly
                            />
                          </div>
                          <div className="col d-flex align-items-center">
                            Animal Feed
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-smaller-input"]}`}
                              id="percentCompost"
                              name="percentCompost"
                              ref={percentCompost}
                              min={0}
                              value={0}
                              max={100}
                              onLoad={calculateLandFillPercent}
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  percentCompost: event.target.value,
                                });
                              }}
                              // onLoad={() => calculateLandfillPercent()}
                              // onload="calculateLandfillPercent()"
                              readonly
                            />
                          </div>
                          <div className="col d-flex align-items-center">
                            Compost / Fertilizer
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-smaller-input"]}`}
                              id="percentPartnerNetwork"
                              name="percentPartnerNetwork"
                              ref={percentPartnerNetwork}
                              min={0}
                              value={0}
                              max={100}
                              onLoad={calculateLandFillPercent}
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  percentPartNet: event.target.value,
                                });
                              }}
                              // onLoad={() => calculateLandfillPercent()}
                              // onLoad="calculateLandfillPercent()"
                              readonly
                            />
                          </div>
                          <div className="col d-flex align-items-center">
                            Partner Network
                          </div>
                        </div>
                        <div className="row pb-2">
                          <div className="col-auto">
                            <input
                              type="number"
                              step="any"
                              className={`form-control ${trackerCSS["customised-smaller-input"]}`}
                              id="percentLandFill"
                              name="percentLandFill"
                              ref={percentLandFill}
                              value={100}
                              onChange={(event) => {
                                setTrackers({
                                  ...trackers,
                                  percentLandfill: event.target.value,
                                });
                              }}
                              readonly
                            />
                          </div>
                          <div className="col d-flex align-items-center">
                            Landfill
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2">
                      <div className="d-flex justify-content-start">
                        <Button
                          variant="outline-success"
                          className={`${trackerCSS["save"]} btn btn-outline-success`}
                          id="submit"
                          onClick={(e) => {
                            axios
                              .post(
                                "http://127.0.0.1:8000/api/trackerInsert/",
                                {
                                  Category: trackers.Category,
                                  Description: trackers.Description,
                                  Quantity: trackers.Quantity,
                                  Qunits: trackers.Qunits,
                                  amountToClients: trackers.amountToClients,
                                  amountToAFeed: trackers.amountToAFeed,
                                  amountToCompost: trackers.amountToCompost,
                                  amountToPartNet:
                                    trackers.amountToPartnerNetwork,
                                  amountToLandfill:
                                    document.getElementById("landFill").value,
                                  percentClients:
                                    document.getElementById("percentClients")
                                      .value,
                                  percentAFeed:
                                    document.getElementById("percentAnimalFeed")
                                      .value,
                                  percentCompost:
                                    document.getElementById("percentCompost")
                                      .value,
                                  percentPartNet: document.getElementById(
                                    "percentPartnerNetwork"
                                  ).value,
                                  percentLandfill:
                                    document.getElementById("percentLandFill")
                                      .value,
                                  Email: localStorage.getItem("email"),
                                  Organization:
                                    localStorage.getItem("organization"),
                                },
                                {
                                  headers: {
                                    "Content-type": "application/json",
                                  },
                                }
                              )
                              .then((response) => {
                                if (response.status == 201) {
                                  window.alert(
                                    "Your form has been submitted successfully"
                                  );
                                  fetchData();
                                  fetchPercentageChartData();
                                  fetchCategoryChartData();
                                }
                              })
                              .catch((err) => console.warn(err));
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div
            className={`pie-chart-percents trackerCSS['pie-chart-percents']`}
            // onLoad={pieChartWrapper}
            id="pie-chart-percents"
            ref={percentsPieChartRef}
          ></div>

          <div
            className={`pie-chart-category trackerCSS['pie-chart-category']`}
            // onLoad={pieChartWrapper}
            id="pie-chart-category"
            ref={categoryPieChartRef}
          ></div>
          <br />
          <br />
          <section id="section">
            <div className="card">
              <div className={`${trackerCSS["card-header"]} card-header`}>
                <h3>Database</h3>
                <Button
                  type="button"
                  variant="outline-success"
                  className="btn btn-outline-success"
                  onClick={function () {
                    exportTableToCSV("data.csv");
                  }}
                  // onClick={() => exportTableToCSV("data.csv")}
                >
                  Export CSV
                </Button>
              </div>
              <div className="card-body">
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Units</th>
                      <th>Clients</th>
                      <th>Animal Feed</th>
                      <th>Compost</th>
                      <th>Partner Network</th>
                      <th>Landfill</th>
                      <th>Date Time</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {getData &&
                      getData.length > 0 &&
                      getData.map((userObj) => (
                        <tr>
                          <td>{userObj.Category}</td>
                          <td>{userObj.Description}</td>
                          <td>{userObj.Quantity}</td>
                          <td>{userObj.Qunits}</td>
                          <td>{userObj.percentClients}</td>
                          <td>{userObj.percentAFeed}</td>
                          <td>{userObj.percentCompost}</td>
                          <td>{userObj.percentPartNet}</td>
                          <td>{userObj.percentLandfill}</td>
                          <td>{userObj.date_time}</td>
                          <td>
                            <div>
                              <Button
                                variant="danger"
                                className="btn btn-danger"
                                name="field"
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </section>

          <br />
        </div>
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
              <h3 className=" heading3 fadeIn">
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
export default Tracker;
