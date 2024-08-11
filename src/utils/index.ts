export const isEmpty = (obj: object) => {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }

    return true;
};

export const moneyFormat = (amount: number) => {
    return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
