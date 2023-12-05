import React, { useEffect, useState } from 'react'
import classes from '../../assets/css/login/FormLogin.module.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { fetchLogin, fetchRegister } from '../../services/userServies'
import { setToken } from '../../utils/managerToken'
import { useDispatch } from 'react-redux'
import { authAction } from '../../store/reducers/authReducer'
import useInput from '../../hooks/use-input'
import BounceLoader from 'react-spinners/BounceLoader'
const FormLogin = () => {
    const [searchParams] = useSearchParams()
    const [error, setError] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    const router = useNavigate()
    const dispatch = useDispatch()
    const mode = searchParams.get('mode') || 'login'

    const isValid = (value) => value !== ''
    const isEmail = (value) => value.includes('@')
    // Input Use Input
    const { value: inputValueFullname,
        isValid: isValidFullName,
        hasError: ErrorFullName,
        handlerChangeInput: handlerChangeInputFullName,
        handlerBlurInput: handlerBlurInputFullName,
        reset: resetFullName } = useInput(isValid)
    const { value: inputValueEmail,
        isValid: isValidEmail,
        hasError: ErrorEmail,
        handlerChangeInput: handlerChangeInputEmail,
        handlerBlurInput: handlerBlurInputEmail,
        reset: resetEmail } = useInput(isEmail)
    const { value: inputValuePassword,
        isValid: isValidPassword,
        hasError: ErrorPassword,
        handlerChangeInput: handlerChangeInputPassword,
        handlerBlurInput: handlerBlurInputPassword,
        reset: resetPassword } = useInput(isValid)
    const { value: inputValuePhone,
        isValid: isValidPhone,
        hasError: ErrorPhone,
        handlerChangeInput: handlerChangeInputPhone,
        handlerBlurInput: handlerBlurInputPhone,
        reset: resetPhone } = useInput(isValid)

    useEffect(() => {
        setError('')
        resetPhone()
        resetPassword()
        resetEmail()
        resetFullName()
    }, [mode])
    // Xử lý Submit
    const submitHandler = (e) => {
        e.preventDefault()
        setIsFetching(true)
        if (mode === 'login') {
            const data = {
                email: inputValueEmail,
                password: inputValuePassword,
            }
            if (isValidEmail && isValidPassword) {
                fetchLogin(data)
                    .then(result => {
                        if (result.response.status === 500) {
                            setError(result.data.message)
                            setIsFetching(false)
                        }
                        if (result.response.status === 400) {
                            setError(result.data.message)
                            setIsFetching(false)
                        }
                        if (result.response.status === 200) {
                            setToken(result.data.accessToken)
                            dispatch(authAction.ON_LOGIN({ token: result.data.accessToken, fullname: result.data.user.name, email: result.data.user.email, id: result.data.user._id }))
                            router('/')
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        setIsFetching(false)
                    })
            } else {
                setTimeout(() => {
                    setError('Login unsuccessful')
                    setIsFetching(false)
                }, 1000)
            }
            resetPassword()
        } else {
            const data = {
                name: inputValueFullname,
                email: inputValueEmail,
                password: inputValuePassword,
                phone: inputValuePhone
            }

            if (isValidEmail && isValidFullName && isValidPassword && isValidPhone) {
                fetchRegister(data)
                    .then(result => {
                        if (result.response.status !== 201) {
                            setError(result.data.message)
                            setIsFetching(false)
                        }
                        if (result.response.status === 201) {
                            router('/login')
                            setIsFetching(false)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        setIsFetching(false)
                    })
            } else {
                setTimeout(() => {
                    setError('Registration failed')
                    setIsFetching(false)
                }, 1000)
            }
        }
    }
    // Render inputs
    const inputFullnameRender = mode === 'signup' && <div>
        <input type="text" name='fullname' className={classes.input} value={inputValueFullname} onChange={handlerChangeInputFullName} onBlur={handlerBlurInputFullName} placeholder='Full Name' />
        {ErrorFullName && <p className='error'>Full Name is Empty</p>}
    </div>
    const inputPhoneRender = mode === 'signup' && <div>
        <input type="text" name='phone' className={classes.input} value={inputValuePhone} onChange={handlerChangeInputPhone} onBlur={handlerBlurInputPhone} placeholder='Phone' />
        {ErrorPhone && <p className='error'>Phone is Empty</p>}
    </div>
    // isFetching

    return (
        <React.Fragment>
            <div className={classes.background_form}>
                {isFetching && <div className={classes.loading}>
                    < BounceLoader
                        color="#36d7b7"
                        size={100}
                    />
                </div>}
                <form method='POST' className={classes.form} onSubmit={submitHandler} >
                    <h1 className={classes.title}>{mode === 'login' ? 'login' : 'Sign up'}</h1>
                    <div className={classes.inputs}>
                        {error && <p className='error'>{error}</p>}
                        {inputFullnameRender}
                        <input type="text" name='email' className={classes.input} value={inputValueEmail} onChange={handlerChangeInputEmail} onBlur={handlerBlurInputEmail} placeholder='Email' />
                        {ErrorEmail && <p className='error'>Email must have the @ character</p>}
                        <input type="password" name='password' className={classes.input} value={inputValuePassword} onChange={handlerChangeInputPassword} onBlur={handlerBlurInputPassword} placeholder='Password' />
                        {ErrorPassword && <p className='error'>Password is Empty</p>}
                        {inputPhoneRender}
                    </div>
                    <button type='submit' className={classes.btnSubmit} >{mode === 'login' ? 'login' : 'Sign up'}</button>
                    <p className={classes.routerText}>{mode === 'login' ? (<span>Create an account? <Link to={'/login/?mode=signup'}>Sign up</Link></span>) : (<span>Login? <Link to={'/login/?mode=login'}>Click</Link></span>)}</p>
                    <p className={classes.routerText}><Link to={'/'}>Back home</Link></p>
                </form>
            </div>


        </React.Fragment>
    )
}

export default FormLogin
