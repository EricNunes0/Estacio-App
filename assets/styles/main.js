import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
const headerPadding = 16;
const headerBackgroundHeight = 80;
const headersHeight = 60;
const radioHeight = 60;
export const mainStyle = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    header: {
        display: "flex",
        width: screen.width
    },
    headerBackgroundView: {
        width: screen.width,
        height: headerBackgroundHeight
    },
    headerBackground: {
        width: screen.width,
        height: headerBackgroundHeight
    },
    headerContentView: {
        display: "flex",
        backgroundColor: "#fff",
        borderStartStartRadius: 10,
        borderTopLeftRadius: 10,
        padding: 20
    },
    headerContentTitle: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 24
    },
    headerContentSubtitle: {
        color: "#444",
        fontFamily: "Poppins",
        fontSize: 14
    },
    customizeSection: {
    },
    headers: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: headersHeight
    },
	headerView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        fontFamily: "Poppins",
        fontWeight: "bold",
        padding: headerPadding
	},
	headerTitle: {
		color: "#444",
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 16
	},
	headerSubtitle: {
		color: "#555",
        fontFamily: "Poppins",
        fontSize: 14
	},
    headerRequired: {
        backgroundColor: "#000",
        borderRadius: 3,
        padding: 4
    },
    headerRequiredText: {
        borderRadius: 3,
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 8,
        textTransform: "uppercase"
    },
    customizeButtonsView: {
    },
    customizeRadioMain: {
    },
    customizeRadioView: {
        position: "relative"
    },
    radioTitle: {
        position: "absolute",
        top: radioHeight / 2 - headerPadding,
        left: headerPadding,
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: "bold"
    },
    radioTitleCenter: {
        top: radioHeight / 2 - headerPadding / 1.5
    },
    radioSubtitle: {
        position: "absolute",
        top: radioHeight / 2 + 0,
        left: headerPadding,
        color: "#444",
        fontFamily: "Poppins"
    },
    radioOption: {
        fontFamily: "Poppins",
        height: radioHeight
    },
    observationMain: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#666",
        borderBottomWidth: 1,
        borderStyle: "solid",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto"
    },
    observationHeader: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    observationHeaderFlex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5
    },
    observationIcon: {
        width: 16,
        height: 16
    },
    observationText: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "bold"
    },
    observationSize: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 14
    },
    observationArticle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    observationTextarea: {
        backgroundColor: "#fff",
        width: "100%",
        maxWidth: 600,
        borderColor: "#888",
        borderRadius: 3,
        borderStyle: "solid",
        borderWidth: 1,
        fontFamily: "Poppins",
        fontSize: 14,
        padding: 0
    },
    cartView: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    cartButton: {
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#d0d0d0",
        padding: 8,
        borderRadius: 5
    },
    cartButtonText: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 14
    }
});