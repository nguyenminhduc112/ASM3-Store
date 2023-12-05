import React from 'react'
import classes from '../../assets/css/NavHeader.module.css'
import { Link, useLocation } from 'react-router-dom';
const NavHeader = ({ title, breadcrumbs }) => {
    const location = useLocation();
    const pathName = location.pathname;
    const renderBreadcrumbs = breadcrumbs.length > 0 && breadcrumbs.map((bread, index) => {
        let string = ' / '
        let active = false
        if (index === 0) {
            string = ''
        }
        if (('/' + bread.name) === pathName) {
            active = true
        }
        return <span key={index}>{string}<Link to={bread.path} className={`${classes.link} ${active && classes.active}`}>{bread.name}</Link></span>
    })
    return (
        <React.Fragment>
            <div className={classes.navHeader}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.breadcrumbs}>
                    {renderBreadcrumbs}
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavHeader
