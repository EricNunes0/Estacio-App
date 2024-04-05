
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Navigation from "./navigation";

const Drawer = createDrawerNavigator();

export default function Root() {
	return (
		<Drawer.Navigator initialRouteName="Início">
			<Drawer.Screen name="Início" component={Navigation}></Drawer.Screen>
			<Drawer.Screen name="Pedidos" component={Navigation}></Drawer.Screen>
			<Drawer.Screen name="Contatos" component={Navigation}></Drawer.Screen>
			<Drawer.Screen name="Configurações" component={Navigation}></Drawer.Screen>
		</Drawer.Navigator>
	);
}