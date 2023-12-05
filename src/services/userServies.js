

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {}
    return user
}

export const setUser = (id, email, fullname) => {
    localStorage.setItem('user', JSON.stringify({ email, fullname, id }))
    return { id, email, fullname }
}

export const removeUser = () => {
    localStorage.removeItem('user')
    return {}
}

export const fetchLogin = async (dataE) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_DEFAULT_SERVER}/auth/signin`, {
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

export const fetchRegister = async (dataE) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_DEFAULT_SERVER}/auth/signup`, {
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