import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearStorage = async () => {
    await AsyncStorage.clear();
    console.log("Os dados foram deletados!");
};