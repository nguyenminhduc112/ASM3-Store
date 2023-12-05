import React from 'react'
import classes from '../../assets/css/checkout/YourOrder.module.css'
import { useSelector } from 'react-redux'
import { covertPriceVND } from '../../utils/covertPrice'
const YourOrder = () => {
    // Tổng số tiền trong giỏ hàng
    const totalPrice = useSelector(state => state.cart.totalPrice)
    // Danh sách sản phẩm trong giỏ hàng
    const listCart = useSelector(state => state.cart.listCart)
    // Xuất giao diện your order
    const listCartRender = listCart.map((cart, index) => <div key={index} className={`${classes.section} border-bottom`}>
        <p className={classes.textName}>{cart.name}</p>
        <p className={classes.textPrice}>{covertPriceVND(cart.price)} <span>x {cart.quanity}</span></p>
    </div>)
    return (
        <React.Fragment>
            <div className={classes.yourOrder}>
                <h3 className={classes.title}>Your Order</h3>
                {listCartRender}
                <div className={classes.section}>
                    <p className={classes.textTotal}>Total</p>
                    <p className={classes.priceTotal}>{covertPriceVND(totalPrice)}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default YourOrder
