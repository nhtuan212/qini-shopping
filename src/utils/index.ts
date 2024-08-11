export const isEmpty = (obj: object) => {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }

    return true;
};

/**
 * Formats the given money amount into a localized currency string.
 *
 * @param {Money} money - The money object containing the amount and currency.
 * @param {string} [money.locale="en-US"] - The locale to use for formatting the currency.
 * @returns {string} The formatted currency string.
 *
 * @example
 *
 * const money = { amount: 1000, currency: "VND", locale="vn-VN" };
 * const formattedMoney = formatMoney(money);
 * console.log(formattedMoney); // Output: $10.00
 */
type Money = { amount: number; currency: string };

export const formatMoney = ({
    amount: minor,
    currency,
    locale = "en-US",
}: Money & { locale?: string }) => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(minor / 100);
};
