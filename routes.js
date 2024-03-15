
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./assets/pages/login";
import Cadastro from "./assets/pages/cadastro";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Cadastro" component={Cadastro} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}