import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const FlightInfo = ({ flightData }: any) => {
  return (
    <View className="mt-5  p-3 rounded-md border-[1px] border-gray- ">
      <View className="flex flex-row items-center justify-between">
        <Text className="font-outfit-bold text-2xl">➡️Flights</Text>

        <TouchableOpacity className="bg-black rounded-md p-1 w-[100px] mt-2">
          <Text className="text-center text-white font-outfit">Book Here</Text>
        </TouchableOpacity>
      </View>
      <Text className="font-outfit text-lg mt-2">Airline: Delta</Text>

      <Text className="font-outfit text-lg">Price: {flightData.price}</Text>
    </View>
  );
};

export default FlightInfo;
