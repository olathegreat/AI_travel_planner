import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import NavBar from "@/components/NavBar";
import { CartItem, updateCartItems } from "@/utils/userCartSlice";
import * as Animatable from "react-native-animatable";
import { paymentTypeArray } from "@/constants/Option";
import { LinearGradient } from "expo-linear-gradient";
import CoffeeNavBar from "@/components/CoffeeNavBar";

const Payment = () => {
  const data = useSelector((state: any) => state.userCart.cart);
  const [cartData, setCartData] = useState(data);
  const dispatch = useDispatch();
  const router = useRouter();
  const [paymentType, setPaymentType] = useState("Credit Card");

  useEffect(() => {
    console.log("cart", data);
    setCartData(data);
  }, [data]);

  const totalPrice = cartData.reduce(
    (sum: number, item: CartItem) => sum + item.totalPrice,
    0
  );

  if (cartData.length === 0) {
    return (
      <View className="flex-1 p-5 relative bg-primary pt-10">
        <NavBar heading="Payment" />

        <Text className="text-white/70 font-outfit-medium text-2xl text-center mt-20">
          No item in cart
        </Text>

        <TouchableOpacity
          onPress={() => router.back()}
          className="flex items-center"
        >
          <Text className="font-outfit text-lg text-center  w-[100px] border-b-secondary border-b-2  mt-4 text-decoration text-secondary">
            {" "}
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 p-5 relative bg-primary pt-10">
      <CoffeeNavBar heading="Payment" />
      <Text>Payment</Text>

      <View className="flex ">
        {paymentTypeArray.map((item, index) => (
          <TouchableOpacity
            onPress={() => setPaymentType(item.name)}
            key={index}
            className="px-2 py-2  h-fit rounded-full "
          >
            {paymentType !== item.name && (
              <View className="flex flex-row justify-between items-center w-full px-6 py-4 !rounded-[40px] border-gray-100/20 border-[1px]">
                <LinearGradient
                  colors={["#4B5563", "#111827"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 40,
                     // matches rounded-lg
                  }}
                />
                <View className="flex flex-row  items-center gap-4">
                  <Image
                    className=" object-contain"
                    source={item.image}
                  />
                  <Text className="text-white font-outfit text-xl">
                    {item.name}
                  </Text>
                </View>
              </View>
            )}
            {paymentType === item.name && (
              <View
                className={`w-full ${paymentType === item.name && "border-2 border-secondary"} rounded-3xl p-2`}
              >
                <Animatable.Text animation="fadeInRight"
                  delay={0}
                  duration={1000}
                  iterationCount={1}
                  useNativeDriver className="text-white text-xl mb-1">{item.name}</Animatable.Text>

                <Animatable.View
                  animation="fadeInUp"
                  delay={0}
                  iterationCount={1}
                  duration={1000}
                  useNativeDriver
                  className="w-full mt-2 p-4 rounded-lg"
                >
                  <LinearGradient
                    colors={["#4B5563", "#111827"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: 8, // matches rounded-lg
                    }}
                  />

                  <View className="flex flex-row justify-between items-center">
                    <Image source={require("../../assets/images/chip.png")} />

                    <Image source={item.image} />
                  </View>

                  <Text
                    style={{ letterSpacing: 9 }}
                    className="text-white text-xl font-outfit-medium my-10 tracking-widest w-full "
                  >
                    3897 **** **** 4638
                  </Text>

                  <View className="flex flex-row justify-between items-center">
                    <View>
                      <Text className="text-gray-500 font-outfit">
                        Card Holder Name
                      </Text>

                      <Text className="text-white font-outfit-medium text-xl ">
                        Johnson London
                      </Text>
                    </View>

                    <View>
                      <Text className="text-gray-500 font-outfit text-right">
                        Expiry Date
                      </Text>

                      <Text className="text-white font-outfit-medium text-xl text-right">
                        02/03
                      </Text>
                    </View>
                  </View>
                </Animatable.View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Animatable.View
        animation="fadeInUp"
        delay={500}
        duration={1000}
        iterationCount={1}
        useNativeDriver
        className="pl-5 mt-4 flex flex-row justify-between items-center w-full absolute z-40 bottom-0 left-5 bg-primary py-2 h-20 "
      >
        <View className="flex items-center ">
          <Text className="text-white font-outfit">Total Price</Text>
          <View className="flex flex-row gap-2">
            <Text className="text-secondary font-outfit-medium text-3xl">
              $
            </Text>
            <Text className="text-white font-outfit-medium text-3xl">
              {totalPrice.toFixed(2)}
            </Text>
          </View>
        </View>

        <TouchableOpacity className="bg-secondary p-4 rounded-xl flex justify-center items-center w-[200px] ">
          <Text className="text-white text-outfit-medium text-2xl text-center">
            Pay from {paymentType}
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Payment;
