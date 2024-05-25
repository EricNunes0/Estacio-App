import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";
import { useEffect, useState } from "react";
import { tokenRemoveFromUser } from "../../../../functions/tokenRemoveFromUser";

export default function Menu() {
    const navigation = useNavigation();
    const [userName, setUserName] = useState(null);
    const [userAdmin, setUserAdmin] = useState(false);

    useEffect(() => {
        tokenGetUser();
    }, [])
    
    const tokenGetUser = async () => {
        try {
            const tokenJSON = await AsyncStorage.getItem("token");
            if(tokenJSON) {
                let token = JSON.parse(tokenJSON).token;
                const usersString = await AsyncStorage.getItem("users");
                let usersArray = JSON.parse(usersString);
                let i = 0;
                for(let registeredUser of usersArray) {
                    if(registeredUser.token === token) {
                        break;
                    } else {
                        i++;
                    }
                };
                setUserName(usersArray[i].name);
                setUserAdmin(usersArray[i].admin);
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
                navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    /* Fazer Logout */
	const logout = async () => {
		try {
            const tokenJSON = await AsyncStorage.getItem("token");
            let token = JSON.parse(tokenJSON).token;
            tokenRemoveFromUser(token);
			await AsyncStorage.removeItem("token");
            navigation.navigate("Index");
		} catch (e) {
			console.error("Erro ao fazer logout:", e);
			alert("Ocorreu um erro ao fazer logout");
		}
	};
    
    return (
        <View style = {settingsStyle.container}>
            <View style = {settingsStyle.header}>
                <View style = {settingsStyle.headerIconView}>
                    <Image source = {require("../../../images/user.png")} style = {settingsStyle.headerIcon}></Image>
                </View>
                <View style = {settingsStyle.headerTextView}>
                    <Text style = {settingsStyle.headerText}>{userName}</Text>
                </View>
            </View>
            <View style = {settingsStyle.main}>
                {/* Editar recursos */}
                    {userAdmin ? (
                        <TouchableOpacity onPress={() => {navigation.navigate("Resources")}} style = {settingsStyle.mainButtons}>
                            <View style = {settingsStyle.mainButtonsLeft}>
                                <View style = {settingsStyle.mainButtonsIconView}>
                                    <Image source={require("../../../svgs/settings/admin.svg")} style = {settingsStyle.mainButtonsIcon}></Image>
                                </View>
                                <View style = {settingsStyle.mainButtonsTextView}>
                                    <Text style = {settingsStyle.mainButtonsTitle}>Editar recursos</Text>
                                    <Text style = {settingsStyle.mainButtonsSubtitle}>Definir recursos disponíveis em estoque</Text>
                                </View>
                            </View>
                            <View style = {settingsStyle.mainButtonsRight}>
                                <View style = {settingsStyle.mainButtonsArrowView}>
                                    <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <></>
                    )
                }
                {/* Ver pedidos */}
                <TouchableOpacity onPress={() => {navigation.navigate("Pedidos")}} style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsIconView}>
                            <Image source={require("../../../svgs/settings/order.svg")} style = {settingsStyle.mainButtonsIcon}></Image>
                        </View>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle}>Ver pedidos</Text>
                            <Text style = {settingsStyle.mainButtonsSubtitle}>Consultar todos os meus pedidos</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Dados da conta */}
                <TouchableOpacity onPress={() => {navigation.navigate("Data")}} style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsIconView}>
                            <Image source={require("../../../svgs/settings/data.svg")} style = {settingsStyle.mainButtonsIcon}></Image>
                        </View>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle}>Dados da conta</Text>
                            <Text style = {settingsStyle.mainButtonsSubtitle}>Minhas informações da conta</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Endereços */}
                <TouchableOpacity style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsIconView}>
                            <Image source={require("../../../svgs/settings/address.svg")} style = {settingsStyle.mainButtonsIcon}></Image>
                        </View>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle}>Endereços</Text>
                            <Text style = {settingsStyle.mainButtonsSubtitle}>Meus endereços de entrega</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Sair */}
                <TouchableOpacity onPress={() => {logout()} } style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsIconView}>
                            <Image source={require("../../../svgs/settings/logout.svg")} style = {settingsStyle.mainButtonsIcon}></Image>
                        </View>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle}>Sair</Text>
                            <Text style = {settingsStyle.mainButtonsSubtitle}>Desconectar minha conta</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}