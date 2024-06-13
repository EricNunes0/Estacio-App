import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient, Path, Stop } from 'react-native-svg';
import MessageErrorSVG from './error';
import MessageInfoSVG from './info';
import MessageSuccessSVG from './success';
import MessageWarningSVG from './warning';
import MessageCloseErrorSVG from './close_error';
import MessageCloseInfoSVG from './close_info';
import MessageCloseSuccessSVG from './close_success';
import MessageCloseWarningSVG from './close_warning';

export default function MessageSVG(prop) {
    const type = prop.type;
    if(type) {
        switch(type) {
            case "error":
                return (
                    <MessageErrorSVG></MessageErrorSVG>
                );
            case "info":
                return (
                    <MessageInfoSVG></MessageInfoSVG>
                );
            case "success":
                return (
                    <MessageSuccessSVG></MessageSuccessSVG>
                );
            case "warning":
                return (
                    <MessageWarningSVG></MessageWarningSVG>
                );
            case "close_error":
                return (
                    <MessageCloseErrorSVG></MessageCloseErrorSVG>
                );
            case "close_info":
                return (
                    <MessageCloseInfoSVG></MessageCloseInfoSVG>
                );
            case "close_success":
                return (
                    <MessageCloseSuccessSVG></MessageCloseSuccessSVG>
                );
            case "close_warning":
                return (
                    <MessageCloseWarningSVG></MessageCloseWarningSVG>
                );
            default:
                break;
        }
    }
}