import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './network.css';
import fourcss from './fourcss.css';


function SearchBar() {
  const [posts, setPosts] = useState({
    product: '',
    Type: '',
    Quantity: '',
    Units: '',
    Description: ''
});
  const [showModal, setShowModal] = useState(false);
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
          {posts.map((post) => (
            <div key={post.product}>
              <p>Product: {post.product}</p>
              <p>Quantity: {post.quantity} {post.qunits}</p>
              <p>Description: {post.desc}</p>
              <p>Status: {post.Type}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
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
                                
              setPosts({ ...posts, Quanity: event.target.value })
            }}
            
            />
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
              <option>Sharing</option>
              <option>Receiving</option>
            </select>
          </div>
          <Button variant="primary" type="submit"
          onClick={(event) => {
            console.log(JSON.stringify(posts))
          }}
          >
            Submit
          </Button>
        </form>
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

