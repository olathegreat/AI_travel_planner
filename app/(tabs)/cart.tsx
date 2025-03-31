import { View, Text, ScrollView, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { CoffeeBeansCartCard, CoffeeCartCard } from "@/components/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, cartSetter, updateCartItems } from "@/utils/userCartSlice";
import { useRouter } from "expo-router";
import { updateOrderHistoryItems } from "@/utils/orderHistorySlice";
import { showOrderNotification } from "@/utils/notification.service";
import PushNotification from "react-native-push-notification";

interface OrderHistory{
  orderDate: string;
  totalAmount:string;
  cart: CartItem[];
}

const Cart = () => {
  const data = useSelector((state: any) => state.userCart.cart);
  const [cartData, setCartData] = useState(data);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    console.log("cart", data);
    setCartData(data);
  }, [data]);

  const updateQuantity = (updatedItem: CartItem) => {
    dispatch(updateCartItems(updatedItem));
  };

  const totalPrice = cartData.reduce(
    (sum: number, item: CartItem) => sum + item.totalPrice,
    0
  );

  if (cartData.length === 0) {
    return (
      <View className="flex-1 p-5 relative bg-primary pt-10">
        <NavBar heading="Cart" />

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

 
  const payClick = () =>{
    dispatch(updateOrderHistoryItems({
      orderDate: Date.now().toString(),
      totalAmount:totalPrice,
      cart: cartData
    }));
    ToastAndroid.show('Order Placed', ToastAndroid.SHORT);
  //   showOrderNotification('Order Placed', 
  //   `Your order for $${totalPrice} has been received`
  // );
  // PushNotification.localNotification({
  //   title: "Order Placed",
  //   message: `Your order for $${totalPrice} was received`,
  // });
  // const dispatch = useDispatch();
     dispatch(cartSetter([]))
    router.push('/pages/Payment')



  }

  return (
    <View className="flex-1 p-5 relative bg-primary pt-10">
      <NavBar heading="Cart" />

      <ScrollView>

      

      {cartData.map((item: any, index: number) =>
        item.cupSize ? (
          <View key={index} className="mb-5">
            <CoffeeCartCard data={item} updateQuantity={updateQuantity} />
          </View>
        ) : (
          item.size && (
            <View key={index} className="mb-5">
              <CoffeeBeansCartCard
                data={item}
                updateQuantity={updateQuantity}
              />
            </View>
          )
        )
      )}
      </ScrollView>

      <View className="w-full h-4"></View>

      {/* <CoffeeBeansCartCard/> */}

      <Animatable.View
        animation="fadeInUp"
        delay={500}
        duration={1000}
        useNativeDriver
        className="pl-5 mt-4 flex flex-row justify-between items-center w-full absolute z-40 bottom-0 left-5  py-2 h-20 "
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

        <TouchableOpacity
           onPress={payClick}
        className="bg-secondary p-4 rounded-xl flex justify-center items-center w-[200px] ">
          <Text className="text-white text-outfit-medium text-2xl text-center">
            Pay
          </Text>
        </TouchableOpacity>
      </Animatable.View>

      <View className="w-full h-10">

      </View>
    </View>
  );
};

export default Cart;
