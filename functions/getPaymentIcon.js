import CashSVG from "../assets/svgs/payment/cash";
import CreditSVG from "../assets/svgs/payment/credit.js";
import DebitSVG from "../assets/svgs/payment/debit.js";
import PixSVG from "../assets/svgs/payment/pix.js";

export const getPaymentIcon = (paymentMethod) => {
    if(paymentMethod === "credit") {
        return <CreditSVG></CreditSVG>;
    } else if(paymentMethod === "debit") {
        return <DebitSVG></DebitSVG>;
    } else if(paymentMethod === "pix") {
        return <PixSVG></PixSVG>;
    } else if(paymentMethod === "cash") {
        return <CashSVG></CashSVG>;
    };
    return null;
};