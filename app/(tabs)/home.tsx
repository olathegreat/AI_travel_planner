import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import * as Animatable from "react-native-animatable";
import { FadeInUp } from "react-native-reanimated";
import AllCoffeeDisplay from "@/components/AllCoffeeDisplay";
import CoffeeCard from "@/components/CoffeeCard";
import { coffeeBeansArray } from "@/constants/Option";

const Home = () => {
  const [beansData, setBeansData] = useState(coffeeBeansArray);
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView className=" h-full px-5 bg-primary">
        <NavBar />

        <Animatable.Text
          className="text-white text-6xl font-outfit-medium mt-16"
          animation="fadeInDown"
          delay={500}
          duration={1000}
          useNativeDriver
        >
          Find the best
        </Animatable.Text>

        <Animatable.View
          animation="fadeInUp"
          delay={500}
          duration={1000}
          useNativeDriver
          className="flex flex-row gap-2 mb-10"
        >
          <Text className="text-orange-500 text-6xl font-outfit-medium mt-3">
            coffee
          </Text>

          <Text className="text-white text-6xl font-outfit-medium mt-3">
            for you
          </Text>
        </Animatable.View>

        <SearchBar />
        <View className="h-5 w-full"></View>

        <AllCoffeeDisplay />

        <Animatable.Text
          animation="fadeInLeft"
          delay={500}
          duration={1000}
          useNativeDriver
          className="text-white font-outfit-medium text-3xl mt-10"
        >
          {" "}
          Coffee Beans
        </Animatable.Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          className="space-x-3 mt-4"
          data={beansData}
          renderItem={({ item }) => (
            <View className="mr-4">
              <CoffeeCard data={item} />
            </View>
          )}
        />

        <View className="h-10"></View>

        {/* {loading && <ActivityIndicator size="large" color="#000000" />} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
