export const getAllCart = () => {
    const carts = JSON.parse(localStorage.getItem('listCart')) || []
    return carts
}

export const getTotalPrice = () => {
    const carts = JSON.parse(localStorage.getItem('listCart')) || []
    const totalArr = carts.map(cart => cart.total)
    const totalFinal = totalArr.reduce((acc, total) => acc + total, 0)
    return totalFinal
}

export const addCart = (cart) => {
    const carts = JSON.parse(localStorage.getItem('listCart')) || []
    const index = carts.findIndex((cartf) => cartf.id === cart.id)
    console.log(index)
    if (index !== -1) {
        const quanity = carts[index].quanity + cart.quanity
        const updateCart = { ...carts[index], quanity: quanity, total: carts[index]['price'] * quanity }
        carts[index] = { ...updateCart }
    } else {
        carts.push(cart)
    }

    localStorage.setItem('listCart', JSON.stringify(carts))
    return index
}

export const updateCart = (id, quanity) => {
    const carts = JSON.parse(localStorage.getItem('listCart')) || []
    const index = carts.findIndex(cart => cart.id === id)
    const updateCart = { ...carts[index], quanity: quanity, total: carts[index]['price'] * quanity }
    carts[index] = { ...updateCart }
    localStorage.setItem('listCart', JSON.stringify(carts))
    return updateCart
}

export const deleteCart = (id) => {
    const carts = JSON.parse(localStorage.getItem('listCart')) || []
    const index = carts.indexOf(cart => cart.id === id)
    carts.splice(index, 1)
    localStorage.setItem('listCart', JSON.stringify(carts))
    return index
}

export const deleteCartAll = () => {
    localStorage.removeItem('listCart')
}