import React, { useState, useEffect } from 'react';
import products from './products';
import '../Cart.css'; // Assuming you will create this CSS file for additional styling

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
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart 🛒</h1>
      <hr />
      <ul className="cart-list">
        {cartItems.map((item, index) => {
          const product = products[item.key - 1];
          return product ? (
            <li key={item.key} className="cart-item">
              <img src={product.img} alt={product.text} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{product.text}</h2>
                <button
                  id='remove'
                  onClick={() => deleteKey(item.key)}
                  className="cart-item-remove-button"
                >
                  Remove
                </button>
              </div>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}
