import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { messageStyle } from "../../../styles/message";
import { settingsStyle } from "../../../styles/settings";

export default function DataInfo() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

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
                setUserId(usersArray[i].id);
                setUserEmail(usersArray[i].email);
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
                navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    return (
        <View style = {settingsStyle.container}>
            <View style = {settingsStyle.main}>
                <View style = {settingsStyle.mainInfoView}>
                    <View style = {settingsStyle.mainInfoTopView}>
                        <Text style = {settingsStyle.mainInfoTitle}>Dados de acesso</Text>
                        <Text style = {settingsStyle.mainInfoDescription}>Estes dados são a sua forma de acesso. Seu e-mail não pode ser alterado, porque é a informação principal de acesso à conta</Text>
                        <Text style = {settingsStyle.mainInfoLabel}>E-mail</Text>
                        <Text style = {settingsStyle.mainInfoItem}>{userEmail}</Text>
                    </View>
                </View>
            </View>
            <View style = {settingsStyle.footer}>
                <TouchableOpacity onPress={() => {navigation.navigate("Data")}} style = {settingsStyle.footerReturnButton}>
                    <Text style = {settingsStyle.footerReturnButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}