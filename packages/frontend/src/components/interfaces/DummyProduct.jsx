import React, { useState, useEffect } from "react";
import { getDummyProduct } from "../../adapters/domain/DummyProducts";
import "./DummyProduct.css";
import WhiteBoldLinkAction from "../WhiteBoldLinkAction";
import DummyProductImages from "./DummyProductImages";
function DummyProduct({ id, onEvent }) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const handeOnReturn = () => {
    onEvent(null);
  };
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const newData = await getDummyProduct(id);
        setData(newData);
        setLoading(false);
      } catch (error) {
        // Manejar errores según tus necesidades
      }
    };
    if (data === "") fetchDataAsync();
  });
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <WhiteBoldLinkAction handleClick={handeOnReturn} name="Return" />
      <div className="product-container">
        <div className="image-container">
          <DummyProductImages images={data.images} />
        </div>
        <div className="detail-container">
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{data.title}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{data.description}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{data.price}</td>
              </tr>
              <tr>
                <td>DiscountPercentage</td>
                <td>{data.discountPercentage}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{data.rating}</td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>{data.stock}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>{data.brand}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{data.category}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DummyProduct;
