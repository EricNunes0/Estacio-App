import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from "react-native-uuid";
import CryptoJS from "crypto-js";

export const clearRegisters = async () => {
    await AsyncStorage.removeItem("users");

    /* Adicionando usuário administrador padrão */
    await AsyncStorage.setItem("users", JSON.stringify([{
        id: uuid.v4(),
		name: "Admin",
		createAt: new Date().getTime(),
		admin: true,
		addresses: [],
		email: "admin@gmail.com",
		password: CryptoJS.AES.encrypt("12345678", "password").toString(),
		phone: null,
		cart: [],
		token: null,
		icon: null
    }]))
};