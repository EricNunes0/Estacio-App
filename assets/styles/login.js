import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
const formWidth = 280 > screen.width ? screen.width : 280; /* Largura do formulário */
const buttonsHeight = 50; /* Altura dos botões */
export const loginStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: screen.width
	},
	mainArticle: {
	},
	mainArticleTextsView: {
		width: formWidth
	},
	mainArticleFormView: {
		width: formWidth
	},
	mainArticleFormInputView: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
    },
	mainArticleFormInput: {
		width: formWidth,
		height: 40,
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		fontFamily: "Poppins",
		fontSize: 14,
		marginTop: 5,
		marginBottom: 10,
		padding: 10
	},
    mainArticleFormPasswordButton: {
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
	mainArticleForgotView: {
		width: formWidth,
		marginTop: 10,
		marginBottom: 10
	},
	mainArticleButtonsView: {
		width: formWidth,
		height: buttonsHeight,
		marginTop: 10,
		marginBottom: 10
	},
	mainArticleButtonsFlex: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	mainArticleButton: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: `calc(${formWidth}px / 3 - 10px)`,
		height: buttonsHeight,
		borderColor: "rgba(0, 0, 0, 0.1)",
		borderStyle: "solid",
		borderRadius: 5,
		borderWidth: 2
	},
	mainArticleButtonImage: {
		width: 30,
		height: 30
	},
	viewCenter: {
		flex: 1,
    	justifyContent: "center"
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
	viewBackground: {
		width: "100%",
		resizeMode: "cover",
    	alignSelf: "flex-end"
	},
	loginBackground: {
		width: "100%",
		minHeight: 200
	},
	title: {
		color: "#000",
		fontFamily: "Poppins",
		fontSize: 40,
		fontWeight: "bold",
		textAlign: "center"
	},
	subtitle: {
		color: "#666",
		fontFamily: "Poppins",
		fontSize: 14,
		fontWeight: "100",
		textAlign: "center"
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
		color: "#d060f0",
		fontFamily: "Poppins",
		fontSize: 12,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 10
	},
	menuButtonView: {
		alignItems: "center"
	},
	menuButton: {
		width: 280,
		alignItems: "center",
		backgroundColor: "#d060f0",
		padding: 10,
		borderRadius: 10
	},
	menuButtonDisabled: {
		backgroundColor: "#b0b0b0",
	},
	menuButtonText: {	
		color: "#fff",
		fontFamily: "Poppins",
		fontSize: 14,
		fontWeight: "100"
	}
});