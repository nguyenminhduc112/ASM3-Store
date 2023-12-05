import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ProductItem from '../ProductItem'
import FormSearch from './FormSearch'

const ProductsList = ({ products }) => {
    const paramCategory = useSearchParams()[0].get('category') || 'all'
    const router = useNavigate()
    let listProductsRender
    let productsFinal = []
    // Xử lý khi click vào xem chi tiết sản phẩm
    const hanlderDetail = (id) => {
        router(`/detail/${id}`)
    }

    // Xủ lý xuất sản phẩm ra giao diện có điều kiện
    if (paramCategory === 'all') {
        listProductsRender = products.length > 0 ? products.map((product) => <ProductItem key={product._id} id={product._id} img={product.img1} name={product.name} price={product.price} number_col={4} onHandlerProduct={hanlderDetail} />) : <p className='text-center text-uppercase'>Product is empty</p>
    } else {
        productsFinal = products.length > 0 ? products.filter(((product) => product.category === paramCategory)) : []
        listProductsRender = productsFinal.length > 0 ? productsFinal.map((product) => <ProductItem key={product._id} id={product._id} img={product.img1} name={product.name} price={product.price} number_col={4} onHandlerProduct={hanlderDetail} />) : <p className='text-center text-uppercase'>Product is empty</p>
    }
    return (
        <React.Fragment>
            <FormSearch />
            <div className="row">
                {listProductsRender}
            </div>
        </React.Fragment>
    )
}

export default ProductsList
