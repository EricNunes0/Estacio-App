import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginStyle } from "../styles/login";
import navigateTo from "../../functions/navigateTo";
import { storeData } from "../../functions/storeData";
import { getRegisters } from "../../functions/getRegisters";
import { clearStorage } from "../../functions/clearStorage";
import CryptoJS from "crypto-js";
import uuid from "react-native-uuid";

export default function Cadastro() {
    const navigation = useNavigation();
	
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    /* Botão de visualizar senha */
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };

	/* Mensagens de erro */
	const [nameErrorMessage, setNameErrorMessage] = useState(null);
	const [emailErrorMessage, setEmailErrorMessage] = useState(null);
	const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);

	/* Função para validar e-mail */
	const validateEmail = (text) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(text);
	};

	/* Função para validar senha */
	const validatePassword = (text) => {
		const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
		return passwordRegex.test(text);
	};

	/* Validação de cadastro */
	const validateRegister = () => {
		setNameErrorMessage(null);
		setEmailErrorMessage(null);
		setPasswordErrorMessage(null);

		console.log(nameInput, emailInput, passwordInput);
		if((!nameInput) || nameInput.length === 0) {
			setNameErrorMessage("Você precisa inserir seu nome");
			return;
		} else if(nameInput.length < 2) {
			setNameErrorMessage("Seu nome precisa ter pelo menos 2 caracteres");
			return;
		};
		setNameErrorMessage(null);

		if((!emailInput) || emailInput.length === 0) {
			setEmailErrorMessage("Você precisa inserir seu e-mail");
			return;
		} else if(!validateEmail(emailInput)) {
			setEmailErrorMessage("Por favor, insira um email válido");
			return;
		};
		setEmailErrorMessage(null);

		if((!passwordInput) || passwordInput.length === 0) {
			setPasswordErrorMessage("Você precisa inserir uma senha");
			return;
		} else if(passwordInput.length < 8) {
			setPasswordErrorMessage("Sua senha precisa ter pelo menos 8 caracteres");
			return;
		} else if(!validatePassword(passwordInput)) {
			//setPasswordErrorMessage("Sua senha precisa no mínimo 1 dígito e 1 caractere especial");
			//return;
		};
		setPasswordErrorMessage(null);
		
		appendUser({
			id: uuid.v4(),
			name: nameInput,
			email: emailInput,
			password: CryptoJS.AES.encrypt(passwordInput, "password").toString(),
			token: null
		});
	};

	/* Função para adicionar cadastro */
	const appendUser = async (obj) => {
		const usersString = await AsyncStorage.getItem("users");
		const usersArray = usersString ? JSON.parse(usersString) : [];
		let emailExists = false;
		for(const user of usersArray) {
			if(user.email === obj.email) {
				emailExists = true;
			};
		};
		if(!emailExists) {
			usersArray.push(obj);
			await AsyncStorage.setItem("users", JSON.stringify(usersArray));
			let decryptedPassword = CryptoJS.AES.decrypt(obj.password, "password").toString(CryptoJS.enc.Utf8);
			alert("Um novo usuário foi cadastrado!");
			navigation.navigate("Main");
		} else {
			alert("E-mail já cadastrado!");
		};
	};

    return (
        <View style={loginStyle.container}>
			<View style={loginStyle.main}>
				<View style={loginStyle.mainArticle}>
					<View style={loginStyle.mainArticleLogoView}>
						<View style={[loginStyle.mainArticleLogoCircle, loginStyle.mainArticleLogoCircle1]}></View>
						<View style={[loginStyle.mainArticleLogoCircle, loginStyle.mainArticleLogoCircle2]}></View>
						<Image source={require("../images/logo.png")} style={loginStyle.mainArticleLogo}></Image>
					</View>
					<View style={loginStyle.mainArticleTextsView}>
						<Text style={loginStyle.title}>Cadastre-se</Text>
						<Text style={loginStyle.subtitle}>Crie sua conta para continuar</Text>
					</View>
					<View style={loginStyle.mainArticleFormView}>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="name" keyboardType="default" placeholder="Nome completo" placeholderTextColor="#888" value={nameInput} onChangeText={(text) => {setNameInput(text)}}  style={loginStyle.mainArticleFormInput}></TextInput>
							<View style={nameErrorMessage ?  [loginStyle.mainArticleFormErrorView] : {display: "none"}}>
								<Image source={require("../svgs/error_triangle.svg")} style={loginStyle.mainArticleFormErrorArrow}></Image>
								<Image source={require("../svgs/error.svg")} style={loginStyle.mainArticleFormErrorIcon}></Image>
								<Text numberOfLines={2} style={loginStyle.mainArticleFormErrorText}>{nameErrorMessage}</Text>
							</View>
						</View>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" value={emailInput} onChangeText={(text) => {setEmailInput(text)}} style={loginStyle.mainArticleFormInput}></TextInput>
							<View style={emailErrorMessage ?  [loginStyle.mainArticleFormErrorView] : {display: "none"}}>
								<Image source={require("../svgs/error_triangle.svg")} style={loginStyle.mainArticleFormErrorArrow}></Image>
								<Image source={require("../svgs/error.svg")} style={loginStyle.mainArticleFormErrorIcon}></Image>
								<Text numberOfLines={2} style={loginStyle.mainArticleFormErrorText}>{emailErrorMessage}</Text>
							</View>
						</View>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="password" keyboardType="password" secureTextEntry={!showPassword} value={passwordInput} onChangeText={(text) => {setPasswordInput(text)}} placeholder="Senha"  placeholderTextColor="#888" style={loginStyle.mainArticleFormInput}></TextInput>
							<MaterialCommunityIcons style={loginStyle.mainArticleFormPasswordButton} name={showPassword ? 'eye-off' : 'eye'}  size={24}  color="#aaa" onPress={toggleShowPassword} />
							<View style={passwordErrorMessage ?  [loginStyle.mainArticleFormErrorView] : {display: "none"}}>
								<Image source={require("../svgs/error_triangle.svg")} style={loginStyle.mainArticleFormErrorArrow}></Image>
								<Image source={require("../svgs/error.svg")} style={loginStyle.mainArticleFormErrorIcon}></Image>
								<Text numberOfLines={2} style={loginStyle.mainArticleFormErrorText}>{passwordErrorMessage}</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={loginStyle.viewStretch}>
				<View style={loginStyle.viewBottomMargin}>
					<View style={loginStyle.viewStretch}>
						<Text style={loginStyle.sub}>Já tem uma conta? <TouchableOpacity style={loginStyle.subButton} onPress={() => {navigateTo(navigation, "Login")}}>Faça o login</TouchableOpacity></Text>
					</View>
					<View style={loginStyle.menuButtonView}>
						<TouchableOpacity onPress={() => {validateRegister()}} style={[loginStyle.menuButton]}>
							<Text style={loginStyle.menuButtonText}>Entrar</Text>
						</TouchableOpacity>
					</View>
					<StatusBar style="auto" />
					<TouchableOpacity onPress={() => {getRegisters()}}><Text>Cadastros</Text></TouchableOpacity>
					<TouchableOpacity onPress={() => {clearStorage()}}><Text>Limpar tudo</Text></TouchableOpacity>
				</View>
				{/*<View style={loginStyle.viewBackground}>
					<ImageBackground source={require("../images/background.png")} resizeMode="cover" style={loginStyle.loginBackground}>
					</ImageBackground>
				</View>*/}
			</View>
		</View>
    );
}