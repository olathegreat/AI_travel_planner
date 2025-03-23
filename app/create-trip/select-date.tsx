import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import { CreateTripContext } from "@/context/CreateTripContext";

const SelectDate = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const navigation = useNavigation();

  // Call all hooks unconditionally
  const context = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Select Date",
    });
  }, []);

  // Check context after all hooks are called
  if (!context) {
    throw new Error("SelectDate must be used within a CreateTripContext.Provider");
  }

  const { tripData, setTripData } = context;

  const onDateSelectionContinue = () => {
    console.log(startDate, endDate);
    if (!startDate || !endDate) {
      ToastAndroid.show("Please select both dates", ToastAndroid.SHORT);
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, "days");
    console.log("Total number of days:", totalNoOfDays + 1);

    setTripData({ ...tripData, startDate, endDate, totalNoOfDays: totalNoOfDays + 1 });
    router.push("/create-trip/select-budget");
  };

  const onDateChange = ( date:Date, type: "START_DATE" | "END_DATE") => {
    console.log("Selected Date:", date);
    console.log("Selection Type:", type);

    if (type === "START_DATE") {
      setStartDate(moment(date));
      console.log("Start Date Updated:", moment(date).format("YYYY-MM-DD"));
    } else {
      setEndDate(moment(date));
      console.log("End Date Updated:", moment(date).format("YYYY-MM-DD"));
    }
  };

  return (
    <View className="h-full p-6 pt-20 bg-white">
      <Text className="font-outfit-bold text-4xl mt-4">Travel Dates</Text>

      <View className="mt-8">
        <CalendarPicker
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          onDateChange={onDateChange} // Pass `onDateChange` directly
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: "white",
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onDateSelectionContinue}
        className="p-4 bg-black rounded-xl mt-10"
      >
        <Text className="text-white text-lg text-center font-outfit-bold">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectDate;