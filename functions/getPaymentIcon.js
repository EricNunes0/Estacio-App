export const getPaymentIcon = (paymentMethod) => {
    if(paymentMethod === "credit") {
        return require("../assets/svgs/payment/credit.svg");
    } else if(paymentMethod === "debit") {
        return require("../assets/svgs/payment/debit.svg");
    } else if(paymentMethod === "pix") {
        return require("../assets/svgs/payment/pix.svg");
    } else if(paymentMethod === "cash") {
        return require("../assets/svgs/payment/cash.svg");
    };
    return null;
};