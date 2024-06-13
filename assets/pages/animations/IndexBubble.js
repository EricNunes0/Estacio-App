import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, View } from 'react-native';
import { indexStyle } from "../../styles/index";

export default function IndexBubble() {
	const screen = Dimensions.get("window");
	const bubbleSize = 20;
	const bubbleLeft = Math.floor(Math.random() * screen.width);

	/* Animação vertical da bolha */
	const initialValue = 0;
	const bubbleTopValue = useRef(new Animated.Value(initialValue)).current;
	const bubbleTopDuration =(Math.floor((Math.random() * 100) / 10) + 5) * 1000;

	useEffect(() => {
		const translate = () => {
			bubbleTopValue.setValue(initialValue);
			Animated.timing(bubbleTopValue, {
				toValue: 1,
				duration: bubbleTopDuration,
				easing: Easing.linear,
				useNativeDriver: true,
			}).start(() => translate());
		};
		translate();
	}, [bubbleTopValue]);

	const bubbleTopAnimation = bubbleTopValue.interpolate({
		inputRange: [0, 1],
		outputRange: [screen.height, -bubbleSize]
	});

	/* Animação horizontal da bolha */
	const bubbleLeftInitialValue = 0;
	const bubbleLeftValue = useRef(new Animated.Value(bubbleLeftInitialValue)).current;
	const bubbleLeftDelay = Math.floor(Math.random() * 5) * 1000;

	useEffect(() => {
		const bubbleLeftTranslate = () => {
			bubbleLeftValue.setValue(bubbleLeftInitialValue);
			Animated.sequence([
				Animated.timing(bubbleLeftValue, {
					toValue: 1,
					duration: 2000,
					delay: bubbleLeftDelay,
					easing: Easing.inOut(Easing.ease),
					useNativeDriver: true,
				}),
				Animated.timing(bubbleLeftValue, {
					toValue: 0,
					duration: 2000,
					easing: Easing.inOut(Easing.ease),
					useNativeDriver: true,
				})
			]).start(() => bubbleLeftTranslate());

		};
		bubbleLeftTranslate();
	}, [bubbleLeftValue]);

	const bubbleLeftAnimation = bubbleLeftValue.interpolate({
		inputRange: [0, 1],
		outputRange: [bubbleLeft, bubbleLeft + (bubbleSize * 2)]
	});

	const Bubble = Animated.createAnimatedComponent(View);
	return (
		<Bubble 
			style={[indexStyle.bubble, {
				/*top: bubbleTopAnimation,
				left: bubbleLeftAnimation*/
			}]}>
		</Bubble>
	);
}