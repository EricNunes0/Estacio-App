import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, ImageBackground } from 'react-native';
import { indexStyle } from "../../styles/index";
import wave from "../../svgs/index_wave.svg"

export default function IndexWaveBackground() {
	const screen = Dimensions.get("window");
	const initialValue = 0;
	const translateValue = useRef(new Animated.Value(initialValue)).current;

	useEffect(() => {
		const translate = () => {
			translateValue.setValue(initialValue);
			Animated.timing(translateValue, {
				toValue: 1,
				duration: 5000,
				easing: Easing.linear,
				useNativeDriver: true,
			}).start(() => translate());
		};
		translate();
	}, [translateValue]);

	const translateAnimation = translateValue.interpolate({
		inputRange: [0, 1],
		outputRange: [-screen.width, 1],
	});

	const Wave = Animated.createAnimatedComponent(ImageBackground);
	return (
		<Wave 
			resizeMode="repeat" 
			style={[indexStyle.mainBackgroundWave, {
				left: translateAnimation
			}]}
			source = {wave}>
		</Wave>
	);
}