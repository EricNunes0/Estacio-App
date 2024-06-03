import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { settingsStyle } from "../../../styles/settings";
import { useCallback, useEffect, useState } from "react";
import { tokenRemoveFromUser } from "../../../../functions/tokenRemoveFromUser";

export default function Menu() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userAdmin, setUserAdmin] = useState(false);
    const [userIcon, setUserIcon] = useState(null);

    useEffect(() => {
        tokenGetUser();
    }, []);

    useFocusEffect(
        useCallback(() => {
            tokenGetUser();
            return () => {
            };
        }, [])
    );
    
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
                setUserId(usersArray[i].id);
                setUserName(usersArray[i].name);
                setUserAdmin(usersArray[i].admin);
                setUserIcon(usersArray[i].icon);
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
                navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    /* Redimensionar imagem */
    const resizeImage = async (uri) => {
        const resizedImage = await ImageManipulator.manipulateAsync(
            uri,
            [{ resize: { width: 300, height: 300 } }],
            {compress: 1, format: ImageManipulator.SaveFormat.JPEG}
        );
        return resizedImage.uri;
    };

    /* Alterar ícone */
    const changeUserIcon = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("É necessária permissão para acessar a biblioteca de mídia!");
            return;
        }
        const usersString = await AsyncStorage.getItem("users");
        let usersArray = JSON.parse(usersString);
        let i = 0;
        for(let registeredUser of usersArray) {
            if(registeredUser.id === userId) {
                break;
            } else {
                i++;
            }
        };
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.canceled) {
            let allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif", "image/webp"];
            let newUserMimeType = result.assets[0].mimeType;
            let newUserIconUri = result.assets[0].uri;
            if(allowedMimeTypes.includes(newUserMimeType)) {
                let newUserIcon = await resizeImage(newUserIconUri);
                setUserIcon(newUserIcon);
                usersArray[i].icon = newUserIcon;
                await AsyncStorage.setItem("users", JSON.stringify(usersArray));
            }
        } else {
            alert("O usuário negou o acesso ao seletor de imagens");
        };
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
                    <TouchableOpacity onPress={() => {changeUserIcon()}} style = {settingsStyle.headerIconButton}>
                        <Image source = {userIcon !== null ? userIcon : require("../../../images/user.png")} style = {settingsStyle.headerIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style = {settingsStyle.headerTextView}>
                    <Text style = {settingsStyle.headerText}>{userName}</Text>
                </View>
            </View>
            <View style = {settingsStyle.main}>
                {/* Funções de administrador */}
                    {userAdmin ? (
                        <>
                            <TouchableOpacity onPress={() => {navigation.navigate("Admins")}} style = {settingsStyle.mainButtons}>
                                <View style = {settingsStyle.mainButtonsLeft}>
                                    <View style = {settingsStyle.mainButtonsIconView}>
                                        <Image source={require("../../../svgs/settings/admin_add.svg")} style = {settingsStyle.mainButtonsIcon}></Image>
                                    </View>
                                    <View style = {settingsStyle.mainButtonsTextView}>
                                        <Text style = {settingsStyle.mainButtonsTitle}>Gerenciar administradores</Text>
                                        <Text style = {settingsStyle.mainButtonsSubtitle}>Adicionar ou remover administradores</Text>
                                    </View>
                                </View>
                                <View style = {settingsStyle.mainButtonsRight}>
                                    <View style = {settingsStyle.mainButtonsArrowView}>
                                        <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
                        </>
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