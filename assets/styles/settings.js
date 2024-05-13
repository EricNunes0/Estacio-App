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
    mainButtons: {
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
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
    mainButtonsArrowView: {},
    mainButtonsArrow: {
        width: 14,
        height: 14
    },
    mainInputView: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainInput: {
        width: "90%",
        maxWidth: 400,
        height: 50
    }
});