import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Data from "./data";
import DataName from "./dataName";
import DataInfo from "./dataInfo";
import Menu from "./menu";
import { screenRightAnimation } from "../../../../functions/screenRightAnimation";
import Resources from "./resources";
import ResourcesAcai from "./resourcesAcai";
import ResourcesAcaiAdd from "./resourcesAcaiAdd";
import ResourcesAcaiEdit from "./resourcesAcaiEdit";

const Stack = createStackNavigator();

export default function Settings() {

    return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Menu" component={Menu}></Stack.Screen>
			<Stack.Screen name="Resources" component={Resources} options={{
				headerShown: false,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}></Stack.Screen>
			<Stack.Screen name="ResourcesAcai" component={ResourcesAcai} options={{
				headerShown: false,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}></Stack.Screen>
			<Stack.Screen name="ResourcesAcaiAdd" component={ResourcesAcaiAdd} options={{
				headerShown: false,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}></Stack.Screen>
			<Stack.Screen name="ResourcesAcaiEdit" component={ResourcesAcaiEdit} options={{
				headerShown: false,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}></Stack.Screen>
			<Stack.Screen name="Data" component={Data} options={{
				headerShown: false,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}></Stack.Screen>
            <Stack.Screen name="DataName" component={DataName} options={{
				headerShown: false,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}></Stack.Screen>
			<Stack.Screen name="DataInfo" component={DataInfo} options={{
				headerShown: false,
				gestureDirection: "vertical",
				cardStyleInterpolator: screenRightAnimation
			}}></Stack.Screen>
		</Stack.Navigator>
    );
}