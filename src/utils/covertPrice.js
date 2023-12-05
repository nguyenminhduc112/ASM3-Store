export const covertPriceVND = (price) => {
    const number = Number(price)
    const format = new Intl.NumberFormat().format(number)
    const formatted = format + ' VND'
    return formatted
}