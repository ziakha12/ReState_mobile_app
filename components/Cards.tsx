import icons from '@/constants/icons'
import images from '@/constants/images'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

function FeaturedCard() {
    return (
        <TouchableOpacity >
            <Image source={images.japan} className='h-96 w-72 rounded-2xl relative mr-8' alt='japan' />
            <Image source={images.cardGradient} className='h-96 w-72 rounded-2xl absolute left-0 bottom-0' alt='bg-gred' />
            <View className='flex items-center flex-row absolute px-2 py-1 rounded-3xl bg-white gap-1 top-4 right-12'>
                <Image source={icons.star} className='w-4 h-4' />
                <Text className='font-rubik-medium text-[15px] text-primary-300'>4.4</Text>
            </View>
            <Text className='font-rubik-bold text-white text-2xl absolute bottom-24 left-4'>Japan</Text>
            <Text className='font-rubik-medium text-white text-lg absolute bottom-16 left-4'>street 14, world map</Text>
            <Text className='font-rubik-bold text-white text-3xl absolute bottom-4 left-4'>$ 2,500</Text>
            <Image source={icons.heart} className='w-7 h-7 absolute right-12 bottom-4' alt='heart' />
        </TouchableOpacity>
    )
}
function ListingCard() {
    return (
        <View>
            <Text>Cards</Text>
        </View>
    )
}

export {
    FeaturedCard,
    ListingCard
}
