import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import moment from 'moment'

const UserTripCard = ({trip}: any) => {
    const formatData = (data: any)=>{
   return JSON.parse(data);
    }
  return (
    <View className='mt-5 flex flex-row gap-5 items-center'>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${formatData(trip.tripData).locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
        className="w-[100px] h-[100px] rounded-xl object-cover"
      />

      <View >
        <Text className='font-outfit-medium text-xl'>{trip.tripPlan.tripDetails.location}</Text>
        <Text className='font-outfit text-lg text-gray-500'>{moment(formatData(trip.tripData).startDate).format("DD MMM YYYY")}</Text>
        <Text  className='font-outfit text-lg text-gray-500'>Travelling: {formatData(trip.tripData).traveler.title}</Text>

      </View>
    </View>
  )
}

export default UserTripCard