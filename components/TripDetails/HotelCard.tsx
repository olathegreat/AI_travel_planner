// import { View, Text, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { GetPhotoReference } from '@/services/GooglePlaceApi';

// const HotelCard = ({item}: any) => {
//     const [photoRef, setPhotoRef] = useState<any>(null);

//     useEffect(()=>{
//         GetGooglePhotoRef()
//     }, [])
//     const GetGooglePhotoRef = async () =>{
//         const result = await  GetPhotoReference(item.hotelName)
//         setPhotoRef(result)
//      }
//   return (
//     <View className="mr-4 w-[180px] border-[1px] rounded-md">
//             <Image
//               source={{uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`}}
//               className="w-[180px] h-[100px] rounded-lg"
//             />

//             <View className="p-2">
//               <Text className="font-outfit-medium text-lg">
//                 {item.hotelName || "Unknown Hotel"}
//               </Text>

//               <View className="flex flex-row justify-between">
//                 <Text className="font-outfit">
//                   ⭐ {item.rating || "N/A"} {/* Fallback for missing rating */}
//                 </Text>

//                 <Text className="font-outfit">
//                   💰 {item.price || "N/A"} {/* Fallback for missing price */}
//                 </Text>
//               </View>
//             </View>
//           </View>
//   )
// }

// export default HotelCard


import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GetHotelDetails , GetHotelPhoto } from '@/services/GooglePlaceApi'; // Assume these functions are implemented
const firstimg = require('../../assets/images/firstimg.jpg');
const HotelCard = ({ item }: any) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchHotelPhoto();
  }, []);

  const fetchHotelPhoto = async () => {
    try {
      // Step 1: Get place details using the hotel name
      const placeDetails = await GetHotelDetails(item.hotelName);
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

  return (
    <View className="mr-4 w-[180px] border-[1px] rounded-md">
      {photoUrl ? (
        <Image
          source={{ uri: photoUrl }}
          className="w-full h-[100px] rounded-md"
        />
      ) : <Image
                  source={firstimg}
               className="w-full h-[100px] rounded-md rounded-b-none"
                />
    }

      <View className="p-2">
        <Text className="font-outfit-medium text-lg">
          {item.hotelName || "Unknown Hotel"}
        </Text>

        <View className="flex flex-row justify-between flex-wrap">
          <Text className="font-outfit">
            ⭐ {item.rating || "N/A"} {/* Fallback for missing rating */}
          </Text>

          <Text className="font-outfit">
            💰 {item.price || "N/A"} {/* Fallback for missing price */}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;