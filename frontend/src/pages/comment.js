// import 'bootstrap/dist/css/bootstrap.min.css';
// import commentCSS from './comment.module.css';
import React, { useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
// import fourcss from './fourcss.css';
import  {useRef} from "react";
import * as d3 from "d3";

function PieChart({ data }) {
    const ref = useRef(null);
    const labelOffset = 100;
  
    useEffect(() => {
      const width = 400;
      const height = 400;
      const radius = 150;
  
      const color = d3.scaleOrdinal()
        .range(['#2C3E50', '#E74C3C', '#F1C40F', '#3498DB', '#9B59B6', '#FF5733', '#34495E']);
  
      const pie = d3.pie()
        .sort(null)
        .value(d => d.value);
  
      const path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
  
      const label = d3.arc()
        .outerRadius(radius - labelOffset)
        .innerRadius(radius - labelOffset);
  
      const svg = d3.select(ref.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
  
      const arc = svg.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');
  
      arc.append('path')
        .attr('d', path)
        .attr('fill', d => color(d.data.label))
        .attr('stroke', 'black');
  
      const labelLines = arc.append('polyline')
        .attr('class', 'label-line')
        .attr('points', d => {
          const [x, y] = label.centroid(d);
          const offset = x > 0 ? labelOffset : -labelOffset;
          return [
            path.centroid(d),
            [label.centroid(d)[0] + offset, label.centroid(d)[1]],
            [label.centroid(d)[0] + offset, label.centroid(d)[1] + (y > 0 ? 10 : -10)]
          ];
        });
  
      arc.append('text')
        .attr('transform', d => {
          const [x, y] = label.centroid(d);
          const offset = x > 0 ? labelOffset : -labelOffset;
          return `translate(${label.centroid(d)[0] + offset}, ${label.centroid(d)[1]})`;
        })
        .attr('dy', '0.35em')
        .style('font-size', '14px')
        .style('text-anchor', d => {
          const x = label.centroid(d)[0];
          return x > 0 ? 'start' : 'end';
        })
        .text(d => d.data.label);
  
      return () => {
        svg.remove();
      };
    }, [data]);
  
    return (
      <div style={{ width: '400px', height: '400px', border: '2px solid red' }}>
        <div ref={ref}></div>
      </div>
    );
  }
  
  
  
  const data = [
    { label: 'Apples', value: 1 },
    { label: 'Oranges', value: 1 },
    { label: 'Bananas', value: 15 },
    { label: 'Grapes', value: 5 },
    { label: 'Pears', value: 8 }
  ];
  const data2 = [
    { label: 'Apples', value: 12 },
    { label: 'Oranges', value: 22 },
    { label: 'Bananas', value: 18 },
    { label: 'Grapes', value: 15 },
    { label: 'Pears', value: 18 }
  ];
  
  
  function App() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <PieChart data={data} />
        <PieChart data={data2} />
      </div>
    );
  }
  
  export default App;
  


// //  function Comment() {




// //     const [comment, setComment] = useState({
// //         Comments: ''
// //     });


// //     var j = JSON.stringify(comment);
// //     console.log(j);
// //     {if(localStorage.getItem('firstname') != null){
      
// //     return (

       
// //         <section>
// //             <div id="main" className={`${commentCSS.container_lg} container-lg col-md-auto`}>
// //                 <a id={`${commentCSS.home} home`} className="btn btn-success" href="network/" >Go Back</a>

// //                 <div className={`${commentCSS.container_sm} container-sm col-md-auto`}>
// //                     {/*
// //                     <h2 className="display-6"> {{ request.resolver_match.kwargs.product }} -  {{ request.resolver_match.kwargs.qty }}  {{ request.resolver_match.kwargs.units }} </h2>
// //                     <p className="mb-0 h6"> {{ request.resolver_match.kwargs.description | replace_underscore }} </p>
// //                     <p className="mb-0 text-success"> {{ request.resolver_match.kwargs.status }} </p> */}
// //                     <div className='row'>
// //                         <div className='col-10'>
// //                             <h3>Post Title</h3>
// //                             <p>Date posted:</p>
// //                         </div>
// //                         <div className='col-2'>
// //                             <p style={{ textAlign: 'right' }}>Username</p>
// //                         </div>
// //                     </div>
// //                     <div className='row'>
// //                         <p>Post description will be displayed here.</p>
// //                     </div>
// //                 </div>

// //                 <div className={`${commentCSS.container_sm} container-sm col-md-auto ${commentCSS.form} form`}>
// //                     {/*{% csrf_token %}*/}
// //                     <div className="form-group">
// //                         <textarea className="form-control" id="comment" rows="5" name="comment" placeholder="Type in your comment here."
// //                             onChange={(event) => {
                                
// //                                 setComment({ ...comment, Comments: event.target.value })
// //                             }}>
// //                         </textarea>

// //                         <Button type="submit" id="sub" className={`${commentCSS.sub} btn btn-secondary`} for="comment"
// //                             onClick={(e) => {
// //                                 axios.post(
// //                                     "http://127.0.0.1:8000/api/commentInsert/",
// //                                     {
// //                                         Comments: comment.Comments,
// //                                     },
// //                                     {
// //                                         headers: {
// //                                             "Content-type": "application/json",
// //                                         }
// //                                     }
// //                                 )
// //                                     .then(response => {
// //                                         if (response.status == 201) {
// //                                             console.log('yes');
// //                                         }
// //                                     })
// //                                     .catch(err => console.warn(err));
// //                             }}

// //                         >Comment</Button>
// //                     </div>
// //                 </div>

// //                 <div className={`${commentCSS.container_sm} container-sm col-md-auto ${commentCSS.form} form`}>
// //                     <h3>Comments</h3>
// //                     {/*{% for i in Object %}*/}
// //                     <div className={`${commentCSS.card} card border-secondary mb-3`}>
// //                         <div className="card-body">
// //                             <p className="card-text">
// //                                 <p>Username</p>
// //                                 <p>Comment</p>
// //                                 {/*{{i.5}}*/}
// //                             </p>
// //                         </div>
// //                     </div>
// //                     {/*{% endfor %}*/}
// //                 </div>

// //             </div>
  
// //         </section >
                      
// //     );  }
// //     else if(localStorage.getItem('firstname') == null) {

// //         return(
// //             <section>
// //             <div className="flex-container">
// //                 <div className="text-center">
// //                     <h1>
// //                         <span className="fade-in" id="digit1">4</span>
// //                         <span className="fade-in" id="digit2">0</span>
// //                         <span className="fade-in" id="digit3">4</span>
// //                     </h1>
// //                     <h3 className="fadeIn">YOU MUST LOGIN TO VIEW THIS PAGE</h3>
// //                     <a href='/login'><Button type="button" class = 'btn btn-primary 'name="button">Login</Button></a>
// //                 </div>
// //             </div>
// //         </section>
// //         );

// //     }}
// //  }
// //  export default Comment;