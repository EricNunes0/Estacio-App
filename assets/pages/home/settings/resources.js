import { useEffect, useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";

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
                    console.log(JSON.parse(await AsyncStorage.getItem("resources")));
                    navigation.navigate("Menu");
                } else {
                    setUserId(usersArray[i].id);
                    setUserAdmin(usersArray[i].admin);
                    
                    await AsyncStorage.setItem("resources", JSON.stringify({
                        acai: {
                            tamanho: {
                                type: "radio",
                                title: "Tamanhos",
                                description: "Escolha o tamanho do açaí",
                                default: 0,
                                required: true,
                                items: [
                                    {value: 300, label: "300ml", price: 14.00, checked: false},
                                    {value: 400, label: "400ml", price: 16.00, checked: false},
                                    {value: 500, label: "500ml", price: 18.00, checked: false},
                                    {value: 770, label: "770ml", price: 22.00, checked: false},
                                    {value: 1000, label: "1ml", price: 33.00, checked: false}
                                ]
                            },
                            calda: {
                                type: "radio",
                                title: "Calda",
                                description: "Escolha 1 calda",
                                default: null,
                                required: true,
                                items: [
                                    {label: "Nenhuma", value: "Nenhuma", price: 0.00},
                                    {label: "Morango", value: "Morango", price: 0.00},
                                    {label: "Chocolate Suiço", value: "Chocolate Suiço", price: 0.00},
                                    {label: "Leite Condensado", value: "Leite Condensado", price: 0.00},
                                    {label: "Uva", value: "Uva", price: 0.00},
                                    {label: "Menta", value: "Menta", price: 0.00},
                                    {label: "Caramelo", value: "Caramelo", price: 0.00},
                                    {label: "Tutti-frutti", value: "Tutti-frutti", price: 0.00},
                                    {label: "Chocomenta", value: "Chocomenta", price: 0.00},
                                    {label: "Ovomaltine", value: "Ovomaltine", price: 0.00}
                                ]
                            },
                            sabores: {
                                type: "checkbox",
                                title: "Sabores",
                                description: "Escolha os sabores",
                                default: [],
                                max: 2,
                                required: true,
                                items: [
                                    {label: "Natural", value: "Natural", price: 0.00, checked: false},
                                    {label: "Banana", value: "Banana", price: 0.00, checked: false},
                                    {label: "Morango", value: "Morango", price: 0.00, checked: false},
                                    {label: "Cupuaçu", value: "Cupuaçu", price: 0.00, checked: false}
                                ]
                            },
                            condimentos: {
                                type: "checkbox",
                                title: "Condimentos",
                                description: "Escolha os condimentos",
                                default: [],
                                required: false,
                                items: [
                                    {label: "Paçoca", value: "Paçoca", price: 0.00},
                                    {label: "Amendoim", value: "Amendoim", price: 0.00},
                                    {label: "Granola", value: "Granola", price: 0.00},
                                    {label: "Leite em pó", value: "Leite em pó", price: 0.00},
                                    {label: "Aveia", value: "Aveia", price: 0.00},
                                    {label: "Sucrilhos", value: "Sucrilhos", price: 0.00},
                                    {label: "Flocos de arroz", value: "Flocos de arroz", price: 0.00}
                                ]
                            },
                            adicionais: {
                                type: "checkbox",
                                title: "Adicionais",
                                description: "Escolha os adicionais",
                                default: [],
                                required: false,
                                items: [
                                    {label: "Nutella (30ml)", value: "Nutella (30ml)", price: 4.00},
                                    {label: "Leite Condensado (30ml)", value: "Leite Condensado (30ml)", price: 2.00},
                                    {label: "Kitkat em barra", value: "Kitkat em barra", price: 5.00}
                                ]
                            }
                        }
                    }))
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
                <TouchableOpacity onPress={() => {navigation.navigate("DataName")}} style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle}>Açaí</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
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