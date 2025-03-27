import { configureStore } from "@reduxjs/toolkit";
import userCartReducer from './userCartSlice'




export const store = configureStore({
    reducer:{
        userCart: userCartReducer
    },

})
