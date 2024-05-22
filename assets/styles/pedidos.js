import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
const produtoIconSize = 48;
export const pedidosStyle = StyleSheet.create({
    container: {
        width: screen.width,
        backgroundColor: "#fff"
    },
    pedidosMain: {
        width: screen.width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    pedidosViews: {
        width: "100%",
        minHeight: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#aaa",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        padding: 8
    },
    pedidosDateView: {
        width: 80,
        height: "100%",
    },
    pedidosDateSquare: {
        height: 80,
        backgroundColor: "#ddd",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    pedidosDateDay: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 24
    },
    pedidosDateMonth: {
        color: "#888",
        fontFamily: "Poppins",
        fontSize: 20,
        lineHeight: 20
    },
    pedidosDetailsView: {
        width: `calc(100% - ${80}px)`,
        height: "100%",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    pedidosProductsView: {},
    pedidosPriceView: {},
    pedidosPrice: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    }
})