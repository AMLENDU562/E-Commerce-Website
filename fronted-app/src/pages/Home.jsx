import '../App.css';
import Product from './Product';
import products from './products';
import Nav from './Nav';
import { UserContext } from '../Context/CartProvider';
import { useContext } from 'react';
function Home() {
  const {deleteKey,add} =useContext(UserContext) 

  // Update `count` when localStorage changes
 // Empty dependency array, so this effect only runs on mount and unmount

  return (
    <div className="App">
      <h1 style={{ color: 'white', fontSize: '5em' }}>ZEPTO</h1>
      <Nav/>
      {products.map((product, index) => (
        <Product onAdd={add}
                 onDelete={deleteKey}
          img={product.img}
          text={product.text}
          id={product.id || index}  
          key={product.id || index} 
          cost={product.cost}
        />
      ))}
    </div>
  );
}

export default Home;
