import { View, Text, FlatList } from "react-native";
import React from "react";
import { Image } from "react-native";
import { GetPhotoReference } from "@/services/GooglePlaceApi";
import HotelCard from "./HotelCard";
const firstimg = require("../../assets/images/firstimg.jpg");

const HotelList = ({ hotelList }: any) => {
 


   
  

  return (
    <View className="mt-5">
      <Text className="font-outfit-bold text-xl">🏩 Hotel Recommendation</Text>

      <FlatList
        style={{
          marginTop: 7,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hotelList}
        renderItem={({ item, index }) => (
          <HotelCard item={item}/>
        )}
        keyExtractor={(item, index) => index.toString()} // Add a key extractor
      />
    </View>
  );
};

export default HotelList;