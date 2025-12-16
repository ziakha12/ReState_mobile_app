import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView className="flex-1 items-center  justify-center bg-white">
      <Text className='font-rubik text-2xl'>index</Text>
    </SafeAreaView>
  )
}

export default index