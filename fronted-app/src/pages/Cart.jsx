import React, { useState, useEffect } from 'react';
import products from './products';
import '../Cart.css'; // Assuming you will create this CSS file for additional styling
import CartItem from './CartItem';
import { UserContext } from '../Context/CartProvider';
import { useContext } from 'react';
import Nav from './Nav'
export default function Cart() {
  const {deleteKey,count}=useContext(UserContext)
  const [subTotal, setSubTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

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
  }, [count]);


  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart 🛒</h1>
      <Nav/>
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
