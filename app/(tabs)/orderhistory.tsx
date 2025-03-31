import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import NavBar from '@/components/NavBar';
import OrderHistoryComponent from '@/components/OrderHistoryComponent';
import * as Animatable from "react-native-animatable";

const OrderHistory = () => {
  const data = useSelector((state: any) => state.orderHistory.orderHistory);
    const [orderHistoryData, setOrderHistoryData] = useState(data);
    const dispatch = useDispatch();
    const router = useRouter();


    useEffect(() => {
        console.log("order History", data);
        setOrderHistoryData(data);
      }, [data]);


      
  if (orderHistoryData.length === 0) {
    return (
      <View className="flex-1 p-5 relative bg-primary pt-10">
        <NavBar heading="Order History" />

        <Text className="text-white/70 font-outfit-medium text-2xl text-center mt-20">
          No Order History
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
    <SafeAreaView className="flex-1 p-5 relative bg-primary pt-10">
    <NavBar heading="Order History" />

    <ScrollView showsVerticalScrollIndicator={false} className="mt-4">
      {
        orderHistoryData.map((item: any, index: any) => (
          <OrderHistoryComponent key={index} data={item} />
        ))
      }
      
    </ScrollView>
    <Animatable.View
            animation="fadeInUp"
            delay={500}
            duration={1000}
            useNativeDriver
            className=" mt-4 flex flex-row justify-between items-center w-full absolute z-40 bottom-0 left-5  py-2 h-20 "
          >
    
            <TouchableOpacity
               onPress={()=>router.push('/home')}
            className="bg-secondary p-4 rounded-xl flex justify-center items-center w-full ">
              <Text className="text-white text-outfit-medium text-2xl text-center">
                Download
              </Text>
            </TouchableOpacity>
          </Animatable.View>
    
          <View className="w-full h-10">
    
          </View>
    </SafeAreaView>
  )
}

export default OrderHistory
