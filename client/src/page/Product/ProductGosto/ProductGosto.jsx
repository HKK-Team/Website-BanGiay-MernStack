import React, { Fragment } from "react";
import silder from "../../../images/images/page-TrangChu-2.jpg";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";
import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import Product from "../../../component/Products/Product";
import image from "../../../images/Gosto/gfw012200den_2ef14c9d9f9646be88a4ee50bad11fbc_1024x1024.png";

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
export default function ProductMale() {
  return (
    <Fragment>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct array={array} name="GOSTO" />
      <GoogleMap/>
      <Footer />
    </Fragment>
  );
}
