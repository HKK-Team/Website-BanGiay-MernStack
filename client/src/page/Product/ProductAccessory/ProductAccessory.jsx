/* eslint-disable no-unused-vars */
import React, { Fragment , useContext } from "react";
import {GlobalState} from '../../../GlobalState';
import silder from "../../../images/images/page-TrangChu-3.jpg";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";

import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import Product from "../../../component/Products/Product";

export default function ProductFemale() {
  const state = useContext(GlobalState)
  const [product_pk] = state.productpkApi.product_pk
    //Get current pages and post current
    const [currentPagepk, setcurrentPagepk] = state.productpkApi.currentPagepk
    const [postsPerPagepk] = state.productpkApi.postsPerPagepk
  
    // Get current posts
    const indexofLastPost = currentPagepk * postsPerPagepk;
    const indexofFirstPost = indexofLastPost - postsPerPagepk;
     const currentPost = product_pk.slice(indexofFirstPost, indexofLastPost)

  var arrayPrPK = [];
    arrayPrPK.push(        // lấy dữ liệu trong data ra rồi push vô mảng
      currentPost.map(item => (   // sử dụng map đẻ lấy dữ liệu trong collection
          <Product  key={item._id}
          masp = {item.idCategory_product}
          image={item.image}
          TotalSize={Object.keys(item.size).length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          typee="phu-kien"
          type={item.nameCategoryProduct}
          prime={item.price.toLocaleString()}
          price={item.price}
        />
      ))
    );
  return (
    <Fragment>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct arrayall={product_pk} array={arrayPrPK} name="PHỤ KIỆN" />
      <GoogleMap />
      <Footer />
    </Fragment>
  );
}
