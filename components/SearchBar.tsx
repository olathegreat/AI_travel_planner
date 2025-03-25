import { View, Text, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const SearchBar = () => {
  const [textValue, setTextValue] = useState("");
  return (
    <View className="w-full h-14 bg-gray-500/25 rounded-lg flex flex-row items-center px-5">
        <TouchableOpacity>
           <Ionicons name="search" size={24} color="gray" className="w-fit" />
        </TouchableOpacity>
     
      <TextInput
      value={textValue}
      onChangeText={(text) => setTextValue(text)}
        placeholder="Search"
        className="flex-grow  font-outfit placeholder:font-outfit text-xl text-white ml-4 placeholder:text-gray-500"
      />
    </View>
  );
};

export default SearchBar;
