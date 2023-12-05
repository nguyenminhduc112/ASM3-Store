import React, { Suspense, lazy, useCallback } from 'react'
import classes from '../../assets/css/home/ProductsTrending.module.css'
import ProductItem from '../ProductItem'
import { useDispatch } from 'react-redux'
import { popupAction } from '../../store/reducers/popupReducer'
const Popup = lazy(() => import('../UI/Popup'))
const ProductsTrending = ({ products }) => {
    const dispatch = useDispatch()
    // Xử lý hiển thị chi tiết sản sẩm bằng popup
    const hanlderPop = useCallback((id) => {
        const product = products.find(product => product._id === id)
        const productPayload = {
            id: product._id,
            name: product.name,
            img1: product.img1,
            price: product.price,
            short_desc: product.short_desc
        }
        dispatch(popupAction.SHOW_POPUP({ product: productPayload }))
    }, [products, dispatch])
    // Danh sách sản phẩm xuất ra giao diện
    const listProductsRender = products.length > 0 && products.map((product) => <ProductItem key={product._id} id={product._id} img={product.img1} name={product.name} price={product.price} number_col={3} onHandlerProduct={hanlderPop} />)
    return (
        <React.Fragment>
            <div className="wrapper">
                <p className={classes.subTitle}>Made the hard way</p>
                <h2 className={classes.mainTitle}>Top trending products</h2>
                <div className="row">
                    {listProductsRender}
                </div>
            </div>
            <Suspense fallback={<p>Loading...</p>}> <Popup /></Suspense>
        </React.Fragment>
    )
}

export default ProductsTrending
