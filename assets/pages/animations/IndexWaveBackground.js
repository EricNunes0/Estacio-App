import React, { useEffect } from "react";
import { Dimensions, View, Text, Image, StyleSheet } from "react-native";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withTiming } from "react-native-reanimated";

export default function IndexWaveBackground() {
	const screen = Dimensions.get("window");
	const translateX = useSharedValue(0);

	useEffect(() => {
		console.log(translateX)
		translateX.value = withRepeat(
			withTiming(-100, {
				duration: 1000,
				easing: Easing.linear,
			}),
			-1,
			true,
		);
	}, [translateX]);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }],
		};
	});

	return (
		<View style = {{backgroundColor: "red"}}>
			<Animated.View style={animatedStyle}>
				<Image
					source={require("../../images/index_wave.png")}
					style={{width: screen.width * 3, height: 150, position: "absolute", top: -150, resizeMode: "contain"}}
				/>
			</Animated.View>
		</View>
	);
}