import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import moment from "moment";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
const UserTripList = ({ userTrips }: any) => {
  const LatestTrip = JSON.parse(userTrips[userTrips.length - 1]?.tripData);
  const router = useRouter();

  return (
    <ScrollView>
      <View className="mt-5">
        {LatestTrip.locationInfo.photoRef ? (
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${LatestTrip.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
            }}
            className="w-full h-[240px] rounded-xl object-cover"
          />
        ) : (
          <Image
            source={require("./../../assets/images/firstimg.jpg")}
            className="w-full h-[240px] rounded-xl object-cover"
          />
        )}
        <View className="mt-3">
          <Text className="font-outfit-medium text-3xl ">
            {userTrips[userTrips.length - 1]?.tripPlan?.tripDetails?.location}
          </Text>

          <View className="flex justify-between flex-row mt-2">
            <Text className="font-outfit text-xl text-gray-600">
              {moment(LatestTrip.startDate).format("DD MMM YYYY")}
            </Text>

            <Text className="font-outfit text-xl text-gray-500">
              🚍 {LatestTrip.traveler.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: JSON.stringify(userTrips[userTrips.length - 1]),
                }, // Pass the trip data as a string
              });
            }}
            className="bg-black p-4 rounded-xl mt-3"
          >
            <Text className="text-white text-center font-outfit-medium text-xl">
              See your plan
            </Text>
          </TouchableOpacity>
        </View>

        {userTrips.map((trip: any, index: number) => {
          // const tripData = JSON.parse(trip.tripData);
          return (
            <TouchableOpacity
            key={index}
              onPress={() => {
                console.log("usertripss", JSON.stringify(trip));
                router.push({
                  pathname: "/trip-details",
                  params: { trip: JSON.stringify(trip) }, // Pass the trip data as a string
                });
              }}
            >
              <UserTripCard trip={trip} key={index} />
            </TouchableOpacity>
          );
        })}
      </View>
      <View className="w-full h-[80px]">

      </View>
    </ScrollView>
  );
};

export default UserTripList;
