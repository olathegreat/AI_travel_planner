import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import 'react-native-get-random-values'
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "@/context/CreateTripContext";
import { GooglePlaceDetail } from "react-native-google-places-autocomplete";

interface CustomGooglePlaceDetail extends GooglePlaceDetail {
  photos?: { photo_reference: string }[];
}

const SearchPlace = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const context = useContext(CreateTripContext);

  // Ensure the context is not null
  if (!context) {
    throw new Error("SearchPlace must be used within a CreateTripContext.Provider");
  }

  const { tripData, setTripData } = context;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      title: "Search Place",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontFamily: "outfit-bold",
        fontSize: 20,
      },
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View className="p-6 pt-20 bg-white h-full">
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search Place"
        onFail={(err) => console.log(err)}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);

          const placeDetails = details as CustomGooglePlaceDetail;

          setTripData({
            ...tripData, // Preserve existing trip data
            locationInfo: {
              name: data.description,
              coordinates: placeDetails?.geometry?.location,
              photoRef: placeDetails?.photos?.[0]?.photo_reference || null,
              details: placeDetails?.url,
            },
          });

          router.push("/create-trip/select-traveler");
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 25,
          },
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
      />
    </View>
  );
};

export default SearchPlace;