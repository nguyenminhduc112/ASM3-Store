import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classes from '../../assets/css/shop/DetailProduct.module.css'
import { covertPriceVND } from '../../utils/covertPrice'
import ProductItem from '../ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../../store/reducers/cartReducer'
const DetailProduct = ({ products }) => {
    const { productId } = useParams()
    const isAuthentication = useSelector(state => state.auth.isAuthentication)
    const imgMainRef = useRef()
    const inputQuanityRef = useRef()
    const dispatch = useDispatch()
    const router = useNavigate()
    const product = products.find(product => product._id === productId)
    const productRelated = products.filter(productel => productel.category === product.category && productel._id !== productId)
    // Xử lý thây đổi hình ảnh
    const changeMainImg = (e) => {
        const url = e.target.getAttribute('src')
        imgMainRef.current.setAttribute('src', url)
    }
    // Xử lý khi click vào add cart
    const handlerAddCart = (e) => {
        e.preventDefault()
        const quanity = Number(inputQuanityRef.current.value)
        if (quanity <= 0) {
            alert("The quantity should not be below or equal to 0")
        } else {
            const cart = {
                id: product._id,
                name: product.name,
                img: product.img1,
                price: Number(product.price),
                quanity: quanity,
                total: Number(product.price) * quanity
            }
            dispatch(cartAction.ADD_CART({ cart: cart }))
            router('/cart')
        }
    }
    // xử lý khi click vào xem chi tiết sản phẩm
    const hanlderDetail = (id) => {
        router(`/detail/${id}`)
    }
    // xử lý xuất các sản phẩm liên quan lên giao diện
    const productRelatedRender = productRelated.length > 0 ? productRelated.map((product) => <ProductItem key={product._id} id={product._id} img={product.img1} name={product.name} price={product.price} number_col={3} onHandlerProduct={hanlderDetail} />) : <p className='text-center text-uppercase'>Product is empty</p>

    return (
        <React.Fragment>
            <div className={`row ${classes.detailProduct}`}>
                <div className={`col-md-1 ${classes.imgsOther}`}>
                    <img src={product.img1} alt={product.name} className='img-fluid' onClick={changeMainImg} />
                    <img src={product.img2} alt={product.name} className='img-fluid' onClick={changeMainImg} />
                    <img src={product.img3} alt={product.name} className='img-fluid' onClick={changeMainImg} />
                    <img src={product.img4} alt={product.name} className='img-fluid' onClick={changeMainImg} />
                </div>
                <div className={`col-md-4 ${classes.imgMain}`}>
                    <img src={product.img1} alt={product.name} className='img-fluid' ref={imgMainRef} />
                </div>
                <div className={`col-md-7 ${classes.info}`}>
                    <h1 className={classes.info_title}>{product.name}</h1>
                    <p className={classes.info_price}>{covertPriceVND(product.price)}</p>
                    <p className={classes.info_short_desc}>{product.short_desc}</p>
                    <p className={classes.info_titleCategory}>CATEGORY: <span className={classes.info_textCategory}>{product.category}</span></p>
                    <form className={classes.formQuantity}>
                        <label htmlFor="quantity" className={classes.label}>Quantity</label>
                        <input id='quantity' type="number" name='quantity' min={1} className={classes.input} defaultValue={1} ref={inputQuanityRef} required />
                        <button type='submit' className={classes.btn} onClick={handlerAddCart} >Add to cart</button>
                    </form>
                </div>
            </div>
            <div className={classes.description}>
                <div className={classes.description_label}>Description</div>
                <h3 className={classes.description_title}>Product Description</h3>
                <p className={classes.description_long_desc}>{product.long_desc}</p>
            </div>
            <div className={classes.related}>
                <h3 className={classes.related_title}>Product Related</h3>
                <div className="row">
                    {productRelatedRender}
                </div>
            </div>
        </React.Fragment >
    )
}

export default DetailProduct
