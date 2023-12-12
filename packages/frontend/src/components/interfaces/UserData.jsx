// components/ProductList.js
import React, { useState, useEffect } from "react";
import getUserData from "../../adapters/api/UserData";

const UserData = () => {
  const [data, setUserData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const data = await getUserData();
        setUserData(data);
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

export default UserData;
