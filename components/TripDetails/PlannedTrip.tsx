
import { View, Text } from "react-native";
import React from "react";
import PlaceCard from "./PlaceCard";

const PlannedTrip = ({ details }: any) => {
  return (
    <View className="mt-5  p-4 rounded-lg">
      <Text className="text-xl font-outfit-bold">🚵‍♀️ Planned Details</Text>

     
        <View
       
          className=" p-4 rounded-lg ">
          
          {details.map((day: any, index: number) => {
   
        if (day.afternoon) {
          return (
            <View key={index}>
              <Text className="font-outfit-medium text-xl mt-5">
                Day {day.day}: {day.theme}
              </Text>

              {/* Render the afternoon activity */}
              <PlaceCard place={day.afternoon} />
            </View>
          );
        }
        return null; 
      })}

         
        </View>
   
    </View>
  );
};

export default PlannedTrip;