import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Redirect, Tabs, useRouter } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { auth } from '@/config/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
export default function TabLayout() {

    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uuid = user.uid
            setAuthenticated(true)
        } else {
            router.push('/login')
            setAuthenticated(false)
        }
    })


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