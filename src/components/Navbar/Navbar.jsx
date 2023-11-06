import React, { useState } from 'react'
import {NavLink, Link} from "react-router-dom"
import { useCart } from 'react-use-cart'
import "./Navbar .css"
import logo from "./logo.png"
import logo2 from "./logo3.png"
function Navbar({theme,searchValue,setSearchValue}) {

  const{totalUniqueItems}=useCart();

console.log(searchValue)
  return (

<nav>
        <ul className='navbar'>
          <li className='container-logo'><NavLink to="/">{theme==="dark"?<img className='logo' src={logo}  /> : <img className='logo' src={logo2}  /> }<span>Clothes</span></NavLink></li>   
          <li>  
            <Link to="/cart"><i className="bi bi-cart">  {totalUniqueItems> 0 ? <span className='cart-number'>{totalUniqueItems}</span> : ""}
          </i></Link>
        </li> 
       
        
        </ul>
        
        <div className='search-container'>
        <i class="bi bi-search"></i>
             <input type="text" placeholder='Search By Category' 
              value={searchValue}
              onChange={(e)=>setSearchValue(e.target.value)}
              className='search-input'/>
             
        </div>

      </nav>
   
  )
}

export default Navbar