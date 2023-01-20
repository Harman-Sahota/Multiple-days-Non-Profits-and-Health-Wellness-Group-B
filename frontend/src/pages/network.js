import React, { useState } from 'react';
import { useEffect } from 'react';


function SearchBar() {
  const [posts, setPosts] = useState([]);

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
          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#form">Create Post</button>
        </div>
      </div>
      <div className="container-md">
        <div className="tab container-sm">
          <button className="tablinks btn btn-light" id="defaultOpen">💬 All Posts</button><br />
          <button className="tablinks btn btn-light">📣 Sharing</button><br />
          <button className="tablinks btn btn-light">💬 Receiving</button><br />
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
    </div>
  )
}

export default SearchBar;