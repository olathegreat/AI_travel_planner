import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


const StartNewTripCard = () => {
    const router = useRouter();
  return (
    <View className='p-5 mt-12 flex items-center gap-5 '>
      
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text className='text-md font-outfit-medium '>No trips planned yet</Text>

      <Text className='font-outfit text-center text-gray-600'>Looks like it is time to plan a new travel experience! Get started below </Text>
      
      <TouchableOpacity
        onPress={()=>router.push('/create-trip/search-place')}
         className='p-3 bg-black rounded-xl px-7'
      >
        <Text className='text-white font-outfit-medium text-md'>Start A New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartNewTripCard