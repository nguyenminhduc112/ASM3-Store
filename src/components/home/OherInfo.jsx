import React from 'react'
import clasess from '../../assets/css/home/OtherInfo.module.css'
const OherInfo = () => {
    const subscibeHandler = (e) => {
        e.preventDefault()
        alert('Function awaiting development')
    }
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className={clasess.boxOrderInfo}>
                    <div className={clasess.otherInfo}>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <p className={clasess.info_title}>Free shipping</p>
                                <p className={clasess.info_subText}>Free shipping worlwide</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <p className={clasess.info_title}>24 X 7 Service</p>
                                <p className={clasess.info_subText}>Free shipping worlwide</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <p className={clasess.info_title}>Festival Offer</p>
                                <p className={clasess.info_subText}>Free shipping worlwide</p>
                            </div>
                        </div>
                    </div>
                    <div className={`wrapper ${clasess.formSub}`}>
                        <div className={clasess.lableFrom}>
                            <p className={clasess.info_title}>Lest's Be Friends!</p>
                            <p className={clasess.info_subText}>Nisi nisi tempor consequat laboris nisi.</p>
                        </div>
                        <form className={clasess.form}>
                            <input type="email" name='email' placeholder='Enter your email address' className='form-control' required />
                            <button type='submit' className={clasess.btn_subscribe} onClick={subscibeHandler}>Subscribe</button>
                        </form>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OherInfo
