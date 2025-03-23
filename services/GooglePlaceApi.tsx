export const GetPhotoReference = async (placeName: string) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/` +
      "?query=" +
      placeName +
      "&key=" +
      process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
  );

  const result = await response.json();
  console.log(result);

  return result;
};
export const GetPlaceDetails = async (placeName: string) => {
    const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY; // Ensure your API key is correctly set in your environment variables
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
      placeName
    )}&inputtype=textquery&fields=name,formatted_address,geometry,photos,rating,opening_hours&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.candidates && data.candidates.length > 0) {
        const place = data.candidates[0]; // Return the first matching result
  
        // Optionally, fetch additional details using the Place ID
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,formatted_address,geometry,photos,rating,opening_hours,website,formatted_phone_number&key=${apiKey}`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsData = await detailsResponse.json();
  
        if (detailsData.result) {
          return detailsData.result; // Return detailed place information
        }
      }
  
      return null; // No results found
    } catch (error) {
      console.error("Failed to fetch place details:", error);
      return null;
    }
  };

// export const GetPlaceDetails = async (geoCoordinates: {
//   latitude: number;
//   longitude: number;
// }) => {
//   const { latitude, longitude } = geoCoordinates;
//   const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&key=${apiKey}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.results && data.results.length > 0) {
//       return data.results[0]; // Return the first result
//     }
//     return null;
//   } catch (error) {
//     console.error("Failed to fetch place details:", error);
//     return null;
//   }
// };

export const GetPlacePhoto = async (photoReference: string) => {
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;
  const maxWidth = 400; // You can adjust this
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}`;
  return url;
};

export const GetHotelDetails = async (hotelName: string) => {
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
    hotelName
  )}&inputtype=textquery&fields=photos,place_id&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0]; // Return the first result
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch place details:", error);
    return null;
  }
};

export const GetHotelPhoto = async (photoReference: string) => {
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;
  const maxWidth = 400; // You can adjust this
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}`;
  return url;
};
