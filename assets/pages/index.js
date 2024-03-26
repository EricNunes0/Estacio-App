import { useState } from "react";
import { Animated, Text, View, Alert, Button, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { indexStyle } from "../styles/index";

export default function Index() {
    const navigation = useNavigation();
    function navigateTo(page) {
        navigation.navigate(page);
    }

    return (
        <View style={indexStyle.main}>
            <View style={indexStyle.mainBackgroundBlue}>
                <View style={indexStyle.mainTextsView}>
                    <Text style={indexStyle.mainTitle1}>Nome do app</Text>
                    <Text style={indexStyle.mainSubtitle1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
                <Image source={require("../images/city.png")} style={indexStyle.mainBackgroundCity} resizeMode="repeat"></Image>
                
            </View>
            <View style={indexStyle.mainBackgroundWhite}>
                <ImageBackground source={require("../svgs/index_wave.svg")} style={indexStyle.mainBackgroundWave}></ImageBackground>
                <Image source={require("../svgs/bike.svg")} style={indexStyle.mainBackgroundBike} resizeMode="contain"></Image>
                <View style={indexStyle.navigateView}>
                    <View style={indexStyle.navigateViewContent}>
                    <TouchableOpacity onPress={() => {navigateTo("Login")}} style={[indexStyle.navigateButtons, indexStyle.navigateButton1]}>Entrar</TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigateTo("Cadastro")}} style={[indexStyle.navigateButtons, indexStyle.navigateButton2]}>Cadastrar-se</TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}