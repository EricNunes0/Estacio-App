import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { styles } from "../styles/login";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
    /* Botão de visualizar senha */
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };

    const navigate = useNavigation();

    function navigateBack() {
        navigate.goBack();
    }

    return (
        <View style={styles.container}>
			<View style={styles.viewBottom}>
				<View style={styles.logoView}>
					<Image source={require("../logo.png")} style={styles.logo}></Image>
				</View>
				<View style={styles.titleView}>
					<Text style={styles.title}>Cadastre-se</Text>
					<Text style={styles.subtitle}>Crie sua conta para continuar</Text>
				</View>
				<TextInput autoComplete="name" keyboardType="default" placeholder="Nome completo" placeholderTextColor="#888" style={styles.input}></TextInput>
				<TextInput autoComplete="email" keyboardType="email-address" placeholder="E-mail" placeholderTextColor="#888" style={styles.input}></TextInput>
				<View style={styles.viewRow}>
					<TextInput autoComplete="password" keyboardType="password" secureTextEntry={!showPassword} value={password}  onChangeText={setPassword}  placeholder="Senha"  placeholderTextColor="#888" style={styles.input}></TextInput>
					<MaterialCommunityIcons style={styles.passwordButton}
						name={showPassword ? 'eye-off' : 'eye'} 
						size={24} 
						color="#aaa"
						onPress={toggleShowPassword} 
					/> 
				</View>
			</View>
			<View style={styles.viewStretch}>
				<View style={styles.viewBottomMargin}>
					<View style={styles.viewStretch}>
						<Text style={styles.sub}>Já tem uma conta? <TouchableOpacity style={styles.subButton} onPress={navigateBack}>Faça o login</TouchableOpacity></Text>
					</View>
					<View style={styles.menuButtonView}>
						<TouchableOpacity style={styles.menuButton} color={"#2090ff"} onPress={() => {Alert.alert("Cadastro concluído!")}} disabled={true}>
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