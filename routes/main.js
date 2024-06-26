
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Pedidos from "../assets/pages/home/pedidos";
import Settings from "../assets/pages/home/settings/main";
import Navigation from "./navigation";

const Drawer = createDrawerNavigator();

export default function Main() {
	return (
		<Drawer.Navigator initialRouteName="Fazer pedido" screenOptions={{
			headerStyle: {
				backgroundColor: "#ffffff",
				borderBottomWidth: 4,
				borderBottomColor: "#802060",
				borderStyle: "solid",
				height: 80
			},
			drawerActiveBackgroundColor: "#F0A0D0",
			drawerLabelStyle: {
				color: '#000000'
			},
			drawerActiveTintColor: '#802060'
		}}>
			<Drawer.Screen name="Fazer pedido" component={Navigation}></Drawer.Screen>
			<Drawer.Screen name="Pedidos" component={Pedidos}></Drawer.Screen>
			<Drawer.Screen name="Configurações" component={Settings}></Drawer.Screen>
		</Drawer.Navigator>
	);
}