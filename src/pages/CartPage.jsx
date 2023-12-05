import React, { useEffect } from 'react'
import NavHeader from '../components/layout/NavHeader'
import CartTable from '../components/cart/CartTable'

const CartPage = () => {
    return (
        <React.Fragment>
            <NavHeader title={'Cart'} breadcrumbs={[{ name: 'cart', path: '/cart' }]} />
            <CartTable />
        </React.Fragment>
    )
}

export default CartPage
