import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavHeader from '../components/layout/NavHeader'
import CheckoutForm from '../components/checkout/CheckoutForm'
const CheckoutPage = () => {
    // Xác nhận phải có sản phẩm mới truy cập
    const listCart = useSelector((state) => state.cart.listCart)
    const router = useNavigate()
    useEffect(() => {
        if (listCart.length === 0) {
            router('/cart')
        }
    }, [listCart.length, router])
    return (
        <React.Fragment>
            <NavHeader title={'Checkout'} breadcrumbs={[
                { name: 'home', path: '/' },
                { name: 'cart', path: '/cart' },
                { name: 'checkout', path: '/checkout' }
            ]} />
            <CheckoutForm />
        </React.Fragment>
    )
}

export default CheckoutPage
