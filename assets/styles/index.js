import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
export const indexStyle = StyleSheet.create({
	main: {
        position: "relative",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff"
	},
    mainBackgroundHeader: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "75%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#2090ff",
        backgroundImage: "linear-gradient(180deg, #b040c0, #802060)",
        padding: 40
    },
    mainBackgroundFooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "25%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 40
    },
    mainBackgroundWave: {
        position: "absolute",
        top: "calc(-50px + 2px)",
        left: 0,
        width: screen.width * 2,
        height: 50
    },
    mainBackgroundLogo: {
        width: 200,
        height: 300
    },
    mainTextsView: {
        width: "100%"
    },
    mainTitle1: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: 100,
        textAlign: "center"
    },
    mainTitle2: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center"
    },
    mainSubtitle1: {
        color: "#f0f0f0",
        fontFamily: "Poppins thin",
        fontSize: 18,
        textAlign: "center"
    },
    navigateView: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    navigateViewContent: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: "100%"
    },
    navigateButtons: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: 300,
        height: 25,
        padding: 20,
        borderRadius: 10,
        fontFamily: "Poppins"
    },
    navigateButton1: {
        backgroundColor: "#b030ff",
        color: "#fff"
    },
    navigateButton2: {
        backgroundColor: "transparent",
        color: "#b030ff",
        borderColor: "#b030ff",
        borderWidth: 1
    }
});