import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import data from '../../data/clothes'; 
import AOS from "aos"
import "aos/dist/aos.css"
import './Product.css';


function Product() {

  
 

  const { addItem } = useCart();
  const { id } = useParams();
  const book = data.find((b) => b.id === +id);
  const [quantity, setQuantity] = useState(1);


  const handelQuantity = (newQuantity)=>{
    setQuantity(newQuantity)
  }

  const handleForm = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  }, []);

  return (
    <div className="cart-page">
      <div className="left-image" data-aos="zoom-in">
        <img src={book.image} alt={book.title} />
      </div>

      <div className="cart-page-info">
        <h3 className="cart-page-title">{book.title}</h3>
        Price: <b>$ {book.price}</b>
        <form className="cart-page-form" onSubmit={handleForm}>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handelQuantity(parseInt(e.target.value))}
            min={1}
          />
          <button
            className="add-btn-cart"
            type="submit"
            onClick={() => addItem(book, quantity)}
          >
            Add To Cart
          </button>
        </form>
        <p>
          Total Price: <b>${quantity * book.price}</b>
        </p>
      </div>
      <div className="descriptions" >
        <h2 aos-data="fade-up">Detalis</h2>
        <p className="lorem-words" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          asperiores mollitia dignissimos fugiat explicabo, velit error
          assumenda laborum sit id voluptatum esse facere veritatis placeat
          atque consectetur minima veniam. Commodi possimus quibusdam reiciendis
          eum totam quasi quas nobis, iusto nam.
        </p>
      </div>

      </div>
  );
}

export default Product;
