import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const Tablayout = () => {
  return (
    <Tabs screenOptions={{ 
        headerShown: false,
        
        tabBarStyle : {
            backgroundColor : '#060606',
            height : 90,
            marginBottom : 20,
            borderRadius : 40,
            paddingTop : 15,
            borderTopWidth : 0,
            borderTopColor : 'transparent',
            elevation : 0,
            shadowOpacity : 0,
            width : '90%',
            alignSelf : 'center',
            shadowOffset : { width : 0, height : 0 },
        },
        tabBarActiveTintColor : '#fff',
        tabBarInactiveTintColor : '#888',
        tabBarInactiveBackgroundColor : '#060606',
        tabBarLabelStyle : {
            fontSize : 12,
            fontWeight : 'bold',
            marginBottom : 10,
        },
        tabBarItemStyle : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
        }
         }}>
        <Tabs.Screen name="index" 
        options={{ 
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
            )
        }}
        
        />
        <Tabs.Screen name="explore" 
        options={{ 
            title: 'Explore',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" color={color} size={size} />
            )
        }}
         />
         <Tabs.Screen name="profile" 
        options={{ 
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
            )
        }}
         />
    </Tabs>
  )
}

export default Tablayout