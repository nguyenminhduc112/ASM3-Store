import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../../assets/css/NavBar.module.css'
import { getUser } from '../../services/userServies'
import { removeToken } from '../../utils/managerToken'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../../store/reducers/authReducer'

const NavBar = () => {
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
    const user = getUser(token)
    const logoutHandler = () => {
        removeToken()
        dispatch(authAction.ON_LOGOUT())
    }
    return (
        <React.Fragment>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid ">
                        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={'/'} className={({ isActive }) => isActive ? `nav-link ${classes.active}` : 'nav-link'} end >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/shop'} className={({ isActive }) => isActive ? `nav-link ${classes.active}` : 'nav-link'} end>Shop</NavLink>
                                </li>
                            </ul>
                            <NavLink to={'/'} className="navbar-brand">BOUTIQUE</NavLink>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={`/cart`} style={{ display: 'flex', alignItems: 'center' }} className={({ isActive }) => isActive ? `nav-link ${classes.active}` : 'nav-link'} end> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart-check-fill" style={{ marginRight: 5 }} viewBox="0 0 16 16">
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg> Cart</NavLink>
                                </li>
                                {!token && <li className="nav-item">
                                    <NavLink to={`/login`} style={{ display: 'flex', alignItems: 'center' }} className={({ isActive }) => isActive ? `nav-link ${classes.active}` : 'nav-link'} end>  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} style={{ marginRight: 5 }} fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                        Login</NavLink>
                                </li>}
                                {token && <li className="nav-item">
                                    <NavLink to={`/history`} style={{ display: 'flex', alignItems: 'center' }} className={({ isActive }) => isActive ? `nav-link ${classes.active}` : 'nav-link'} end>   <img width={16} height={16} style={{ marginRight: 5 }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABL0lEQVR4nO2WsWoCQRRFTykEtEn8AxvRSqu4foCWsvmBgB+S6KeljVpaa2WnJrUTBp4wWXZ2d5yHGOKFB66+2ePc+3ZYuCGNgS1gIsveYxQC3ipAz7UJARvluoO9ylr1THUlmlYnAWuH94z5q8OVVBw29eEaVhy2/zdcH8AU6AINoHatjKNkIjJuAnNgCXxLLYCZ/BYELqq1WGr1AhwLeo9AqgE+AQMHeqq4JtXKuFmy02wdgCeNjOcloB3Qy/z59xir29K/KoF2pK/vfL+IAdel37V5IIBdBtqRa3fQLgY/5IB7DsgHNZLzxW+ZLelfeqz1QY3P6pG8lpaBX6V/lpNr37E8b+0bCgp9nPbAI0pKAw6QiRbUhduhKdqpOvQseyLZw+ET+JKyn22mv+z9AeIQ0KFLODbsAAAAAElFTkSuQmCC" />
                                        History</NavLink>
                                </li>}
                                {token && <li className="nav-item">
                                    <p style={{ display: 'flex', alignItems: 'center' }} className='nav-link'>  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} style={{ marginRight: 5 }} fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg> {user.fullname}
                                    </p>
                                </li>}
                                {token && <li className="nav-item">
                                    <p className='nav-link' style={{ display: 'flex', alignItems: 'center', marginBottomL: 0, cursor: 'pointer' }} onClick={logoutHandler} > ( Logout )</p>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default NavBar
