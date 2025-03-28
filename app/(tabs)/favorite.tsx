import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import FavoriteCard from '@/components/FavoriteCard'
import { useSelector } from 'react-redux'
import { useRouter } from 'expo-router'

const Favorite = () => {
  const storageData = useSelector((state:any)=>state.favorites.favorites);
  const [data, setData] = useState(storageData);
  const router = useRouter();

  useEffect(() => {

    setData(storageData);
    console.log("favorite data", data )
  
    
  }, [storageData])


  if (data.length === 0) {
    return (
      <View className="flex-1 p-5 relative bg-primary pt-10">
        <NavBar heading="Favorite" />

        <Text className="text-white/70 font-outfit-medium text-2xl text-center mt-20">
          No item in Favorite
        </Text>

        <TouchableOpacity
          onPress={() => router.back()}
          className="flex items-center"
        >
          <Text className="font-outfit text-lg text-center  w-[100px] border-b-secondary border-b-2  mt-4 text-decoration text-secondary">
            {" "}
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View className='flex-1 p-5 relative bg-primary pt-10'>

      <NavBar heading="Favorite"/>

      <FlatList
               
                className="space-x-3 mt-4"
                data={data}
                renderItem={( {item} ) => (
                  <TouchableOpacity 
                  onPress={()=>{
                    if(item.cupSize){
                      console.log("data before click",item )
                      router.push({
                        pathname: "/pages/CoffeePage",
                        params: {data: JSON.stringify(item)}
                      })
                    }else{
                      router.push({
                        pathname: "/pages/CoffeeBeansPage",
                        params: {data: JSON.stringify(item)}
                      })
      
                    }
                  }}
                  
                  className="mb-4">
                   
                    <FavoriteCard data={item}/>
                  </TouchableOpacity>
                )}
              />
      
     

    </View>
  )
}

export default Favorite