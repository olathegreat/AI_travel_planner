import { Text } from 'react-native'
import { Slot, Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from '@/constants/Colors';
const TabLayout = () => {
  return (
<Tabs screenOptions={{
  headerShown: false,
  tabBarActiveTintColor: Colors.SECONDARY,
  tabBarInactiveTintColor: 'gray',
  tabBarStyle: {
    
    height: 50,
    paddingTop: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  }
}}>
    <Tabs.Screen
     name='home'
     options={{
      tabBarLabel: '',
      tabBarIcon: ({color}) => <MaterialIcons name="home-filled" size={24} color={color} />
      


     }}
     />
    <Tabs.Screen name='cart'
    
  
     options={{
      
      tabBarLabel: '',
      tabBarIcon: ({color}) => <MaterialIcons name="shopping-bag" size={24} color={color} />
      


     }}/>
    <Tabs.Screen name='favorite'  options={{
      tabBarLabel: '',
      tabBarIcon: ({color}) => <Ionicons name="heart" size={24} color={color} />
      


     }}/>
      <Tabs.Screen name='orderhistory'  options={{
      tabBarLabel: '',
      tabBarIcon: ({color}) => <Octicons name="bell-fill" size={24} color={color} />
      


     }}/>

</Tabs>
  )

  
}

export default TabLayout

