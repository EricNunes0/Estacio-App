import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { styles } from "../styles/login";
import { useNavigation } from "@react-navigation/native";

export default function Login() {

    /* Ir para a página cadastro */
    const navigation = useNavigation();
    function navigateToSecond() {
        navigation.navigate("Cadastro");
    }

    /* Ativar/desativar botão de prosseguir */
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

	const [button, setButton] = useState(true);
    const disableButton = () => { 
        setButton(true); 
    };
    const enableButton = () => { 
        setButton(false); 
    };
    const textsInputCheck = () => {
        console.log(emailInput);
        emailInput.length === 0 || passwordInput.length === 0 ? disableButton() : enableButton();
    }

    /* Botão de visualizar senha */
	const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };

    return (
        <View style={styles.container}>
			<View style={styles.viewBottom}>
				<View style={styles.logoView}>
					<Image source={require("../logo.png")} style={styles.logo}></Image>
				</View>
				<View style={styles.titleView}>
					<Text style={styles.title}>Bem-vindo</Text>
					<Text style={styles.subtitle}>Faça o login para continuar</Text>
				</View>
				<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" value={emailInput} onChangeText={(text) => {setEmailInput(text); textsInputCheck()}} style={styles.input}></TextInput>
				<View style={styles.viewRow}>
					<TextInput autoComplete="password" keyboardType="password" secureTextEntry={!showPassword} value={passwordInput} onChangeText={(text) => {setPasswordInput(text); textsInputCheck()}}  placeholder="Senha"  placeholderTextColor="#888" style={styles.input}></TextInput>
					<MaterialCommunityIcons style={styles.passwordButton}
						name={showPassword ? 'eye-off' : 'eye'} 
						size={24} 
						color="#aaa"
						onPress={toggleShowPassword} 
					/> 
				</View>
				<View style={styles.viewStretch}>
					<TouchableOpacity style={styles.forgot}>Esqueceu a senha?</TouchableOpacity>
				</View>
			</View>
			<View style={styles.viewStretch}>
				<View style={styles.viewBottomMargin}>
					<View style={styles.viewStretch}>
						<Text style={styles.sub}>Não tem uma conta? <TouchableOpacity style={styles.subButton} onPress={navigateToSecond}>Cadastre-se</TouchableOpacity></Text>
					</View>
					<View style={styles.menuButtonView}>
						<TouchableOpacity style={styles.menuButton} onPress={() => {Alert.alert("Login concluído!")}} disabled={button}>
							<Text style={styles.menuButtonText}>Entrar</Text>
						</TouchableOpacity>
					</View>
					<StatusBar style="auto" />
				</View>
				<View style={styles.viewBackground}>
					<ImageBackground source={require("../background.png")} resizeMode="cover" style={styles.loginBackground}>
					</ImageBackground>
				</View>
			</View>
		</View>
    );
}