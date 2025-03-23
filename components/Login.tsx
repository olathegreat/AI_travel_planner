import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const firstimg = require('../assets/images/firstimg.jpg');


const Login = () => {
  const router = useRouter();
  return (
    <View className='!w-[100vw] '>
      
      <Image
       source={firstimg}
       resizeMode='cover'
      
       
       style={{
        width: '100%',
        height: 400,
       }}

       />

       <View className='-mt-[20px]  bg-white h-full border-t-4 border-blue-300 rounded-t-2xl p-4 '>
        <Text className='text-[25px] text-black text-center font-outfit-bold' >AI Travel Planner</Text>
        <Text
           style={{
            fontFamily: 'outfit'
           }}
           className='text-sm text-center text-gray-500 p-6 mt-2'
        >
          Discover your next adventure effortlessly with our AI-powered travel planner. Personalised adventure at your fingertips.
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/auth/signin')}
        
        className='p-4 bg-black rounded-full mt-4'>
          <Text style={{fontFamily: 'outfit'}} className='text-white text-sm text-center'>Get Started</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default Login