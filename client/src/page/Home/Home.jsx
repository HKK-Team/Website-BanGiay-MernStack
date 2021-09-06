import "./Home.css";
import React, { Fragment, useContext } from "react";
import LogoGosto from "../../images/images/GOSTO.png";
import Header from "../../component/Header/Header";
import SliderHome from "../../component/Sliders/SliderHome/SliderHome";
import Footer from "../../component/Footer/Footer";
import Announcement from "../../component/Announcement/Announcement";
import Banner from "../../component/Banners/Banner";
import ListPageProductHome from "../../component/ListPageProducts/ListPageProductHome/ListPageProductHome";
import HomeBanner from "../../component/Banners/HomeBanner/HomeBanner";
import Product from "../../component/Products/Product";
import GoogleMaps from "../../component/GoogleMap/GoogleMaps";
import { GlobalState } from "../../GlobalState";


export default function Home() {
  const state = useContext(GlobalState);
  const [bannerboys] = state.bannerboyAPI.bannerboys;
  const [bannergirls] = state.bannergirlAPI.bannergirls;
  const [product_boy] = state.productboyApi.product_boy;
  const [product_girl] = state.productgirlApi.product_girl;
  const [product_pk] = state.productpkApi.product_pk;
  const [product_gosto] = state.productgostoApi.product_gosto;
  const [product_betrai] = state.productbetraiApi.product_betrai;
  const [product_begai] = state.productbegaiApi.product_begai;

  var arrayPrBoy = [];
  var arrayPrGirl = [];
  var arrayPrPK = [];
  var arrayPrGosto = [];
  var arrayPrBeTrai = [];
  var arrayPrBeGai = [];
  // for (let i = 0; i <= 16; i++) {
    arrayPrBoy.push(
      product_boy.map((item) => (
        <Product
          key={item._id}
          image={item.image}
          TotalSize={item.size.length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
          typee="nam"
          masp={item.idCategory_product}
        />
      ))
    );
    arrayPrGirl.push(
      product_girl.map((item) => (
        <Product
          key={item._id}
          image={item.image}
          TotalSize={item.size.length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
          typee="nu"
          masp={item.idCategory_product}
        />
      ))
    );
    arrayPrPK.push(
      product_pk.map((item) => (
        <Product
          key={item._id}
          image={item.image}
          TotalSize={item.size.length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
          typee="phu-kien"
          masp={item.idCategory_product}
        />
      ))
    );
    arrayPrGosto.push(
      product_gosto.map((item) => (
        <Product
          key={item._id}
          image={item.image}
          TotalSize={item.size.length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
          typee="gosto"
          masp={item.idCategory_product}
        />
      ))
    );
    arrayPrBeTrai.push(
      product_betrai.map((item) => (
        <Product
          key={item._id}
          image={item.image}
          TotalSize={item.size.length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
          typee="be-trai"
          masp={item.idCategory_product}
        />
      ))
    );
    arrayPrBeGai.push(
      product_begai.map((item) => (
        <Product
          key={item._id}
          image={item.image}
          TotalSize={item.size.length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
          typee="be-gai"
          masp={item.idCategory_product}
        />
      ))
    );
  //}

  return (
    <Fragment>
      <Header
        // # link đường dẫn các trang (coder chuyên nghiệp có tâm nhất hệ mặt trời)
      />
      <SliderHome />
      <Announcement />
      <Banner />
      {/* name là tên của loại sản phẩm , url là đường dẫn trang ,datalist là mảng chứa dữ liệu, visible and color là thuộc tính css riêng biệt của từng page */}
      <ListPageProductHome
        name="NAM"
        url="nam"
        visible="none"
        datalist={arrayPrBoy}
      />
      <ListPageProductHome
        name="NỮ"
        url="nu"
        visible="none"
        datalist={arrayPrGirl}
      />
      <ListPageProductHome
        name="PHỤ KIỆN"
        url="phu-kien"
        visible="none"
        datalist={arrayPrPK}
      />
      <ListPageProductHome
        logo={LogoGosto}
        url="gosto"
        color="white"
        datalist={arrayPrGosto}
      />
      {bannerboys.map((item) => (
        <HomeBanner banner={item.images.image1} key={item._id} />
      ))}
      <ListPageProductHome
        name="BÉ TRAI"
        url="be-trai"
        visible="none"
        datalist={arrayPrBeTrai}
      />
      {bannergirls.map((item) => (
        <HomeBanner banner={item.images.image1} key={item._id} />
      ))}
      <ListPageProductHome
        name="BÉ GÁI"
        url="be-gai"
        visible="none"
        datalist={arrayPrBeGai}
      />
      <GoogleMaps />
      <Footer />
    </Fragment>
  );
}
