import { View, Text } from 'react-native'
import React from 'react'

const OptionCard = ({option, selectedOption}: any) => {
  return (
    <View className={`p-6 flex flex-row justify-between items-center ${selectedOption?.id === option?.id && 'border-2'}  bg-gray-200 rounded-md`}>
     <View>
        <Text className='text-lg font-outfit-bold'>{option.title}</Text>
        <Text className='text-gray-600 font-outfit'>{option.desc}</Text>
     </View>

     <View>
        <Text className='text-xl'>{option.icon}</Text>
     </View>
    </View>
  )
}

export default OptionCard