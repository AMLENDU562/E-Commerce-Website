import React, { useState, useEffect } from 'react';
import products from './products';
import { useNavigate } from "react-router-dom";
import '../Cart.css'; // Assuming you will create this CSS file for additional styling

export default function Cart() {
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0); // State to track count of items in cart

  useEffect(() => {
    let total = 0;
    const items = Object.keys(localStorage).map((key) => {
      const productId = parseInt(key, 10) - 1;
      total += products[productId].cost;
      return { key: key, quantity: localStorage.getItem(key) };
    });
    setSubTotal(total);
    setCartItems(items);
    setCount(items.length); // Update count based on items in cart
  }, []);

  function deleteKey(key) {
    const productId = parseInt(key, 10) - 1;
    const itemCost = products[productId].cost;

    localStorage.removeItem(key);
    setCount(count - 1); // Decrease count by 1
    setSubTotal(subTotal - itemCost); // Subtract removed item's cost from subtotal
    setCartItems(cartItems.filter(item => item.key !== key));
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart 🛒</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="/" className="nav-list-link">Home</a>
          </li>
          <li className="nav-list-item">
            <button onClick={() => navigate('/cart')} id='addToCart'>
              🛒 {count}
            </button>
          </li>
        </ul>
      </nav>
      <hr />
      <ul className="cart-list">
        {cartItems.map((item) => {
          const product = products[parseInt(item.key, 10) - 1];
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
              <h2 className="cart-item-price">₹ {product.cost}</h2>
            </li>
          ) : null;
        })}
      </ul>
      <hr />
      <h1>Subtotal: ₹ {subTotal}</h1>
    </div>
  );
}
