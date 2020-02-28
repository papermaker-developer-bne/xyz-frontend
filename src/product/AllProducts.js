import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Nav } from "../module/Nav";
import { Card } from "../module/Card";
import data from "../data/products.json";
import allRates from "../data/exchange_rates.json";

export const AllProducts = () => {
  const [currentBase, setBase] = useState("AUD");
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || data
  );

  const getRate = (rates, cerrentBase) => {
    switch (cerrentBase) {
      case "AUD":
        return rates.rates.AUD;
      case "USD":
        return rates.rates.USD;
      case "CNY":
        return rates.rates.CNY;
      default:
        return 1;
    }
  };

  const CurrencyConverter = (currentRates, product) => {
    if (product.price.base === currentBase) {
      return product;
    } else {
      product.price.amount = (
        product.price.amount / getRate(currentRates, product.price.base)
      ).toFixed(2);
      product.price.base = currentBase;
      return product;
    }
  };

  const getProductsInCurrentBase = () => {
    const currentRates = _.find(allRates, ["base", currentBase]);
    const cloneProducts = JSON.parse(localStorage.getItem("products")) || data;
    const newProduts = cloneProducts?.map(product =>
      CurrencyConverter(currentRates, product)
    );
    setProducts(newProduts);
  };

  useEffect(() => {
    // change products prices
    // bugs: frontend shows the prices from last currency base
    getProductsInCurrentBase();
  }, [currentBase]);

  const handleChange = event => {
    setBase(event.target.value);
  };

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("products"))) {
      localStorage.setItem("products", JSON.stringify(data));
    }
  }, []);

  return (
    <div>
      <Nav
        currentBase={currentBase}
        rates={allRates}
        handleChange={handleChange}
      />
      <div>
        {products?.map((product, i) => (
          <div key={i} className="col-10 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
