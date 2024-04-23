import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Pedidos() {
    const receberPedido = async () => {
        try {
            let pedido = await AsyncStorage.getItem("Pedido");
            console.log(pedido);
        } catch(e) {
            console.error(e);
        }
    }
    
    return (
        <View>
            <Text>Pedidos</Text>
            <Button onPress={receberPedido}>Ver pedidos</Button>
        </View>
    );
}