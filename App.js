import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { styles } from "./assets/styles/login.js";
import Routes from "./routes.js";

export default function App() {
	const [fontsLoaded] = useFonts({
		'Poppins': require('./assets/fonts/Poppins.ttf'),
	});

	return (
		<Routes></Routes>
	);
}