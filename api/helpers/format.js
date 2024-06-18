export const stringFloat2FixedString = (stringFloat) => {
    let floatValue = parseFloat(stringFloat);

    if (!isNaN(floatValue)) {
        let result = floatValue.toFixed(1);
        return result.toString();
    } else {
        return stringFloat;
    }
}