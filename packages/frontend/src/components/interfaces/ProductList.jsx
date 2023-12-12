// components/ProductList.js
import React, { useState, useEffect } from "react";
import {getProducts} from '../../adapters/domain/Product';
import Table from "../Table";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const tableHeaders = ["SKU", "Name", "Price"];
  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Table
    headers={tableHeaders}
    values={products.map((product) => [
        product.sku,
        product.name,
        product.price,
      ])}
  />
  );
};

export default ProductList;
