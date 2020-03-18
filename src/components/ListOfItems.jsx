import React from "react";

import Card from "./Card";
export default function ListOfItems({ items, handleClick, showDetails }) {
  return (
    <>
    <h2 style={{ textAlign : "center", marginTop : "4rem"}}>Available Items</h2>
    <div className="container">
     
      {items.map(card => (
        <Card
            key={card.id}
            image={card.img}
            title={card.title}
            id={card.id}
            handleClick={handleClick}
            addedToCart={card.addedToCart}
            showDetails={showDetails}
            price={card.price}
        />
      ))}
    </div>
    </>
  );
}
