
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';


export interface FavoriteItem {
  type: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  quantity: number;
  totalPrice: number;
  cupSize?: string;
  size?: string;
  image: string;
}

export interface CoffeeData {
  image: string;
  type: string;
  shortDesc: string;
  longDesc: string;
  rating: string;
  price: number;
  sizes?: { size: string; price: number }[];
  cupSize?: { 
    size: string; 
    price: number }[];
}

interface FavoriteState {
  value: number;
  // favorites: FavoriteItem[];
  favorites: CoffeeData[];
}



const initialState: FavoriteState = {
  value: 0,
  favorites: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    updateFavoriteItems: (state, action: PayloadAction<CoffeeData>) => {
      // Check if item already exists in favorite
      const existingItemIndex = state.favorites.findIndex(
        item => item.type === action.payload.type && 
               item.shortDesc === action.payload.shortDesc
      );

      if (existingItemIndex >= 0) {
        
        // state.favorites[existingItemIndex] = action.payload;
        state.favorites = state.favorites.filter((item)=> !(
          item.type === action.payload.type && 
          item.shortDesc === action.payload.shortDesc
       ))
       ToastAndroid.show("item removed from favorite", ToastAndroid.BOTTOM)
       console.log(' favorites removed', state.favorites);
      } else {
        state.favorites.push(action.payload);
        console.log('favorites added', state.favorites);
        ToastAndroid.show("item added to favorite", ToastAndroid.BOTTOM)
      }

      const asyncStorageFunction = async ()=>{
        await AsyncStorage.setItem("favorites", JSON.stringify(state.favorites))
      } 

      asyncStorageFunction()

     
      
     
    },
   
       

       
  
    favoritesSetter : (state, action)=>{
       if(action.payload.length > 0){
        state.favorites = action.payload;
        console.log("local storage retrieved ", state.favorites)
       }else{
        state.favorites = []
       }
    }
    
  },
});

export const { updateFavoriteItems , favoritesSetter} = favoritesSlice.actions;
export default favoritesSlice.reducer;