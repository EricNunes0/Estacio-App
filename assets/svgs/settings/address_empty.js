import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient, Path, Stop } from 'react-native-svg';

export default function AddressEmptySVG() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 64 64" id="Layer_1" version="1.1">
            <LinearGradient gradientUnits="userSpaceOnUse" id="grad1" x1="11.992" x2="52.2484" y1="11.9781" y2="52.2346">
                <Stop offset="0" stopColor="#B05090"/>
                <Stop offset="1" stopColor="#802060"/>
            </LinearGradient>
            <Path fill="url(#grad1)" d="M57.2,60.5c-16.5,2-33.3,2-50.4,0c-1.7-0.2-3.1-1.6-3.3-3.3c-2-16.8-2-33.6,0-50.4c0.2-1.7,1.6-3.1,3.3-3.3  c16.8-2,33.7-2,50.5,0c1.7,0.2,3,1.5,3.3,3.2c2,16.5,2,33.3,0,50.5C60.3,58.9,58.9,60.3,57.2,60.5z"/>
            <Path fill="#FFFFFF" d="M49,13.8L49,13.8c-5.7-5.7-14.9-5.7-20.6,0c-5.4,5.4-5.8,14.2-0.7,19.9c3,3.3,6.5,6.3,10.4,9.1  c0.4,0.3,0.9,0.3,1.2,0c3.9-2.7,7.4-5.7,10.4-9C54.8,28,54.4,19.2,49,13.8z M38.7,30.1c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1  s6.1,2.7,6.1,6.1S42,30.1,38.7,30.1z"/>
            <G opacity="0.2">
                <Line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="11" x2="45" y1="48" y2="48"/>
                <Line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="11" x2="43" y1="36" y2="36"/>
                <Line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="11" x2="29" y1="25" y2="25"/>
                <Line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="40" x2="40" y1="53" y2="34"/>
                <Line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="28" x2="28" y1="53" y2="21"/>
                <Line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="16" x2="16" y1="53" y2="19"/>
            </G>
            <Ellipse opacity="0.6" fill="#FFFFFF" cx="38.7" cy="24" rx="3.8" ry="3.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.6514 34.362)"/>
        </Svg>
    )
}