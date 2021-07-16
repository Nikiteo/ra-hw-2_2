import React from 'react';
import ShopItem from './ShopItem';
import './ListView.css';

export default function CardsView({ items }) {
  return (
    <div className="products-list">
      {items.map((item) => <ShopItem item={item} key={item.name + '-' + item.color}/>)}
    </div>
  );
}