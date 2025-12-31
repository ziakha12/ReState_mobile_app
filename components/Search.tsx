import icons from '@/constants/icons';
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';



export default function Search() {

    const path = usePathname()
    const params = useLocalSearchParams<{query? : string}>()
    const [search, setSearch] = useState(params.query)

    const debounceSearch = useDebouncedCallback((search : string) => router.setParams({query : search}), 500) 

    const handleSearch = (e : string) => {
       setSearch(e)
       debounceSearch(e)
    }

  return (
    <View className='bg-[#FBFBFD] p-4 mx-6 rounded-lg border border-primary-200 shadow-sm shadow-primary-200 flex flex-row justify-between items-center'>
        <View className='flex flex-row gap-8 items-center'>
          <Image source={icons.search} className='w-7 h-7' alt='search-i' />
          <TextInput placeholder='Search something...' className='text-black-200 placeholder:text-black-200' value={search} onChangeText={(text : string) => handleSearch(text)}/>
        </View>
        <Image source={icons.filter} className='w-7 h-7' alt='filter'/>
      </View>
  )
}