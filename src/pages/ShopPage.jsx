import React, { Suspense } from 'react'
import NavHeader from '../components/layout/NavHeader'
import Sidebar from '../components/shop/Sidebar'
import ProductsList from '../components/shop/ProductsList'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { getProductsTrendding } from '../services/productsServices'

const ShopPage = () => {
    const { products } = useLoaderData()
    return (
        <React.Fragment>
            <NavHeader title='Shop' breadcrumbs={[
                { name: 'shop', path: '/shop' }
            ]} />
            <div className="row wrapper">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                        <Await resolve={products}>
                            {(loaderProducts) => <ProductsList products={loaderProducts} />}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShopPage

const loaderProducts = () => {
    const data = getProductsTrendding()
    return data
}
export const loader = () => {
    return defer({
        products: loaderProducts()
    })
}
