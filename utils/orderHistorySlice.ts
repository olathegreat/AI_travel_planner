// features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { cartSetter } from './userCartSlice';


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

export interface OrderHistory{
  orderDate: string;
  totalAmount:string;
  cart: CartItem[];
}

interface OrderHistoryState {
  value: number;
  cart: CartItem[];
  orderHistory: OrderHistory[];
}



const initialState: OrderHistoryState = {
  value: 0,
  cart: [],
  orderHistory: []
};

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {
    updateOrderHistoryItems: (state, action: PayloadAction<OrderHistory>) => {
     state.orderHistory.push(action.payload);
     

      const asyncStorageFunction = async ()=>{
        await AsyncStorage.setItem("orderHistory", JSON.stringify(state.cart))
        await AsyncStorage.setItem("cart", JSON.stringify([]))
      } 

      asyncStorageFunction()

     
      
      console.log('Updated cart:', state.cart);
    },
   

    orderHistorySetter : (state, action)=>{
       if(action.payload.length > 0){
        state.orderHistory = action.payload;
        console.log("local storage order history retrieved ", state.orderHistory)
       }else{
        state.orderHistory = []
       }
    }
    
  },
});

export const { updateOrderHistoryItems, orderHistorySetter} = orderHistorySlice.actions;
export default orderHistorySlice.reducer;