import React, { Fragment } from "react";
import silder from "../../../images/images/page-TrangChu-3.jpg";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";

import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import Product from "../../../component/Products/Product";
import image from "../../../images/Phu-Kien/dsc_0040_02acac8a2c304768ab352120657b5a64_1024x1024.jpg";

var array = [];
for (let i = 0; i <= 15; i++) {
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
export default function ProductFemale() {
  return (
    <Fragment>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct array={array} name="PHỤ KIỆN" />
      <GoogleMap />
      <Footer />
    </Fragment>
  );
}
