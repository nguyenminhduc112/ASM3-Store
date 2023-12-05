import React from 'react'
import classes from '../../assets/css/shop/Sidebar.module.css'
import { NavLink, useSearchParams } from 'react-router-dom'
const Sidebar = () => {
    const paramCategory = useSearchParams()[0].get('category') || 'all'
    return (
        <React.Fragment>
            <h3 className={classes.title}>Caterogries</h3>
            <div className={classes.labelBlack}>
                Apple
            </div>
            <NavLink to={'/shop'} className={({ isActive }) => isActive && paramCategory === 'all' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>All</NavLink>
            <div className={classes.label}>
                Iphone & Mac
            </div>
            <NavLink to={'/shop/?category=iphone'} className={({ isActive }) => isActive && paramCategory === 'iphone' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>Iphone</NavLink>
            <NavLink to={'/shop/?category=ipad'} className={({ isActive }) => isActive && paramCategory === 'ipad' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>Ipad</NavLink>
            <NavLink to={'/shop/?category=macbook'} className={({ isActive }) => isActive && paramCategory === 'macbook' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>Macbook</NavLink>
            <div className={classes.label}>
                Wireless
            </div>
            <NavLink to={'/shop/?category=airpod'} className={({ isActive }) => isActive && paramCategory === 'airpod' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>Airpod</NavLink>
            <NavLink to={'/shop/?category=watch'} className={({ isActive }) => isActive && paramCategory === 'watch' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>Watch</NavLink>
            <div className={classes.label}>
                Other
            </div>
            <NavLink to={'/shop/?category=mouse'} className={({ isActive }) => isActive && paramCategory === 'mouse' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>Mouse</NavLink>
            <NavLink to={'/shop/?category=keyboard'} className={({ isActive }) => isActive && paramCategory === 'keyboard' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>Keyboard</NavLink>
            <NavLink to={'/shop/?category=other'} className={({ isActive }) => isActive && paramCategory === 'other' ? `${classes.link} ${classes.active}` : `${classes.link}`} end>Other</NavLink>
        </React.Fragment>
    )
}

export default Sidebar
