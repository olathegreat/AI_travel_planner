import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";
const Signin = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const onSignIn = ()=>{
    if(!email || !password) {
      alert("Please fill all fields")
      return;
    }

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    router.replace("/mytrip");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);

    if(errorCode === "auth/invalid-credentials") {
      alert("User not found");
      ToastAndroid.show("User not found", ToastAndroid.BOTTOM);
    }
  });
  }
  return (
    <View className="p-6 pt-10 bg-white h-full">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text className="font-outfit-bold text-lg mt-8">Let's Sign You in</Text>
      <Text className="font-outfit-bold text-lg text-gray-500 mt-4">
        Welcome back
      </Text>
      <Text className="font-outfit-bold text-lg text-gray-500 mt-4">
        You've been missed
      </Text>

      <View className="mt-4">
        <Text className="font-outfit">Email</Text>
        <TextInput
        onChangeText={(value)=>setEmail(value)}
          placeholder="Enter your email"
          className="border-[1px] font-outfit border-gray-300 rounded-md p-2 mt-2"
        />
      </View>

      <View className="mt-4">
        <Text className="font-outfit">Password</Text>
        <TextInput
        onChangeText={(value)=>setPassword(value)}
          secureTextEntry={true}
          placeholder="Enter password"
          className="border-[1px] font-outfit border-gray-300 rounded-md p-2 mt-2"
        />
      </View>

      {/* signin button */}
      <TouchableOpacity onPress={onSignIn} className="bg-black p-3 rounded-lg mt-7">
        <Text className="text-white text-center font-outfit-medium">
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/auth/signup")}
        className="bg-white border-[1px]  p-3 rounded-lg mt-4"
      >
        <Text className="text-black text-center font-outfit-medium">
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
