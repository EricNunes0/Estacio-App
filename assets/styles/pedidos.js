import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
const produtoIconSize = 48;
export const pedidosStyle = StyleSheet.create({
    container: {
        width: screen.width,
        backgroundColor: "#fff"
    }
})