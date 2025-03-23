import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import moment from "moment";
import FlightInfo from "@/components/TripDetails/FlightInfo";
import HotelList from "@/components/TripDetails/HotelList";
import PlannedTrip from "@/components/TripDetails/PlannedTrip";

const TripDetails = () => {
  const navigation = useNavigation();
  const { trip: tripString } = useLocalSearchParams(); // Destructure the `trip` key

  const [tripDetails, setTripDetails] = useState<any>(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Trip Details",
    });

    // Parse the `tripString` into an object
    if (tripString && typeof tripString === "string") {
      try {
        const parsedTrip = JSON.parse(tripString);
        setTripDetails(parsedTrip);
        
      } catch (error) {
        console.error("Failed to parse trip data:", error);
      }
    } else {
      console.error("Invalid or missing trip data:", tripString);
    }
  }, [tripString]);

  if (!tripDetails) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "#555" }}>Loading trip details...</Text>
      </View>
    );
  }

  // Helper function to parse nested JSON strings
  const parseNestedData = (data: any) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Failed to parse nested data:", error);
      return null;
    }
  };

  const tripData = parseNestedData(tripDetails.tripData);

  return (
    <ScrollView className="min-h-full bg-white">
      <Image
        style={{ width: "100%", height: 330 }}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${tripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
      />

      <View className="p-4 bg-white h-[100%] -mt-8 rounded-t-3xl">
        <Text className="font-outfit-medium text-xl">
          {tripDetails.tripPlan?.tripDetails?.location || "Unknown Location"}
        </Text>
        <Text className="text-3xl font-outfit-bold">
          {tripData?.locationInfo?.name || "No Location Name"}
        </Text>

        <View className="flex flex-row gap-2 my-2">
          <Text className="font-outfit text-xl text-gray-500">
            {moment(tripData?.startDate).format("DD MMM YYYY")}
          </Text>
          <Text className="font-outfit text-xl text-gray-500">
            {" "}
            - {moment(tripData?.endDate).format("DD MMM YYYY")}
          </Text>
        </View>

        <Text className="font-outfit text-xl text-gray-500">
          🚍 {tripData?.traveler?.title || "Unknown Traveler"}
        </Text>

        {/* Flight Info */}
        <FlightInfo flightData={tripDetails.tripPlan?.flights} />

        {/* Hotel List */}
        <HotelList hotelList={tripDetails.tripPlan?.hotels} />

        {/* Trip Day Plan */}
        <PlannedTrip  details={tripDetails?.tripPlan?.dailyPlan}/>
        {/* Add your component for displaying the daily plan here */}
      </View>
    </ScrollView>
  );
};

export default TripDetails;