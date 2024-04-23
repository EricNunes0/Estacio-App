
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Pedidos from "./assets/pages/home/pedidos";
import Navigation from "./navigation";

const Drawer = createDrawerNavigator();

export default function Root() {
	return (
		<Drawer.Navigator initialRouteName="Fazer pedido">
			<Drawer.Screen name="Pedidos" component={Pedidos}></Drawer.Screen>
			<Drawer.Screen name="Fazer pedido" component={Navigation}></Drawer.Screen>
			{/*<Drawer.Screen name="Contatos" component={Navigation}></Drawer.Screen>
			<Drawer.Screen name="Configurações" component={Navigation}></Drawer.Screen>*/}
		</Drawer.Navigator>
	);
}