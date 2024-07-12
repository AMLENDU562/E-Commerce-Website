import '../App.css';
import Product from './Product';
import products from './products';
import { useState, useEffect } from 'react';

function Home() {
  const [count, setCount] = useState(localStorage.length);

  function add(key) {
    localStorage.setItem(key, key);
    setCount(localStorage.length)
  }

  // Function to delete item from localStorage
  function deleteKey(key) {
    localStorage.removeItem(key);
    setCount(localStorage.length)
  }
  // Update `count` when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setCount(localStorage.length);
    };

    // Add event listener to update `count` when localStorage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);  // Empty dependency array, so this effect only runs on mount and unmount

  return (
    <div className="App">
      <h1 style={{ color: 'white', fontSize: '5em' }}>ZEPTO</h1>
      <nav>
        <ul style={{ listStyle: 'none', columnCount: 3, backgroundColor: 'white', padding: '5px' }}>
          <li style={{ cursor: 'pointer' }}><a href="/" style={{textDecoration:"none"}}>Home</a></li>
          <li style={{ cursor: 'pointer' }}><a href="/products" style={{textDecoration:"none"}}> Products</a></li>
          <li>
            <button id='addToCart'>
            🛒 {count}
            </button>
          </li>
        </ul>
      </nav>
      {products.map((product, index) => (
        <Product onAdd={add}
                 onDelete={deleteKey}
          img={product.img}
          text={product.text}
          id={product.id || index}  // Ensure that each Product has a unique `id`
          key={product.id || index} // Use `id` if available, otherwise use `index`
        />
      ))}
    </div>
  );
}

export default Home;
