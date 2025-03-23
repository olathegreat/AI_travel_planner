import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "@/components/Mytrips/StartNewTripCard";
import  {collection, getDocs, query, where} from 'firebase/firestore';
import { auth, db } from "@/configs/FirebaseConfig";
import UserTripList from "@/components/Mytrips/UserTripList";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


const Mytrip = () => {

  const [ userTrips, setUserTrips] = useState<any>([]);
  
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
       user && GetMyTrips();
  },[])

    const GetMyTrips = async ()=>{
      setLoading(true);
       setUserTrips([]);
      const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user!.email));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
    
        setUserTrips((prev: any)=>[...prev, doc.data()]);
        
      });
      setLoading(false);
    }
    const router = useRouter();
  return (
    <ScrollView className="p-6 pt-12 bg-white h-full">
     
      <View className="flex flex-row items-center justify-between">
        <Text className="font-outfit-bold text-xl">My Trips</Text>
        <TouchableOpacity  onPress={()=>router.push('/create-trip/search-place')}>
        <Ionicons name="add-circle-sharp" size={50} color="black" />
          </TouchableOpacity>
       
      </View>

      {loading && <ActivityIndicator size="large" color="#000000" />}



      {
        userTrips.length === 0  ? <StartNewTripCard/> : 

        <UserTripList  userTrips = {userTrips} />
      }
    </ScrollView>
  );
};

export default Mytrip;
