import React from 'react'
import classes from '../../assets/css/checkout/CheckoutForm.module.css'
import FormInfo from './FormInfo'
import YourOrder from './YourOrder'
const CheckoutForm = () => {
    return (
        <React.Fragment>
            <h3 className={classes.title}>Billing Details</h3>
            <div className="row mb-5">
                <div className="col-md-8">
                    <FormInfo />
                </div>
                <div className="col-md-4">
                    <YourOrder />
                </div>
            </div>
        </React.Fragment>
    )
}

export default CheckoutForm
