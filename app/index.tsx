import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import "../styles/global.css"
import { auth } from '@/configs/FirebaseConfig'
import { Redirect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import SplashScreen from '@/components/SplashScreen'
import { useDispatch } from 'react-redux'
import { cartSetter } from '@/utils/userCartSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { favoritesSetter } from '@/utils/favoritesSlice'

const index = () => {
    const [isLoading, setIsLoading] = useState(true);
     const dispatch = useDispatch();
    useEffect(()=>{

      setTimeout(()=>{
        setIsLoading(false)
      },3000)

      const asyncStorageFunction = async()=>{
        const localStorageCart = await AsyncStorage.getItem("cart");
        const localStorageFavorites = await AsyncStorage.getItem("favorites");

     

      // Proper null check and type handling
      if (localStorageCart !== null) {
        try {
          const parsedCart = JSON.parse(localStorageCart);
          if (Array.isArray(parsedCart)) { // Additional type safety
            dispatch(cartSetter(parsedCart));
          }
        } catch (error) {
          console.error("Failed to parse cart data:", error);
          dispatch(cartSetter([])); // Fallback to empty array
        }
      }



      if (localStorageFavorites !== null) {
        try {
          const parsedFavorites = JSON.parse(localStorageFavorites);
          if (Array.isArray(parsedFavorites)) { // Additional type safety
            dispatch(favoritesSetter(parsedFavorites));
          }
        } catch (error) {
          console.error("Failed to parse favorites data:", error);
          dispatch(favoritesSetter([])); // Fallback to empty array
        }
      }
      }
      asyncStorageFunction()
      

    },[]);

    if(isLoading){
      return <SplashScreen/>
    }
  
     
  return (
    
      // <SafeAreaView className='flex-1'>
      //      <Text>Splash screen</Text>

      // </SafeAreaView>

      <Redirect href={'/home'}/>
     
      // {
      //   user ? 
      //   <Redirect href={'/mytrip'}/> : <Login/>
      // } 
   
        
     
    
  )
}

export default index