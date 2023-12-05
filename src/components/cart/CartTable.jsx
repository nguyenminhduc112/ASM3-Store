import React from 'react'
import classes from '../../assets/css/cart/CartTable.module.css'
import CartList from './CartList'
import { Link } from 'react-router-dom'
import CartTotal from './CartTotal'
import { useSelector } from 'react-redux'
const CartTable = () => {
    const listCart = useSelector(state => state.cart.listCart)
    const renderCartTable = listCart.length > 0 ? <div className="row">
        <div className="col-md-8">
            <CartList />
        </div>
        <div className="col-md-4">
            <CartTotal />
        </div>
        <div className="col-md-8">
            <div className={classes.actions}>
                <Link to={'/shop'} className={classes.linkContinue}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>  Continue shopping
                </Link>
                <Link to={'/checkout'} className={classes.linkCheckout}>
                    Proceed to checkout <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Link>
            </div>
        </div>
    </div> : <Link to={'/shop'} className={classes.imgBuyNow}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/852/805/small_2x/smartphone-with-purchase-icon-on-screen-place-in-red-shopping-cart-with-unfolded-receipt-paper-vector.jpg" alt="Buy Now" className='img-fluid' />
    </Link>
    return (
        <React.Fragment>
            <h3 className={classes.title}>Shopping Cart</h3>
            {renderCartTable}
        </React.Fragment>
    )
}

export default CartTable
