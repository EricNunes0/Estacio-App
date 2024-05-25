import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
const formWidth = 280 > screen.width ? screen.width : 280; /* Largura do formulário */
export const settingsStyle = StyleSheet.create({
	container: {
		height: "100%",
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start"
	},
    header: {
        width: `calc(100% - ${8 * 2}px)`,
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10
    },
    headerIconView: {},
    headerIcon: {
        width: 48,
        height: 48,
        borderRadius: "50%"
    },
    headerTextView: {},
    headerText: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    main: {
        width: "100%"
    },
    mainHeader: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#eee",
        padding: 8
    },
    mainTitle: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    mainArticle: {
        width: "100%"
    },
    mainButtons: {
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#ddd",
        borderBottomWidth: 2
    },
    mainButtonsLeft: {
        width: `calc(100% - ${32}px)`,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16,
        padding: 8
    },
    mainEditButtonsLeft: {
        width: `calc(100% - ${100}px)`,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16,
        padding: 8
    },
    mainButtonsIconView: {},
    mainButtonsIcon: {
        width: 24,
        height: 24
    },
    mainButtonsTextView: {},
    mainButtonsTitle: {
        color: "#222",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    mainButtonsTitle2: {
        color: "#222",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    mainButtonsSubtitle: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 14
    },
    mainButtonsSubtitle2: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 14
    },
    mainButtonsRight: {
        width: 32,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mainEditButtonsRight: {
        width: 100,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mainButtonsRightOptionsView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtonsRightOptions: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtonsRightOptionsIcons: {
        width: 20,
        height: 24
    },
    mainButtonsArrowView: {},
    mainButtonsArrow: {
        width: 14,
        height: 14
    },
    mainInfoView: {},
    mainInfoTitle: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: "bold"
    },
    mainInfoDescription: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 12,
        textAlign: "left",
        lineHeight: 16,
        marginTop: 4
    },
    mainInfoLabel: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 16
    },
    mainInfoItem: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 14,
        textAlign: "left",
    },
    mainInputView: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainInfoTopView: {
        padding: 8
    },
    mainInput: {
        width: "90%",
        maxWidth: 400,
        height: 50
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    footerReturnButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        bottom: 0,
        borderColor: "#802060",
        borderStyle: "solid",
        borderWidth: 1
    },
    footerReturnButtonText: {
        color: "#802060",
        fontFamily: "Poppins",
        fontSize: 14
    },
    footerUpdateButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        bottom: 0,
        backgroundColor: "#802060"
    },
    footerUpdateButtonText: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 14
    },
    messagesView: {
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: screen.width,
        height: screen.height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8
    }
});