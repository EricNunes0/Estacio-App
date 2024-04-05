
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from "./assets/pages/home/main";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {

	const activeColor = "#502545";
	const inactiveColor = "#909090";

	return (
		<Tab.Navigator initialRouteName="Açaí sem frutas" screenOptions={{headerShown: false}}>
			<Tab.Screen name="Açaí sem frutas" component={Main} options={{
				tabBarActiveTintColor: activeColor,
				tabBarInactiveTintColor: inactiveColor,
				tabBarIcon: (tabInfo) => { 
					return (<MaterialCommunityIcons name="fruit-cherries" size={24} color={tabInfo.focused ? activeColor : inactiveColor} />); 
				} 
			}}/>
			<Tab.Screen name="Açaí com frutas" component={Main} options={{
				tabBarActiveTintColor: activeColor,
				tabBarInactiveTintColor: inactiveColor,
				tabBarIcon: (tabInfo) => { 
					return (<MaterialCommunityIcons name="fruit-cherries-off" size={24} color={tabInfo.focused ? activeColor : inactiveColor} />); 
				} 
			}}/>
			<Tab.Screen name="Sorvetes" component={Main} options={{
				tabBarActiveTintColor: activeColor,
				tabBarInactiveTintColor: inactiveColor,
				tabBarIcon: (tabInfo) => { 
					return (<MaterialCommunityIcons name="ice-cream" size={24} color={tabInfo.focused ? activeColor : inactiveColor} />); 
				} 
			}}/>
			<Tab.Screen name="Bebidas" component={Main} options={{
				tabBarActiveTintColor: activeColor,
				tabBarInactiveTintColor: inactiveColor,
				tabBarIcon: (tabInfo) => { 
					return (<MaterialCommunityIcons name="cup" size={24} color={tabInfo.focused ? activeColor : inactiveColor} />); 
				} 
			}}/>
		</Tab.Navigator>
	);
}