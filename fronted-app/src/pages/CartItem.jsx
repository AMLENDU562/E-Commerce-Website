import React, { useState } from 'react';
import '../Cart.css';

export default function CartItem({ id, img, text, cost, quantity, deleteKey, updateSubTotal }) {
  const [countProduct, setProduct] = useState(quantity);

  function AddItem(id) {
    const newCount = countProduct + 1;
    localStorage.setItem(id, newCount);
    setProduct(newCount);
    updateSubTotal(prevSubTotal => prevSubTotal + cost);
  }

  function DeleteItem(id) {
    const newCount = countProduct - 1;
    if (newCount > 0) {
      localStorage.setItem(id, newCount);
      setProduct(newCount);
      updateSubTotal(prevSubTotal => prevSubTotal - cost);
    } else {
      deleteKey(id);
    }
  }

  return (
    <li className="cart-item">
      <img src={img} alt={text} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-title" style={{ padding: "5px" }}>{text}</h2>
        <button
          id='remove'
          onClick={() => deleteKey(id)}
          className="cart-item-remove-button"
        >
          Remove
        </button>
        <button onClick={() => AddItem(id)} id='add' style={{ margin: "5px", cursor: "pointer" }}>+</button>
        <button id='remove' onClick={() => DeleteItem(id)} style={{ margin: "5px", cursor: "pointer" }}>-</button>
        <h2>Quantity: {countProduct}</h2>
      </div>
      <h2 className="cart-item-price">₹ {cost}</h2><br />
    </li>
  );
}
