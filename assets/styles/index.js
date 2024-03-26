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
    mainBackgroundBlue: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "70%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#2090ff",
        backgroundImage: "linear-gradient(180deg, #2090ff, #1050d0)",
        padding: 40
    },
    mainBackgroundWhite: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "30%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 40
    },
    mainBackgroundCity: {
        position: "absolute",
        top: "calc(100% - 350px)",
        width: screen.width,
        height: 350,
        opacity: 0.4
    },
    mainBackgroundWave: {
        position: "absolute",
        top: "calc(-150px + 2px)",
        width: screen.width,
        height: 150
    },
    mainBackgroundBike: {
        position: "absolute",
        top: "calc(-150px * 1.5)",
        width: screen.width - 20
    },
    mainTextsView: {
        width: "100%"
    },
    mainTitle1: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 34,
        textAlign: "left"
    },
    mainSubtitle1: {
        color: "#f0f0f0",
        fontFamily: "Poppins thin",
        fontSize: 16,
        textAlign: "left"
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
        backgroundColor: "#3060ff",
        color: "#fff"
    },
    navigateButton2: {
        backgroundColor: "transparent",
        color: "#3060ff",
        borderColor: "#3060ff",
        borderWidth: 1
    }
});