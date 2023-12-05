import React from 'react'
import classes from '../../assets/css/home/Banner.module.css'
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <React.Fragment>
            <div className={classes.banner}>
                <div className={classes.banner_infor}>
                    <p className={classes.banner_text_sub}>New Inspiration 2023</p>
                    <h1 className={classes.banner_text_main}>20% Off On New Sesson</h1>
                    <Link to={'/shop'} className={classes.banner_btn}>Browse Collections</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner
