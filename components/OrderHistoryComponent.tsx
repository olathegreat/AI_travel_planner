import { View, Text } from "react-native";
import React, { useEffect } from "react";
import OrderHistoryCard from "./OrderHistoryCard";
import moment from "moment";


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

 interface OrderHistory{
  orderDate: string;
  totalAmount:string;
  cart: CartItem[];
}

const OrderHistoryComponent = ({data}:{data:OrderHistory}) => {

  const formattedDate = moment(parseInt(data.orderDate)).format("MMM DD YYYY");
  return (
    <View className="mt-5">
      <View className="flex flex-row items-center justify-between mb-4">
        <View className="mb-3">
          <Text className="font-outfit-medium text-2xl text-white">
            Order Date
          </Text>

          <Text className="text-gray-500 font-outfit text-2xl">
            {formattedDate}
          </Text>
        </View>

        <View>
          <Text className="font-outfit-medium text-2xl text-white text-right">
            Total Amount
          </Text>

          <Text className="text-secondary font-outfit text-2xl text-right">$ {Number(data.totalAmount).toFixed(2)}</Text>
        </View>
      </View>

      <View>
        {
          data?.cart?.map((item, index) => (
            <View key={index} className="mb-4">

            <OrderHistoryCard key={index} data={item} />
            </View>
          ))
        }
        {/* <OrderHistoryCard data={item}/> */}
      </View>
    </View>
  );
};

export default OrderHistoryComponent;
