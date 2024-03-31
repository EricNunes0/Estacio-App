import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, ImageBackground } from 'react-native';
import cityImage from '../images/city.png';
import { indexStyle } from "../styles/index";


export default function CityBackground() {
	const screen = Dimensions.get("screen");

	const INPUT_RANGE_START = 0;
	const INPUT_RANGE_END = 1;
	const OUTPUT_RANGE_START = -screen.width;
	const OUTPUT_RANGE_END = 1;
	const ANIMATION_TO_VALUE = 1;
	const ANIMATION_DURATION = 20000;

	const initialValue = 0;
	const translateValue = useRef(new Animated.Value(initialValue)).current;

	useEffect(() => {
		const translate = () => {
			translateValue.setValue(initialValue);
			Animated.timing(translateValue, {
				toValue: ANIMATION_TO_VALUE,
				duration: ANIMATION_DURATION,
				easing: Easing.linear,
				useNativeDriver: true,
			}).start(() => translate());
		};
		translate();
	}, [translateValue]);

	const translateAnimation = translateValue.interpolate({
		inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
		outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
	});

	const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
	return (
		<AnimatedImage 
			resizeMode="repeat" 
			style={[indexStyle.mainBackgroundCity, {
				left: translateAnimation
			}]}
			source={cityImage}>
		</AnimatedImage>
	);
}