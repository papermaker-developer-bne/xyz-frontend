import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AllProducts } from "./product/AllProducts";
import { SingleProduct } from "./product/SingleProduct";
import { EditProduct } from "./product/EditProduct";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AllProducts} />
        <Route path="/product/:productId" exact component={SingleProduct} />
        <Route path="/editProduct/:productId" exact component={EditProduct} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
