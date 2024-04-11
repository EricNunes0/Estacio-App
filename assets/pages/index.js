import { useState } from "react";
import { Text, View, Alert, Button, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { indexStyle } from "../styles/index";
import navigateTo from "../../functions/navigateTo";
import WaveBackground from "./WaveBackground";

export default function Index() {
    const navigation = useNavigation();

    return (
        <View style={indexStyle.main}>
            <View style={indexStyle.mainBackgroundHeader}>
                <View style={indexStyle.mainTextsView}>
                    <Text style={indexStyle.mainTitle1}>Conheça o</Text>
                    <Text style={indexStyle.mainTitle2}>Açai Zero Grau</Text>
                    <Text style={indexStyle.mainSubtitle1}>Açaís e sorvetes</Text>
                </View>
                <Image source={require("../images/fruta.png")} style={indexStyle.mainBackgroundLogo} resizeMode="contain"></Image>
            </View>
            <View style={indexStyle.mainBackgroundFooter}>
                <WaveBackground></WaveBackground>
                <View style={indexStyle.navigateView}>
                    <View style={indexStyle.navigateViewContent}>
                    <TouchableOpacity onPress={() => {navigateTo(navigation, "Login")}} style={[indexStyle.navigateButtons, indexStyle.navigateButton1]}>Entrar</TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigateTo(navigation, "Cadastro")}} style={[indexStyle.navigateButtons, indexStyle.navigateButton2]}>Cadastrar-se</TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}