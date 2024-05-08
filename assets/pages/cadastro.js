import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loginStyle } from "../styles/login";
import navigateTo from "../../functions/navigateTo";
import { storeData } from "../../functions/storeData";

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

	/* Validação de cadastro */
	const validateRegister = () => {
		console.log(nameInput, emailInput, passwordInput);
		if((!nameInput) || nameInput.length === 0) {
			setNameErrorMessage("Você precisa inserir um nome");
		} else if(nameInput.length < 2) {
			setNameErrorMessage("Seu nome precisa ter pelo menos 2 caracteres");
		} else {
			setNameErrorMessage(null)
		};



		storeData("name", nameInput);
    	storeData("email", emailInput);
    	storeData("password", passwordInput);
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
								<Text numberOfLines={1} style={loginStyle.mainArticleFormErrorText}>{nameErrorMessage}</Text>
							</View>
						</View>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" value={emailInput} onChangeText={(text) => {textsInputCheck("e-mail", text)}} style={loginStyle.mainArticleFormInput}></TextInput>
						</View>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="password" keyboardType="password" secureTextEntry={!showPassword} value={passwordInput} onChangeText={(text) => {textsInputCheck("password", text)}} placeholder="Senha"  placeholderTextColor="#888" style={loginStyle.mainArticleFormInput}></TextInput>
							<MaterialCommunityIcons style={loginStyle.mainArticleFormPasswordButton} name={showPassword ? 'eye-off' : 'eye'}  size={24}  color="#aaa" onPress={toggleShowPassword} />
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
				</View>
				{/*<View style={loginStyle.viewBackground}>
					<ImageBackground source={require("../images/background.png")} resizeMode="cover" style={loginStyle.loginBackground}>
					</ImageBackground>
				</View>*/}
			</View>
		</View>
    );
}