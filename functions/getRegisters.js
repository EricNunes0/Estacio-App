import AsyncStorage from '@react-native-async-storage/async-storage';

export const getRegisters = async () => {
    try {
        const value = await AsyncStorage.getItem("users");
        if (value !== null) {
            console.log(JSON.stringify(value));
            return value;
        }
    } catch (e) {
          console.error("Houve um erro ao obter os dados:", e);
    }
};