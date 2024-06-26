import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");
const formWidth = 280 > screen.width ? screen.width : 280; /* Largura do formulário */
const buttonsHeight = 50; /* Altura dos botões */
export const loginStyle = StyleSheet.create({
	container: {
		height: "100%",
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
		width: formWidth
	},
	mainArticleLogoView: {
		position: "relative",
		width: "100%",
		height: 120,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	mainArticleLogoCircle: {
		position: "absolute",
		borderRadius: 250
	},
	mainArticleLogoCircle1: {
		width: 110,
		height: 110,
		backgroundColor: "#802060",
		opacity: 0.3
	},
	mainArticleLogoCircle2: {
		width: 90,
		height: 90,
		backgroundColor: "#802060",
		opacity: 0.3
	},
	mainArticleLogo: {
		width: 60,
		height: 70
	},
	mainArticleTextsView: {
		width: formWidth
	},
	mainArticleFormView: {
		position: "relative",
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
		height: 50,
		backgroundColor: "#e0e0e0",
		borderRadius: 10,
		fontFamily: "Poppins",
		fontSize: 14,
		marginTop: 5,
		marginBottom: 10,
		padding: 10
	},
	mainArticleFormErrorView: {
		position: "absolute",
		width: "100%",
		height: 36,
		top: -30,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 5,
		backgroundColor: "rgba(255, 240, 240, 1)",
		borderColor: "#f04040",
		borderStyle: "solid",
		borderRadius: 8,
		borderWidth: 2,
		borderLeftWidth: 6,
		padding: 4
	},
	mainArticleFormErrorArrow: {
		position: "absolute",
		top: 30,
		left: 6,
		width: 20,
		height: 16
	},
	mainArticleFormErrorIcon: {
		width: 18,
		height: 18
	},
	mainArticleFormErrorText: {
		color: "#f04040",
		fontFamily: "Poppins",
		fontSize: 12
	},
    mainArticleFormPasswordButton: {
        position: "absolute",
        top: 5,
        right: 0,
        width: 50,
        height: 50,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainArticleFormPasswordButtonIcon: {
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
		fontSize: 32,
		fontWeight: "400",
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
		width: formWidth,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#000",
		fontFamily: "Poppins",
		fontSize: 12,
		fontWeight: "100",
		textAlign: "center",
		margin: "auto"
	},
	forgotText: {
		color: "#000",
		fontFamily: "Poppins",
		fontSize: 12,
		textAlign: "center"
	},
	sub: {
		height: 40,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		color: "#000",
		fontFamily: "Poppins",
		fontSize: 12,
		fontWeight: "100",
		textAlign: "center",
		marginBottom: 10,
		gap: 4
	},
	subText: {
		color: "#000",
		fontFamily: "Poppins",
		fontSize: 12,
		textAlign: "center"
	},
	subButton: {
	},
	subButtonText: {
		fontFamily: "Poppins",
		color: "#802060",
		fontSize: 12,
		textAlign: "center"
	},
	menuButtonView: {
		alignItems: "center"
	},
	menuButton: {
		width: 280,
		alignItems: "center",
		backgroundColor: "#802060",
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
	},
	testButtons: {
		width: 120,
		height: 35,
		backgroundColor: "#4040f0",
		borderRadius: 5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
});