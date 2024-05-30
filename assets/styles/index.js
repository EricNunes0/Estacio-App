import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");
const logoCircleDif = 40;
export const indexStyle = StyleSheet.create({
	main: {
        position: "relative",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff"
	},
    mainHeader: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "80%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#2090ff",
        backgroundImage: "linear-gradient(180deg, #b040c0, #802060)",
        padding: 40
    },
    mainHeaderFlex: {
        position: "absolute",
        top: 0,
        height: "100%",
    },
    bubblesView: {
        width: "100%"
    },
    bubble: {
        display: "block",
        position: "absolute",
        top: "100%",
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgba(250, 250, 255, 1)",
        opacity: 0.2
    },
    mainBackgroundFooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "20%",
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
    mainBackgroundLogoView: {
        position: "relative",
        display: "flex",
        width: screen.width >= 360 ? 360 - 40 : screen.width - 40,
        height: screen.width >= 360 ? 360 - 40 : screen.width - 40,
        justifyContent: "center",
        alignItems: "center",
        width: screen.width
    },
    mainBackgroundLogoCircle: {
        position: "absolute",
        display: "block",
        borderRadius: "50%"

    },
    mainBackgroundLogoCircle1: {
        width: screen.width - (logoCircleDif * 2),
        height: screen.width - (logoCircleDif * 2),
        maxWidth: 360,
        maxHeight: 360,
        backgroundColor: "#ffffff",
        borderColor: "#802060",
        borderStyle: "solid",
        borderWidth: 6,
        opacity: 0.4
    },
    mainBackgroundLogoCircle2: {
        width: screen.width - (logoCircleDif * 4),
        height: screen.width - (logoCircleDif * 4),
        maxWidth: 360 - (logoCircleDif * 2),
        maxHeight: 360 - (logoCircleDif * 2),
        backgroundColor: "#ffffff",
        opacity: 0.7
    },
    mainBackgroundLogo: {
        width: screen.width - (logoCircleDif * 5),
        height: screen.width - (logoCircleDif * 5),
        maxWidth: 360 - (logoCircleDif * 3),
        maxHeight: 360 - (logoCircleDif * 3),
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    mainTextsView: {
        width: "100%"
    },
    mainTitle1: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 42,
        fontWeight: 100,
        textAlign: "center"
    },
    mainSubtitle1: {
        color: "#f0f0f0",
        fontFamily: "Poppins thin",
        fontSize: 24,
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
        backgroundColor: "#802060",
        color: "#fff",
        borderColor: "#802060",
        borderWidth: 2
    },
    navigateButton2: {
        backgroundColor: "transparent",
        color: "#802060",
        borderColor: "#802060",
        borderWidth: 2
    }
});