/* eslint-disable no-unused-vars */
import React, { Fragment, useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";
import Product from "../../../component/Products/Product";
import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import silder from "../../../images/images/banner-BeTrai.jpg";

export default function ProductFemale() {
  const state = useContext(GlobalState);
  const [product_begai] = state.productbegaiApi.product_begai;

    //Get current pages and post current
    const [currentPagebegai, setcurrentPagebegai] = state.productbegaiApi.currentPagebegai
    const [postsPerPagebegai] = state.productbegaiApi.postsPerPagebegai
  
    // Get current posts
    const indexofLastPost = currentPagebegai * postsPerPagebegai;
    const indexofFirstPost = indexofLastPost - postsPerPagebegai;
     const currentPost = product_begai.slice(indexofFirstPost, indexofLastPost)

  var arrayPrBeGai = [];
  arrayPrBeGai.push(
    // lấy dữ liệu trong data ra rồi push vô mảng
    currentPost.map(
      (
        item // sử dụng map đẻ lấy dữ liệu trong collection
      ) => (
        <Product
          key={item._id}
          masp={item.idCategory_product}
          image={item.image}
          TotalSize={Object.keys(item.size).length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          typee="be-gai"
          type={item.nameCategoryProduct}
          prime={item.price.toLocaleString()}
          price={item.price}
        />
      )
    )
  );
  return (
    <Fragment>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct arrayall={product_begai} array={arrayPrBeGai} name="BÉ GÁI" />
      <GoogleMap />
      <Footer />
    </Fragment>
  );
}
