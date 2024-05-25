
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Acai from "../assets/pages/home/acai";
import IceCream from "../assets/pages/home/icecream";
import Carrinho from "../assets/pages/home/carrinho";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
	const activeColor = "#502545";
	const inactiveColor = "#909090";

	return (
		<Tab.Navigator initialRouteName="Açaí" screenOptions={{headerShown: false}}>
			<Tab.Screen name="Açaí" component={Acai} options={{
				tabBarActiveTintColor: activeColor,
				tabBarInactiveTintColor: inactiveColor,
				tabBarIcon: (tabInfo) => { 
					return (<MaterialCommunityIcons name="fruit-cherries" size={24} color={tabInfo.focused ? activeColor : inactiveColor} />); 
				} 
			}}/>
			<Tab.Screen name="Sorvete" component={IceCream} options={{
				tabBarActiveTintColor: activeColor,
				tabBarInactiveTintColor: inactiveColor,
				tabBarIcon: (tabInfo) => { 
					return (<MaterialCommunityIcons name="ice-cream" size={24} color={tabInfo.focused ? activeColor : inactiveColor} />); 
				} 
			}}/>
			<Tab.Screen name="Carrinho" component={Carrinho} options={{
				tabBarActiveTintColor: activeColor,
				tabBarInactiveTintColor: inactiveColor,
				tabBarIcon: (tabInfo) => { 
					return (<AntDesign name="shoppingcart" size={24} color={tabInfo.focused ? activeColor : inactiveColor} />); 
				} 
			}}/>
		</Tab.Navigator>
	);
}