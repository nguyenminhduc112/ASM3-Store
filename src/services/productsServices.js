export const getProductsTrendding = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL_DEFAULT_SERVER}/product/getList`)
    const data = await response.json()
    return data
}