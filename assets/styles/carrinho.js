import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
const produtoIconSize = 48;
export const carrinhoStyle = StyleSheet.create({
	title: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold",
        padding: 8
	},
    pedidoView: {
        display: "flex",
        justifyContent: "center",
        borderColor: "#606",
        borderStyle: "solid",
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    produtoView: {
        borderColor: "#666",
        borderStyle: "solid",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        margin: 8
    },
    produtoHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    produtoIconView: {
        minWidth: produtoIconSize
    },
    produtoIcon: {
        width: produtoIconSize,
        height: produtoIconSize,
        backgroundColor: "#ddd",
        borderRadius: 5
    },
    produtoTitleView: {
        width: `calc(100% - ${produtoIconSize}px)`,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    produtoPriceView: {
        width: "60%",
        height: "100%",
        paddingLeft: 8,
        paddingRight: 8
    },
    produtoName: {
        height: "45%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    produtoPrice: {
        height: "55%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    produtoButtonView: {
        width: "40%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    produtoButtonBox: {
        width: 100,
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 5
    },
    produtoButtonOptions: {
        width: "40%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    produtoButtonOptionsIcons: {
        width: 16,
        height: 16
    },
    produtoButtonCounter: {
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    }
})