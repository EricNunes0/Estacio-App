import Svg, { G, Path, Circle, Rect } from 'react-native-svg';

export default function OrderSVG() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <Rect x="5" y="4" width="14" height="17" rx="2" stroke="#000000" stroke-width="2"/>
            <Path d="M9 9H15" stroke="#000000" stroke-width="2"/>
            <Path d="M9 13H15" stroke="#000000" stroke-width="2"/>
            <Path d="M9 17H13" stroke="#000000" stroke-width="2"/>
        </Svg>
    )
}