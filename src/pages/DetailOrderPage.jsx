import React, { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Await, defer, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import NavHeader from '../components/layout/NavHeader'
import DetailOrder from '../components/history/DetailOrder'
import { fetchGetOrder } from '../services/orderServices'
import { getToken } from '../utils/managerToken'
import { getUser } from '../services/userServies'
const DetailOrderPage = () => {
    const isAuthentication = useSelector(state => state.auth.isAuthentication)
    const router = useNavigate()
    useEffect(() => {
        if (!isAuthentication) {
            router('/')
        }
    }, [isAuthentication])
    const { orderId } = useParams()
    const { order } = useLoaderData()
    return (
        <React.Fragment>
            <NavHeader title={'Detail Order'} breadcrumbs={[
                { name: 'home', path: '/' },
                { name: 'history', path: '/history' },
                { name: `${orderId}`, path: `/history/detail/${orderId}` }
            ]} />
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={order}>
                    {(loaderOrder) => <DetailOrder order={loaderOrder} />}
                </Await>
            </Suspense>
        </React.Fragment>
    )
}


export const loaderDetailOrder = ({ request, params }) => {
    const token = getToken()
    const user = getUser()
    const { orderId } = params
    return defer({
        order: fetchGetOrder(token, orderId, user.id)
    })
}

export default DetailOrderPage
