import  React, { useContext } from "react"; 
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";
import Product from "../../../component/Products/Product";
import GoogleMap from "../../../component/GoogleMap/GoogleMaps";

import silder from "../../../images/images/banner-BeTrai.jpg";
import image from "../../../images/Sandal-BeTrai/drb030001trg_5a1b146fb96a4926962bf7eb177bff3a_1024x1024.png";
import {GlobalState} from '../../../GlobalState'

export default function ProductFemale() {
  const state = useContext(GlobalState)
  const [product_betrai] = state.productbetraiApi.product_betrai
  var arrayPrBeTrai = [];
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
  return (
    <>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct array={arrayPrBeTrai} name="BÉ TRAI" />
      <GoogleMap/>
      <Footer />
    </>
  );
}
