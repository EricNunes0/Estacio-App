import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
const produtoIconSize = 48;
export const pedidosStyle = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },
    h2: {
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: "bold"
    },
    h4: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: "bold"
    },
    h5: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    h6: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    p: {
        fontFamily: "Poppins",
        fontSize: 12
    },
    pedidosMain: {
        width: "100%",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        padding: 8
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
    pedidosProductsText: {
        fontFamily: "Poppins"
    },
    pedidosPriceView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
    pedidosPriceIcon: {
        width: 16,
        height: 16
    },
    pedidosPrice: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    pedidosArrow: {
        width: 18,
        height: 18
    },
    modalMain: {
        backgroundColor: "#fff"
    },
    modals: {},
    modalView: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff"
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
    modalHeaderAdmin: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    modalHeaderAdminButton: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modalHeaderAdminButtonIcon: {
        width: "40%",
        height: "40%"
    },
    modalHeaderText: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 18
    },
    modalProdutosMain: {
        width: "100%",
        height: screen.height,
        backgroundColor: "#eee",
    },
    modalProdutosArticle: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 8,
        gap: 8
    },
    modalProdutosView: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
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
    modalProdutoFooter: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    modalProdutoFooterPayment: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 8
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
    },
    emptyContainer: {
        position: "absolute",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: 200
    },
    emptyIconView: {
        backgroundColor: "#ddd",
        borderRadius: "50%",
        padding: 20
    },
    emptyIcon: {
        width: 100,
        height: 100
    },
    emptyTextsView: {
        marginTop: 8,
        marginBottom: 8
    },
    emptyTitle: {
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    emptySubtitle: {
        fontFamily: "Poppins",
        fontSize: 14,
        textAlign: "center"
    },
    emptyButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#802060",
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 14,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 50
    }
})