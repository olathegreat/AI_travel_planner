import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const NavBar = () => {
  return (
    <View className="w-full h-20  flex flex-row justify-between items-center ">
      <TouchableOpacity className="h-10 w-10 rounded-md">
        <Image className="h-full w-full object-cover" source={require("../assets/images/navmenu.png")} />
      </TouchableOpacity>

      <TouchableOpacity className="h-10 w-10 rounded-xl">
          <Image className="h-full w-full object-cover" source={require("../assets/images/Intersect.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
