import React, { Fragment ,useContext} from "react";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";
import Product from "../../../component/Products/Product";
import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import silder from "../../../images/images/page-TrangChu-1.jpg";
import {GlobalState} from '../../../GlobalState';

export default function ProductFemale() {
  const state = useContext(GlobalState)
  const [product_girl] = state.productgirlApi.product_girl // lấy sp ra từ api GlobalState
  var arrayPrGirl = [];      // khởi tạo mảng lưu trữ
    arrayPrGirl.push(        // lấy dữ liệu trong data ra rồi push vô mảng được lưu trữ trong props
      product_girl.map(item => (   // sử dụng map đẻ lấy dữ liệu trong collection
          <Product  key={item._id}
          masp = {item.idCategory_product}
          image={item.image}
          TotalSize={5}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          typee="nu"
          type={item.nameCategoryProduct}
          prime={item.price}
        />
      ))
    );
  return (
    <Fragment>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct array={arrayPrGirl} name="HUNTER NỮ" />
      <GoogleMap/>
      <Footer />
    </Fragment>
  );
}
