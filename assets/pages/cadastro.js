import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { loginStyle } from "../styles/login";
import { useNavigation } from "@react-navigation/native";
import navigateTo from "../../functions/navigateTo";
import dbOpen from "../../functions/database/open";

export default function Cadastro() {
    const navigation = useNavigation();

	/* Ativar/desativar botão de prosseguir */
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

	const [buttonDisabled, setButtonDisabled] = useState(true);
    const disableButton = () => { 
        setButtonDisabled(true); 
    };
    const enableButton = () => { 
        setButtonDisabled(false); 
    };
    const textsInputCheck = (input, text) => {
		switch(input) {
			case "name":
				setNameInput(text);
				break;
			case "e-mail":
				setEmailInput(text);
				break;
			case "password":
				setPasswordInput(text);
				break;
			default:
				break;
		}
        nameInput.length === 0 || emailInput.length === 0 || passwordInput.length === 0 ? disableButton() : enableButton();
    }

    /* Botão de visualizar senha */
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };

	/* Validação de cadastro */
	const validateRegister = () => {
		const db = dbOpen();
		//navigateTo(navigation, "Root");
	};

    return (
        <View style={loginStyle.container}>
			<View style={loginStyle.main}>
				<View style={loginStyle.mainArticle}>
					<View style={loginStyle.mainArticleTextsView}>
						<Text style={loginStyle.title}>Cadastre-se</Text>
						<Text style={loginStyle.subtitle}>Crie sua conta para continuar</Text>
					</View>
					<View style={loginStyle.mainArticleFormView}>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="name" keyboardType="default" placeholder="Nome completo" placeholderTextColor="#888" value={nameInput} onChangeText={(text) => {textsInputCheck("name", text)}}  style={loginStyle.mainArticleFormInput}></TextInput>
						</View>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" value={emailInput} onChangeText={(text) => {textsInputCheck("e-mail", text)}} style={loginStyle.mainArticleFormInput}></TextInput>
						</View>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="password" keyboardType="password" secureTextEntry={!showPassword} value={passwordInput} onChangeText={(text) => {textsInputCheck("password", text)}} placeholder="Senha"  placeholderTextColor="#888" style={loginStyle.mainArticleFormInput}></TextInput>
							<MaterialCommunityIcons style={loginStyle.mainArticleFormPasswordButton} name={showPassword ? 'eye-off' : 'eye'}  size={24}  color="#aaa" onPress={toggleShowPassword} />
						</View>
					</View>
					<View style={loginStyle.mainArticleButtonsView}>
						<View style={loginStyle.mainArticleButtonsFlex}>
							<TouchableOpacity style={loginStyle.mainArticleButton}>
								<Image source={require("../images/google.png")} style={loginStyle.mainArticleButtonImage}></Image>
							</TouchableOpacity>
							<TouchableOpacity style={loginStyle.mainArticleButton}>
								<Image source={require("../images/facebook.png")} style={loginStyle.mainArticleButtonImage}></Image>
							</TouchableOpacity>
							<TouchableOpacity style={loginStyle.mainArticleButton}>
								<Image source={require("../images/twitter.png")} style={loginStyle.mainArticleButtonImage}></Image>
							</TouchableOpacity>
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
						<TouchableOpacity onPress={() => {validateRegister()}} disabled={buttonDisabled} style={!buttonDisabled ? loginStyle.menuButton : [loginStyle.menuButton, loginStyle.menuButtonDisabled]}>
							<Text style={loginStyle.menuButtonText}>Entrar</Text>
						</TouchableOpacity>
					</View>
					<StatusBar style="auto" />
				</View>
				{/*<View style={loginStyle.viewBackground}>
					<ImageBackground source={require("../images/background.png")} resizeMode="cover" style={loginStyle.loginBackground}>
					</ImageBackground>
				</View>*/}
			</View>
		</View>
    );
}