import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { loginStyle } from "../styles/login";
import { useNavigation } from "@react-navigation/native";
import navigateTo from "../../functions/navigateTo";

export default function Cadastro() {
    const navigation = useNavigation();

    /* Botão de visualizar senha */
	const [password, setPassword] = useState('');
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
					<Text style={loginStyle.title}>Cadastre-se</Text>
					<Text style={loginStyle.subtitle}>Crie sua conta para continuar</Text>
				</View>
				<TextInput autoComplete="name" keyboardType="default" placeholder="Nome completo" placeholderTextColor="#888" style={loginStyle.input}></TextInput>
				<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" style={loginStyle.input}></TextInput>
				<View style={loginStyle.viewRow}>
					<TextInput autoComplete="password" keyboardType="password" secureTextEntry={!showPassword} value={password}  onChangeText={setPassword}  placeholder="Senha"  placeholderTextColor="#888" style={loginStyle.input}></TextInput>
					<MaterialCommunityIcons style={loginStyle.passwordButton}
						name={showPassword ? 'eye-off' : 'eye'} 
						size={24} 
						color="#aaa"
						onPress={toggleShowPassword} 
					/> 
				</View>
			</View>
			<View style={loginStyle.viewStretch}>
				<View style={loginStyle.viewBottomMargin}>
					<View style={loginStyle.viewStretch}>
						<Text style={loginStyle.sub}>Já tem uma conta? <TouchableOpacity style={loginStyle.subButton} onPress={() => {navigateTo(navigation, "Login")}}>Faça o login</TouchableOpacity></Text>
					</View>
					<View style={loginStyle.menuButtonView}>
						<TouchableOpacity style={loginStyle.menuButton} color={"#2090ff"} onPress={() => {navigateTo(navigation, "Root")}} disabled={true}>
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