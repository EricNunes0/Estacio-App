import { Text, View, Alert, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { indexStyle } from "../styles/index";
import navigateTo from "../../functions/navigateTo";
import Bubble from "./Bubble";
import WaveBackground from "./WaveBackground";

export default function Index() {
    const navigation = useNavigation();

    /* Bolhas */
    let bubbles = [];
    let bubbleCount = 20;
    for(let i = 0; i <= (bubbleCount - 1); i++) {
        bubbles.push(<Bubble></Bubble>);
    };
    return (
        <View style={indexStyle.main}>
            <View style={indexStyle.mainHeader}>
                <View style = {indexStyle.bubblesView}>
                    {bubbles}
                </View>
                <View style={indexStyle.mainHeaderFlex}>
                    <View style={indexStyle.mainBackgroundLogoView} id="AQUIIIIIIIIIIIII">
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