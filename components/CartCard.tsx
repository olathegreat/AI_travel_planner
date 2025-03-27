import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { removeCartItem } from "@/utils/userCartSlice";
interface CartItem {
    type: string;
    shortDesc: string;
    price: number;
    quantity: number;
    cupSize?: string;
    size?: string;
    image: string;
    totalPrice: number;
  }
  
  interface CoffeeBeansCartCardProps {
    data: CartItem;
    updateQuantity: (updatedItem: CartItem) => void;
  }
export const CoffeeCartCard = ({ data, updateQuantity }: CoffeeBeansCartCardProps) => {
    const [quantity, setQuantity] = useState(data.quantity);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity({ ...data, quantity: newQuantity, totalPrice: data.price * newQuantity });
      };
    
      const handleDecrement = () => {
        const newQuantity = Math.max(1, quantity - 1); 
        setQuantity(newQuantity);
        updateQuantity({ ...data, quantity: newQuantity,totalPrice: data.price * newQuantity });
      };
  return (
    <View className="w-full h-fit p-3 relative">
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
          borderRadius: 8, // matches rounded-lg
        }}
      />

      <View className="flex flex-row gap-5">
        <Image
          className="w-32 h-32 rounded-lg object-cover"
          source={{ uri: data.image }}
        />

        <View className="flex justify-between">
          <View>
            <Text className="font-outfit-medium text-white text-2xl">
              {data.type}
            </Text>
            <Text className="text-white mt-2">{data.shortDesc}</Text>
          </View>

          {/* <Text className="bg-gray-900 text-white text-center p-4 rounded-lg mt-5">Medium Roasted</Text> */}
          <View className="flex flex-row mt-6 gap-8">
            <Text className="bg-gray-900 text-white text-xl text-center p-2 px-8 rounded-lg ">
              {data.cupSize}
            </Text>

            <View className="flex flex-row items-center gap-2">
              <Text className="text-outfit-medium text-secondary text-2xl">
                $
              </Text>
              <Text className="text-outfit-medium text-white text-2xl">
                {data.price}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View className="flex flex-row justify-between items-center mt-4">
          <Text className="text-white bg-gray-900 rounded-md text-center font-outfit-medium text-xl px-8 py-2">
            {data.cupSize}
          </Text>

          <View className="flex flex-row gap-2">
            <Text className="text-outfit-medium text-secondary text-2xl">
              $
            </Text>
            <Text className="text-outfit-medium text-white text-2xl">{data.totalPrice}</Text>
          </View>

          <TouchableOpacity onPress={handleDecrement} className="bg-secondary rounded-lg p-2 py-1">
            <Text className="text-white font-outfit-medium text-3xl"> - </Text>
          </TouchableOpacity>
          <Text className="text-white bg-gray-900 border-2 border-secondary rounded-lg py-1 px-8 font-outfit-medium text-2xl">
            {data.quantity}
          </Text>

          <TouchableOpacity 
          onPress={ handleIncrement}
          className="bg-secondary rounded-lg p-2 py-1">
            <Text className="text-white font-outfit-medium text-3xl"> + </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
      
      onPress={()=>dispatch(removeCartItem(data))}
className="flex  justiy-center items-center  w-full mt-3 ">
<MaterialIcons name="highlight-remove" size={36} color="gray" />
</TouchableOpacity>
      
    </View>
  );
};

export const CoffeeBeansCartCard = ({ data, updateQuantity }: CoffeeBeansCartCardProps) => {
    const [quantity, setQuantity] = useState(data.quantity);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity({ ...data, quantity: newQuantity, totalPrice: data.price * newQuantity });
      };
      const handleDecrement = () => {
        const newQuantity = Math.max(1, quantity - 1); // Ensure quantity doesn't go below 1
        setQuantity(newQuantity);
        updateQuantity({ ...data, quantity: newQuantity,totalPrice: data.price * newQuantity });
      };
  return (
    <View className="w-full h-fit p-3">
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
          borderRadius: 8, // matches rounded-lg
        }}
      />

      <View className="flex flex-row gap-5">
        <Image
          className="w-32 h-32 rounded-lg object-cover"
          source={{ uri: data.image }}
        />

        <View className="flex justify-between">
          <View>
            <Text className="font-outfit-medium text-white text-2xl">
              {data.type}
            </Text>
            <Text className="text-white mt-2">{data.shortDesc}</Text>
          </View>

          {/* <Text className="bg-gray-900 text-white text-center p-4 rounded-lg mt-5">Medium Roasted</Text> */}
          <View className="flex flex-row mt-6 gap-8">
            <Text className="bg-gray-900 text-white text-xl text-center p-2 px-8 rounded-lg ">
              {data.size}
            </Text>

            <View className="flex flex-row items-center gap-2">
              <Text className="text-outfit-medium text-secondary text-2xl">
                $
              </Text>
              <Text className="text-outfit-medium text-white text-2xl">
                {data.price}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View className="flex flex-row justify-between items-center mt-4">
          <Text className="text-white bg-gray-900 rounded-md text-center font-outfit-medium text-xl px-8 py-2">
            {data.size}
          </Text>

          <View className="flex flex-row gap-2">
            <Text className="text-outfit-medium text-secondary text-2xl">
              $
            </Text>
            <Text className="text-outfit-medium text-white text-2xl">{data.totalPrice}</Text>
          </View>

          <TouchableOpacity onPress={handleDecrement} className="bg-secondary rounded-lg p-2 py-1">
            <Text className="text-white font-outfit-medium text-3xl"> - </Text>
          </TouchableOpacity>
          <Text className="text-white bg-gray-900 border-2 border-secondary rounded-lg py-1 px-8 font-outfit-medium text-2xl">
            {data.quantity}
          </Text>

          <TouchableOpacity onPress={handleIncrement} className="bg-secondary rounded-lg p-2 py-1">
            <Text className="text-white font-outfit-medium text-3xl"> + </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
      
      onPress={()=>dispatch(removeCartItem(data))}
className="flex  justiy-center items-center  w-full mt-3  ">
<MaterialIcons name="highlight-remove" size={36} color="gray" />
</TouchableOpacity>
      
    </View>
  );
};
