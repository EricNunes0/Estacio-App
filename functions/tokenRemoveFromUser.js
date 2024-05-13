import AsyncStorage from "@react-native-async-storage/async-storage";

export const tokenRemoveFromUser = async (token) => {
    const usersString = await AsyncStorage.getItem("users");
	let usersArray = JSON.parse(usersString);
    let i = 0;
	for(let registeredUser of usersArray) {
        console.log(registeredUser, token)
		if(registeredUser.token === token) {
            console.log("ENCONTREI O CABRA", registeredUser)
            usersArray[i].token = null;
        } else {
            i++;
        }
    };
    console.log(usersArray)
    await AsyncStorage.setItem("users", JSON.stringify(usersArray));
}