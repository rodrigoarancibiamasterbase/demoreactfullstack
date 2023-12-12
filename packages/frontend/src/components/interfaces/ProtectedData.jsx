// components/ProductList.js
import React, { useState, useEffect } from "react";
import { getProtectedData } from "/adapters/domain/ProtectedData";

const ProtectedData = () => {
  const [data, setProtectedData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const data = await getProtectedData();
        setProtectedData(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <p>{data}</p>
 
  );
};

export default ProtectedData;
