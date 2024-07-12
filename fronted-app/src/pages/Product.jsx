import React from 'react';
import '../App.css'
export default function Product({ img, text, id , onAdd, onDelete,cost }) {

 

  return (
    <div className="Product" style={{ padding: "5px" }}>
      <div style={{columnCount:2}}>
      <img src={img} alt={text} style={{ height: "250px", width: "200px" }} />
      <h1>₹ {cost}</h1>
      </div>
      <h1 style={{color:"black"}}>{text}</h1>
      <button onClick={() => onAdd(id)} id='add' style={{ margin: "5px", cursor: "pointer" }}>+</button>
      <button id='remove'onClick={() => onDelete(id)} style={{ margin: "5px", cursor: "pointer" }}>-
      </button>
    </div>
  );
}
