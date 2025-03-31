import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export interface CartItem {
    type: string;
    shortDesc: string;
    price: number;
    quantity: number;
    totalPrice: number;
    cupSize?: string;
    size?: string;
    image: string;
  }
const OrderHistoryCard = ({data}:{data:CartItem}) => {
  return (
    <View className="w-full h-fit p-5">
      <LinearGradient
        colors={["#4B5563", "#111827"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 32, // matches rounded-lg
        }}
      />

      <View className="flex flex-row justify-between items-center">
      <View className="flex flex-row gap-5 items-center">
        
        <Image
          className="w-20 h-20 rounded-lg object-cover"
          source={{uri: data.image}}
        />

        <View>
          <Text className="font-outfit-medium text-white text-2xl">
            {data.type}
          </Text>
          <Text className="text-white mt-2">{data.shortDesc}</Text>
        </View>

        </View>

        <View className="flex flex-row items-center gap-2">
          <Text className="text-outfit-medium text-secondary text-2xl">$</Text>
          <Text className="text-outfit-medium text-white text-2xl">{data.price}</Text>
        </View>
      </View>

      <View className="flex flex-row items-center justify-between mt-4">
        <View className="flex flex-row items-center ">
            <Text className="bg-gray-900 w-20 h-fit rounded-tl-lg rounded-bl-lg  text-center text-white text-xl py-2 px-3">{data?.size} {data?.cupSize}</Text>

            <View className="bg-gray-900 w-20  h-fit rounded-tr-lg rounded-br-lg flex flex-row py-2 px-3 items-center justify-center gap-2 border-l-gray-500 border-l ">
                <Text className="text-secondary text-xl">$</Text>
                <Text className="text-white text-xl">{data.price}</Text>


            </View>


        </View>


        <View className="flex flex-row items-center gap-2">
            <Text className="text-secondary text-2xl font-outfit-medium">X</Text>
            <Text className="text-white text-2xl font-outfit-medium">{data.quantity}</Text>
        </View>

        <View>
            <Text className="text-secondary text-2xl font-outfit-medium">$ {data.totalPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderHistoryCard;
