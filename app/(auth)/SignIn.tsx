import google from '@/assets/icons/google.png'
import images from '@/constants/images'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {

  const router = useRouter()

  const credentials = {
    email: 'Test@gmail.com',
    pass: '12345678'
  }
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)

  const handleCheck = () => {
    if (email === credentials.email) {
      setToggle(true)
    }
  }
  const handleLogin = () => {
    if (pass === credentials.pass) {
      router.push('/(tabs)')
    }
  }


  return (
    <SafeAreaView className='flex-1 h-screen p-4 bg-white'>
      <Image source={images.onboarding} className='w-full h-4/6 ' />
      <View className='px-10'>
        <Text className='text-black-200 font-rubik-medium text-2xl text-center'>Welcome to Restate</Text>
        <Text className='mt-2 text-black-300 font-rubik-extrabold text-4xl text-center'>Lets Get You Close To {'\n'} <Text className='text-primary-300'>Your Ideal Home</Text></Text>
        {
          toggle ? (
            <View className='mt-3 w-[90%] mx-auto flex flex-col gap-3'>
              <TextInput onChangeText={setPass} className='text-black-300  placeholder:text-black-300 placeholder:font-rubik bg-black-100/15 px-4 w-full py-4 rounded-lg shadow-black shadow-3xl '
                placeholder='Enter Password for Login'
                secureTextEntry={true}
                value={pass}
              />
              <TouchableOpacity className='flex flex-row py-2 px-4 w-full bg-primary-300/70 rounded-lg justify-center items-center' onPress={handleLogin}>
                <Text className='text-white text-2xl font-rubik-medium'> Login  </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className='mt-3 w-[90%] mx-auto flex flex-col gap-3'>
              <TextInput value={email} onChangeText={setEmail} className='text-black-300 text-start placeholder:text-black-300 placeholder:font-rubik bg-black-100/15 px-4 w-full py-4 rounded-lg shadow-black shadow-3xl '
                placeholder='Enter Email for Login'
              />
              <TouchableOpacity className='flex flex-row py-2 px-4 w-full bg-primary-300/70 rounded-lg justify-center items-center' onPress={handleCheck}>
                <Text className='text-white text-2xl font-rubik-medium'> Next  </Text>
                <Ionicons size={23} name='arrow-forward' color={'white'} />
              </TouchableOpacity>
            </View>
          )
        }
       <Pressable className='mt-3 w-[90%] flex flex-row gap-2 justify-center items-center mx-auto bg-orange-400  border border-red-400 shadow-danger shadow rounded-lg px-4 py-4 '>
        <Text className="text-white font-rubik-medium text-center">Login With Google </Text>
        <Image source={google} className='w-[20px] h-[20px] shadow-black shadow-2xl' alt='image'/>
       </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default SignIn