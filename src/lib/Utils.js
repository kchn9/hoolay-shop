const Utils = {
    beautifyFormattedPrice: (fPrice) => {
        const cleanPriceStr = fPrice.slice(2).replace(',', '');
        const currency = fPrice.slice(0, 2);
        return `${cleanPriceStr} ${currency}`;
    },
}

export default Utils;