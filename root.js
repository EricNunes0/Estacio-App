
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./assets/pages/home";

const Drawer = createDrawerNavigator();

export default function Root() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={Home} />
		</Drawer.Navigator>
	);
}