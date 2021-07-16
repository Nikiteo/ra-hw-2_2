import React from 'react';
import ShopCard from './ShopCard';
import './CardsView.css';

export default function CardsView({ cards }) {
  return (
    <div className="products-cards">
      {cards.map((item) => <ShopCard card={item} key={item.name + '-' + item.color}/>)}
    </div>
  );
}