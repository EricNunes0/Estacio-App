import AsyncStorage from "@react-native-async-storage/async-storage";
import CryptoJS from "crypto-js"

export const appendUser = async (obj) => {
    console.log(obj);

    const usersString = await AsyncStorage.getItem("users");
    const usersArray = usersString ? JSON.parse(usersString) : [];
    let emailExists = false;
    for(const user of usersArray) {
        if(user.email === obj.email) {
            emailExists = true;
        };
    };
    if(!emailExists) {
        usersArray.push(obj);
        await AsyncStorage.setItem("users", JSON.stringify(usersArray));
        let decryptedPassword = CryptoJS.AES.decrypt(obj.password, "password").toString(CryptoJS.enc.Utf8)
        console.log(decryptedPassword)
        alert("Um novo usuário foi cadastrado!", );
    } else {
        alert("E-mail já cadastrado!");
    };
};