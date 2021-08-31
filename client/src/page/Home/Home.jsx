import React from "react";
import "./Home.css";
import LogoGosto from "../../images/images/GOSTO.png";
import BannerBeTrai from "../../images/images/BETrai.jpg";
import BannerBeGai from "../../images/images/BEGai.jpg";
import image from "../../images/Hunter-Nam/02_fb96605aaf6941a19ca8a037ad2c769a_medium.jpg";

import Header from "../../component/Header/Header";
import SliderHome from "../../component/Sliders/SliderHome/SliderHome";
import Footer from "../../component/Footer/Footer";
import Announcement from "../../component/Announcement/Announcement";
import Banner from "../../component/Banners/Banner";
import ListPageProductHome from "../../component/ListPageProducts/ListPageProductHome/ListPageProductHome";
import HomeBanner from "../../component/Banners/HomeBanner/HomeBanner";
import Product from "../../component/Products/Product";
import GoogleMaps from "../../component/GoogleMap/GoogleMaps";
//   Đổ dữ liệu dang foreach (éo thằng nào làm có tâm như tao)
var array = [];
for (let i = 0; i <= 16; i++) {
  array.push(
    <Product
      image={image}
      TotalSize={7}
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
//
export default function Home() {
  return (
    <>
      <Header
      // # link đường dẫn các trang (coder chuyên nghiệp có tâm nhất hệ mặt trời)
        hotline="#"
        address="#"
        contact="#"
        checkOrder="#"
        login="#"
        register="#"
        home="#"
        nam="#"
        nu="#"
        gosto="#"
        betrai="#"
        begai="#"
        phukien="#"
        cart="#"
        favorite="#"
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
      <HomeBanner banner={BannerBeTrai} />
      <ListPageProductHome
        name="BÉ TRAI"
        url="#"
        visible="none"
        datalist={array}
      />
      <HomeBanner banner={BannerBeGai} />
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
