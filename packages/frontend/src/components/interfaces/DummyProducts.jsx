// components/ProductList.js
import React, { useState, useEffect } from "react";
import { getDummyProducts } from "../../adapters/domain/DummyProducts";
import ImgCard from "../ImgCard";
import "./DummyProducts.css";
const DummyProducts = ({onEvent}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const limitPerPage = 10;

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const skip = (currentPage - 1) * limitPerPage;

        const newData = await getDummyProducts(skip, limitPerPage);
        setCount(newData.total);
        setData(newData.products);
      } catch (error) {
        // Manejar errores según tus necesidades
      }
    };

    fetchDataAsync();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  const handleLastPage = () => {
    setCurrentPage(Math.floor(count / limitPerPage));
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleFixedPage = (page) => {
    setCurrentPage((prevPage) => page);
  };
  return (
    <div className="products">
      <h2>Your products</h2>
      <div className="product-grid">
        {data.map((item) => (
          <ImgCard
            id={item.id}
            name={item.title}
            price={item.price}
            stock={item.stock}
            url={item.thumbnail}
            onShowProductEvent = {onEvent}
          />
        ))}
      </div>
      <div>
        <button onClick={handleFirstPage} disabled={currentPage === 1}>
          &lt;&lt;
        </button>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <button
          onClick={()=>handleFixedPage (currentPage - 2)}
          hidden={currentPage - 2 >= 1 ? false : "hidden"}
        >
          {currentPage - 2}
        </button>
        <button
          onClick={()=>handleFixedPage (currentPage - 1)}
          hidden={currentPage - 1 >= 1 ? false : "hidden"}
        >
          {currentPage - 1}
        </button>
        <button
          onClick={()=>handleFixedPage (currentPage)}
          hidden={currentPage >= 1 ? false : "hidden"}
        >
          {currentPage}
        </button>
        <button
          onClick={()=>handleFixedPage (currentPage + 1)}
          hidden={
            currentPage + 1 <= Math.floor(count / limitPerPage)
              ? false
              : "hidden"
          }
        >
          {currentPage + 1}
        </button>
        <button
                  onClick={()=>handleFixedPage (currentPage + 2)}

          hidden={
            currentPage + 2 <= Math.floor(count / limitPerPage)
              ? false
              : "hidden"
          }
        >
          {currentPage + 2}
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.floor(count / limitPerPage)}
        >
          &gt;
        </button>
        <button
          onClick={handleLastPage}
          disabled={currentPage === Math.floor(count / limitPerPage)}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default DummyProducts;
