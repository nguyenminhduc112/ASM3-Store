import React, { useEffect } from 'react'
import FormLogin from '../components/login/FormLogin'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LoginPage = () => {
    const isAuthentication = useSelector((state) => state.auth.isAuthentication)
    const router = useNavigate()
    useEffect(() => {
        if (isAuthentication) {
            router('/')
        }
    }, [isAuthentication, router])
    return (
        <React.Fragment>
            <FormLogin />
        </React.Fragment>
    )
}

export default LoginPage

