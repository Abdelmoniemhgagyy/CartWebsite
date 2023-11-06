import React from 'react'
import data from "../../data/clothes"
import "./Home.css"
import {NavLink} from "react-router-dom"
import { motion } from "framer-motion"
import {useCart} from "react-use-cart"

function Home({searchValue}) {
   const{addItem}=useCart();
 
   const categorySearch = data.filter((item)=> item.category.toLowerCase().includes(searchValue.toLowerCase()));
  return (
    <div className='home-container'>
      <div className="car-items">
      {categorySearch.map((item)=> 
      <motion.div  initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40
      }}
       kay={item.id} className="car-item">
         <b> <NavLink to = {`/${item.id}`} >$ {item.price}</NavLink></b>
        <div className="car-img">
        <img src={item.image}></img>
       
        </div>
        <div className="cart-info">
          <h3 className="cart-title">
            {item.category}
          </h3>
          <p>{item.description}</p>
          
        </div>
        <button className='cart-btn-detalis'><NavLink to = {`/${item.id}`} >More Detalis</NavLink></button>


        <button className='cart-btn-add' onClick={()=>addItem(item)}> Add Item </button>
      </motion.div>)}

      </div>

    </div>
  )
}

export default Home