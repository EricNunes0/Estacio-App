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
            <View style={indexStyle.mainBackgroundBlue}>
                <View style={indexStyle.mainTextsView}>
                    <Text style={indexStyle.mainTitle1}>Açai Zero Grau</Text>
                    <Text style={indexStyle.mainSubtitle1}>Açaís e sorvetes</Text>
                </View>
                {/*<Image source={require("../images/city.png")} style={indexStyle.mainBackgroundCity} resizeMode="repeat"></Image>*/}
            </View>
            <View style={indexStyle.mainBackgroundWhite}>
                <WaveBackground></WaveBackground>
                <Image source={require("../images/logo.png")} style={indexStyle.mainBackgroundLogo} resizeMode="contain"></Image>
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