import AsyncStorage from '@react-native-async-storage/async-storage';

export const getRegisters = async () => {
    try {
        const users = await AsyncStorage.getItem("users");
        if(users !== null) {
            alert(JSON.stringify(users));
            return users;
        } else {
            alert("Não há usuários cadastrados!");
        }
    } catch (e) {
        console.error("Houve um erro ao obter os usuários:", e);
    }
};