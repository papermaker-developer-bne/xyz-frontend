import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AllProducts } from "./product/AllProducts";
import { SingleProduct } from "./product/SingleProduct";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AllProducts} />
        <Route path="/product/:productId" exact component={SingleProduct} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
