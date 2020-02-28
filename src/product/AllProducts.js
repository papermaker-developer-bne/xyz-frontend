import React, { useState, useEffect } from "react";
import { Card } from "../module/Card";
import data from "../data/products.json";
import allRates from "../data/exchange_rates.json";

export const AllProducts = () => {
  const [currentBase, setBase] = useState("AUD");
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || data
  );

  const handleChange = event => {
    setBase(event.target.value);
  };

  return (
    <div>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Current base: {currentBase}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {allRates?.map((item, i) => (
                  <a key={i} className="dropdown-item" href="#">
                    <input
                      onChange={handleChange}
                      value={`${item.base}`}
                      id={item.base}
                      name="base"
                      type="radio"
                      className="mr-2 ml-4"
                    />
                    <label className="form-check-label" htmlFor={item.base}>
                      {item.base}
                    </label>
                  </a>
                ))}
              </div>
            </li>
          </ul>
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
      <div>
        {products.map((product, i) => (
          <div key={i} className="col-10 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
