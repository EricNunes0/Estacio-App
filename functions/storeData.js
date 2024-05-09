import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log("Os dados foram armazenados!", key, value);
    } catch (e) {
          console.error("Houve um erro ao armazenar os dados:", e);
    }
};