import React ,{useState} from 'react'
import "./App.css"
import Home from './components/Home/Home'
import Product from "./components/product/Product"
import Carts from './components/carts'
import Cart from './components/cart/Cart'
import Navbar from './components/Navbar/Navbar.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SwitchMood from "./components/SwitchMood/SwitchMood.jsx"
import { CartProvider } from 'react-use-cart'

function App() {
  const[searchValue,setSearchValue]=useState("")
  const [theme,setTheme]=useState(localStorage.getItem("currentMood")??"light")
  return (
    <BrowserRouter>
    <CartProvider>
    <div  className="App">
      <Navbar theme={theme} searchValue={searchValue} setSearchValue={setSearchValue}/>
        <SwitchMood theme={theme} setTheme={setTheme} />
      <Routes>
      <Route path="/" element={<Home searchValue={searchValue}/>} exact/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/carts" element={<Carts/>}/>
        <Route path="/:id" element={<Product/>}/>
      </Routes>
    
     
    </div>

    </CartProvider>
    </BrowserRouter>
  )
}

export default App












































// /* eslint-disable no-undef */
// import React, { createRef } from "react";
// import Home from "./components/Home";
// class App extends React.Component {
//   constructor() {
//     super();

//     this.call = createRef();
//   }

//   componentDidMount() {
//     this.call.current.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.call} />
//       </div>
//     );
//   }
// }

// class Items extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.props.show} />
//         <input type="submit" onClick={this.props.add} />
//         {this.props.Products.map((product) => (
//           <Item
//             product={product.pro}
//             id={product.id}
//             removeE={this.props.removeE}
//           />
//         ))}
//       </div>
//     );
//   }
// }
// class Item extends React.Component {
//   render() {
//     return (
//       <div>
//         {console.log(this.props)}

//         {this.props.product}
//         <button onClick={() => this.props.removeE(this.props.id)}>
//           Delete
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// // class Nav extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h3>Nav bar</h3>
// //       </div>
// //     );
// //   }
// // }

// // class Items extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h3>Items</h3>
// //         <Item />
// //       </div>
// //     );
// //   }
// // }
// // -------------------------app---------------------------
// // state = {
// //   Products: [],
// //   item: "",
// // };

// // render() {
// //   var su = (e) => {
// //     this.setState({
// //       item: e.target.value,
// //     });
// //   };

// //   var additem = (e) => {
// //     e.preventDefault();
// //     let Products = [
// //       ...this.state.Products,
// //       {
// //         id: Math.random(),
// //         pro: this.state.item,
// //       },
// //     ];
// //     this.setState({
// //       Products,
// //     });
// //   };

// //   let deletel = (id) => {
// //     let Products = [...this.state.Products];
// //     let newProduct = Products.filter((product) => product.id != id);
// //     this.setState({
// //       Products: newProduct,
// //     });
// //   };

// //   return (
// //     <div>
// //       {console.log(this.state.Products)}
// //       <h1>components</h1>
// //       <AddItem
// //         change={su}
// //         add={additem}
// //         Products={this.state.Products}
// //         removel={deletel}
// //       />
// //     </div>
// //   );
// // }
// // ----------------------------------------------------------
// // class AddItem extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <form>
// //           <input type="text" onChange={this.props.change} />
// //           <input type="submit" onClick={this.props.add} />
// //           {this.props.Products.map((e) => (
// //             <Item item={e.pro} id={e.id} removell={this.props.removel} />
// //           ))}
// //         </form>
// //       </div>
// //     );
// //   }
// // }
// // class Item extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         {console.log(this.props)}
// //         <div>
// //           {this.props.item}{" "}
// //           <button onClick={() => this.props.removell(this.props.id)}>
// //             Delete
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // -----------------------------------------------
// // state = {
// //   name: "",
// //   Products:[]
// // }
// // show = (e)=>{

// //   let name = e.target.value;
// //   this.setState({
// //     name
// //   })
// // }

// // addElements = (e)=>{
// //   e.preventDefault()
// //   let Products=[...this.state.Products,{pro : this.state.name,
// //     id:Math.random(),
// //   }];
// //   this.setState({
// //     Products
// //   })
// // }
// // removeElement =(id)=>{
// //   let Products=[...this.state.Products];
// //   let newProducts =Products.filter((e)=> e.id != id );
// //   this.setState({
// //   Products: newProducts
// //   })
// // }
// // ------------------------Refs----------------------
// // constructor(){

// //   super();

// //   this.call=createRef()

// // componentDidMount(){
// //  this.call.current.focus()
// // }

// //  render(){

// //   return(
// //       <div>
// //        <input type="text" ref={this.call}/>
// //       </div>
// //   )
// //  }}
// // ------------------------CallbackRefs----------------------
// // constructor(){

// //   super();

// //   this.call=null;
// //   this.callfun=(ele)=>{
// //     this.call=ele ;
// //   }

// // }
// // componentDidMount(){
// //   if(this.call){
// //     this.call.focus()
// //   }
// // }//  render(){

// //   return(
// //       <div>
// //        <input type="text" ref={this.callfun}/>
// //       </div>
// //   )
// //  }}
