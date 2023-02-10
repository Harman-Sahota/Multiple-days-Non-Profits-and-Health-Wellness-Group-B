import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './network.css';
import fourcss from './fourcss.css';
import axios from 'axios';


function SearchBar() {
  const [getData, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/networkPull/");
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
    Description: ''
});
  const [showModal, setShowModal] = useState(false);
  posts.Quantity = parseInt(posts.Quantity)
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
   {if(localStorage.getItem('firstname')!= null){
  return (
    <div className="container-lg col-md-auto">
      <div className="container-fluid">
        <div className="input-group">
          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" />
        </div>
        <div className="select">
          <select name="format" className="form-select">
            <option value="organization">Filter by: Organization</option>
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
          <Button type="Button" className="btn btn-success" onClick={handleShow}>Create Post</Button>
        </div>
      </div>
      <div className="container-md">
        <div className="tab container-sm">
          <Button className="tablinks btn btn-light" id="defaultOpen">💬 All Posts</Button><br />
          <Button className="tablinks btn btn-light">📣 Sharing</Button><br />
          <Button className="tablinks btn btn-light">💬 Receiving</Button><br />
        </div>
        <div id="disc">
        {getData && getData.length > 0 && getData.map((userObj, index) => (
<div class='card'>
<h5 class='card-header'> 
   <span>{userObj.product}</span>
   <span>{userObj.Quantity}{userObj.Units}</span>
  
</h5>
    <div class='card-body'> 
    <h6 class='card-text'>
      {userObj.Description}
       </h6> 
       <p class='text-success'> {userObj.Type} </p>
       <a href='"+ url_mask + "' id='postbutton' class='btn btn-outline-success'>Comment</a></div></div>

))}
        
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
            <input type="number" className="form-control" id="quantity" placeholder="Enter quantity"
            onChange={(event) => {
                                
              setPosts({ ...posts, Quantity: event.target.value })
            }}
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="units">units</label>
            <select className="form-control" id="units"
            onChange={(event) => {
                                
              setPosts({ ...posts, Units: event.target.value })
            }}
            
            >
              <option>Choose an option</option>
              <option>Lbs</option>
              <option>Kg</option>
            </select>
          </div>
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
                    Description: posts.Description 
                },
                {
                    headers: {
                        "Content-type": "application/json",
                    }
                }
            )
                .then(response => {
                    if (response.status == 201) {
                        window.alert("Your form has been submitted succesfully")
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
  )
}
else if(localStorage.getItem('firstname') == null) {

  return(
    <section>
    <div className="flex-container">
        <div className="text-center">
            <h1>
                <span className="fade-in" id="digit1">4</span>
                <span className="fade-in" id="digit2">0</span>
                <span className="fade-in" id="digit3">4</span>
            </h1>
            <h3 className="fadeIn">YOU MUST LOGIN TO VIEW THIS PAGE</h3>
            <a href='/login'><Button type="button" class = 'btn btn-primary 'name="button">Login</Button></a>
        </div>
    </div>
</section>
  );

}

}
}

export default SearchBar;

