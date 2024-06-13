import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';

export default function ErrorTriangleSVG() {
    return (
        <Svg width="20px" height="20px" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <Defs>
                <RadialGradient gradientUnits="userSpaceOnUse" cx="269.341" cy="186.846" r="237.9" id="gradient-1">
                    <Stop offset="0" stopColor="rgb(0, 0, 0)"></Stop>
                    <Stop offset="1" stopColor="rgb(0, 0, 0)"></Stop>
                </RadialGradient>
                <LinearGradient gradientUnits="userSpaceOnUse" x1="269.341" y1="46.711" x2="269.341" y2="326.982" id="gradient-0" gradientTransform="matrix(0.999989, -0.004438, 0.000016, 0.00366, -0.002374, 314.716394)">
                    <Stop offset="0" stopColor="rgb(255, 64, 64);"></Stop>
                    <Stop offset="1" stopColor="rgb(255, 255, 255);"></Stop>
                </LinearGradient>
            </Defs>
            <Path d="M 269.342 46.711 L 507.242 326.982 L 31.441 326.982 L 269.342 46.711 Z" style="transform-box: fill-box; transform-origin: 50% 50%; fill: rgba(255, 240, 240, 1); stroke-width: 30px; paint-order: fill; stroke: url(#gradient-0); stroke-linecap: round; stroke-miterlimit: 30; stroke-linejoin: round;" transform="matrix(-1, 0.000016, -0.000016, -1, -19.402315, 38.215607)"></Path>
        </Svg>
    )
}