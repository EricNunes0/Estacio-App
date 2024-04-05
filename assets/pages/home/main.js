import { Text, View, Alert, Button, Image, ImageBackground, TouchableOpacity } from "react-native";
import { mainStyle } from "../../styles/main";

export default function Category() {
    return (
        <View>
            <View>
                <ImageBackground></ImageBackground>
            </View>
            <View>
                <Text>Açaí Zero Grau</Text>
                <Text>Melhor açaí da região</Text>
                <Text>A partir de R$14,00</Text>
            </View>
            <View style={mainStyle.headers}>
                <View style={mainStyle.headerView}>
                    <View>
                        <Text style={mainStyle.headerTitle}>Tamanhos</Text>
                        <Text style={mainStyle.headerSubtitle}>Escolha de 1 a 6</Text>
                    </View>
                    <View style={mainStyle.headerRequired}>
                        <Text style={mainStyle.headerRequiredText}>Obrigatório</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};