import './App.css';
import Product from './pages/Product';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="products" element={<Product />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
