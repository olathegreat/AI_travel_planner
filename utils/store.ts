import { configureStore } from "@reduxjs/toolkit";
import userCartReducer from './userCartSlice'
import favoritesReducer from './favoritesSlice'




export const store = configureStore({
    reducer:{
        userCart: userCartReducer,
        favorites: favoritesReducer
    },

})
