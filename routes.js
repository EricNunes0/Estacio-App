
import React from "react";
import Root from "./root";
import Index from "./assets/pages/index";
import Login from "./assets/pages/login";
import Cadastro from "./assets/pages/cadastro";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { screenTopAnimation } from "./functions/screenTopAnimation";
import { screenBottomAnimation } from "./functions/screenBottomAnimation";
import { screenLeftAnimation } from "./functions/screenLeftAnimation";
import { screenRightAnimation } from "./functions/screenRightAnimation";

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName="Index"
			screenOptions={{
				animationEnabled: true,
				animationTypeForReplace: "pop",
				gestureDirection: "vertical",
				headerShown: false,
				presentation: "modal",
			}}
			/* screenOptions={{headerShown: false}}*/>
			<Stack.Screen name="Index" component={Index}/>
			<Stack.Screen name="Login" component={Login} options={{
				headerShown: true,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenTopAnimation
			}}/>
			<Stack.Screen name="Cadastro" component={Cadastro} options={{
				headerShown: true,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenBottomAnimation
			}}/>
			<Stack.Screen name="Root" component={Root}></Stack.Screen>
		</Stack.Navigator>
	);
}