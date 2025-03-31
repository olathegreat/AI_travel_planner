import { configureStore } from "@reduxjs/toolkit";
import userCartReducer from './userCartSlice'
import favoritesReducer from './favoritesSlice'
import orderHistoryReducer from './orderHistorySlice'



export const store = configureStore({
    reducer:{
        userCart: userCartReducer,
        favorites: favoritesReducer,
        orderHistory: orderHistoryReducer
    },

})
