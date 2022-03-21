import "./Home.css";
import React, { Fragment, useContext, useState } from "react";
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
import Loading from "./../../component/utils/loading/Loading";

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

  const [banner_main] = state.banner_mainApi.banner_main;

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
        TotalSize={Object.keys(item.size).length}
        valueSize_1={item.size.size1}
        valueSize_2={item.size.size2}
        valueSize_3={item.size.size3}
        valueSize_4={item.size.size4}
        valueSize_5={item.size.size5}
        name={item.nameProduct}
        type={item.nameCategoryProduct}
        prime={item.price.toLocaleString()}
        typee="nam"
        masp={item.idCategory_product}
        price={item.price}
        color={item.color}
      />
    ))
  );
  arrayPrGirl.push(
    product_girl.map((item) => (
      <Product
        key={item._id}
        image={item.image}
        TotalSize={Object.keys(item.size).length}
        valueSize_1={item.size.size1}
        valueSize_2={item.size.size2}
        valueSize_3={item.size.size3}
        valueSize_4={item.size.size4}
        valueSize_5={item.size.size5}
        name={item.nameProduct}
        type={item.nameCategoryProduct}
        prime={item.price.toLocaleString()}
        typee="nu"
        masp={item.idCategory_product}
        price={item.price}
        color={item.color}
      />
    ))
  );
  arrayPrPK.push(
    product_pk.map((item) => (
      <Product
        key={item._id}
        image={item.image}
        TotalSize={Object.keys(item.size).length}
        valueSize_1={item.size.size1}
        valueSize_2={item.size.size2}
        valueSize_3={item.size.size3}
        valueSize_4={item.size.size4}
        valueSize_5={item.size.size5}
        name={item.nameProduct}
        type={item.nameCategoryProduct}
        prime={item.price.toLocaleString()}
        typee="phu-kien"
        masp={item.idCategory_product}
        price={item.price}
        color={item.color}
      />
    ))
  );
  arrayPrGosto.push(
    product_gosto.map((item) => (
      <Product
        key={item._id}
        image={item.image}
        TotalSize={Object.keys(item.size).length}
        valueSize_1={item.size.size1}
        valueSize_2={item.size.size2}
        valueSize_3={item.size.size3}
        valueSize_4={item.size.size4}
        valueSize_5={item.size.size5}
        name={item.nameProduct}
        type={item.nameCategoryProduct}
        prime={item.price.toLocaleString()}
        typee="gosto"
        masp={item.idCategory_product}
        price={item.price}
        color={item.color}
      />
    ))
  );
  arrayPrBeTrai.push(
    product_betrai.map((item) => (
      <Product
        key={item._id}
        image={item.image}
        TotalSize={Object.keys(item.size).length}
        valueSize_1={item.size.size1}
        valueSize_2={item.size.size2}
        valueSize_3={item.size.size3}
        valueSize_4={item.size.size4}
        valueSize_5={item.size.size5}
        name={item.nameProduct}
        type={item.nameCategoryProduct}
        prime={item.price.toLocaleString()}
        typee="be-trai"
        masp={item.idCategory_product}
        price={item.price}
        color={item.color}
      />
    ))
  );
  arrayPrBeGai.push(
    product_begai.map((item) => (
      <Product
        key={item._id}
        image={item.image}
        TotalSize={Object.keys(item.size).length}
        valueSize_1={item.size.size1}
        valueSize_2={item.size.size2}
        valueSize_3={item.size.size3}
        valueSize_4={item.size.size4}
        valueSize_5={item.size.size5}
        name={item.nameProduct}
        type={item.nameCategoryProduct}
        prime={item.price.toLocaleString()}
        typee="be-gai"
        masp={item.idCategory_product}
        price={item.price}
        color={item.color}
      />
    ))
  );
  //}
  const [isLoading, setIsloading] = useState(false);
  setTimeout(() => {
    setIsloading(true);
  }, 1000);
  return (
    <Fragment>
      {!isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <Header />
          {banner_main.map((item) => (
            // load banner_main
            <SliderHome
              banner1={item.images.image1}
              banner2={item.images.image2}
              banner3={item.images.image3}
              banner4={item.images.image4}
            />
          ))}
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
      )}
    </Fragment>
  );
}
