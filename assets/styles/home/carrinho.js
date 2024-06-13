import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");
const produtoIconSize = 48;
export const carrinhoStyle = StyleSheet.create({
    container: {
        flex: 1,
		alignItems: "center"
    },
	title: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold",
        padding: 8
	},
    pedidoView: {
        width: screen.width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    produtoView: {
        width: screen.width - 16,
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderStyle: "solid",
        borderBottomWidth: 2,
        padding: 8
    },
    produtoHeader: {
        width: `100%`,
        height: 48,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
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
        width: screen.width - 48 - 30,
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
        backgroundColor: "rgba(0, 0, 0, 0.1)",
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
    produtoButtonCounterView: {
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    produtoButtonCounter: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
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
        height: 24,
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
    produtoTextView: {
        maxWidth: "100%"
    },
    produtoTextTitle: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 14
    },
    produtoText: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 12
    },
    produtoObservation: {
        marginTop: 6,
        marginBottom: 2
    },
    settings: {
        width: "100%",
        padding: 8
    },
    settingsFlex: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    settingsLeft: {
    },
    settingsRight: {
    },
    settingsTitle: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    settingsContent: {
        color: "#444",
        fontFamily: "Poppins",
        fontSize: 12
    },
    settingsEditButton: {},
    settingsEditText: {
        color: "#802060",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    noProductsView: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    noProductsIconView: {
        width: 120,
        height: 120,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 250,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    noProductsIcon: {
        width: "60%",
        height: "60%"
    },
    noProductsTitle: {
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 8
    },
    noProductsText: {
        fontFamily: "Poppins",
        fontSize: 14
    },
    noProductsFlexButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        marginTop: 8
    },
    noProductsButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#802060",
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 14,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 50
    },
    noProductsButtonIcon: {
        width: 14,
        height: 14
    },
    noProductsButtonText: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 14
    },
    footer: {
        width: "100%"
    },
    footerMainView: {
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
        textAlign: "left"
    },
    footerConfirmButtonPrice: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 16,
        lineHeight: 18
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
        fontSize: 12
    },
    modalMain: {
        backgroundColor: "#fff"
    },
    modals: {
        backgroundColor: "#ff0"
    },
    modalView: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 16
    },
    modalHeader: {
        width: "100%"
    },
    modalTitle: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalMenu: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    modalMenuOption: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        borderBottomStyle: "solid",
        borderBottomWidth: 1
    },
    modalMenuOptionLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
    modalMenuOptionIcon: {
        width: 24,
        height: 24
    },
    modalMenuOptionLabel: {
        fontFamily: "Poppins",
        fontSize: 14
    },
    modalMenuOptionArrow: {
        width: 18,
        height: 18
    },
})