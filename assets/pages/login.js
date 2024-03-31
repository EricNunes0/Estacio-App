import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { loginStyle } from "../styles/login";
import { useNavigation } from "@react-navigation/native";
import navigateTo from "../../functions/navigateTo";

export default function Login() {
    const navigation = useNavigation();

    /* Ativar/desativar botão de prosseguir */
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
			case "e-mail":
				setEmailInput(text);
				break;
			case "password":
				setPasswordInput(text);
				break;
			default:
				break;
		}
        emailInput.length === 0 || passwordInput.length === 0 ? disableButton() : enableButton();
    }

    /* Botão de visualizar senha */
	const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };

    return (
        <View style={loginStyle.container}>
			<View style={loginStyle.viewBottom}>
				<View style={loginStyle.logoView}>
					<Image source={require("../images/logo.png")} style={loginStyle.logo}></Image>
				</View>
				<View style={loginStyle.titleView}>
					<Text style={loginStyle.title}>Bem-vindo</Text>
					<Text style={loginStyle.subtitle}>Faça o login para continuar</Text>
				</View>
				<View>
					<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" value={emailInput} onChangeText={(text) => {textsInputCheck("e-mail", text)}} style={loginStyle.input}></TextInput>
				</View>
				<View style={loginStyle.viewRow}>
					<TextInput autoComplete="password" keyboardType="password" secureTextEntry={!showPassword} value={passwordInput} onChangeText={(text) => {textsInputCheck("password", text)}}  placeholder="Senha"  placeholderTextColor="#888" style={loginStyle.input}></TextInput>
					<MaterialCommunityIcons style={loginStyle.passwordButton} name={showPassword ? 'eye-off' : 'eye'} size={24} color="#aaa" onPress={toggleShowPassword}/> 
				</View>
				<View style={loginStyle.viewStretch}>
					<TouchableOpacity style={loginStyle.forgot}>Esqueceu a senha?</TouchableOpacity>
				</View>
			</View>
			<View style={loginStyle.viewStretch}>
				<View style={loginStyle.viewBottomMargin}>
					<View style={loginStyle.viewStretch}>
						<Text style={loginStyle.sub}>Não tem uma conta? 
							<TouchableOpacity style={loginStyle.subButton} onPress={() => {navigateTo(navigation, "Cadastro")}}>
								<Text> Cadastre-se</Text>
							</TouchableOpacity>
						</Text>
					</View>
					<View style={loginStyle.menuButtonView}>
						<TouchableOpacity onPress={() => {navigateTo(navigation, "Root")}} disabled={buttonDisabled} style={!buttonDisabled ? loginStyle.menuButton : [loginStyle.menuButton, loginStyle.menuButtonDisabled]}>
							<Text style={loginStyle.menuButtonText}>Entrar</Text>
						</TouchableOpacity>
					</View>
					<StatusBar style="auto" />
				</View>
				<View style={loginStyle.viewBackground}>
					<ImageBackground source={require("../images/background.png")} resizeMode="cover" style={loginStyle.loginBackground}>
					</ImageBackground>
				</View>
			</View>
		</View>
    );
}