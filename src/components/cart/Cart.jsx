import React from 'react'
import "./Cart.css"
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {useCart} from "react-use-cart"



function Cart() {

  const {items,removeItem,cartTotal,emptyCart}=useCart();


  return (
     <div className="car-items">
 
          {items.map((item)=> 
          <div kay={item.id} className="car-item">
             <p className='btn btn-primary  rounded-3'>$ {item.price}</p>
          <div className="car-img">
          <img src={item.image}></img>
          </div>
          <div className="cart-info">
            <h3 className="cart-title">
              {item.title}
            </h3>
            <h4 className='btn btn-primary '>quantity : {item.quantity} </h4>
          </div>
         <Button  
         style={{color:"var(--text-color)",border:" 1px solid #0d6efd",borderRadius:"10px"}}
        startIcon={<DeleteIcon  style={{color:"var(--text-color)"}} />} 
        onClick={()=> removeItem(item.id) } >
                   Delete
          </Button>
    
          </div>)}
          <IconButton  aria-label="delete"> 
            <DeleteIcon  onClick={()=>emptyCart()} />
        </IconButton>
            <div className='total-cart btn btn-primary '>Total : {cartTotal} $</div>
            <div >
                      
            </div>
      </div>
  )
}

export default Cart