import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/CartProvider'
import { useContext} from 'react'




export default function Nav() {
    const navigate=useNavigate()
    const {count}=useContext(UserContext)
  return (
    <nav>
        <ul style={{ listStyle: 'none', columnCount: 2, backgroundColor: 'white', padding: '5px',textAlign:"center" }}>
          <li style={{ cursor: 'pointer' }}><a href="/" style={{textDecoration:"none"}}>Home</a></li>
          <li>
            <button onClick={()=>navigate('/cart')} id='addToCart'>
            🛒 {count}
            </button>
          </li>
        </ul>
      </nav>
  )
}
