import { categories } from '@/constants/data'
import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'

export default function Filters() {

    // const [selectedCategory, setSelectedCategory] = useState('All')


  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        categories && categories.map((item) => <TouchableOpacity key={item.category} className='px-6 flex items-center justify-center h-12 rounded-full py-2 bg-primary-300 mx-1'>
                <Text className='text-white font-rubik-medium text-lg'>{item.category}</Text>
            </TouchableOpacity>
        )
      }
    </ScrollView>
  )
}