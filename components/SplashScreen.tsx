import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const SplashScreen = ({skipClick}:any) => {
  const router = useRouter();



  return (
    <View className="flex-1 relative">
      <View className="w-full h-full ">
        <Image
          className="object-cover w-full h-full"
          source={require("../assets/images/splashscreen.jpg")}
        />
      </View>

      <View className="absolute top-0 left-0 right-0 pt-10 w-full ">
        <View className="flex justify-between items-center flex-row px-5 w-full">
          <View className="flex justify-between items-center flex-row px-5 gap-1">
            <View className="h-1 w-10 rounded-md bg-orange-400"></View>
            <View className="h-1 w-3 rounded-md bg-gray-400/25"></View>
            <View className="h-1 w-3 rounded-md bg-gray-400/25"></View>
          </View>
          <TouchableOpacity onPress={()=>router.replace('/(tabs)/home')} className="bg-gray-700/30 px-7 py-3  rounded-md">
            <Text className="text-white font-outfit-medium text-lg">Skip</Text>
          </TouchableOpacity>
        </View>


        <View className="flex items-center justify-center mt-20">
            <Text className="text-white font-outfit-medium text-6xl mb-5">ColdnBrew</Text>
            <Text className="text-gray-500 font-outfit text-lg">Buy the best and premium</Text>
            <Text className="text-gray-500 font-outfit text-lg">Coffee, Beans and Coffee maker</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
