import React, { Fragment } from 'react'
import Header from './../../component/Header/Header'
import Footer from './../../component/Footer/Footer'
import Titlebar from '../../component/ProductDetails/Titlebar/Titlebar'
import Registers from '../../component/Register/Register'

export default function Register() {
    return (
        <Fragment>
            <Header/>
            <Titlebar name="Đăng ký"/>
            <Registers/>
            <Footer/>
        </Fragment>
    )
}
