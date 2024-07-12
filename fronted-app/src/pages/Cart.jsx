import React, { useState, useEffect } from 'react';
import products from './products';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = Object.keys(localStorage).map((key) => {
      return { key: key, value: localStorage.getItem(key) };
    });
    setCartItems(items);
  }, []);

  function deleteKey(key) {
    localStorage.removeItem(key);
    setCartItems(cartItems.filter(item => item.key !== key));
  }

  return (
    <div>
      <h1 style={{ fontSize: "3em", color: "white", paddingLeft: "20px" }}>Shopping Cart 🛒</h1>
      <hr></hr>
      <ul>
        {cartItems.map((item, index) => {
          const product = products[item.key - 1];
          return product ? (
            <div key={item.key}>
              <img src={product.img} alt={product.text} />
              <button
                id='remove'
                onClick={() => deleteKey(item.key)}
                style={{ margin: "5px", cursor: "pointer" }}
              >
                -
              </button>
            </div>
          ) : null;
        })}
      </ul>
    </div>
  );
}
