import { useEffect, useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";
import RightSVG from "../../../svgs/settings/right";

export default function Resources() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
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
                if(usersArray[i].admin === false) {
                    navigation.navigate("Menu");
                } else {
                    setUserId(usersArray[i].id);
                    setUserAdmin(usersArray[i].admin);
                }
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
                {/* Açaí */}
                <TouchableOpacity onPress={() => {navigation.navigate("ResourcesAcai")}} style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle}>Açaí</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <RightSVG></RightSVG>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Sorvete */}
                <TouchableOpacity onPress={() => {navigation.navigate("ResourcesIceCream")}} style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle}>Sorvete</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <RightSVG></RightSVG>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {settingsStyle.footer}>
                <TouchableOpacity onPress={() => {navigation.navigate("Menu")}} style = {settingsStyle.footerReturnButton}>
                    <Text style = {settingsStyle.footerReturnButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}