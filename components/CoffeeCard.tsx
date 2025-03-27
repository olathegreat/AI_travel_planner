import { View, Text, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { updateCartItems } from "@/utils/userCartSlice";



interface CartItem {
  type: string;
  shortDesc: string;
  price: number;
  quantity: number;
  totalPrice: number;
  cupSize?: string;
  size?: string;
  image: string;
}

const CoffeeCard = ({ data }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);



  const addItemToCart = ()=>{

    const cartItem:CartItem = {
      type: data.type,
      shortDesc: data.shortDesc,
      price: data.price,
      quantity: quantity,
      totalPrice: data.price * quantity,
      cupSize: data.cupSize.size,
      image: data.image

    }
    dispatch(updateCartItems(cartItem));
    ToastAndroid.show("item added to cart", ToastAndroid.BOTTOM)

  }
  return (
    <View className="w-[184px] h-[300px] rounded-3xl  p-3 pr-3 bg-gradient-to-tl from-gray-950 to-gray-600 relative">
       
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
          borderRadius: 8, // matches rounded-lg
        }}
      />
      <View className="w-[162px] h-[160px] rounded-3xl bg-gray-950 relative">
        <Image className='w-full h-full  rounded-2xl object-cover' source={{uri:data.image}}/>
        {/* <Image
          className="w-full h-full  rounded-2xl object-cover"
          source={require("../assets/images/splashscreen.jpg")}
        /> */}

        <View className="flex gap-1 flex-row items-center w-20  absolute right-0 top-0 py-2 px-5 pl-6 bg-black/50  rounded-tr-2xl rounded-bl-2xl">
          <Text>⭐ </Text>
          <Text className="text-white">{data.rating}</Text>
        </View>
      </View>

      <Text className="text-white text-xl mt-3 font-outfit">
        {data.type}
      </Text>
      <Text className="text-white text-sm mt-3 font-outfit">
        {data.shortDesc}
      </Text>

      <View className="w-full flex flex-row justify-between items-center mt-4">
        <View className="flex flex-row items-center gap-2">
          <Text className="font-outfit-medium text-secondary text-xl">$</Text>
          <Text className="font-outfit-medium text-2xl text-white">{data.price}</Text>
        </View>

        <TouchableOpacity 
            onPress={()=>{
              if(data.cupSize){
                router.push({
                  pathname: "/pages/CoffeePage",
                  params: {data: JSON.stringify(data)}
                })
              }else{
                router.push({
                  pathname: "/pages/CoffeeBeansPage",
                  params: {data: JSON.stringify(data)}
                })

              }
             
            }}
        
        className="bg-secondary text-white rounded-md px-4 py-2">
          <Text className="text-3xl text-white">+</Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeCard;
