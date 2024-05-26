import { useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";
import { TextInput } from "react-native-paper";

export default function ResourcesAcaiAdd() {
    const route = useRoute();
    const params = route.params;
    const navigation = useNavigation();
    const [resource, setResource] = useState(params.resource);
    const [resources, setResources] = useState(params.resource);
    const [itemValue, setItemValue] = useState('');
    const [itemPrice, setItemPrice] = useState((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    const [userId, setUserId] = useState(null);
    const [userAdmin, setUserAdmin] = useState(false);

    useEffect(() => {
        getData();
    }, [])
    
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

    /* Converter float em moeda */
    const formatCurrency = (value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        const formattedValue = (numericValue / 100).toFixed(2).replace('.', ',');
        return `R$ ${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    };
    /* Converter moeda em float */
    const getPrice = () => {
        let cleanValue = itemPrice.replace(/[R$\s]/g, '');
        cleanValue = cleanValue.replace(/\./g, '');
        cleanValue = cleanValue.replace(/,/, '.');
        return parseFloat(cleanValue);
    };

    /* Mililitros/Litros do tamanho */
    const sizeConvert = (value) => {
        let finalValue = 0;
        if(isNaN(value)) {
            alert("Insira apenas texto")
        } else if(value < 1000) {
            finalValue = `${parseInt(value)}ml`;
        } else if(value >= 1000) {
            finalValue = `${parseFloat(value / 1000)}l`;
        };
        return finalValue;
    };

    const changeItemPrice = async (text) => {
        let newText = formatCurrency(text);
        setItemPrice(newText);
    };

    const addItem = async () => {
        const resourcesString = await AsyncStorage.getItem("resources");
        let resourcesObject = JSON.parse(resourcesString);
        if(resource == "tamanho") {
            let newSizeLabel = sizeConvert(itemValue);
            let newPrice = getPrice();
            resourcesObject.acai[resource].items.push({
                value: parseFloat(itemValue),
                label: newSizeLabel,
                price: newPrice,
                checked: false
            });
        };
        setResources(resourcesObject.acai);
        await AsyncStorage.setItem("resources", JSON.stringify(resourcesObject));
        alert("Adicionado!");
        navigation.goBack();
    };
    
    return (
        <ScrollView>
            <View style = {settingsStyle.container}>
                <View style = {settingsStyle.editMain}>
                    <View style = {settingsStyle.editFieldset}>
                        <View style = {settingsStyle.editView}>
                            <Text style = {settingsStyle.editTitle}>Nome</Text>
                            <TextInput mode="outlined" value={itemValue} onChangeText={(text) => {setItemValue(text)}} label={"Nome"} style = {settingsStyle.editTextInput}></TextInput>
                        </View>
                        <View style = {settingsStyle.editView}>
                            <Text style = {settingsStyle.editTitle}>Preço</Text>
                            <TextInput mode="outlined" value={itemPrice} onChangeText={(text) => {changeItemPrice(text)}} keyboardType="numeric" label={"Preço"} style = {settingsStyle.editTextInput}></TextInput>
                        </View>
                    </View>
                </View>
                <View style = {settingsStyle.editFooter}>
                    <View style = {settingsStyle.editFooterMain}>
                        <TouchableOpacity onPress={() => {navigation.goBack()}} style = {[settingsStyle.editFooterButton, settingsStyle.editFooterButton1]}>
                            <Text style = {[settingsStyle.editFooterButtonText, settingsStyle.editFooterButtonText1]}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {addItem()}} style = {[settingsStyle.editFooterButton, settingsStyle.editFooterButton2]}>
                            <Text style = {[settingsStyle.editFooterButtonText, settingsStyle.editFooterButtonText2]}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}