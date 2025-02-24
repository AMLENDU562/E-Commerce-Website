import './App.css';
import Product from './pages/Product';
import Home from './pages/Home'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {CartProvider} from '../src/Context/CartProvider'
function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="products" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
