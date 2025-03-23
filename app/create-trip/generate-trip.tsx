import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "@/context/CreateTripContext";
import { AI_PROMPT } from "@/constants/Option";
import { chatSession } from "@/configs/AIModel";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/configs/FirebaseConfig";

const plane = require("../../assets/images/plane.gif");

const GenerateTrip = () => {
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();
  const context = useContext(CreateTripContext);

  if (!context) {
    throw new Error(
      "GenerateTrip must be used within a CreateTripContext.Provider"
    );
  }

  const { tripData, setTripData } = context;

  const GenerateAiTrip = async () => {
    if (!tripData) {
      console.error("tripData is not defined");
      return;
    }
    try {
      setLoading(true);
      console.log(tripData);

      const final_prompt = AI_PROMPT.replace(
        "{location}",
        tripData.locationInfo?.name || "Unknown Location"
      )
        .replace("{traveler}", tripData.traveler?.title || "Unknown Traveler")
        .replace("{budget}", tripData?.budget || "Unknown Budget")
        .replace("{totalDays}", tripData.totalNoOfDays?.toString() || "0")
        .replace(
          "{totalNight}",
          (tripData.totalNoOfDays - 1)?.toString() || "0"
        )
        .replace("{totalDays}", tripData.totalNoOfDays?.toString() || "0")
        .replace(
          "{totalNight}",
          (tripData.totalNoOfDays - 1)?.toString() || "0"
        );

      console.log(final_prompt);

      const result = await chatSession.sendMessage(final_prompt);
      console.log(result.response.text());

      const tripResp = JSON.parse(result.response.text());
      const docId = Date.now().toString();

      const savedData = await setDoc(doc(db, "UserTrips", docId), {
        userEmail: user?.email,
        tripPlan: tripResp,
        tripData: JSON.stringify(tripData),
        docId: docId,
      });
      console.log(savedData);

      setTripData(null);

      router.push("/(tabs)/mytrip");
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tripData) {
      GenerateAiTrip();
    }
  }, []);

  return (
    <View className="h-full w-full p-6 pt-20 bg-white flex flex-col items-center">
      <Text className="text-3xl font-outfit-bold text-center text-red-500">
        Please Wait..
      </Text>
      <Text className="text-xl text-center mt-10 font-outfit-medium">
        We are working to generate your dream trip
      </Text>

      <View className="flex flex-row  h-[200px] justify-center items-center  w-full">
        <Image source={plane} className=" w-40 h-40 mt-10 " />
      </View>

      <Text className="text-gray-500 text-center font-outfit text-md mt-4">
        Don't go back
      </Text>
    </View>
  );
};

export default GenerateTrip;
