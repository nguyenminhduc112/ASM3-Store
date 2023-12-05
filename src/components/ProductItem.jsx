import React from 'react'
import classes from '../assets/css/ProductItem.module.css'
import { covertPriceVND } from '../utils/covertPrice'
const ProductItem = (props) => {
    const handlerProduct = () => {
        props.onHandlerProduct(props.id)
    }
    return (
        <React.Fragment>
            <div className={`col-md-${props.number_col} ${classes.item}`}>
                <div className={classes.item_img} onClick={handlerProduct}>
                    <img src={props.img} alt="" />
                </div>
                <div className={classes.item_info}>
                    <p className={classes.item_name}>{props.name}</p>
                    <p className={classes.item_price}>{covertPriceVND(props.price)}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(ProductItem)
