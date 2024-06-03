import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearPedidos = async () => {
    await AsyncStorage.removeItem("users");
};