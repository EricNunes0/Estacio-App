import AsyncStorage from "@react-native-async-storage/async-storage";

export const tokenRemoveFromUser = async (token) => {
    const usersString = await AsyncStorage.getItem("users");
	let usersArray = JSON.parse(usersString);
    let i = 0;
	for(let registeredUser of usersArray) {
		if(registeredUser.token === token) {
            usersArray[i].token = null;
        } else {
            i++;
        }
    };
    await AsyncStorage.setItem("users", JSON.stringify(usersArray));
}