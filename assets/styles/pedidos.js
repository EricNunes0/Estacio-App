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
        flexDirection: "column-reverse",
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
        backgroundColor: "#eee",
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
    },
    pedidosArrow: {
        width: 18,
        height: 18
    },
    modals: {},
    modalView: {
        width: "100%",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    modalHeader: {
        width: "100%",
        height: 50,
        backgroundColor: "#802060",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 8
    },
    modalHeaderText: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 18
    },
    modalProdutosMain: {
        width: "100%"
    },
    modalProdutosView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 8,
        gap: 8
    },
    modalProdutosCountView: {
        width: 30,
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#802060",
        borderRadius: 5,
        padding: 4
    },
    modalProdutosCount: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    modalProdutosDetailsMain: {
        width: `calc(100% - ${30 + 8}px)`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    modalProdutosDetailsFlex: {
        display: "flex"
    },
    modalProdutosDetailsView: {
    },
    modalProdutoTitle: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    modalProdutoSubtitle: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    modalProdutoContent: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 12
    },
    modalProdutoPriceView: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 8,
        borderLeftColor: "#666",
        borderLeftStyle: "solid",
        borderLeftWidth: 1
    },
    modalProdutoPrice: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    modalCloseButtonView: {
        pointerEvents: "none",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    modalCloseButton: {
        pointerEvents: "all",
        width: "100%",
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#802060"
    },
    modalCloseButtonText: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 14
    }
})