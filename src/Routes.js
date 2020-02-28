import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AllProducts } from "./product/AllProducts";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AllProducts} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
