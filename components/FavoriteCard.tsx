import { View, Text, Image, ScrollView, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import CoffeeNavBar from "@/components/CoffeeNavBar";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
import { updateCartItems } from "@/utils/userCartSlice";
import { LinearGradient } from "expo-linear-gradient";

interface CoffeeData {
  image: string;
  type: string;
  shortDesc: string;
  longDesc: string;
  rating: string;
  price: number;
  cupSize?: { 
    size: string; 
    price: number }[];
    sizes?: { 
        size: string; 
        price: number }[];
}


const FavoriteCard = ({data}:{data:CoffeeData}) => {

    console.log("favorite item", data)

  const [selectedCupSize, setSelectedCupSize] = useState("S");
  const [selectedCupSizePrice, setSelectedCupSizePrice] = useState(data.price)

  const dispatch = useDispatch();


 
  if (!data) {
         return (
           <View className="flex-1 bg-primary p-5 pt-10">
             <Text>Loading...</Text>
           </View>
         );
        }


  return (
    <View className="w-full  h-fit bg-primary   border-[1px] border-gray-500/30 rounded-2xl">
      
        <View >
          {data.image && (
            <Image
              className="w-full h-[400px]  object-cover rounded-t-2xl"
              source={{ uri: data.image }}
            />
          )}

          
        </View>

        <View className="bg-black/50 -mt-40 rounded-t-3xl p-5 min-h-40 flex flex-row justify-between h-fit">
          <Animatable.View
            animation="fadeInLeft"
            delay={500}
            duration={1000}
            useNativeDriver
            className="justify-between flex"
          >
            <View>

            
            <Text className="text-white font-outfit-bold text-3xl w-[180px]  text-ellipsis text-nowrap truncate overflow-hidden"
            // numberOfLines={1}
            >
              {data.type}
            </Text>
            <Text className="text-white/60 font-outfit w-[180px] ">
              {data.shortDesc}
            </Text>

            </View>
            <View className="flex flex-row gap-2 items-center ">
              <Text className="text-xl">⭐</Text>
              <Text className="text-2xl font-outfit-medium text-white">
                {data.rating}
              </Text>
              <Text className="text-white/60 font-outfit">(6,678)</Text>
            </View>
          </Animatable.View>

          <Animatable.View
            animation="fadeInRight"
            delay={500}
            duration={1000}
            useNativeDriver
            className="flex justify-between"
          >
            <View className="flex flex-row gap-2">
              <View className="bg-gray-900 h-16 w-16 justify-center rounded-lg flex items-center gap-1">
                <Fontisto name="coffeescript" size={18} color="orange" />

                <Text className="text-white font-outfit">Coffee</Text>
              </View>
              <View className="bg-gray-900 justify-center h-16 w-16 rounded-lg flex items-center gap-1">
                <FontAwesome6 name="droplet" size={18} color="orange" />

                <Text className="text-white font-outfit">Milk</Text>
              </View>
            </View>

            <View className="bg-gray-900 w-33 h-10 rounded-lg flex justify-center items-center">
              <Text className="text-white">Medium Roosted</Text>
            </View>
          </Animatable.View>
        </View>

        <View className="pb-5">

            
                      <LinearGradient
                    colors={[ '#4B5563', '#111827']}
                    start={{ x: 0, y: 0 }} 
                    end={{ x: 1, y: 1 }}   
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: 8,
                      borderTopLeftRadius:0,
                      borderTopRightRadius: 0, 
                    }}
                  />

        
        <View className="p-5">
          <Text className="text-white font-outfit text-xl mb-4">
            Description
          </Text>
          <Text className="text-white font-outfit text-lg  text-pretty">
            {data.longDesc}
          </Text>
        </View>
{/* 
        { data.cupSize && data?.cupSize.length > 0 && <View className="p-5 mt-4">
                  <Text className="text-white font-outfit text-xl mb-4">Size</Text>
                  <View className="flex flex-row gap-4">
                    {data?.cupSize?.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          setSelectedCupSize(item.size);
                          setSelectedCupSizePrice(item.price)
                        
                        }}
                        className={`bg-gray-900 flex-1 h-10 flex flex-row items-center justify-center rounded-lg ${selectedCupSize === item.size && "border border-orange-500"}`}
                      >
                        <Text
                          className={`${selectedCupSize === item.size ? "text-secondary" : "text-white"}`}
                        >
                          {item.size}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

} */}
        </View>
    </View>
  );
};

export default FavoriteCard
