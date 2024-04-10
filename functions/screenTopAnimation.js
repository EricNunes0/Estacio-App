export const screenTopAnimation = ({ current, layouts }) => {
    return {
        cardStyle: {
            transform: [
                {
                    translateY: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-layouts.screen.height, 0],
                    }),
                }
            ]
        }
    };
};