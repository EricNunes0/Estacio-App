
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Pedidos from "../assets/pages/home/pedidos";
import Settings from "../assets/pages/home/settings/main";
import Navigation from "./navigation";

const Drawer = createDrawerNavigator();

export default function Main() {
	return (
		<Drawer.Navigator initialRouteName="Configurações" screenOptions={{
			headerStyle: {
				backgroundColor: "#ffffff",
				borderBottomWidth: 4,
				borderBottomColor: "#b040c0",
				borderStyle: "solid",
				height: 50
			}
		}}>
			<Drawer.Screen name="Configurações" component={Settings}></Drawer.Screen>
			<Drawer.Screen name="Pedidos" component={Pedidos}></Drawer.Screen>
			<Drawer.Screen name="Fazer pedido" component={Navigation}></Drawer.Screen>
			{/*<Drawer.Screen name="Contatos" component={Navigation}></Drawer.Screen>
			*/}
		</Drawer.Navigator>
	);
}