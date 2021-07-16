import React from 'react';

export default function ShopCard({ card }) {
  const style = {
    backgroundImage: `url(${card.img})`,
  }

  return (
    <div className="card" style={style}>
      <div className="card-name">{card.name}</div>
      <div className="card-color">{card.color}</div>
      <div className="card-price">${card.price}</div>
      <button className="card-button" type="button">Add to cart</button>
    </div>
  );
}