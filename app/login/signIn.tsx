import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constant/Colors'
import { useRouter } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/FirebaseConfig'
import { setLocalStorage } from '@/service/storage'


export default function SignIn() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = () => {
        if (!email || !password) {
            ToastAndroid.show('Por favor, completa todos los campos', ToastAndroid.BOTTOM)
            return
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await setLocalStorage('user', user)
            router.push('/(tabs)')
        })
        .catch((error) => {
            console.log(error)
        })
    }

  return (
    <View style={{
        padding: 25,

    }}>
      <Text style={styles?.textHeader}>Inicia Sesión</Text>
      <Text style={styles?.textSubHeader}>Bienvenido de nuevo, inicia sesión para continuar.</Text>

      <View style={{
        marginTop: 20,
      }}>
        <Text>Correo electrónico</Text>
        <TextInput
        placeholder='Ingresa tu correo electrónico'
        style={styles?.textInput}
        onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{
        marginTop: 20,
      }}>
        <Text>Contraseña</Text>
        <TextInput
        placeholder='Ingresa tu contraseña'
        secureTextEntry={true}
        style={styles?.textInput}
        onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles?.button}
      onPress={onSignIn}
      >
      <Text style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: 'white'
                    }}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles?.buttonRegister}
      onPress={() => router.push('/login/signUp')}
      >
      <Text style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: Colors.PRIMARY
                    }}>Registrarse</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    textSubHeader: {
        fontSize: 16,
        color: Colors.GRAY
    },
    textInput: {
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        fontSize: 16,
        marginTop: 5,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 10,
        marginTop: 35,
    },
    buttonRegister: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
    }
})