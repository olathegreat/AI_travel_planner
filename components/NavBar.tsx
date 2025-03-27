import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const NavBar = ({heading}: any) => {
  const router = useRouter();
  return (
    <View className="w-full h-20  flex flex-row justify-between items-center fixed ">
      <TouchableOpacity onPress={()=>router.replace('/home')} className="h-10 w-10 rounded-md">
        <Image className="h-full w-full object-cover" source={require("../assets/images/navmenu.png")} />
      </TouchableOpacity>

      <Text className="text-white text-3xl font-outfit-medium">{heading}</Text>

      <TouchableOpacity className="h-10 w-10 rounded-xl">
          <Image className="h-full w-full object-cover" source={require("../assets/images/Intersect.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
