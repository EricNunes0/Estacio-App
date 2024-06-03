import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserByToken = async (tokenString) => {
    try {
        let token = JSON.parse(tokenString).token;
        let usersString = await AsyncStorage.getItem("users");
        let usersArray = JSON.parse(usersString);
        let i = 0;
        for(let registeredUser of usersArray) {
            if(registeredUser.token === token) {
                break;
            } else {
                i++;
            }
        };
        return usersArray[i];
    } catch (e) {
        console.error("Não foi possível encontrar o usuário através do token:", e);
        return null;
    }
};