import { useCallback, useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";

export default function ResourcesAcai() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [userAdmin, setUserAdmin] = useState(false);
    const [resources, setResources] = useState({});

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
            const resourcesString = await AsyncStorage.getItem("resources");
            let resourcesObject = JSON.parse(resourcesString);
            setResources(resourcesObject.acai);

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

    /* Adicionar item */
    const addItem = async (resource) => {
        navigation.navigate("ResourcesAcaiAdd", {
            resource: resource
        });
    };

    /* Editar item */
    const editItem = async (resource, item) => {
        console.log(item)
        navigation.navigate("ResourcesAcaiEdit", {
            resource: resource,
            item: item
        });
    };

    const deleteItem = async (resource, item) => {
        const resourcesString = await AsyncStorage.getItem("resources");
        let resourcesObject = JSON.parse(resourcesString);
        for(const key of Object.keys(resourcesObject.acai)) {
            if(resource === key) {
                let i = 0;
                for(const resourceItem of resourcesObject.acai[key].items) {
                    if(resourceItem.id === item.id) {
                        resourcesObject.acai[key].items.splice(i, 1);
                    } else {
                        i++;
                    }
                }
            }
        };
        setResources(resourcesObject.acai);
        await AsyncStorage.setItem("resources", JSON.stringify(resourcesObject));
    };
    
    return (
        <ScrollView>
            <View style = {settingsStyle.container}>
                <View style = {settingsStyle.main}>
                    {Object.keys(resources).map((resource) => (
                        <View key={resource}>
                            <View style = {settingsStyle.mainHeader}>
                                <Text style = {settingsStyle.mainTitle}>{resources[resource].title}</Text>
                                <View style = {settingsStyle.mainHeaderAddView}>
                                    <TouchableOpacity onPress={() => {addItem(resource)}} style = {settingsStyle.mainHeaderAddButton}>
                                        <Image source={require("../../../svgs/settings/add.svg")} style = {settingsStyle.mainHeaderAddIcon}></Image>
                                    </TouchableOpacity>
                                </View>
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
                                                <TouchableOpacity onPress={() => {editItem(resource, item)}} style = {settingsStyle.mainButtonsRightOptions}>
                                                    <Image source={require("../../../svgs/settings/edit.svg")} style = {settingsStyle.mainButtonsRightOptionsIcons}></Image>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => {deleteItem(resource, item)}} style = {settingsStyle.mainButtonsRightOptions}>
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
                <View style = {settingsStyle.editFooter}>
                    <View style = {settingsStyle.editFooterMain}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Resources")}} style = {[settingsStyle.editFooterButton, settingsStyle.editFooterButton1]}>
                            <Text style = {[settingsStyle.editFooterButtonText, settingsStyle.editFooterButtonText1]}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}