import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import "../styles/global.css"
import { auth } from '@/configs/FirebaseConfig'
import { Redirect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import SplashScreen from '@/components/SplashScreen'

const index = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

      setTimeout(()=>{
        setIsLoading(false)
      },3000)
      

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