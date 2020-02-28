import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const EditProduct = ({ match: { params: { productId } } }) => {
  // save the single product data in localstorage
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          XYZ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <div style={{ margin: '50px auto', width: '500px' }}>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Product ID</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Product Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" required minlength="3" />
          </div>
          < div class="form-group" >
            <label for="exampleFormControlInput1">Currency Base</label>
            <select class="form-control" >
              <option>AUD</option>
              <option>USD</option>
              <option>CNY</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Price</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" required />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Description</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" required />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Related Products</label>
            <div class="form-group">
              {
                products?.map(product => (
                  <div class="form-check form-check-inline" key={product.id}>
                    <input class="form-check-input" type="checkbox" id={product.id} value={product.id} />
                    <label class="form-check-label" for={product.id}>{product.id}-{product.name}</label>
                  </div>
                ))
              }

            </div>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
          <Link to={`/`}>
            <button type="btn" class="btn btn-secondary ml-4">Return to home page</button>
          </Link>
        </form>
      </div>
    </>
  )
}
