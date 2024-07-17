import React from 'react';
import '../App.css'
import {useState} from 'react'

export default function Product({ img, text, id , onAdd, onDelete,cost }) {

      const [count,setCount]=useState(1);
      function AddItem(key)
      {

        setCount(count+1);
      }

      function DeleteItem(key)
      {

          if(count!==1)
            setCount(count-1);

      }

  return (
    <div className="Product" style={{ padding: "5px" }}>
      <div style={{columnCount:2}}>
      <img src={img} alt={text} style={{ height: "250px", width: "200px" }} />
      <h1>₹ {cost}</h1>
      </div>
      <h1 style={{color:"black"}}>{text}</h1>
      <button onClick={() => onAdd(id,count)} id='add' style={{ margin: "5px", cursor: "pointer"}}>Add To Cart</button>
      <button onClick={() => AddItem(id)} id='add' style={{ margin: "5px", cursor: "pointer"}}>+</button>
      <button id='remove' onClick={() => DeleteItem(id)} style={{ margin: "5px", cursor: "pointer" }}>-</button>
      <p> Quantity : {count}</p>
    </div>
  );
}
