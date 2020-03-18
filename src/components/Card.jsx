import React from "react";

export default function Card({
  image,
  title,
  id,
  handleClick,
  addedToCart,
  price,
  showDetails
}) {
    const color = addedToCart ? "red" : "rgb(26, 26, 231)"
  return (
    <div>
      <div className="card" onClick={()=>showDetails(id)}>
        <img src={image} alt="Iphone 11 Pro" className="img" />
        <h3>{title}</h3>
        <p style={{ textAlign: "center", marginBottom: 10 }}>
          Price : {`$${price}`}
        </p>
        <button
          onClick={e => handleClick(e, id)}
          style={{ background: color, borderColor :  color}}
        >
          {addedToCart ? "Remove from cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}
