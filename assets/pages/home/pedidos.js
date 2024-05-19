import { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pedidosStyle } from "../../styles/pedidos";

export default function Pedidos() {
    const [userId, setUserId] = useState('');
    const [userPedidos, setUserPedidos] = useState([]);

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
                console.log(JSON.parse(await AsyncStorage.getItem("pedidos")))
                setUserId(usersArray[i].id);
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };


    return (
        <View style = {pedidosStyle.container}>
            {userPedidos.length !== 0 ? (
                <View>
                    <Text>Há pedidos</Text>
                </View>
            ) : (
                <View>
                    <Text>Não há pedidos</Text>
                </View>
            )}
        </View>
    );
}