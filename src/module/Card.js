import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <p>{product.description.substring(0, 100)}</p>
          <p>
            <span>{product.price.base}</span> {product.price.amount}
          </p>
          <Link to={`/product/${product.id}`}>
            <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
              View Product
            </button>
          </Link>
          <Link to={`/editProduct/${product.id}`}>
            <button className="btn btn-outline-danger mt-2 mb-2">
              Edit Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
