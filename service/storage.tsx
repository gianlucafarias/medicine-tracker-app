import AsyncStorage from "@react-native-async-storage/async-storage"

export const setLocalStorage = async (key: string, value: any) => {
    await AsyncStorage.setItem(key, value)
}

export const getLocalStorage = async (key: string) => {
    const value = await AsyncStorage.getItem(key)
    return value
}

export const removeLocalStorage = async (key: string) => {
    await AsyncStorage.removeItem(key)
}

