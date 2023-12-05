import React from 'react'
import classes from '../../assets/css/history/DetailOrder.module.css'
import { covertPriceVND } from '../../utils/covertPrice'
const DetailOrder = ({ order }) => {
    const renderProduct = order.items.length > 0 ? order.items.map((product) => <tr key={product.productId._id}>
        <td>{product.productId._id}</td>
        <td><img src={product.productId.img1} width={100} height={100} alt={product.productId.name} /></td>
        <td>{product.productId.name}</td>
        <td>{covertPriceVND(product.productId.price)}</td>
        <td>{product.quantity}</td>
    </tr>) : (<td><p style={{ marginTop: 15, textTransform: 'uppercase', fontWeight: 'bold' }}>Bạn Không có sản phẩm nào</p></td>)
    return (
        <React.Fragment>
            <h2 className={classes.title}>Infomation Order</h2>
            <p>ID User: {order.userId}</p>
            <p>Full Name: {order.user.fullname}</p>
            <p>Phone: {order.user.phone}</p>
            <p>Address: {order.user.address}</p>
            <p>Total: {covertPriceVND(order.total_price)}</p>
            <table className={`table table-hover ${classes.table}`}>
                <thead>
                    <tr>
                        <th>ID Product</th>
                        <th>Imager</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProduct}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default DetailOrder
