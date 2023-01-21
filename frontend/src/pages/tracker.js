import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import trackerCSS from "./tracker.module.css";

import * as d3Fetch from "d3-fetch";
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Selection from "d3-selection";
import * as d3Axis from "d3-axis";
import * as d3ScaleChromatic from "d3-scale-chromatic";

function pieChart() {
  let penetrate = document.getElementById("penetrate");
  let h3 = document.createElement("h3");
  h3.innerText = "Database Visuals";
  penetrate.appendChild(h3);

  var mydata = JSON.parse(document.getElementById("json").textContent);
  mydata = JSON.parse(mydata);
  mydata = JSON.parse(JSON.stringify(mydata));
  mydata.forEach((val) => console.log(val.Category)); //print by field
  console.log(mydata); // print whole object

  var sum = mydata.reduce((n, { Quantity }) => n + Quantity, 0);
  console.log(sum);

  var result = Array.from(
    mydata.reduce(
      (acc, obj) =>
        Object.keys(obj).reduce(
          (acc, key) =>
            typeof obj[key] == "number"
              ? acc.set(key, (acc.get(key) || []).concat(obj[key]))
              : acc,
          acc
        ),
      new Map()
    ),
    ([name, values]) => ({
      name,
      average: (values.reduce((a, b) => a + b) / sum) * 100,
    })
  );
  console.log(result);

  let mycategory = mydata[0].Category;
  let myclients = result[1].average.toFixed(2);
  let myfeeds = result[2].average.toFixed(2);
  let mycompost = result[3].average.toFixed(2);
  let mypartners = result[4].average.toFixed(2);
  let mylandfill = result[5].average.toFixed(2);

  let thedata = [
    { category: "Clients", number: myclients },
    { category: "Animal Feed", number: myfeeds },
    { category: "Compost / Fertilizer", number: mycompost },
    { category: "Partner Network", number: mypartners },
    { category: "Landfill", number: mylandfill },
  ];

  let width = 750,
    height = 500;

  let colors = d3Scale.scaleOrdinal(d3ScaleChromatic.schemeDark2);

  let svg = d3Selection
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#e7f5e4");

  let data = d3Shape
    .pie()
    .sort(null)
    .value(function (d) {
      return d.number;
    })(thedata);

  let segments = d3Shape
    .arc()
    .innerRadius(0)
    .outerRadius(200)
    .padAngle(0.05)
    .padRadius(50);

  let sections = svg
    .append("g")
    .attr("transform", "translate(250, 250)")
    .selectAll("path")
    .data(data);

  sections
    .enter()
    .append("path")
    .attr("d", segments)
    .attr("fill", function (d) {
      return colors(d.data.category);
    });

  let content = d3Selection.select("g").selectAll("text").data(data);

  content
    .enter()
    .append("text")
    .classed("inside", true)
    .each(function (d) {
      let center = segments.centroid(d);
      d3Selection
        .select(this)
        .attr("x", center[0])
        .attr("y", center[1])
        .text(`${d.data.category}:\n${d.data.number}`)
        .style("text-anchor", "middle");
    });

  let legends = svg
    .append("g")
    .attr("transform", "translate(500, 100)")
    .selectAll(".legends")
    .data(data);

  let legend = legends
    .enter()
    .append("g")
    .classed("legends", true)
    .attr("transform", function (d, i) {
      return "translate(0," + (i + 1) * 30 + ")";
    });

  legend
    .append("rect")
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", function (d) {
      return colors(d.data.category);
    });

  legend
    .append("text")
    .classed("label", true)
    .text(function (d) {
      return d.data.category;
    })
    .attr("fill", function (d) {
      return colors(d.data.category);
    })
    .attr("x", 30)
    .attr("y", 15);
  //   console.log(`Hey my category is: ${mydata[0].Category}`);
  //   for (let i = 0; i < mydata.length; i++) console.log(mydata[i].DivertAFeed);
}

