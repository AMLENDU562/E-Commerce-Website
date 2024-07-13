import React, { useState, useEffect } from 'react';
import products from './products';
import { useNavigate } from "react-router-dom";
import '../Cart.css'; // Assuming you will create this CSS file for additional styling
import CartItem from './CartItem';

export default function Cart() {
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0); // State to track count of items in cart

  useEffect(() => {
    let total = 0;
    const items = Object.keys(localStorage).map((key) => {
      const productId = parseInt(key, 10) - 1;
      const product = products[productId];
      const quantity = parseInt(localStorage.getItem(key), 10);

      if(product){
      total += product.cost * quantity;
      }

      return { key: key, quantity: quantity };
      
    });
    setSubTotal(total);
    setCartItems(items);
    setCount(items.length); // Update count based on items in cart
  }, []);

  function deleteKey(key) {
    const productId = parseInt(key, 10) - 1;
    const product = products[productId];
    if (product) {
      const itemCost = product.cost * parseInt(localStorage.getItem(key), 10);
      localStorage.removeItem(key);
      setCount(count - 1);
      setSubTotal(subTotal - itemCost);
      setCartItems(cartItems.filter(item => item.key !== key));
    }
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
            <CartItem 
              key={item.key} 
              id={item.key} 
              img={product.img} 
              text={product.text} 
              cost={product.cost} 
              quantity={item.quantity} 
              deleteKey={deleteKey} 
              updateSubTotal={setSubTotal} 
            />
          ) : null;
        })}
      </ul>
      <hr />
      <h1>Subtotal: ₹ {subTotal}</h1>
    </div>
  );
}
