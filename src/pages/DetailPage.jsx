import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { getProductsTrendding } from '../services/productsServices'
import DetailProduct from '../components/shop/DetailProduct'

const DetailPage = () => {
    const { products } = useLoaderData()
    return (
        <React.Fragment>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={products}>
                    {(loaderProducts) => <DetailProduct products={loaderProducts} />}
                </Await>
            </Suspense>
        </React.Fragment>
    )
}

export default DetailPage

const loaderProducts = () => {
    const data = getProductsTrendding()
    return data
}
export const loader = () => {
    return defer({
        products: loaderProducts()
    })
}
