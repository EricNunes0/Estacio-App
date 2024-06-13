import CreditSVG from "./credit.js";
import DebitSVG from "./debit.js";
import PixSVG from "./pix.js";
import CashSVG from "./cash.js";

export default function PaymentMethodSVG(prop) {
    const icon = prop.icon;
    if(icon) {
        switch(icon) {
            case "credit":
                return (
                    <CreditSVG></CreditSVG>
                );
            case "debit":
                return (
                    <DebitSVG></DebitSVG>
                );
            case "pix":
                return (
                    <PixSVG></PixSVG>
                );
            case "cash":
                return (
                    <CashSVG></CashSVG>
                );
            default:
                break;
        }
    };
}