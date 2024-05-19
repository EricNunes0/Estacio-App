import AsyncStorage from "@react-native-async-storage/async-storage";

export const removePedidosFromCart = async (user) => {
    const usersString = await AsyncStorage.getItem("users");
	let usersArray = JSON.parse(usersString);
    let i = 0;
	for(let registeredUser of usersArray) {
		if(user.id === registeredUser.id) {
            usersArray[i].cart = [];
        } else {
            i++;
        }
    };
    await AsyncStorage.setItem("users", JSON.stringify(usersArray));
}