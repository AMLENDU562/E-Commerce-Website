import React from 'react';
import products from './products'

export default function Cart() {
  const localStorageItems = Object.keys(localStorage).map((key) => {
    return { key: key, value: localStorage.getItem(key) };
  });

  return (
    <div>
      <h1 style={{ fontSize: "3em", color: "white", paddingLeft: "20px" }}>Shopping Cart 🛒</h1>
      <hr></hr>
      <ul>
        {localStorageItems.map((item, index) => (
          <img src={products[item.key-1].img} alt={products[item.key-1].text}/>
        ))}
      </ul>
    </div>
  );
}
