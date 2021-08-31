import React from "react";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";
import Product from "../../../component/Products/Product";
import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import silder from "../../../images/images/banner-BeTrai.jpg";
import image from "../../../images/Sandal-BeGai/dsg002600doo_ba163619fdde41b1b68fbf2190a96f27_1024x1024.png";

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
    <>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct array={array} name="BÉ GÁI" />
      <GoogleMap/>
      <Footer />
    </>
  );
}
