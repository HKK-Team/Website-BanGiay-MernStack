import React, { Fragment } from 'react'
import Header from './../../component/Header/Header'
import Footer from './../../component/Footer/Footer'
import Titlebar from '../../component/ProductDetails/Titlebar/Titlebar'
import ListCart from '../../component/ListCart/ListCart'
export default function Cart() {
    return (
        <Fragment>
            <Header/>
            <Titlebar name="Giỏ hàng của bạn"/>
            <ListCart/>
            <Footer/>
        </Fragment>
    )
}
