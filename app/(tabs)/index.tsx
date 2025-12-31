import { FeaturedCard } from '@/components/Cards'
import Filters from '@/components/Filters'
import Search from '@/components/Search'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {



  return (
    <SafeAreaView className="h-screen flex-1 gap-6 bg-white ">
      <View className='flex flex-row justify-between items-center px-6'>
        <View className='flex flex-row gap-2.5 items-center'>
          <Image source={images.avatar} alt='avatar' className='h-12 w-12' />
          <View className='flex flex-col gap'>
            <Text className='font-rubik-medium text-[12px] text-black-200'>
              Good Morning
            </Text>
            <Text className='font-rubik-semibold text-[16px] text-black-300'>
              Zia Khalid
            </Text>
          </View>
        </View>
        <View className='relative'>
          <Image source={icons.bell} className='h-8 w-8' alt='bell' />
          <View className='bg-primary-300 h-4 w-4 rounded-full absolute top-0 right-0'></View>
        </View>
      </View>
      <Search />
      <View className="flex flex-col gap-6">
        <View className='flex flex-row justify-between items-center px-6'>
          <Text className='text-xl font-rubik-bold text-black-300'>Featured</Text>
          <Text className='text-lg font-rubik-bold text-primary-300'>View All</Text>
        </View>
        <ScrollView className='flex flex-row gap-5 pl-6' horizontal showsHorizontalScrollIndicator={false}>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </ScrollView>

      </View>
      <View className='flex flex-col gap-6 pl-4'>
        <Filters />
      </View>
    </SafeAreaView>
  )
}

export default index