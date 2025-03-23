import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "@/context/CreateTripContext";
import moment from "moment";

const ReviewTrip = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const context = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Review Trip",
    });
  }, []);
  if (!context) {
    throw new Error(
      "SelectTraveler must be used within a CreateTripContext.Provider"
    );
  }

  const { tripData, setTripData } = context;

  return (
    <View className="h-full p-6 pt-20 bg-white">
      <Text className="text-md font-outfit-bold mt-5">Review Trip</Text>

      <View className="mt-5">
        <Text className="font-outifit-bold text-md mb-5">
          Before generating your trip please review your selection
        </Text>
      </View>

      <View className="mt-8 flex flex-row gap-5">
        {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
        <Text className="text-3xl">📍</Text>

        <View>
          <Text className="font-outfit text-lg text-gray-500">
            {" "}
            Destination
          </Text>
          <Text className="font-outfit-medium text-lg ">
            {tripData.locationInfo.name}
          </Text>
        </View>
      </View>



      <View className="mt-8 flex flex-row gap-5">
        {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
        <Text className="text-3xl">📅</Text>

        <View>
          <Text className="font-outfit text-lg text-gray-500">
            {" "}
            Travel Day
          </Text>
          <Text className="font-outfit-medium text-lg ">
            {moment(tripData?.startDate).format("DD MMM") + ' to ' + moment(tripData?.endDate).format("DD MMM")}
             {" "}
            ({tripData.totalNoOfDays} days)
          </Text>
        </View>
      </View>

      <View className="mt-8 flex flex-row gap-5">
        {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
        <Text className="text-3xl">🚍</Text>

        <View>
          <Text className="font-outfit text-lg text-gray-500">
            {" "}
            Who is travelling?
          </Text>
          <Text className="font-outfit-medium text-lg ">
            {tripData.traveler.title}
          </Text>
        </View>
      </View>

      <View className="mt-8 flex flex-row gap-5">
        {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
        <Text className="text-3xl">💰</Text>

        <View>
          <Text className="font-outfit text-lg text-gray-500">
            {" "}
            Budget Info
          </Text>
          <Text className="font-outfit-medium text-lg ">
            {tripData.budget}
          </Text>
        </View>
      </View>

         <TouchableOpacity className='bg-black p-4 rounded-md mt-5' 
         onPress={() => router.replace('/create-trip/generate-trip')}
         >
              <Text className='text-white text-center font-outfit-medium text-lg'>Build My Trip</Text>
            </TouchableOpacity>
    </View>
  );
};

export default ReviewTrip;
