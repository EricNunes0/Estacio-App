import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { messageStyle } from "../../../styles/message";
import { settingsStyle } from "../../../styles/settings";
import { TextInput } from "react-native-paper";
import { getUserByToken } from "../../../../functions/getUserByToken";
import axios from "axios";
import MessageSVG from "../../../svgs/messages/message";

export default function DataAddressAdd() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [messages, setMessages] = useState([]);

    const [userCEP, setUserCEP] = useState(null);
    const [userCity, setUserCity] = useState(null);
    const [userAddress, setUserAddress] = useState(null);

    useEffect(() => {
        getAddresses();
    }, [])
    
    const getAddresses = async () => {
        try {
            const tokenString = await AsyncStorage.getItem("token");
            if(tokenString) {
                let user = await getUserByToken(tokenString);
                setUserId(user.id);
            } else {
                alert(`Não existe um token: ${tokenString}`);
                return navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    const addMessage = (type, title, content) => {
        if(messages.length < 5) {
            let id = Date.now();
            setMessages([...messages, {id: id, type: type, title: title, content: content}]);
            setTimeout(function() {
                setMessages(messages => messages.filter((item) => item.id !== id || item.id > id));
            }, 3000);
        };
    };

    const deleteMessage = (id) => {
        setMessages(messages => messages.filter((item) => item.id !== id));
    };

    const getCEP = async (cep) => {
        if(cep.length > 8) {
            return;
        }
        if(isNaN(cep)) {
            return;
        }
        setUserCEP(cep);
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                setUserCity(null);
                setUserAddress(null);
            } else {
                setUserCity(response.data.localidade);
                setUserAddress(response.data.logradouro);
            }
        } catch (err) {
            setUserCity(null);
            setUserAddress(null);
        }
    };


    const updateAddresses = async () => {
        try {
            if(!userCEP) {
                addMessage("error", "CEP inválido:", "Insira seu CEP");
                return;
            };
            if(userCEP.length !== 8 || isNaN(userCEP)) {
                addMessage("error", "CEP inválido:", "Insira um CEP válido");
                return;
            };
            if(!userCity) {
                addMessage("error", "Cidade inválida:", "Insira sua cidade");
                return;
            };
            if(!userAddress) {
                addMessage("error", "Endereço inválido:", "Insira seu endereço");
                return;
            };

            const usersString = await AsyncStorage.getItem("users");
            let usersArray = JSON.parse(usersString);
            let i = 0;
            for(let registeredUser of usersArray) {
                if(registeredUser.id === userId) {
                    usersArray[i].addresses.push({
                        id: uuid.v4(),
                        cep: userCEP,
                        city: userCity,
                        address: userAddress
                    });
                    break;
                } else {
                    i++;
                }
            };
            await AsyncStorage.setItem("users", JSON.stringify(usersArray));
            addMessage("success", "Endereço adicionado:", "Seu endereço foi adicionado com sucesso!");
            return navigation.goBack();
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    return (
        <View style = {settingsStyle.container}>
            <View style = {settingsStyle.main}>
                <View style = {settingsStyle.mainAddressView}>
                    <View style = {settingsStyle.mainAddressBlocks}>
                        <Text style = {settingsStyle.mainAddressLabel}>CEP</Text>
                        <TextInput mode="outlined" value={userCEP} onChangeText={(text) => {getCEP(text)}} placeholder="00.000-000" keyboardType="numeric" style = {settingsStyle.mainInput}></TextInput>
                    </View>
                    <View style = {settingsStyle.mainAddressBlocks}>
                        <Text style = {settingsStyle.mainAddressLabel}>Cidade</Text>
                        <TextInput mode="outlined" value={userCity} onChangeText={(text) => {setUserCity(text)}} placeholder="Cidade" style = {settingsStyle.mainInput}></TextInput>
                    </View>
                    <View style = {settingsStyle.mainAddressBlocks}>
                        <Text style = {settingsStyle.mainAddressLabel}>Endereço</Text>
                        <TextInput mode="outlined" value={userAddress} onChangeText={(text) => {setUserAddress(text)}} placeholder="Endereço" style = {settingsStyle.mainInput}></TextInput>
                    </View>
                </View>
            </View>
            <View style = {settingsStyle.footer}>
                <TouchableOpacity onPress={() => {updateAddresses()}} style = {settingsStyle.footerUpdateButton}>
                    <Text style = {settingsStyle.footerUpdateButtonText}>Atualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.goBack()}} style = {settingsStyle.footerReturnButton}>
                    <Text style = {settingsStyle.footerReturnButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <View style = {settingsStyle.messagesView}>
                {/* Mensagens */}
                {messages.map((msg) => (
                    <View style = {[messageStyle.message, messageStyle[`message_${msg.type}`]]} key={uuid.v4()}>
                        <View style = {messageStyle.messageIconView}>
                            <MessageSVG type = {msg.type}></MessageSVG>
                            <Image source = {messageIcons[msg.type]} style = {[messageStyle.messageIcon]}></Image>
                        </View>
                        <View style = {messageStyle.messageTextView}>
                            <Text style = {[messageStyle.messageTitle, messageStyle[`messageTitle_${msg.type}`]]}>{msg.title}</Text>
                            <Text style = {[messageStyle.messageContent, messageStyle[`messageContent_${msg.type}`]]}>{msg.content}</Text>
                        </View>
                        <View style = {messageStyle.messageCloseView}>
                            <TouchableOpacity onPress={() => {deleteMessage(msg.id)}} style = {messageStyle.messageCloseButton}>
                                <MessageSVG type = {`close_${msg.type}`}></MessageSVG>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}