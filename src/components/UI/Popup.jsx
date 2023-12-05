import React from 'react'
import { createPortal } from 'react-dom'
import classes from '../../assets/css/Modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { covertPriceVND } from '../../utils/covertPrice'
import { popupAction } from '../../store/reducers/popupReducer'
import { cartAction } from '../../store/reducers/cartReducer'
import { useNavigate } from 'react-router-dom'
const Popup = () => {
    const dispatch = useDispatch()
    const router = useNavigate()
    const open = useSelector(state => state.popup.showPopup)
    const product = useSelector(state => state.popup.product)
    const closePopup = () => {
        dispatch(popupAction.HIDE_POPUP())
    }
    const handlerAddCart = () => {
        const cart = {
            id: product.id,
            name: product.name,
            img: product.img1,
            price: Number(product.price),
            quanity: 1,
            total: Number(product.price) * 1
        }
        dispatch(cartAction.ADD_CART({ cart: cart }))
        router('/cart')
    }
    const popupRener = open && createPortal(<React.Fragment>
        <div className={classes.overplay} >
            <div className={classes.modal}>
                <div className="row">
                    <div className={`col-md-6 ${classes.modal_img}`}>
                        <img src={product.img1} className='img-fluid' alt='img product' />
                    </div>
                    <div className={`col-md-6 ${classes.modal_info}`}>
                        <h3 className={classes.modal_name}>{product.name}</h3>
                        <p className={classes.modal_price}>{covertPriceVND(product.price)}</p>
                        <p className={classes.modal_desc}>{product.short_desc}</p>
                        <button className={classes.btn} onClick={handlerAddCart}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                        </svg> Add to cart</button>
                    </div>
                </div>
                <button className={classes.btn_close} onClick={closePopup}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg></button>
            </div>
        </div>

    </React.Fragment>, document.getElementById('modalPop'))
    return popupRener
}

export default React.memo(Popup)
