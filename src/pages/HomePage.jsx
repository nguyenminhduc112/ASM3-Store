import React, { Suspense } from 'react'
import Banner from '../components/home/Banner'
import BrowseCategories from '../components/home/BrowseCategories'
import ProductsTrending from '../components/home/ProductsTrending'
import { getProductsTrendding } from '../services/productsServices'
import { Await, defer, useLoaderData } from 'react-router-dom'
import OtherInfo from '../components/home/OherInfo'

const HomePage = () => {
    const { productTrendings } = useLoaderData()
    return (
        <React.Fragment>
            <Banner />
            <BrowseCategories />
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={productTrendings}>
                    {(loaderProductTrending) => <ProductsTrending products={loaderProductTrending} />}
                </Await>
            </Suspense>
            <OtherInfo />
        </React.Fragment>
    )
}

export default HomePage
const loaderProductsTrending = () => {
    const data = getProductsTrendding()
    return data
}
export const loader = () => {
    return defer({
        productTrendings: loaderProductsTrending()
    })
}
