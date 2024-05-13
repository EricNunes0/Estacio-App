import AsyncStorage from "@react-native-async-storage/async-storage";

export const tokenDelete = async () => {
    try {
        await AsyncStorage.removeItem("token");
        alert(`Token deletado!`);
    } catch (e) {
        alert(`Não foi possível deletar o token: ${e}`);
    }
};