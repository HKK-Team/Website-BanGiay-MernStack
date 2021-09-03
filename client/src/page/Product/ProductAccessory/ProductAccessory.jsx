import  React, { useContext } from "react"; 
import silder from "../../../images/images/page-TrangChu-3.jpg";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";

import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import Product from "../../../component/Products/Product";
import {GlobalState} from '../../../GlobalState'

export default function ProductFemale() {
  const state = useContext(GlobalState)
  const [product_pk] = state.productpkApi.product_pk
  var arrayPrPK = [];
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
  return (
    <>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct array={arrayPrPK} name="PHỤ KIỆN" />
      <GoogleMap />
      <Footer />
    </>
  );
}
