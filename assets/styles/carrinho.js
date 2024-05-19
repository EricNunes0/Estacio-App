import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
const produtoIconSize = 48;
export const carrinhoStyle = StyleSheet.create({
    container: {
        width: screen.width,
        backgroundColor: "#fff"
    },
	title: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold",
        padding: 8
	},
    pedidoView: {
        display: "flex",
        justifyContent: "center"
    },
    produtoView: {
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
        backgroundColor: "#eee",
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
    },
    produtoMain: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    produtoArticle: {
        width: `calc(100% - ${produtoIconSize}px)`,
        marginLeft: produtoIconSize
    },
    produtoDetails: {
        margin: 8
    },
    produtoInfos: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
        marginTop: 2,
        marginBottom: 2
    },
    produtoCounterCircle: {
        backgroundColor: "#ddd",
        paddingLeft: 7.5,
        paddingRight: 7.5,
        borderRadius: 25,
        minWidth: 28,
        height: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    produtoCounterIcon: {
        width: 12,
        height: 12
    },
    produtoCounter: {
        color: "#444"
    },
    produtoTextView: {},
    produtoTextTitle: {
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: "bold"
    },
    produtoText: {
        color: "#444",
        fontFamily: "Poppins"
    },
    produtoObservation: {
        marginTop: 6,
        marginBottom: 2
    },
    footer: {
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: screen.width,
        height: screen.height
    },
    footerMainView: {
        pointerEvents: "all",
        position: "absolute",
        bottom: (60 * 2) + (8 * 2),
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderTopColor: "#ddd",
        borderTopStyle: "solid",
        borderTopWidth: 2
    },
    footerMainDetailsView: {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 8
    },
    footerText1: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 12,
        textAlign: "left",
        lineHeight: 6
    },
    footerConfirmButtonPrice: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 24
    },
    footerMainButtonView: {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    footerConfirmButton: {
        width: `calc(100% - ${8}px)`,
        height: 42,
        padding: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#802060",
        borderRadius: 5
    },
    footerConfirmButtonText: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 14
    }
})