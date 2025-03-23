import { View, Text, FlatList, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { selectBudgetOptions } from '@/constants/Option';
import OptionCard from '@/components/CreateTrip/OptionCard';
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from '@/context/CreateTripContext';

interface OptionType {
    id: number;
    title: string;
    desc: string;
    icon: string;
   
  }

const SelectBudget = () => {
    const navigation = useNavigation();
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
     useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTransparent: true,
          headerTitle: "Select Budget",
        });
      }, []);

const context = useContext(CreateTripContext);
if (!context) {
    throw new Error('SelectTraveler must be used within a CreateTripContext.Provider');
  }
const { tripData, setTripData } = context;

  useEffect(()=>{
      setTripData({...tripData, budget: selectedOption?.title})
  },[selectedOption]);

  const onClickContinue = () => {
    if(!selectedOption){
        ToastAndroid.show('Please select an option', ToastAndroid.SHORT);
        return;
    }
    router.push('/create-trip/review-trip');
  };
  return (
    <View className="h-full p-6 pt-20 bg-white">
      <Text className='font-outfit-bold text-3xl mt-5'>Budget</Text>
      <View className='mt-5'>
        <Text className='font-outfit-bold text-xl '>Choose spending habits for your trip</Text>


        <FlatList
           data={selectBudgetOptions}
           renderItem={
            (({item}: { item: OptionType })=>(
                <TouchableOpacity onPress={()=>setSelectedOption(item)} className='mt-3'>
                    <OptionCard option={item}  selectedOption={selectedOption}/>
                </TouchableOpacity>
            ))
           }
        />
      </View>

       <TouchableOpacity className='bg-black p-4 rounded-md mt-5' onPress={onClickContinue}>
              <Text className='text-white text-center font-outfit-medium text-lg'>Continue</Text>
            </TouchableOpacity>
    </View>
  )
}

export default SelectBudget;