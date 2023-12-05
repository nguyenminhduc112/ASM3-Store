import React, { useMemo } from 'react'
import classes from '../../assets/css/history/HistoryTable.module.css'
import { useQuery } from "react-query"
import { fetchGetOrderByUserID } from '../../services/orderServices'
import BounceLoader from 'react-spinners/BounceLoader'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import { covertPriceVND } from '../../utils/covertPrice'
import { useNavigate } from 'react-router-dom'
const HistoryTable = () => {
    const userId = useSelector(state => state.auth.user.id)
    const token = useSelector(state => state.auth.token)
    const router = useNavigate()
    const { data: orders, isLoading: isLoadingOrders } = useQuery('getOrders', fetchGetOrderByUserID.bind(null, token, userId))
    const moveDetailHandler = (id) => {
        router(`/history/detail/${id}`)
    }
    const renderOrders = useMemo(() => {
        return isLoadingOrders ? createPortal(<div className={classes.loading}>
            < BounceLoader
                color="#36d7b7"
                size={100}
            />
        </div>, document.getElementById('loading')) : orders.length > 0 ? orders.map((order) => <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.userId}</td>
            <td>{order.user.fullname}</td>
            <td>{order.user.phone}</td>
            <td>{order.user.address}</td>
            <td>{covertPriceVND(order.total_price)}</td>
            <td>{order.delivery}</td>
            <td>{order.status}</td>
            <td><button className={classes.btnView} onClick={moveDetailHandler.bind(null, order._id)}>View<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/right--v1.png" alt="right--v1" /></button></td>
        </tr>) : (<td><p style={{ marginTop: 15, textTransform: 'uppercase', fontWeight: 'bold' }}>Bạn Không có đơn hàng nào</p></td>)
    }, [orders])
    return (
        <React.Fragment>
            <h3 className={classes.title}>History Orders</h3>
            <table className={`table table-hover ${classes.table}`}>
                <thead>
                    <tr>
                        <th>ID Order</th>
                        <th>Id user</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Delivery</th>
                        <th>Status</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {renderOrders}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default HistoryTable
