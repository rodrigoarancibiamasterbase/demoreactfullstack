import { React } from "react";

import "./ImgCard.css";
const ImgCard = ({ id, name, price, stock, url, onShowProductEvent }) => {

  const HandleOnClick = (id) => {
    onShowProductEvent(id.id)
  };

  return (
    <div key={id} className="card-item"  onClick={()=>HandleOnClick({id})}>
      <img src={url} alt={name} />
      <div className="description">
        <p>$ {price}</p>
        <p>Stock: {stock}</p>
        <p>{name}</p>
      </div>
     
    </div>
  );
};

export default ImgCard;
