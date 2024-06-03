import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserById = async (id) => {
    try {
        let usersString = await AsyncStorage.getItem("users");
        let usersArray = JSON.parse(usersString);
        let i = 0;
        for(let registeredUser of usersArray) {
            if(registeredUser.id === id) {
                break;
            } else {
                i++;
            }
        };
        return usersArray[i];
    } catch (e) {
        console.error("Não foi possível encontrar o usuário através do id:", e);
        return null;
    }
};