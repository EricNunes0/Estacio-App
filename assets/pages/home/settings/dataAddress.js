import { useCallback, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { messageStyle } from "../../../styles/message";
import { settingsStyle } from "../../../styles/settings";
import { getUserByToken } from "../../../../functions/getUserByToken";
import DeleteSVG from "../../../svgs/settings/delete";
import AddressSVG from "../../../svgs/settings/address";
import CEPSVG from "../../../svgs/settings/cep";
import CitySVG from "../../../svgs/settings/city";
import AddressEmptySVG from "../../../svgs/settings/address_empty";

export default function DataAddress() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [userAddresses, setUserAddresses] = useState([]);

    useEffect(() => {
        getUserAddresses();
    }, []);

    useFocusEffect(
        useCallback(() => {
            getUserAddresses();
            return () => {
            };
        }, [])
    );
    
    const getUserAddresses = async () => {
        try {
            const tokenString = await AsyncStorage.getItem("token");
            if(tokenString) {
                let user = await getUserByToken(tokenString);
                setUserId(user.id);
                setUserAddresses(user.addresses);
            } else {
                alert(`Não existe um token: ${tokenString}`);
                navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    const addressDeleteById = async (id) => {
        let usersString = await AsyncStorage.getItem("users");
        let usersArray = JSON.parse(usersString);
        let i = 0;
        for(let registeredUser of usersArray) {
            if(registeredUser.id === userId) {
                /* Removendo endereço */
                let j = 0;
                for(let address of usersArray[i].addresses) {
                    if(address.id === id) {
                        usersArray[i].addresses.splice(j, 1);
                        break;
                    } else {
                        j++;
                    }
                }
                break;
            } else {
                i++;
            };
        };
        await AsyncStorage.setItem("users", JSON.stringify(usersArray));
        setUserAddresses(usersArray[i].addresses);
    };

    return (
        <View style = {settingsStyle.container}>
            <View style = {settingsStyle.main}>
                <View style = {settingsStyle.mainInfoView}>
                    <View style = {settingsStyle.mainInfoTopView}>
                        <Text style = {settingsStyle.mainInfoTitle}>Endereços salvos</Text>
                    </View>
                    <View style = {settingsStyle.addressesView}>
                        {userAddresses.length !== 0 ? (
                            <>
                                {userAddresses.map((address) => (
                                    <View style = {settingsStyle.addressView}>
                                        <View style = {settingsStyle.addressInfoView}>
                                            <View style = {settingsStyle.addressDataView}>
                                                <View style = {settingsStyle.addressTopView}>
                                                    <View style = {settingsStyle.addressIconView}>
                                                        <CEPSVG></CEPSVG>
                                                    </View>
                                                    <View style = {settingsStyle.addressTitleView}>
                                                        <Text style = {settingsStyle.addressTitle}>CEP</Text>
                                                    </View>
                                                </View>
                                                <View style = {settingsStyle.addressBottomView}>
                                                    <Text style = {settingsStyle.addressText}>{address.cep}</Text>
                                                </View>
                                            </View>
                                            <View style = {settingsStyle.addressDataView}>
                                                <View style = {settingsStyle.addressTopView}>
                                                    <View style = {settingsStyle.addressIconView}>
                                                        <CitySVG></CitySVG>
                                                    </View>
                                                    <View style = {settingsStyle.addressTitleView}>
                                                        <Text style = {settingsStyle.addressTitle}>Cidade</Text>
                                                    </View>
                                                </View>
                                                <View style = {settingsStyle.addressBottomView}>
                                                    <Text style = {settingsStyle.addressText}>{address.city}</Text>
                                                </View>
                                            </View>
                                            <View style = {settingsStyle.addressDataView}>
                                                <View style = {settingsStyle.addressTopView}>
                                                    <View style = {settingsStyle.addressIconView}>
                                                        <AddressSVG></AddressSVG>
                                                    </View>
                                                    <View style = {settingsStyle.addressTitleView}>
                                                        <Text style = {settingsStyle.addressTitle}>Endereço</Text>
                                                    </View>
                                                </View>
                                                <View style = {settingsStyle.addressBottomView}>
                                                    <Text style = {settingsStyle.addressText}>{address.address}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style = {settingsStyle.addressDeleteView}>
                                            <TouchableOpacity onPress={() => addressDeleteById(address.id)} style = {settingsStyle.addressDeleteButton}>
                                                <DeleteSVG></DeleteSVG>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))}
                            </>
                        ) : (
                            <View style = {settingsStyle.noAddressesView}>
                                <View style = {settingsStyle.noAddressesIconView}>
                                    <AddressEmptySVG></AddressEmptySVG>
                                </View>
                                <Text style = {settingsStyle.noAddressesTitle}>Vazio</Text>
                                <Text style = {settingsStyle.noAddressesText}>Você não tem nenhum endereço salvo</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
            <View style = {settingsStyle.footer}>
                <TouchableOpacity onPress={() => {navigation.navigate("DataAddressAdd")}} style = {settingsStyle.footerUpdateButton}>
                    <Text style = {settingsStyle.footerUpdateButtonText}>Adicionar endereço</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Data")}} style = {settingsStyle.footerReturnButton}>
                    <Text style = {settingsStyle.footerReturnButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}