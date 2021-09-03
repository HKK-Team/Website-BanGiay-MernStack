import  React, { useContext } from "react"; 
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";
import Product from "../../../component/Products/Product";
import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import silder from "../../../images/images/page-TrangChu-1.jpg";
import image from "../../../images/Hunter-Nam/dsmh04200trg__3__23b5f7d04eae4a458202de31bf4e094a_1024x1024.jpg";
import {GlobalState} from '../../../GlobalState'

export default function ProductFemale() {
  const state = useContext(GlobalState)
  const [product_girl] = state.productgirlApi.product_girl

  var arrayPrGirl = [];
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
  return (
    <>
      <Header />
      <SliderProduct slider={silder} />
      <Announcement />
      <ListPageProductsProduct array={arrayPrGirl} name="HUNTER NỮ" />
      <GoogleMap/>
      <Footer />
    </>
  );
}
