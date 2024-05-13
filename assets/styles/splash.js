import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
export const splashStyle = StyleSheet.create({
	container: {
		height: "100%",
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
        backgroundImage: "linear-gradient(180deg, #b040c0, #802060)"
	},
	logo: {
		width: 200,
		height: 240
	}
});