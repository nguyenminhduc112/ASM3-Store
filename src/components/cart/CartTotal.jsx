import React from 'react'
import classes from '../../assets/css/cart/CartTotal.module.css'
import { useSelector } from 'react-redux'
import { covertPriceVND } from '../../utils/covertPrice'
const CartTotal = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const applyCouponHandler = (e) => {
        e.preventDefault()
        alert('Function awaiting development')
    }
    return (
        <React.Fragment>
            <div className={classes.cartTotal}>
                <h3 className={classes.title}>Cart Total</h3>
                <div className={`${classes.section} border-bottom`}>
                    <p className={classes.section_title}>Subtotal</p>
                    <p className={classes.priceSub}>{covertPriceVND(totalPrice)}</p>
                </div>
                <div className={classes.section}>
                    <p className={classes.section_title}>Total</p>
                    <p className={classes.priceTotal}>{covertPriceVND(totalPrice)}</p>
                </div>
                <form >
                    <input type="text" name='coupon' className='form-control' placeholder='Enter your coupon' />
                    <button className={classes.btnApply} onClick={applyCouponHandler}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift-fill" viewBox="0 0 16 16">
                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
                    </svg> Apply coupon</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default React.memo(CartTotal)
