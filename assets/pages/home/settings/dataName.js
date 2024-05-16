import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { messageStyle } from "../../../styles/message";
import { settingsStyle } from "../../../styles/settings";
import { TextInput } from "react-native-paper";

export default function DataName() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userOldName, setUserOldName] = useState(null);
    const [messages, setMessages] = useState([]);

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
                setUserName(usersArray[i].name);
                setUserOldName(usersArray[i].name);
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
                navigation.navigate("Login");
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

    const updateUserName = async () => {
        try {
            if(userName === userOldName) {
                addMessage("error", "Nome inválido:", "Insira um nome diferente");
                return;
            } else if(!userName) {
                addMessage("error", "Nome inválido:", "Insira um nome");
                return;
            } else if(userName.length < 2) {
                addMessage("error", "Nome inválido:", "Seu nome precisa ter no mínimo 2 caracteres");
                return;
            }

            const tokenJSON = await AsyncStorage.getItem("token");
            if(tokenJSON) {
                let token = JSON.parse(tokenJSON).token;
                const usersString = await AsyncStorage.getItem("users");
                let usersArray = JSON.parse(usersString);
                let i = 0;
                for(let registeredUser of usersArray) {
                    if(registeredUser.id === userId) {
                        usersArray[i].name = userName;
                        break;
                    } else {
                        i++;
                    }
                };
                await AsyncStorage.setItem("users", JSON.stringify(usersArray));
                addMessage("success", "Nome alterado:", "Seu nome foi alterado com sucesso!");
            } else {
                navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    const iconsPath = `../../../svgs/messages`;
    const messageIcons = {
        info: require(`${iconsPath}/info.svg`),
        success: require(`${iconsPath}/success.svg`),
        warning: require(`${iconsPath}/warning.svg`),
        error: require(`${iconsPath}/error.svg`)
    };
    const messageCloseIcons = {
        info: require(`${iconsPath}/close_info.svg`),
        success: require(`${iconsPath}/close_success.svg`),
        warning: require(`${iconsPath}/close_warning.svg`),
        error: require(`${iconsPath}/close_error.svg`)
    };

    return (
        <View style = {settingsStyle.container}>
            <View style = {settingsStyle.main}>
                <View style = {settingsStyle.mainInputView}>
                    <TextInput mode="outlined" label={"Nome completo"} value={userName} onChangeText={(text) => {setUserName(text)}} style = {settingsStyle.mainInput}></TextInput>
                </View>
            </View>
            <View style = {settingsStyle.footer}>
                <TouchableOpacity onPress={() => {navigation.navigate("Data")}} style = {settingsStyle.footerReturnButton}>
                    <Text style = {settingsStyle.footerReturnButtonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {updateUserName()}} style = {settingsStyle.footerUpdateButton}>
                    <Text style = {settingsStyle.footerUpdateButtonText}>Atualizar</Text>
                </TouchableOpacity>
            </View>
            <View style = {settingsStyle.messagesView}>
                {/* Mensagens */}
                {messages.map((msg) => (
                    <View style = {[messageStyle.message, messageStyle[`message_${msg.type}`]]}>
                    <View style = {messageStyle.messageIconView}>
                        <Image source = {messageIcons[msg.type]} style = {[messageStyle.messageIcon]}></Image>
                    </View>
                    <View style = {messageStyle.messageTextView}>
                        <Text style = {[messageStyle.messageTitle, messageStyle[`messageTitle_${msg.type}`]]}>{msg.title}</Text>
                        <Text style = {[messageStyle.messageContent, messageStyle[`messageContent_${msg.type}`]]}>{msg.content}</Text>
                    </View>
                    <View style = {messageStyle.messageCloseView}>
                        <TouchableOpacity onPress={() => {deleteMessage(msg.id)}} style = {messageStyle.messageCloseButton}>
                            <Image source = {messageCloseIcons[msg.type]} style = {[messageStyle.messageClose]}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                ))}
            </View>
        </View>
    );
}