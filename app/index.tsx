import { View, Text } from 'react-native'
import React from 'react'
import Login from '@/components/Login'
import "../styles/global.css"
import { auth } from '@/configs/FirebaseConfig'
import { Redirect } from 'expo-router'

const index = () => {

    const user = auth.currentUser;
     
  return (
    <View className='flex-1'>
    
      {
        user ? 
        <Redirect href={'/mytrip'}/> : <Login/>
      }
        
      {/* </Text> */}
    </View>
  )
}

export default index