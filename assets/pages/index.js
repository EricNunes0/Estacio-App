import { Alert, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { indexStyle } from "../styles/index";
import IndexBubble from "./animations/IndexBubble";
import IndexWaveBackground from "./animations/IndexWaveBackground";
import { clearStorage } from "../../functions/clearStorage";

export default function Index() {
    const navigation = useNavigation();
    
    /* Gerando bolhas */
    let bubbles = [];
    for(let i = 1; i <= 20; i++) {
        bubbles.push(<IndexBubble></IndexBubble>);
    };

    return (
        <View style={indexStyle.main}>
            <View style={indexStyle.mainHeader}>
                <View style = {indexStyle.bubblesView}>
                    {bubbles}
                </View>
                <View style={indexStyle.mainHeaderFlex}>
                    <View style={indexStyle.mainBackgroundLogoView}>
                        <View style={[indexStyle.mainBackgroundLogoCircle, indexStyle.mainBackgroundLogoCircle1]}></View>
                        <View style={[indexStyle.mainBackgroundLogoCircle, indexStyle.mainBackgroundLogoCircle2]}></View>
                        <Image source={require("../images/fruta.png")} style={indexStyle.mainBackgroundLogo} resizeMode="contain"></Image>
                    </View>
                    <View style={indexStyle.mainTextsView}>
                        <Text style={indexStyle.mainTitle1}>Açaí Zero Grau</Text>
                        <Text style={indexStyle.mainSubtitle1}>Açaís e sorvetes</Text>
                    </View>
                </View>
            </View>
            <View style={indexStyle.mainBackgroundFooter}>
                <IndexWaveBackground></IndexWaveBackground>
                <View style={indexStyle.navigateView}>
                    <View style={indexStyle.navigateViewContent}>
                    <TouchableOpacity onPress={() => {navigation.navigate("Login")}} style={[indexStyle.navigateButtons, indexStyle.navigateButton1]}>Entrar</TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("Cadastro")}} style={[indexStyle.navigateButtons, indexStyle.navigateButton2]}>Cadastrar-se</TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}