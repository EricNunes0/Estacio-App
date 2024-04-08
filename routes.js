
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Root from "./root";
import Index from "./assets/pages/index";
import Login from "./assets/pages/login";
import Cadastro from "./assets/pages/cadastro";

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName="Index" screenOptions={{headerShown: false}}>
			<Stack.Screen name="Index" component={Index}/>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Cadastro" component={Cadastro} />
			<Stack.Screen name="Root" component={Root}></Stack.Screen>
		</Stack.Navigator>
	);
}