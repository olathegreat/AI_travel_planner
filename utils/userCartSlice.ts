// features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface CartItem {
  type: string;
  shortDesc: string;
  price: number;
  quantity: number;
  totalPrice: number;
  cupSize?: string;
  size?: string;
  image: string;
}

interface CartState {
  value: number;
  cart: CartItem[];
}



const initialState: CartState = {
  value: 0,
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartItems: (state, action: PayloadAction<CartItem>) => {
      // Check if item already exists in cart
      let existingItemIndex;

      if(action.payload.cupSize){
        existingItemIndex = state.cart.findIndex(
          item => item.type === action.payload.type && 
                 item.cupSize === action.payload.cupSize
        );
      
      

      if (existingItemIndex >= 0) {
        
        state.cart[existingItemIndex] = action.payload;
      } else {
        state.cart.push(action.payload);
      }
    }else if(action.payload.size){

existingItemIndex = state.cart.findIndex(
          item => item.type === action.payload.type && 
                 item.size === action.payload.size
        );
      
      

      if (existingItemIndex >= 0) {
        
        state.cart[existingItemIndex] = action.payload;
      } else {
        state.cart.push(action.payload);
      }
    }

      const asyncStorageFunction = async ()=>{
        await AsyncStorage.setItem("cart", JSON.stringify(state.cart))
      } 

      asyncStorageFunction()

     
      
      console.log('Updated cart:', state.cart);
    },
    removeCartItem: (state, action: PayloadAction<CartItem>) => {
       if(action.payload.cupSize){

       
       state.cart = state.cart.filter((item)=> !(
          item.type === action.payload.type && 
          item.cupSize === action.payload.cupSize
       ))
      }else{
        state.cart = state.cart.filter((item)=> !(
          item.type === action.payload.type && 
          item.size === action.payload.size
       ))
      }

      const asyncStorageFunction = async ()=>{
        await AsyncStorage.setItem("cart", JSON.stringify(state.cart))
      } 

      asyncStorageFunction()

     
      
      console.log('Updated cart:', state.cart);
    },

    cartSetter : (state, action)=>{
       if(action.payload.length > 0){
        state.cart = action.payload;
        console.log("local storage retrieved ", state.cart)
       }else{
        state.cart = []
       }
    }
    
  },
});

export const { updateCartItems , cartSetter, removeCartItem} = cartSlice.actions;
export default cartSlice.reducer;