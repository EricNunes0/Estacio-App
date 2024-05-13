import { View, Image } from "react-native";
import { splashStyle } from "../styles/splash";

export default function Splash() {
    return (
        <View style={splashStyle.container}>
			<Image source={require("../images/splash.png")} style={splashStyle.logo}></Image>
		</View>
    );
}