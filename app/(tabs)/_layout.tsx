import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Redirect, Tabs, useRouter } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { auth } from '@/config/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { getLocalStorage } from '@/service/storage'
export default function TabLayout() {

    const router = useRouter()

    const getUserDetail = async () => {
        const user = await getLocalStorage('user')
        console.log(user)
        if (!user) {
            router.push('/login')
        }
    }

    useEffect(() => {
        getUserDetail()
    }, [])

  return (
   <Tabs screenOptions={{
    headerShown: false,
   }}>
    <Tabs.Screen name="index"
        options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="home" color={color} size={size} />
            )
        }}/>
    <Tabs.Screen name="AddNew"
        options={{
            tabBarLabel: "Agregar",
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="add" color={color} size={size} />
            )
        }}/>
    <Tabs.Screen name="Profile"
        options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="person" color={color} size={size} />
            )
        }}/>
   </Tabs>
  )
}