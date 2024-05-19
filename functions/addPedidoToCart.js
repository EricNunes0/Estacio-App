import AsyncStorage from "@react-native-async-storage/async-storage";

export const addPedidoToCart = async (user, pedido) => {
    const usersString = await AsyncStorage.getItem("users");
	let usersArray = JSON.parse(usersString);
    let i = 0;
	for(let registeredUser of usersArray) {
		if(user.id === registeredUser.id) {
            let newUserCart = usersArray[i].cart || [];
            newUserCart.push(pedido);
            usersArray[i].cart = newUserCart;
        } else {
            i++;
        }
    };
    await AsyncStorage.setItem("users", JSON.stringify(usersArray));
}