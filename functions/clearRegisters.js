import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearRegisters = async () => {
    await AsyncStorage.removeItem("users");
};