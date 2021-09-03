import React from 'react'
import { Fragment } from 'react'
import Header from './../../component/Header/Header'
import Footer from './../../component/Footer/Footer'
import Titlebar from '../../component/ProductDetails/Titlebar/Titlebar'
import ListFavorite from '../../component/ListFavorite/ListFavorite'


export default function Favorite() {
    return (
        <Fragment>
            <Header/>
            <Titlebar name="Sản phẩm yêu thích"/>
            <ListFavorite/>
            <Footer/>
        </Fragment>
    )
}
