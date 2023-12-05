import React from 'react'
import classes from '../../assets/css/Footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <React.Fragment>
            <div className={classes.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className={classes.footer_title}>Customer Services</h4>
                            <ul className={classes.footer_listItem}>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Help & Contact Us</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Returns & Refunds</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Online Stores</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className={classes.footer_title}>Company</h4>
                            <ul className={classes.footer_listItem}>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>What We Do</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Available & Refunds</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Lastest Posts</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>FAQs</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className={classes.footer_title}>Social Media</h4>
                            <ul className={classes.footer_listItem}>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Twitter</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Instagram</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Facebook</Link>
                                </li>
                                <li className={classes.footer_item}>
                                    <Link to={'#'} className={classes.footer_link}>Pinterest</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
