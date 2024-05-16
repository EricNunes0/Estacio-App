import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Pedidos() {
    
    return (
        <View>
            <Text>Pedidos</Text>
            <Button title="Ver pedidos"></Button>
        </View>
    );
}