function Tracker() {
  return (
    <div className="container p-2">
      <p>
        {/* request.session.FirstName */}
        <b>Welcome back, {{}}</b>
      </p>
      <div className="card">
        <div className={`${trackerCSS["card-header"]}`}>
          <h3>Enter tracker data:</h3>
        </div>
        <div className="card-body">
          <div id="form-wrapper">
            <form
              className="tracker-data-entry"
              action=""
              method="post"
              id="tracker"
            >
              <div className="row">
                <div className="col-md-auto">
                  <label for="description">Description</label>
                  <br />
                  <input
                    type="text"
                    className={`${trackerCSS["form-control"]}`}
                    id="description"
                    name="description"
                    placeholder="Description"
                    //   style="width: 10em"
                  />
                </div>
                {/* <div className="col-md-auto">
                            <label for="category">Category</label><br>
                            <input type="text" className="form-control" id="FPcategory" name="category" value="Fresh Produce"
                                style="width: 10em;" readonly>
                        </div> */}

                <div className="col-md-auto">
                  <label for="category">Category</label>
                  <br />
                  <select className="form-select" id="category" name="category">
                    <option>Fresh Produce</option>
                    <option>Metric #2</option>
                    <option>Metric #3</option>
                    <option>Metric #4</option>
                    <option>Metric #5</option>
                  </select>
                </div>
                <div className="col-md-auto">
                  <label for="quantity">Quantity</label>
                  <br />
                  <input
                    type="text"
                    className={`${trackerCSS["form-control"]}`}
                    id="quantity"
                    name="quantity"
                    //   style="width: 10em"
                  />
                </div>
                <div className="col-md-auto">
                  <label for="qunits">Units</label>
                  <br />
                  <select className="form-select" id="qunits" name="qunits">
                    <option>lbs</option>
                    <option>kgs</option>
                  </select>
                </div>
                <div className="col-auto">
                  <div className="row">
                    <div className="col-auto">
                      <label for="amount">Amount</label>
                    </div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-auto">
                      <input
                        type="number"
                        className={`${trackerCSS["form-control"]}`}
                        id="clients"
                        name="clients"
                        value="0"
                        min="0"
                        onkeyup="calculateLandfill(); calculatePercent()"
                        //   style="width: 10em"
                      />
                    </div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-auto">
                      <input
                        type="number"
                        className={`${trackerCSS["form-control"]}`}
                        id="animalFeed"
                        name="animalFeed"
                        value="0"
                        min="0"
                        onkeyup="calculateLandfill(); calculatePercent()"
                        //   style="width: 10em"
                      />
                    </div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-auto">
                      <input
                        type="number"
                        className={`${trackerCSS["form-control"]}`}
                        id="compost"
                        name="compost"
                        value="0"
                        min="0"
                        onkeyup="calculateLandfill(); calculatePercent()"
                        //   style="width: 10em"
                      />
                    </div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-auto">
                      <input
                        type="number"
                        className={`${trackerCSS["form-control"]}`}
                        id="partnet"
                        name="partnet"
                        value="0"
                        min="0"
                        onkeyup="calculateLandfill(); calculatePercent()"
                        //   style="width: 10em"
                      />
                    </div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-auto">
                      <input
                        type="number"
                        className={`${trackerCSS["form-control"]}`}
                        id="landfill"
                        name="landfill"
                        value="0"
                        min="0"
                        //   style="width: 10em"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-auto">
                      <label for="percent">% Diverted to:</label>
                      <br />
                    </div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-auto">
                      <input
                        type="number"
                        className={`${trackerCSS["form-control"]} ${trackerCSS["smaller-input"]}`}
                        id="percentclients"
                        name="percentclients"
                        //   style="width: 4.5em"
                        value="0"
                        min="0"
                        max="100"
                        onload="calculateLandfillPercent()"
                        readonly
                      />
                    </div>
                    <div className="col d-flex align-items-center">Clients</div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-auto">
                      <input
                        type="number"
                        className={`${trackerCSS["form-control"]} ${trackerCSS["smaller-input"]}`}
                        id="percentanimalfeed"
                        name="percentanimalfeed"
                        //   style="width: 4.5em"
                        value="0"
                        min="0"
                        max="100"
                        onload="calculateLandfillPercent()"
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
                        className={`${trackerCSS["form-control"]} ${trackerCSS["smaller-input"]}`}
                        id="percentcompost/fert"
                        name="percentcompost/fert"
                        //   style="width: 4.5em"
                        value="0"
                        min="0"
                        max="100"
                        onload="calculateLandfillPercent()"
                        readonly
                      />
                    </div>
                    <div className="col d-flex align-items-center">
                      Compost/Fertilizer
                    </div>
                  </div>
                  <div className="row pb-2">
                    <div className="col-auto">
                      <input
                        type="number"
                        className={`${trackerCSS["form-control"]} ${trackerCSS["smaller-input"]}`}
                        id="percentpartnet"
                        name="percentpartnet"
                        //   style="width: 4.5em"
                        value="0"
                        min="0"
                        max="100"
                        onload="calculateLandfillPercent()"
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
                        className={`${trackerCSS["form-control"]} ${trackerCSS["smaller-input"]}`}
                        id="percentlandfill"
                        name="percentlandfill"
                        //   style="width: 4.5em"
                        value="100"
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
                  <button
                    className={`${trackerCSS.save} btn btn-outline-success`}
                    id="submit"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <section id="section">
        <div className="card">
          <div className={`${trackerCSS["card-header"]}`}>
            <h3>Database</h3>
            <button
              type="button"
              className="btn btn-outline-success"
              onclick="exportTableToCSV('data.csv')"
            >
              Export CSV
            </button>
          </div>
          <div className="card-body">
            <table className={`${trackerCSS.table}`}>
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Units</th>
                  <th scope="col">% Clients</th>
                  <th scope="col">% Animal Feed</th>
                  <th scope="col">% Compost</th>
                  <th scope="col">% Partner Network</th>
                  <th scope="col">% Landfill</th>
                  <th scope="col"></th>

                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {/* {% for i in Object %} */}
                <tr>
                  {/* <td>{{i.0}</td>
              <td>{{i.1}}</td>
              <td>{{i.2}}</td>
              <td>{{i.3}}</td>
              <td>{{i.4}}</td>
              <td>{{i.5}}</td>
              <td>{{i.6}}</td>
              <td>{{i.7}}</td>
              <td>{{i.8}}</td> */}
                  <td>
                    <form action="{% url 'tracker' %}" method="post">
                      {/* {% csrf_token %} */}
                      <button
                        className="btn btn-danger"
                        type="submit"
                        value="{{i.0}}|{{i.1}}|{{i.2}}|{{i.3}}|{{i.4}}|{{i.5}}|{{i.6}}|{{i.7}}|{{i.8}}"
                        name="field"
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
                {/* {% endfor %} */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <br />
      <div id="penetrate" className={`${trackerCSS["penetrate"]}`}></div>
      {/* {{ json|json_script:"json" }} */}
      {pieChart}
    </div>
  );
}

export default Comment;
