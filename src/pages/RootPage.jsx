import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

const RootPage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <main className='container' >
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default RootPage
