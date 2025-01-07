import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'

export default function index() {
    const router = useRouter()

  return (
    <View>
        <View style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 40,
        }}>
            <Image
            source={require('../../assets/images/login.png')}
            style={styles?.image}
            />

        </View>

        <View style={{
            padding:25,
            height: '100%',
            backgroundColor: Colors.PRIMARY
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
            }}>Trackeá tus medicamentos</Text>

            <Text style={{
                fontSize: 16,
                color: '#fff',
                textAlign: 'center',
                marginTop: 20,
            }}>Organizá tu medicación, tomá control de tu salud.</Text>

            <TouchableOpacity style={styles?.button}
            onPress={() => router.push('/login/signIn')}
            >
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: Colors.PRIMARY
                }}>Comenzar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 210,
        height: 450,
        borderRadius: 23,
    },
    button: {
        backgroundColor: Colors.LIGHT_PRIMARY,
        padding: 10,
        borderRadius: 99,
        marginTop: 25,
    }
})
