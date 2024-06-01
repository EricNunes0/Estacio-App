import { useCallback, useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";

export default function Admins() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    useFocusEffect(
        useCallback(() => {
            getData();
            return () => {
            };
        }, [])
    );
    
    const getData = async () => {
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
                    setUsers(usersArray);
                };
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
                navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    const toggleAdmin = async (id) => {
        if(id === userId) {
            alert("Você não pode remover seu cargo de administrador!")
            return;
        };
        const usersString = await AsyncStorage.getItem("users");
        let usersArray = JSON.parse(usersString);
        let i = 0;
        for(let registeredUser of usersArray) {
            if(registeredUser.id === id) {
                /* Alterando admin */
                usersArray[i].admin = usersArray[i].admin === false ? true : false;
                break;
            } else {
                i++;
            }
        };
        setUsers(usersArray);
        await AsyncStorage.setItem("users", JSON.stringify(usersArray));
    };
    
    return (
        <ScrollView>
            <View style = {settingsStyle.container}>
                <View style = {settingsStyle.main}>
                    {users.map((user) => (
                        <View style = {settingsStyle.adminsUsersView} key={user.id}>
                            <View>
                                <Text style = {settingsStyle.adminsUserName}>{user.name}</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {toggleAdmin(user.id)}} style = {settingsStyle.adminsButton}>
                                    {user.admin === true ? (
                                        <Image source={require("../../../svgs/settings/crown_true.svg")} style = {settingsStyle.adminsButtonIcon}></Image>
                                    ) : (
                                        <Image source={require("../../../svgs/settings/crown_false.svg")} style = {settingsStyle.adminsButtonIcon}></Image>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
                <View style = {settingsStyle.editFooter}>
                    <View style = {settingsStyle.editFooterMain}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Menu")}} style = {[settingsStyle.editFooterButton, settingsStyle.editFooterButton1]}>
                            <Text style = {[settingsStyle.editFooterButtonText, settingsStyle.editFooterButtonText1]}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}