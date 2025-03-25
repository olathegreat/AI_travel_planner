import { View, Text, FlatList,  TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { coffeeArray, coffeeTypes } from '@/constants/Option'
import CoffeeCard from './CoffeeCard';

const AllCoffeeDisplay = () => {
    const [activeNavType, setActiveNavType] = useState(coffeeTypes[0]);
    const [coffeeData, setCoffeeData] = useState<Array<typeof coffeeArray[0]>>(coffeeArray);

    const coffeeArraySetter = (data: string) => {
      if (data !== 'All') {
        
        const newData = coffeeArray.filter((item) => item.type === data);
        setCoffeeData(newData); 
      } else {
        setCoffeeData(coffeeArray);
      }
    };
  return (
    <View>
      

      <FlatList
         data={coffeeTypes}
         showsHorizontalScrollIndicator={false}
         renderItem={({item}) => (
            <TouchableOpacity onPress={() => {
              setActiveNavType(item)
              coffeeArraySetter(item)
            }
            
           
            
            } className='flex gap-1  mr-4 items-center'>


           <Text className={`${activeNavType === item ? "text-secondary " :"text-gray-500"}  text-xl font-outfit-medium mt-3`}>{item}</Text>
           {
            activeNavType === item && <View className='w-2 h-2 rounded-full bg-secondary'/>
           }
          
           </TouchableOpacity>
         )}
         horizontal
         className='space-x-3'
      />

      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      className='space-x-3 mt-4'
      data={coffeeData}
        renderItem={({item})=>(
          <View className='mr-4'>
<CoffeeCard data={item}/>
</View>
        )}
      />



    </View>
  )
}

export default AllCoffeeDisplay