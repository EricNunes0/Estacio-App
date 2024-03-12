import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";

export default function App() {
	const [a, b] = useState(10);
	return (
		<View style={styles.container}>
			{/*<View style={styles.bg}></View>*/}
			<View style={styles.viewBottom}>
				<View style={styles.logoView}>
					<Image source={require("./assets/logo.png")} style={styles.logo}></Image>
				</View>
				<View style={styles.titleView}>
					<Text style={styles.title}>Bem-vindo</Text>
					<Text style={styles.subtitle}>Faça o login para continuar</Text>
				</View>
				<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" style={styles.input}></TextInput>
				<TextInput autoComplete="password" keyboardType="password" secureTextEntry={true} placeholder="Senha"  placeholderTextColor="#888" style={styles.input}></TextInput>
				<View style={styles.viewStretch}>
					<TouchableOpacity style={styles.forgot}>Esqueceu a senha?</TouchableOpacity>
				</View>
			</View>
			<View style={styles.viewStretch}>
				<View style={styles.viewBottomMargin}>
					<View style={styles.viewStretch}>
						<Text style={styles.sub}>Não tem uma conta? <TouchableOpacity style={styles.subButton}>Cadastre-se</TouchableOpacity></Text>
					</View>
					<View style={styles.menuButtonView}>
						<TouchableOpacity style={styles.menuButton} color={"#2090ff"} onPress={() => {Alert.alert("Login concluído!")}} disabled={true}>
							<Text style={styles.menuButtonText}>Entrar</Text>
						</TouchableOpacity>
					</View>
					<StatusBar style="auto" />
				</View>
				<View style={styles.viewBackground}>
					<ImageBackground source={require("./assets/background.png")} resizeMode="cover" style={styles.loginBackground}>
					</ImageBackground>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
	viewBackground: {
		width: "100%",
		resizeMode: "cover",
    	alignSelf: "flex-end"
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