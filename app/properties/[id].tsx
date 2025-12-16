import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
    const { id } = useLocalSearchParams<{id : string}>();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text>Data of {id}</Text>
    </SafeAreaView>
  )
}

export default index