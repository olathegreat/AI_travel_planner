import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";
const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("")

  const onCreateAccount = () => {

    if(!email || !password || !fullname) {
      alert("Please fill all fields")
    //   ToastAndroid.show("Please fill all fields", ToastAndroid.BOTTOM);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace("/mytrip");
        console.log(user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <View className="p-6 pt-12 bg-white h-full">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="font-outfit-bold text-lg mt-8">Create New Account</Text>

      <View className="mt-4">
        <Text className="font-outfit">Fullname</Text>
        <TextInput
        onChangeText={(value)=>setFullname(value)}
          placeholder="Enter fullname"
          className="border-[1px] font-outfit border-gray-300 rounded-md p-2 mt-2"
        />
      </View>
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
      <TouchableOpacity onPress={onCreateAccount} className="bg-black p-3 rounded-lg mt-7">
        <Text className="text-white text-center font-outfit-medium">
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("/auth/signin")}
        className="bg-white border-[1px]  p-3 rounded-lg mt-4"
      >
        <Text className="text-black text-center font-outfit-medium">
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
