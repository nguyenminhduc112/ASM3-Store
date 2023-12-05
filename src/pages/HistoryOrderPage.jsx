import React, { useEffect } from 'react'
import NavHeader from '../components/layout/NavHeader'
import HistoryTable from '../components/history/HistoryTable'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HistoryOrderPage = () => {
    const isAuthentication = useSelector(state => state.auth.isAuthentication)
    const router = useNavigate()
    useEffect(() => {
        if (!isAuthentication) {
            router('/')
        }
    }, [isAuthentication])
    return (
        <React.Fragment>
            <NavHeader title='History' breadcrumbs={[
                { name: 'history', path: '/history' }
            ]} />
            <HistoryTable />
        </React.Fragment>
    )
}



export default HistoryOrderPage
