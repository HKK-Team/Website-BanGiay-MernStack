
import "./Home.css";
import  React, { useContext } from "react"; 
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
import {GlobalState} from '../../GlobalState'
//   Đổ dữ liệu dang foreach (éo thằng nào làm có tâm như tao)

export default function Home() {
  const state = useContext(GlobalState)
  const [bannerboys] = state.bannerboyAPI.bannerboys
  const [bannergirls] = state.bannergirlAPI.bannergirls
  const [product_boy] = state.productboyApi.product_boy
  const [product_girl] = state.productgirlApi.product_girl
  const [product_pk] = state.productpkApi.product_pk
  const [product_gosto] = state.productgostoApi.product_gosto
  const [product_betrai] = state.productbetraiApi.product_betrai
  const [product_begai] = state.productbegaiApi.product_begai

  var arrayPrBoy = [];
  var arrayPrGirl = [];
  var arrayPrPK = [];
  var arrayPrGosto = [];
  var arrayPrBeTrai = [];
  var arrayPrBeGai = [];
  for (let i = 0; i <= 16; i++) {
    arrayPrBoy.push(
      product_boy.map(item => (   
          <Product  key={item._id}
          image={item.image}
          TotalSize={5}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
        />
      ))
    );
    arrayPrGirl.push(
      product_girl.map(item => (   
          <Product  key={item._id}
          image={item.image}
          TotalSize={5}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
        />
      ))
    );
    arrayPrPK.push(
      product_pk.map(item => (   
          <Product  key={item._id}
          image={item.image}
          TotalSize={1}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          type={item.nameCategoryProduct}
          prime={item.price}
        />
      ))
    );
    arrayPrGosto.push(
      product_gosto.map(item => (   
           <Product  key={item._id}
           image={item.image}
           TotalSize={5}
           valueSize_1={item.size.size1}
           valueSize_2={item.size.size2}
           valueSize_3={item.size.size3}
           valueSize_4={item.size.size4}
           valueSize_5={item.size.size5}
           name={item.nameProduct}
           type={item.nameCategoryProduct}
           prime={item.price}
         />
       ))
     );
     arrayPrBeTrai.push(
      product_betrai.map(item => (   
           <Product  key={item._id}
           image={item.image}
           TotalSize={5}
           valueSize_1={item.size.size1}
           valueSize_2={item.size.size2}
           valueSize_3={item.size.size3}
           valueSize_4={item.size.size4}
           valueSize_5={item.size.size5}
           name={item.nameProduct}
           type={item.nameCategoryProduct}
           prime={item.price}
         />
       ))
     );
     arrayPrBeGai.push(
      product_begai.map(item => (   
           <Product  key={item._id}
           image={item.image}
           TotalSize={5}
           valueSize_1={item.size.size1}
           valueSize_2={item.size.size2}
           valueSize_3={item.size.size3}
           valueSize_4={item.size.size4}
           valueSize_5={item.size.size5}
           name={item.nameProduct}
           type={item.nameCategoryProduct}
           prime={item.price}
         />
       ))
     );
  }

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
      <ListPageProductHome name="NAM" url="#" visible="none" datalist={arrayPrBoy} />
      <ListPageProductHome name="NỮ" url="#" visible="none" datalist={arrayPrGirl} />
      <ListPageProductHome
        name="PHỤ KIỆN"
        url="#"
        visible="none"
        datalist={arrayPrPK}
      />
      <ListPageProductHome
        logo={LogoGosto}
        url="#"
        color="white"
        datalist={arrayPrGosto}
      />
      {bannerboys.map(item => (   
        <HomeBanner  banner={item.images.image1} key={item._id}/>
          ))}
      <ListPageProductHome
        name="BÉ TRAI"
        url=""
        visible="none"
        datalist={arrayPrBeTrai}
      />
      {bannergirls.map(item => (   
        <HomeBanner banner={item.images.image1} key={item._id}/>
          ))}
      <ListPageProductHome
        name="BÉ GÁI"
        url="#"
        visible="none"
        datalist={arrayPrBeGai}
      />
      <GoogleMaps />
      <Footer />
    </>
  );
}
