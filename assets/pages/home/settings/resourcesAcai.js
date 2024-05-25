import { useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";
import { setStandardResources } from "../../../../functions/setStandardResources";

export default function ResourcesAcai() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [userAdmin, setUserAdmin] = useState(false);
    const [resources, setResources] = useState({});

    useEffect(() => {
        getData();
    }, [])
    
    const getData = async () => {
        try {
            const resourcesString = await AsyncStorage.getItem("resources");
            let resourcesObject = JSON.parse(resourcesString);
            setResources(resourcesObject.acai);
            console.log(resources)

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
                    console.log(JSON.parse(await AsyncStorage.getItem("resources")));
                    navigation.navigate("Menu");
                } else {
                    setUserId(usersArray[i].id);
                    setUserAdmin(usersArray[i].admin);
                    setStandardResources() // Remover depois
                }
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
                navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    const editItem = async (item) => {
        console.log(item)
    };
    
    return (
        <ScrollView>
            <View style = {settingsStyle.container}>
                <View style = {settingsStyle.main}>
                    {Object.keys(resources).map((resource) => (
                        <View>
                            <View style = {settingsStyle.mainHeader}>
                                <Text style = {settingsStyle.mainTitle}>{resources[resource].title}</Text>
                            </View>
                            <View style = {settingsStyle.mainArticle}>
                                {resources[resource].items.map((item) => (
                                    <TouchableOpacity style = {settingsStyle.mainButtons}>
                                        <View style = {settingsStyle.mainEditButtonsLeft}>
                                            <View style = {settingsStyle.mainButtonsTextView}>
                                                {item.price !== 0 ? (
                                                    <>
                                                        <Text style = {settingsStyle.mainButtonsTitle}>{item.label}</Text>
                                                        <Text style = {settingsStyle.mainButtonsTitle2}>{(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                                                    </>
                                                ) : (
                                                    <Text style = {settingsStyle.mainButtonsTitle}>{item.label}</Text>
                                                )}
                                            </View>
                                        </View>
                                        <View style = {settingsStyle.mainEditButtonsRight}>
                                            <View style = {settingsStyle.mainButtonsRightOptionsView}>
                                                <TouchableOpacity onPress={() => {editItem(item)}} style = {settingsStyle.mainButtonsRightOptions}>
                                                    <Image source={require("../../../svgs/settings/edit.svg")} style = {settingsStyle.mainButtonsRightOptionsIcons}></Image>
                                                </TouchableOpacity>
                                                <TouchableOpacity style = {settingsStyle.mainButtonsRightOptions}>
                                                    <Image source={require("../../../svgs/settings/delete.svg")} style = {settingsStyle.mainButtonsRightOptionsIcons}></Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
                <View style = {settingsStyle.footer}>
                    <TouchableOpacity onPress={() => {navigation.navigate("Resources")}} style = {settingsStyle.footerReturnButton}>
                        <Text style = {settingsStyle.footerReturnButtonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}