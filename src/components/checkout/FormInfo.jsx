import React, { useState } from 'react'
import classes from '../../assets/css/checkout/FormInfo.module.css'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddOrder } from '../../services/orderServices';
import { useNavigate } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import { createPortal } from 'react-dom';
import { cartAction } from '../../store/reducers/cartReducer';
const FormInfo = () => {
    const userAuth = useSelector(state => state.auth.user) || {}
    const [isFetching, setIsFetching] = useState(false)
    const dispatch = useDispatch()
    const router = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm({
        defaultValues: {
            fullname: userAuth?.fullname ? userAuth.fullname : '',
            email: userAuth?.email ? userAuth.email : '',
            phone: '',
            address: '',
        }
    });
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const productsCart = useSelector(state => state.cart.listCart)
    const submitHandler = (data) => {
        setIsFetching(true)
        const products = productsCart.map(product => {
            return { productId: product.id, quantity: product.quanity }
        })
        let dataE = {
            user: {
                fullname: data.fullname,
                email: data.email,
                phone: data.phone,
                address: data.address,
            },
            total_price: Number(totalPrice),
            items: products
        }

        if (userAuth?.id) {
            dataE = {
                user: {
                    fullname: data.fullname,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                },
                total_price: Number(totalPrice),
                userId: userAuth?.id,
                items: products
            }
        }
        console.log(dataE)
        fetchAddOrder(dataE)
            .then((result) => {
                if (result.response.status !== 200) {
                    setError('address', { message: result.data.message })
                    setIsFetching(false)
                }
                if (result.response.status === 200) {
                    dispatch(cartAction.DELETE_CART_ALL())
                    router('/history')
                }
            })
            .catch(err => {
                console.log(err)
                setIsFetching(false)
            })
    }
    return (
        <React.Fragment>
            {isFetching &&
                createPortal(<div className={classes.loading}>
                    < BounceLoader
                        color="#36d7b7"
                        size={100}
                    />
                </div>, document.getElementById('loading'))
            }
            <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
                <div className={classes.inputGroup}>
                    <label htmlFor="fullname" className={`text-uppercase ${classes.lable}`}>Full Name:</label>
                    <input id='fullname' type="text" className={`form-control ${classes.input}`} name='fullname' placeholder='Enter Your Full Name Here!' {...register('fullname', {
                        required: "Không được để trường fullname trống"
                    })} />
                    {errors.fullname && <p className='error'>{errors.fullname.message}</p>}
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="email" className={`text-uppercase ${classes.lable}`}>Email:</label>
                    <input id='email' type="text" className={`form-control ${classes.input}`} name='email' placeholder='Enter Your Email Here!' {...register('email', {
                        required: "Không được để trường email trống",
                        pattern: {
                            value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                            message: 'Email không đúng định dạng'
                        }
                    })} />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="phone" className={`text-uppercase ${classes.lable}`}>Phone:</label>
                    <input id='phone' type="text" className={`form-control ${classes.input}`} name='phone' placeholder='Enter Your Phone Here!' {...register('phone', {
                        required: "Không được để trường phone trống"
                    })} />
                    {errors.phone && <p className='error'>{errors.phone.message}</p>}
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="address" className={`text-uppercase ${classes.lable}`}>Address:</label>
                    <input id='address' type="text" className={`form-control ${classes.input}`} name='address' placeholder='Enter Your Address Here!' {...register('address', {
                        required: "Không được để trường address trống"
                    })} />
                    {errors.address && <p className='error'>{errors.address.message}</p>}
                </div>
                <button className={classes.btnSubmit}>Place order</button>
            </form>
        </React.Fragment>
    )
}

export default FormInfo
