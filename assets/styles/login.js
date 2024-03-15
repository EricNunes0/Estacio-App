import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	viewCenter: {
		flex: 1,
    	justifyContent: "center"
	},
	viewBottom: {
		flex: 1,
    	justifyContent: "flex-end"
	},
	viewBottomMargin: {
		alignSelf: "stretch",
    	textAlign: "center",
		marginTop: 40,
		marginBottom: 40
	},
	viewStretch: {
		alignSelf: "stretch",
    	textAlign: "center"
	},
    viewRow: {
        position: "relative",
        flex: 1,
        flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-start"
    },
	viewBackground: {
		width: "100%",
		resizeMode: "cover",
    	alignSelf: "flex-end"
	},
    passwordButton: {
        position: "absolute",
        top: 5,
        right: 4,
        width: 40,
        height: 40,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
	loginBackground: {
		width: "100%",
		minHeight: 200
	},
	logoView: {
		width: 280,
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-start"
	},
	logo: {
		width: 60,
		height: 60
	},
	titleView: {
		width: 280
	},
	title: {
		color: "#000",
		fontFamily: "Poppins",
		fontSize: 40,
		fontWeight: "bold",
		textAlign: "left"
	},
	subtitle: {
		color: "#666",
		fontFamily: "Poppins",
		fontSize: 14,
		fontWeight: "100",
		textAlign: "left"
	},
	forgot: {
		width: 120,
		color: "#000",
		fontFamily: "Poppins",
		fontSize: 12,
		fontWeight: "100",
		textAlign: "center",
		margin: "auto"
	},
	sub: {
		color: "#000",
		fontFamily: "Poppins",
		fontSize: 12,
		fontWeight: "100",
		textAlign: "center",
		marginBottom: 10
	},
	subButton: {
		color: "#0030ff",
		fontFamily: "Poppins",
		fontSize: 12,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 10
	},
	input: {
		width: 280,
		height: 40,
		backgroundColor: "#e0e0e0",
		borderBottomColor: "#64a5f0",
		borderBottomWidth: 3,
		borderColor: "#ffffff",
		borderRadius: 5,
		borderWidth: 2,
		fontFamily: "Poppins",
		fontSize: 14,
		marginTop: 5,
		marginBottom: 10,
		padding: 5
	},
	menuButtonView: {
		alignItems: "center"
	},
	menuButton: {
		width: 280,
		alignItems: "center",
		backgroundColor: "#64a5f0",
		padding: 10,
		borderRadius: 10
	},
	menuButtonText: {	
		color: "#fff",
		fontFamily: "Poppins",
		fontSize: 14,
		fontWeight: "100"
	}
});