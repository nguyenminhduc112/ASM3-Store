import React from 'react'
import classes from '../../assets/css/cart/CartList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { covertPriceVND } from '../../utils/covertPrice'
import { cartAction } from '../../store/reducers/cartReducer'
const CartList = () => {
    const listCart = useSelector((state) => state.cart.listCart)
    const dispatch = useDispatch()
    // Xử lý khi thây đổi số lượng trong giỏ hàng
    const quanityChangeHandler = (e) => {
        const id = e.target.getAttribute('id')
        const quanity = Number(e.target.value,)
        dispatch(cartAction.UPDATE_CART({ id, quanity }))
    }
    // Xử lý khi click vào thùng rác cart
    const removeCartHandler = (id) => {
        dispatch(cartAction.DELETE_CART({ id: id }))
    }
    // Render Danh sách cart
    const listCartRender = listCart.map((cart) => <tr key={cart.id}>
        <td width={100}><img src={cart.img} alt={cart.name} className='img-fluid' /></td>
        <td ><p className={classes.textName}>{cart.name}</p></td>
        <td><p className={classes.textPrice}>{covertPriceVND(cart.price)}</p></td>
        <td width={50}><p className={classes.textQuanity}><input id={cart.id} type="number" name="quanity" defaultValue={cart.quanity} min={1} className='form-control' onChange={quanityChangeHandler} /></p></td>
        <td><p className={classes.textTotal}>{covertPriceVND(cart.total)}</p></td>
        <td><button className={classes.btnRemove} onClick={removeCartHandler.bind(null, cart.id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
        </svg></button></td>
    </tr>)
    return (
        <React.Fragment>
            <table className={`table table-hover ${classes.table}`}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quanity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {listCartRender}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default CartList
