export const fetchAddOrder = async (dataE) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_DEFAULT_SERVER}/order/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataE)
        })
        const data = await response.json()
        return { response, data }
    } catch (error) {
        console.log(error)
    }
}

export const fetchGetOrderByUserID = async (token, userId) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_DEFAULT_SERVER}/order/get/${userId}`, {
            headers: {
                "token": `Bearer ${token}`,
                'userid': `${userId}`
            }
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const fetchGetOrder = async (token, orderId, userId) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_DEFAULT_SERVER}/order/getOne/${orderId}`, {
            headers: {
                "token": `Bearer ${token}`,
                'userid': `${userId}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}