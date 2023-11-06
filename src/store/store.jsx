import {createStore} from "redux"


const initalstate = {
    cart:[
       { product:  { id: 0, title: "", description: "", image: "" , price: 0 },
       quantity:0,
       },
    ]
   
}

const reducer = (state=initalstate, action )=> {
    switch (action.type) {
        case 'ADD_TO_CART':
          return {
            ...state,
            cart: [...state.cart,{ product: action.product ,quantity: action.quantity}],
          };
        case 'REMOVE_FROM_CART':
          return {
            ...state,
            cart: [...state.cart , { product: action.product }],
          };
          default:
             return state
        }}

const store = createStore(reducer)

export default store ; 