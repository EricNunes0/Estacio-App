import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import CryptoJS from "crypto-js";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { loginStyle } from "../styles/login";
import { tokenAddToUser } from "../../functions/tokenAddToUser";
import ErrorSVG from "../svgs/error";
import ErrorTriangleSVG from "../svgs/error_triangle";

export default function Login() {
    const navigation = useNavigation();

    /* Ativar/desativar botão de prosseguir */
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    /* Botão de visualizar senha */
	const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };
	
	/* Mensagens de erro */
	const [emailErrorMessage, setEmailErrorMessage] = useState(null);
	const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);

	/* Função para validar e-mail */
	const validateEmail = (text) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(text);
	};

	/* Validação de login */
	const validateLogin = async () => {
		setEmailErrorMessage(null);
		setPasswordErrorMessage(null);

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
		};
		setPasswordErrorMessage(null);
		
		await getUser({
			email: emailInput,
			password: passwordInput
		});
	};

	/* Função para verificar login */
	const getUser = async (obj) => {
		const usersString = await AsyncStorage.getItem("users");
		const usersArray = usersString ? JSON.parse(usersString) : [];
		for(const user of usersArray) {
			if(user.email === obj.email) {
				let decryptedPassword = CryptoJS.AES.decrypt(user.password, "password").toString(CryptoJS.enc.Utf8);
				if(obj.password === decryptedPassword) {
					const token = uuid.v4();
					const tokenServer = {token: token};
					const tokenJSON = JSON.stringify(tokenServer);
					await AsyncStorage.setItem("token", tokenJSON);
					await tokenAddToUser(user, token);
					navigation.navigate("Main");
					return;
				} else {
					setPasswordErrorMessage("Senha incorreta!");
					return;
				}
			} else {
				setEmailErrorMessage("Não há um usuário cadastrado com este e-mail!");
			};
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
						<Text numberOfLines={1} style={loginStyle.title}>Bem-vindo</Text>
						<Text style={loginStyle.subtitle}>Faça o login para continuar</Text>
					</View>
					<View style={loginStyle.mainArticleFormView}>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" value={emailInput} onChangeText={(text) => {setEmailInput(text)}} style={loginStyle.mainArticleFormInput}></TextInput>
							<TouchableOpacity onPress={() => {setEmailErrorMessage(null)}} style={emailErrorMessage ?  [loginStyle.mainArticleFormErrorView] : {display: "none"}}>
								<View style={loginStyle.mainArticleFormErrorArrow}>
									<ErrorTriangleSVG></ErrorTriangleSVG>
								</View>
								<ErrorSVG></ErrorSVG>
								<Text numberOfLines={2} style={loginStyle.mainArticleFormErrorText}>{emailErrorMessage}</Text>
							</TouchableOpacity>
						</View>
						<View style={loginStyle.mainArticleFormInputView}>
							<TextInput autoComplete="password" keyboardType="password" secureTextEntry={!showPassword} value={passwordInput} onChangeText={(text) => {setPasswordInput(text)}} placeholder="Senha"  placeholderTextColor="#888" style={loginStyle.mainArticleFormInput}></TextInput>
							<TouchableOpacity style={loginStyle.mainArticleFormPasswordButton} onPress={toggleShowPassword}>
								<MaterialCommunityIcons style={loginStyle.mainArticleFormPasswordButtonIcon} name={showPassword ? 'eye-off' : 'eye'} size={24} color="#aaa"/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {setPasswordErrorMessage(null)}} style={passwordErrorMessage ?  [loginStyle.mainArticleFormErrorView] : {display: "none"}}>
								<View style={loginStyle.mainArticleFormErrorArrow}>
									<ErrorTriangleSVG></ErrorTriangleSVG>
								</View>
								<ErrorSVG></ErrorSVG>
								<Text numberOfLines={2} style={loginStyle.mainArticleFormErrorText}>{passwordErrorMessage}</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={loginStyle.mainArticleForgotView}>
						<TouchableOpacity style={loginStyle.forgot}>
							<Text numberOfLines={1} style={loginStyle.forgotText}>Esqueceu a senha?</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={loginStyle.viewStretch}>
				<View style={loginStyle.viewBottomMargin}>
					<View style={loginStyle.viewStretch}>
						<View style={loginStyle.sub}>
							<Text style={loginStyle.subText}>Não tem uma conta?</Text>
							<TouchableOpacity style={loginStyle.subButton} onPress={() => {navigation.navigate("Cadastro")}}>
								<Text style={loginStyle.subButtonText}>Cadastre-se</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={loginStyle.menuButtonView}>
						<TouchableOpacity onPress={() => {validateLogin()}} style={loginStyle.menuButton}>
							<Text style={loginStyle.menuButtonText}>Entrar</Text>
						</TouchableOpacity>
					</View>
					<StatusBar style="auto" />
				</View>
			</View>
		</View>
    );
}