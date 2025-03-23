const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Lagos, Nigeria for 3 days and 2 nights for a couple with an Unknown Budget budget. Include flight details, flight price with booking URL, hotel options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, description, and places to visit nearby with placeName, place details, place image URL, geo coordinates, ticket pricing, and time to travel to each of the locations for 3 days and 2 nights. Each day plan should include the best time to visit in JSON. Put the currency in string dollar and its value.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `{
  "tripDetails": {
    "location": "Lagos, Nigeria",
    "duration": "3 Days, 2 Nights",
    "travelers": "Couple",
    "budget": "Unknown (Mix of affordable and upscale options)",
    "currency": {
      "name": "Dollar",
      "symbol": "$",
      "value": "Variable (Exchange rate fluctuates)"
    }
  },
  "flights": {
    "details": "Flight details will vary based on origin. Assuming a round trip flight.",
    "example": {
      "airline": "Example Airline",
      "flightNumber": "EA123",
      "departureAirport": "Your Departure Airport",
      "arrivalAirport": "Murtala Muhammed International Airport (LOS)",
      "departureTime": "Example Time",
      "arrivalTime": "Example Time"
    },
    "price": "$500 - $1500+ (depending on origin, time of booking, and airline)",
    "bookingUrl": "Kayak.com, Google Flights, Airline websites (e.g., British Airways, Emirates, KLM)",
    "note": "Book flights well in advance for better prices. Consider flexible dates."
  },
  "hotels": [
    {
      "hotelName": "The Wheatbaker",
      "hotelAddress": "4 Onitolo Road, Ikoyi, Lagos, Nigeria",
      "price": "$250 - $400 per night",
      "hotelImageUrl": "https://example.com/wheatbaker.jpg",
      "geoCoordinates": {
        "latitude": 6.4482,
        "longitude": 3.4134
      },
      "description": "Luxury hotel in Ikoyi, known for its excellent service, restaurants, and spa.",
      "nearbyPlaces": [
        {
          "placeName": "Ikoyi Golf Club",
          "placeDetails": "Prestigious golf club offering a challenging course and social atmosphere.",
          "placeImageUrl": "https://example.com/ikoyigolf.jpg",
          "geoCoordinates": {
            "latitude": 6.4450,
            "longitude": 3.4250
          },
          "ticketPricing": "$50 - $100 (green fees)",
          "travelTime": "5-10 minutes by car"
        }
      ]
    }
  ],
  "dailyPlan": [
    {
      "day": 1,
      "theme": "Culture and History",
      "morning": {
        "time": "9:00 AM",
        "activity": "Visit the National Museum Lagos",
        "placeName": "National Museum Lagos",
        "locationDescription": "Onikan, Lagos, Nigeria",
        "details": "Explore Nigerian art, historical artifacts, and cultural exhibitions. Learn about the country's rich heritage.",
        "placeImageUrl": "https://example.com/nationalmuseumlagos.jpg",
        "geoCoordinates": {
          "latitude": 6.4400,
          "longitude": 3.3900
        },
        "ticketPricing": "$2 - $5",
        "travelTimeFromHotel": "15-30 minutes by car (depending on hotel location and traffic)",
        "bestTimeToVisit": "Mornings are less crowded."
      },
      "afternoon": {
        "time": "1:00 PM",
        "activity": "Lunch at a local restaurant in Yaba",
        "placeName": "Local Restaurant in Yaba",
        "locationDescription": "Yaba, Lagos, Nigeria",
        "details": "Try authentic Nigerian dishes like jollof rice, egusi soup, or pepper soup. Yaba is known for its affordable and delicious local cuisine.",
        "placeImageUrl": "https://example.com/jollofrice.jpg",
        "geoCoordinates": {
          "latitude": 6.5200,
          "longitude": 3.3700
        },
        "ticketPricing": "$5 - $15 per person",
        "travelTimeFromMuseum": "20-40 minutes by car (traffic dependent)",
        "bestTimeToVisit": "Lunchtime is ideal."
      },
      "evening": {
        "time": "4:00 PM",
        "activity": "Explore Freedom Park",
        "placeName": "Freedom Park",
        "locationDescription": "1 Hospital Road, Lagos Island, Lagos, Nigeria",
        "details": "A former colonial prison turned into a cultural and arts center. Enjoy live music, art exhibitions, and historical exhibits.",
        "placeImageUrl": "https://example.com/freedomparklagos.jpg",
        "geoCoordinates": {
          "latitude": 6.4572,
          "longitude": 3.3911
        },
        "ticketPricing": "$3 - $7",
        "travelTimeFromYaba": "15-30 minutes by car (traffic dependent)",
        "bestTimeToVisit": "Late afternoon/early evening for cooler temperatures and potential events."
      },
      "night": {
        "time": "7:00 PM",
        "activity": "Dinner at Terra Kulture",
        "placeName": "Terra Kulture",
        "locationDescription": "Plot 1376 Tiamiyu Savage St, Victoria Island, Lagos, Nigeria",
        "details": "Enjoy dinner with a blend of Nigerian and Continental cuisine. Visit the Art Gallery for cultural exhibits.",
        "placeImageUrl": "https://example.com/terrakulture.jpg",
        "geoCoordinates": {
          "latitude": 6.4372,
          "longitude": 3.4111
        },
        "ticketPricing": "$20 - $30",
        "travelTimeFromFreedomPark": "20-30 minutes by car (traffic dependent)",
        "bestTimeToVisit": "7:00 PM"
      }
    },
    {
      "day": 2,
      "theme": "Beaches and Relaxation",
      "morning": {
        "time": "10:00 AM",
        "activity": "Visit Lekki Conservation Centre",
        "placeName": "Lekki Conservation Centre",
        "locationDescription": "Lekki Peninsula, Lagos, Nigeria",
        "details": "Walk the canopy walkway, observe wildlife, and enjoy the natural environment. A great escape from the city's hustle and bustle.",
        "placeImageUrl": "https://example.com/lekkiconservation.jpg",
        "geoCoordinates": {
          "latitude": 6.4600,
          "longitude": 3.5600
        },
        "ticketPricing": "$5 - $10",
        "travelTimeFromHotel": "30-60 minutes by car (depending on hotel location and traffic)",
        "bestTimeToVisit": "Mornings are cooler for walking."
      },
      "afternoon": {
        "time": "1:00 PM",
        "activity": "Lunch at a beachside restaurant on Lekki Peninsula",
        "placeName": "Beachside Restaurant on Lekki Peninsula",
        "locationDescription": "Lekki-Epe Expressway, Lagos, Nigeria",
        "details": "Enjoy fresh seafood and drinks with ocean views. Several restaurants are located along the Lekki-Epe Expressway.",
        "placeImageUrl": "https://example.com/beachlunch.jpg",
        "geoCoordinates": {
          "latitude": 6.4300,
          "longitude": 3.5800
        },
        "ticketPricing": "$15 - $30 per person",
        "travelTimeFromLekkiConservation": "10-20 minutes by car",
        "bestTimeToVisit": "Lunchtime is perfect for enjoying the beach views."
      },
      "evening": {
        "time": "3:00 PM",
        "activity": "Relax at Elegushi Royal Beach",
        "placeName": "Elegushi Royal Beach",
        "locationDescription": "Lekki-Epe Expressway, Lagos, Nigeria",
        "details": "Spend the afternoon swimming, sunbathing, or simply relaxing on the beach. Enjoy the lively atmosphere and beachside bars.",
        "placeImageUrl": "https://example.com/elegushibeach.jpg",
        "geoCoordinates": {
          "latitude": 6.4100,
          "longitude": 3.4400
        },
        "ticketPricing": "$5 - $15 (entrance fee)",
        "travelTimeFromLunch": "20-30 minutes by car",
        "bestTimeToVisit": "Afternoon for sunbathing and swimming."
      },
      "night": {
        "time": "7:00 PM",
        "activity": "Dinner at RSVP Restaurant",
        "placeName": "RSVP Restaurant",
        "locationDescription": "Plot 1611 Adeola Odeku St, Victoria Island, Lagos, Nigeria",
        "details": "French Dining with a great ambience and an outdoor pool.",
        "placeImageUrl": "https://example.com/rsvprestaurant.jpg",
        "geoCoordinates": {
          "latitude": 6.4400,
          "longitude": 3.4211
        },
        "ticketPricing": "$30 - $50",
        "travelTimeFromElegushiRoyalBeach": "20-30 minutes by car (traffic dependent)",
        "bestTimeToVisit": "7:00 PM"
      }
    },
    {
      "day": 3,
      "theme": "Shopping and Departure",
      "morning": {
        "time": "10:00 AM",
        "activity": "Visit Lekki Arts & Crafts Market",
        "placeName": "Lekki Arts & Crafts Market",
        "locationDescription": "Lekki Phase 1, Lagos, Nigeria",
        "details": "Browse a wide selection of Nigerian arts, crafts, and souvenirs. Bargain for the best prices.",
        "placeImageUrl": "https://example.com/lekkimarket.jpg",
        "geoCoordinates": {
          "latitude": 6.4300,
          "longitude": 3.5000
        },
        "ticketPricing": "Free (items for sale)",
        "travelTimeFromHotel": "20-45 minutes by car (depending on hotel location and traffic)",
        "bestTimeToVisit": "Mornings are less crowded and cooler."
      },
      "afternoon": {
        "time": "1:00 PM",
        "activity": "Lunch at a restaurant near the airport",
        "placeName": "Restaurant near Murtala Muhammed International Airport",
        "locationDescription": "Ikeja, Lagos, Nigeria",
        "details": "Enjoy a final Nigerian meal before heading to the airport. Several restaurants are located near Murtala Muhammed International Airport.",
        "placeImageUrl": "https://example.com/airportlunch.jpg",
        "geoCoordinates": {
          "latitude": 6.5700,
          "longitude": 3.3200
        },
        "ticketPricing": "$10 - $25 per person",
        "travelTimeFromLekkiMarket": "45-90 minutes by car (traffic can be heavy)",
        "bestTimeToVisit": "Allow plenty of time to reach the airport."
      },
      "evening": {
        "time": "3:00 PM",
        "activity": "Depart from Murtala Muhammed International Airport (LOS)",
        "placeName": "Murtala Muhammed International Airport",
        "locationDescription": "Ikeja, Lagos, Nigeria",
        "details": "Arrive at the airport at least 3 hours before your flight to allow time for check-in and security.",
        "placeImageUrl": "https://example.com/lagosairport.jpg",
        "geoCoordinates": {
          "latitude": 6.5775,
          "longitude": 3.3211
        },
        "ticketPricing": "N/A",
        "travelTimeFromLunch": "15-30 minutes (depending on traffic)",
        "bestTimeToVisit": "Allow ample time for travel due to potential delays."
      }
    }
  ],
  "importantNotes": [
    "Traffic in Lagos is unpredictable; allow ample travel time.",
    "Negotiate prices with vendors and taxi drivers.",
    "Be aware of your surroundings and take precautions against petty theft.",
    "Drink bottled water only.",
    "Consult your doctor about necessary vaccinations and malaria precautions.",
    "Learn a few basic phrases in Yoruba or Pidgin English.",
    "Book transport through reputable apps such as Uber or Bolt.",
    "Always keep valuables close to you when out in public.",
    "Be respectful of the local culture and customs."
  ]
}`,
        },
      ],
    },
  ],
});

// Example usage:
// export const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());