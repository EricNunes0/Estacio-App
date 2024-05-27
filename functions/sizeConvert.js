export const sizeConvert = (value) => {
    let finalValue = 0;
    if(isNaN(value)) {
        finalValue = 0;
    } else if(value < 1000) {
        finalValue = `${parseInt(value)}ml`;
    } else if(value >= 1000) {
        finalValue = `${parseFloat(value / 1000)}L`;
    };
    return finalValue;
};