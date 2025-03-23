import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { selectTravelerList } from '@/constants/Option';
import OptionCard from '@/components/CreateTrip/OptionCard';
import { CreateTripContext } from '@/context/CreateTripContext';

interface OptionType {
  id: number;
  title: string;
  desc: string;
  icon: string;
  people: string;
}

const SelectTraveler = () => {
  
  const [selectedTraveler, setSelectedTraveler] = useState<OptionType | null>(null);
  const context = useContext(CreateTripContext);
  const router = useRouter()

  if (!context) {
    throw new Error('SelectTraveler must be used within a CreateTripContext.Provider');
  }

  const { tripData, setTripData } = context;

  useEffect(() => {
    if (selectedTraveler) {
      setTripData({ ...tripData, traveler: selectedTraveler });
    }
  }, [selectedTraveler]);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  return (
    <View className='h-full p-6 pt-20 bg-white'>
      <Text className='text-md font-outfit-bold mt-5'>Who's travelling</Text>
      <View className='mt-5'>
        <Text className="font-outifit-bold text-md mb-5">Choose your travellers</Text>
        <FlatList
          data={selectTravelerList}
          renderItem={({ item }: { item: OptionType }) => (
            <TouchableOpacity onPress={() => setSelectedTraveler(item)} className='mt-3'>
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>
      
      <TouchableOpacity className='bg-black p-4 rounded-md mt-5' onPress={() => router.push('/create-trip/select-date')}>
        <Text className='text-white text-center font-outfit-medium text-lg'>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectTraveler;