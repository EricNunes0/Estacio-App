
import React from "react";
import Main from "./main";
import Index from "../assets/pages/index";
import Login from "../assets/pages/login";
import Cadastro from "../assets/pages/cadastro";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { screenTopAnimation } from "../functions/screenTopAnimation";
import { screenBottomAnimation } from "../functions/screenBottomAnimation";
import { screenLeftAnimation } from "../functions/screenLeftAnimation";
import { screenRightAnimation } from "../functions/screenRightAnimation";

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName="Cadastro"
			screenOptions={{
				animationEnabled: true,
				animationTypeForReplace: "pop",
				gestureDirection: "vertical",
				headerStyle: {
					backgroundColor: "#ffffff",
					borderBottomWidth: 4,
					borderBottomColor: "#b040c0",
					borderStyle: "solid",
					height: 50
				},
				headerTintColor: "#000000",
				headerTitleStyle: {
					fontWeight: "100",
				},
				headerShown: false,
				presentation: "modal"
			}}
			/* screenOptions={{headerShown: false}}*/>
			<Stack.Screen name="Index" component={Index}/>
			<Stack.Screen name="Login" component={Login} options={{
				headerShown: true,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}/>
			<Stack.Screen name="Cadastro" component={Cadastro} options={{
				headerShown: true,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}/>
			<Stack.Screen name="Main" component={Main}></Stack.Screen>
		</Stack.Navigator>
	);
}