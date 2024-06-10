export const getPaymentName = (paymentMethod) => {
    if(paymentMethod === "credit") {
        return "Crédito";
    } else if(paymentMethod === "debit") {
        return "Débito";
    } else if(paymentMethod === "pix") {
        return "Pix";
    } else if(paymentMethod === "cash") {
        return "Dinheiro";
    };
    return null;
};