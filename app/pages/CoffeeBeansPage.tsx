import { View, Text, Image, ScrollView, ToastAndroid } from "react-native";
import React, { useState } from "react";
import CoffeeNavBar from "@/components/CoffeeNavBar";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch } from "react-redux";
import { updateCartItems } from "@/utils/userCartSlice";
import { updateFavoriteItems } from "@/utils/favoritesSlice";

interface CoffeeData {
  image: string;
  type: string;
  shortDesc: string;
  longDesc: string;
  rating: string;
  price: number;

  sizes?: { size: string; price: number }[];
}
interface CartItem {
  type: string;
  shortDesc: string;
  price: number;
  quantity: number;
  totalPrice: number;
  cupSize?: string;
  size?: string;
  image: string;
}
const CoffeeBeansPage = () => {
  const { data } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("250gm");

  const dispatch = useDispatch();
  // Safely parse the data
  let parsedData: CoffeeData | null = null;
  try {
    if (typeof data === "string") {
      parsedData = JSON.parse(data) as CoffeeData;
    }
  } catch (error) {
    console.error("Failed to parse data:", error);
  }

  if (!parsedData) {
    return (
      <View className="flex-1 bg-primary p-5 pt-10">
        <Text>Loading...</Text>
      </View>
    );
  }

  const [selectedSizePrice, setSelectedSizePrice] = useState(parsedData.price);

  const addItemToCart = () => {
    const cartItem: CartItem = {
      type: parsedData.type,
      shortDesc: parsedData.shortDesc,
      price: selectedSizePrice,
      quantity: 1,
      totalPrice: selectedSizePrice,
      size: selectedSize,
      image: parsedData.image,
    };
    console.log("cartItem", cartItem);
    dispatch(updateCartItems(cartItem));
    ToastAndroid.show("item added to cart", ToastAndroid.BOTTOM);
  };

  const addItemToFavorite = () => {
    const favoriteItem: CoffeeData = {
      type: parsedData.type,
      shortDesc: parsedData.shortDesc,
      price: selectedSizePrice,
      sizes: parsedData.sizes,
      image: parsedData.image,
      rating: parsedData.rating,
      longDesc: parsedData.longDesc,
    };
    console.log("favoriteItem", favoriteItem);
    dispatch(updateFavoriteItems(favoriteItem));
  };

  return (
    <View className="flex-1 bg-primary  pt-10">
      <ScrollView>
        <View className="relative w-full ">
          {parsedData.image && (
            <Image
              className="w-full h-[500px]  object-cover"
              source={{ uri: parsedData.image }}
            />
          )}

          <View className="absolute p-5 w-full ">
            <CoffeeNavBar
              favoriteFunction={addItemToFavorite}
              favoriteData={parsedData}
            />
          </View>
        </View>

        <View className="bg-black/50 -mt-40 rounded-t-3xl p-5 min-h-40 flex flex-row justify-between">
          <Animatable.View
            animation="fadeInLeft"
            delay={500}
            duration={1000}
            useNativeDriver
          >
            <Text className="text-white font-outfit-bold text-3xl">
              {parsedData.type}
            </Text>
            <Text className="text-white/60 font-outfit">
              {parsedData.shortDesc}
            </Text>
            <View className="flex flex-row gap-2 items-center mt-10">
              <Text className="text-xl">⭐</Text>
              <Text className="text-2xl font-outfit-medium text-white">
                {parsedData.rating}
              </Text>
              <Text className="text-white/60 font-outfit">(6,678)</Text>
            </View>
          </Animatable.View>

          <Animatable.View
            animation="fadeInRight"
            delay={500}
            duration={1000}
            useNativeDriver
            className="flex justify-between"
          >
            <View className="flex flex-row gap-2">
              <View className="bg-gray-900 h-16 w-16 justify-center rounded-lg flex items-center gap-1">
                {/* <Fontisto name="coffeescript" size={18} color="orange" /> */}
                <MaterialCommunityIcons name="seed" size={18} color="orange" />

                <Text className="text-white font-outfit">Coffee</Text>
              </View>
              <View className="bg-gray-900 justify-center h-16 w-16 rounded-lg flex items-center gap-1">
                {/* <FontAwesome6 name="droplet" size={18} color="orange" /> */}
                <Ionicons name="location-sharp" size={18} color="orange" />

                <Text className="text-white font-outfit">
                  {
                    parsedData.shortDesc.split(" ")[
                      parsedData.shortDesc.split(" ").length - 1
                    ]
                  }
                </Text>
              </View>
            </View>

            <View className="bg-gray-900 w-33 h-10 rounded-lg flex justify-center items-center">
              <Text className="text-white">Medium Roosted</Text>
            </View>
          </Animatable.View>
        </View>

        <View className="p-5">
          <Text className="text-white font-outfit text-xl mb-4">
            Description
          </Text>
          <Text className="text-white font-outfit text-lg  text-pretty">
            {parsedData.longDesc}
          </Text>
        </View>

        <View className="p-5 mt-4">
          <Text className="text-white font-outfit text-xl mb-4">Size</Text>
          <View className="flex flex-row gap-4">
            {parsedData?.sizes?.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedSize(item.size);
                  setSelectedSizePrice(item.price);
                }}
                className={`bg-gray-900 flex-1 h-10 flex flex-row items-center justify-center rounded-lg ${selectedSize === item.size && "border border-orange-500"}`}
              >
                <Text
                  className={` ${selectedSize === item.size ? "text-secondary" : "text-white"}`}
                >
                  {item.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Animatable.View
          animation="fadeInUp"
          delay={500}
          duration={1000}
          useNativeDriver
          className="p-5 mt-4 flex flex-row justify-between items-center w-full"
        >
          <View className="flex items-center ">
            <Text className="text-white font-outfit">Price</Text>
            <View className="flex flex-row gap-2">
              <Text className="text-secondary font-outfit-medium text-3xl">
                $
              </Text>
              <Text className="text-white font-outfit-medium text-3xl">
                {" "}
                {parsedData.sizes
                  ?.find((item) => item.size === selectedSize)
                  ?.price.toFixed(2) || parsedData.price}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={addItemToCart}
            className="bg-secondary p-4 rounded-xl flex justify-center items-center w-[200px] "
          >
            <Text className="text-white text-outfit-medium text-2xl text-center">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default CoffeeBeansPage;
