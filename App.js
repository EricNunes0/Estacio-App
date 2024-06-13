import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import Routes from "./routes/routes.js";
import Splash from "./assets/pages/splash.js";
import { checkIfResourcesExists } from "./functions/checkIfResourcesExists.js";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Poppins": require("./assets/fonts/Poppins.ttf"),
		"Poppins thin": require("./assets/fonts/Poppins_thin.ttf"),
		"Poppins medium": require("./assets/fonts/Poppins_medium.ttf"),
		"Poppins bold": require("./assets/fonts/Poppins_bold.ttf")
	});

	const [token, setToken] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		checkLoginStatus();
	}, []);

	const checkLoginStatus = async () => {
		try {
		  	const tokenJSON = await AsyncStorage.getItem("token");
		  	if(tokenJSON) {
				setIsLoggedIn(true);
				const tokenObject = JSON.parse(tokenJSON);
				setToken(tokenObject);
				disableLoading();
		  	} else {
				setIsLoggedIn(false);
				disableLoading();
		  	}
			checkIfResourcesExists();
		} catch (e) {
		  	console.error("Erro ao verificar o status do login:", e);
		  	alert("Ocorreu um erro ao verificar o status do login");
		}
	};

	function disableLoading() {
		setTimeout(function() {
			setIsLoading(false);
		}, 2000)
	};

	if(isLoading) {
		return (
			<Splash></Splash>
		);
	};

	return (
		<NavigationContainer>
			{isLoggedIn === true ? (<Routes initial="Main"></Routes>) : (<Routes initial="Index"></Routes>)}
		</NavigationContainer>
	);
}