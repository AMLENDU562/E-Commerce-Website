import React, { useState, createContext, useEffect } from 'react';
import '../App.css';

const UserContext = createContext();

export default function CartProvider(props) {
  const [count, setCount] = useState(localStorage.length);
  
 

  function add(key, count) {
    localStorage.setItem(key, count);
    setCount(localStorage.length); 
  }

  function deleteKey(key) {
    localStorage.removeItem(key);
    setCount(localStorage.length); 
  }
  

 

  useEffect(() => {
    const handleStorageChange = () => {
      setCount(localStorage.length);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ add, deleteKey, count }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { CartProvider, UserContext };
