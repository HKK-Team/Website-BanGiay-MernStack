
import "./Home.css";
import  React, { useEffect, useState, useContext } from "react"; 
import LogoGosto from "../../images/images/GOSTO.png";
import image from "../../images/Hunter-Nam/02_fb96605aaf6941a19ca8a037ad2c769a_medium.jpg";

import Header from "../../component/Header/Header";
import SliderHome from "../../component/SliderHome/SliderHome";
import Footer from "../../component/Footer/Footer"; 
import Announcement from "../../component/Announcement/Announcement";
import Banner from "../../component/Banners/Banner";
import ListPageProductHome from "../../component/ListPageProducts/ListPageProductHome/ListPageProductHome";
import HomeBanner from "../../component/Banners/HomeBanner/HomeBanner";
import Product from "../../component/Products/Product";
import GoogleMaps from "../../component/GoogleMap/GoogleMaps";
import {GlobalState} from '../../GlobalState'
//   Đổ dữ liệu dang foreach (éo thằng nào làm có tâm như tao)
var array = [];
for (let i = 0; i <= 7; i++) {
  array.push(
    <Product
      image={image}
      TotalSize={5}
      valueSize_1={39}
      valueSize_2={39}
      valueSize_3={39}
      valueSize_4={39}
      valueSize_5={39}
      name="Giày Thể Thao Nam Biti’s Hunter X Z Collection InGreenZ DSMH06300REU"
      type="Hunter Nam"
      prime={699000}
    />
  );
}

export default function Home() {
  const state = useContext(GlobalState)
  const [bannerboys] = state. banner_boyAPI.bannerboys
  const [bannergirls] = state. banner_girlAPI.bannergirls
  
  return (
    <>
      <Header
      // # link đường dẫn các trang (coder chuyên nghiệp có tâm nhất hệ mặt trời)
        // hotline="#"
        // address="#"
        // contact="#" 
        // checkOrder="#"
        login="/dang-nhap"
        register="/dang-ki"
        home="/"
        cart="gio-hang"
        favorite="yeu-thich"
      />
      <SliderHome /> 
      <Announcement />
      <Banner />
      {/* name là tên của loại sản phẩm , url là đường dẫn trang ,datalist là mảng chứa dữ liệu, visible and color là thuộc tính css riêng biệt của từng page */}
      <ListPageProductHome name="NAM" url="#" visible="none" datalist={array} />
      <ListPageProductHome name="NỮ" url="#" visible="none" datalist={array} />
      <ListPageProductHome
        name="PHỤ KIỆN"
        url="#"
        visible="none"
        datalist={array}
      />
      <ListPageProductHome
        logo={LogoGosto}
        url="#"
        color="white"
        datalist={array}
      />
      {bannerboys.map(item => (   
        <HomeBanner  banner={item.images.image1} key={item._id}/>
          ))}
      <ListPageProductHome
        name="BÉ TRAI"
        url=""
        visible="none"
        datalist={array}
      />
      {bannergirls.map(item => (   
        <HomeBanner banner={item.images.image1} key={item._id}/>
          ))}
      <ListPageProductHome
        name="BÉ GÁI"
        url="#"
        visible="none"
        datalist={array}
      />
      <GoogleMaps />
      <Footer />
    </>
  );
}
