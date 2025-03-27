import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import "../styles/global.css"
import { CreateTripContext } from '@/context/CreateTripContext';
import { View } from 'react-native';
import { Colors } from '@/constants/Colors';
import {Provider} from 'react-redux'
import { store } from '@/utils/store';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [tripData, setTripData] = useState([]);
  const [loaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  

  return (

    <Provider store={store}>

   
    <View style={{ flex: 1, backgroundColor: '#0c0f14', color: "white" }} className='font-outfit'>

    
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='create-trip' />
        <Stack.Screen name='trip-details' />
      </Stack>
      <StatusBar style="auto" />
    </CreateTripContext.Provider>
    </View>
    </Provider>
  );
}