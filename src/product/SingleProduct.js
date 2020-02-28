import React from "react";
import { Card } from "../module/Card";
import data from "../data/products.json";
import _ from "lodash";

export const SingleProduct = props => {
  const productId = props.match.params.productId;
  let currentProduct = _.find(data, ["id", parseInt(productId)]);
  let relatedProducts = data.filter(product =>
    currentProduct.relatedProducts.includes(product.id)
  );
  console.log(relatedProducts);

  return (
    <div>
      <nav className="navbar navbar-dark  bg-dark">
        <a className="navbar-brand" href="/">
          XYZ
        </a>
      </nav>
      <div className="row">
        <div className="col-8">
          <h4>Current products</h4>
          <Card product={currentProduct} />
        </div>

        <div className="col-4">
          <h4>Related products</h4>
          {relatedProducts.map((p, i) => (
            <Card key={i} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};
