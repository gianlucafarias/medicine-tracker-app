import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import Colors from '@/constant/Colors'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { auth } from '@/config/FirebaseConfig'
import { setLocalStorage } from '@/service/storage'



export default function signUp() {

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const onCreateAccount = () => {

        if (!email || !password || !confirmPassword || !name) {
            ToastAndroid.show('Por favor, completa todos los campos', ToastAndroid.BOTTOM)
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
      // Signed up 
      const user = userCredential.user;
      await setLocalStorage('user', user)
      router.push('/(tabs)')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)

      if(errorCode === 'auth/email-already-in-use'){
        ToastAndroid.show('El correo electrónico ya está en uso', ToastAndroid.BOTTOM)
      }
      // ..
        });
    }
    
  return (
    <View style={{
        padding: 25,

    }}>
      <Text style={styles?.textHeader}>Registrarme</Text>
      <Text style={styles?.textSubHeader}>Vamos a crear tu cuenta.</Text>

      <View style={{
        marginTop: 20,
      }}>
        <Text>Nombre completo</Text>
        <TextInput
        placeholder='Nombre'
        style={styles?.textInput}
        onChangeText={(value) => setName(value)}
        />
      </View>

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

      <View style={{
        marginTop: 20,
      }}>
        <Text>Confirmar contraseña</Text>
        <TextInput
        placeholder='Ingresa tu contraseña'
        secureTextEntry={true}
        style={styles?.textInput}
        onChangeText={(value) => setConfirmPassword(value)}
        />
      </View>
      

      <TouchableOpacity style={styles?.button}
      onPress={onCreateAccount}
      >
      <Text style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: 'white'
                    }}>Registrarme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles?.buttonRegister}
      onPress={() => router.push('/login/signIn')}
      >
      <Text style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: Colors.PRIMARY
                    }}>Ya tengo una cuenta</Text>
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