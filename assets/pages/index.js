import { Alert, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { indexStyle } from "../styles/index";
import IndexBubble from "./animations/IndexBubble";
import IndexWaveBackground from "./animations/IndexWaveBackground";

export default function Index() {
    const navigation = useNavigation();
    
    /* Gerando bolhas */
    let bubbles = [];
    for(let i = 1; i <= 20; i++) {
        bubbles.push(<IndexBubble key={i}></IndexBubble>);
    };

    return (
        <View style={indexStyle.main}>
            <LinearGradient colors={["#b040c0", "#802060"]} style={indexStyle.mainHeader}>
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
            </LinearGradient>
            <View style={indexStyle.mainBackgroundFooter}>
                {/*<IndexWaveBackground></IndexWaveBackground>*/}
                <View style={indexStyle.navigateView}>
                    <View style={indexStyle.navigateViewContent}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Login")}} style={[indexStyle.navigateButtons, indexStyle.navigateButton1]}>
                            <Text style = {[indexStyle.navigateButtonText, indexStyle.navigateButtonText1]}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate("Cadastro")}} style={[indexStyle.navigateButtons, indexStyle.navigateButton2]}>
                            <Text style = {[indexStyle.navigateButtonText, indexStyle.navigateButtonText2]}>Cadastrar-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}