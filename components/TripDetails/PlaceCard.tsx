// // import { View, Text, TouchableOpacity, Image } from 'react-native'
// // import React, { useEffect, useState } from 'react'
// // import { Ionicons } from '@expo/vector-icons'
// // import { GetPhotoReference } from '@/services/GooglePlaceApi'

// // const PlaceCard = ({place}:any) => {
// //       const [photoRef, setPhotoRef] = useState<any>(null);
// //     useEffect(()=>{
// //             GetGooglePhotoRef()
// //         }, [])
// //         const GetGooglePhotoRef = async () =>{
// //             const result = await  GetPhotoReference(place.placeName)
// //             setPhotoRef(result)
// //          }
// //   return (
// //     <View

// //     className="border-[1px] rounded-xl p-2 mt-5 border-gray-500"
// //   >
// //     <Image
// //       source={{ uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`}}
// //       className="w-full h-[100px] rounded-xl object-cover"
// //     />

// //     <View className="mt-1">
// //       <Text className="font-outfit-medium text-xl">
// //         {place.placeName}
// //       </Text>
// //       <Text className="font-outfit text-md text-gray-500">
// //         {place.description}
// //       </Text>

// //       <View className="flex flex-row justify-between mt-2 items-center">
// //         <View>
// //           <Text className="font-outfit text-lg text-gray-500 mt-1">
// //             {" "}
// //             🎟️ Ticket Price:{" "}
// //             <Text className="font-outfit-bold">
// //               {place.ticketPricing}
// //             </Text>
// //           </Text>
// //           <Text className="font-outfit text-lg text-gray-500 mt-1">
// //             {" "}
// //             ⏳ Time to Travel :{" "}
// //             <Text className="font-outfit-bold">{place.time}</Text>
// //           </Text>
// //         </View>
// //         <TouchableOpacity className="bg-black p-2 rounded-xl mt-3">
// //           <Ionicons name="navigate" size={20} color="white" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   </View>
// //   )
// // }

// // export default PlaceCard


// import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
// import React from "react";
// import { Ionicons } from "@expo/vector-icons";

// const PlaceCard = ({ place }: any) => {
//   const openGoogleMaps = () => {
//     const { latitude, longitude } = place.geoCoordinates;
//     const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
//     Linking.openURL(url).catch((err) =>
//       console.error("Failed to open Google Maps:", err)
//     );
//   };

//   return (
//     <View className="border-[1px] bg-blue-200 rounded-xl p-2 mt-5 border-gray-500">
//       <Image
//         source={{ uri: place.placeImageUrl }}
//         className="w-full h-[100px] rounded-xl object-cover"
//       />

//       <View className="mt-1">
//         <Text className="font-outfit-medium text-xl">{place.activity}</Text>
//         <Text className="font-outfit text-md text-gray-500">{place.details}</Text>

//         <View className="flex flex-row justify-between mt-2 items-center">
//           <View>
//             <Text className="font-outfit text-lg text-gray-500 mt-1">
//               🎟️ Ticket Price:{" "}
//               <Text className="font-outfit-bold">{place.ticketPricing}</Text>
//             </Text>
//             <Text className="font-outfit text-lg text-gray-500 mt-1">
//               ⏳ Best Time to Visit:{" "}
//               <Text className="font-outfit-bold">{place.bestTimeToVisit}</Text>
//             </Text>
//           </View>

//           <TouchableOpacity
//             className="bg-black p-2 rounded-xl mt-3"
//             onPress={openGoogleMaps}
//           >
//             <Ionicons name="navigate" size={20} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default PlaceCard;


import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GetHotelDetails, GetHotelPhoto, GetPlaceDetails, GetPlacePhoto } from "@/services/GooglePlaceApi"; // Assume these functions are implemented
const firstimg = require('../../assets/images/firstimg.jpg');

const PlaceCard = ({ place }: any) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  console.log('placess', place)

  useEffect(() => {
     fetchPlacePhoto();
   }, []);
 
   const fetchPlacePhoto = async () => {
     try {
       // Step 1: Get place details using the hotel name
       const placeDetails = await GetHotelDetails(place.placeName);
       if (placeDetails && placeDetails.photos && placeDetails.photos.length > 0) {
         // Step 2: Get the photo reference
         const photoReference = placeDetails.photos[0].photo_reference;
         // Step 3: Get the photo URL
         const url = await GetHotelPhoto(photoReference);
         setPhotoUrl(url);
       }
     } catch (error) {
       console.error("Failed to fetch hotel photo:", error);
     }
   };
  const openGoogleMaps = () => {
    const { latitude, longitude } = place.geoCoordinates;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open Google Maps:", err)
    );
  };

  return (
    <View className="border-[1px] bg-blue-100 rounded-xl  mt-5 border-gray-500">
      {photoUrl ? (
        <Image
          source={{ uri: photoUrl }}
          className="w-full h-[200px] rounded-xl object-cover"
        />
      ):  <Image
                        source={firstimg}
                     className="w-full h-[200px] rounded-lg"
                      />}

      <View className="mt-1 p-2">
        <Text className="font-outfit-medium text-xl">{place.activity}</Text>
        <Text className="font-outfit text-md text-gray-600">{place.details}</Text>
        <Text className="font-outfit-bold text-md mt-2  text-blue-700 ">{place?.placeName}</Text>
        <Text className="font-outfit text-lg text-gray-600">{place?.locationDescription}</Text>

        <View className="flex flex-row justify-between mt-2 gap-3 items-center">
          <View className="flex flex-col gap-2 w-[85%]">
            <Text className="font-outfit text-lg text-gray-600 mt-1">
              🎟️ Ticket Price:{" "}
              <Text className="font-outfit-bold">{place.ticketPricing}</Text>
            </Text>
            <Text className="font-outfit text-lg text-gray-600 mt-1">
              ⏳ Best Time to Visit:{" "}
              <Text className="font-outfit-bold">{place.bestTimeToVisit}</Text>
            </Text>
          </View>

          <TouchableOpacity
            className="bg-black p-2 rounded-xl mt-3 w-fit"
            onPress={openGoogleMaps}
          >
            <Ionicons name="navigate" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlaceCard;