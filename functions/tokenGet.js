import AsyncStorage from "@react-native-async-storage/async-storage";

export const tokenGet = async () => {
    try {
        const tokenJSON = await AsyncStorage.getItem("token");
        if(tokenJSON) {
            alert(`Existe um token: ${tokenJSON}`);
        } else {
            alert(`Não existe um token: ${tokenJSON}`);
        }
    } catch (e) {
        alert(`Não foi possível obter o token: ${e}`);
    }
};