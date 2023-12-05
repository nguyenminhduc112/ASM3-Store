import React from 'react'
import classes from '../../assets/css/home/BrowseCategories.module.css'
import { Link } from 'react-router-dom'
import ImgProduct1 from '../../assets/images/product_1.png'
import ImgProduct2 from '../../assets/images/product_2.png'
import ImgProduct3 from '../../assets/images/product_3.png'
import ImgProduct4 from '../../assets/images/product_4.png'
import ImgProduct5 from '../../assets/images/product_5.png'
const BrowseCategories = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className={classes.browseCategory}>
                    <p className={classes.subTitle}>Carefully Created Collections</p>
                    <h2 className={classes.mainTitle}>Browse our categories</h2>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <Link to={'/shop/?category=iphone'} className={classes.link}><img src={ImgProduct1} className='img-fluid' alt="category_iphone" /></Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={`/shop/?category=macbook`} className={classes.link}><img src={ImgProduct2} className="img-fluid" alt="category_mac" /></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Link to={`/shop/?category=ipad`} className={classes.link}> <img src={ImgProduct3} className='img-fluid' alt="category_iPad" /></Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/shop/?category=watch`} className={classes.link}><img src={ImgProduct4} className='img-fluid' alt="category_watch" /></Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/shop/?category=airpod`} className={classes.link}><img src={ImgProduct5} className='img-fluid' alt="category_airPods" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BrowseCategories
