import  React, { useContext } from "react"; 
import silder from "../../../images/images/page-TrangChu-3.jpg";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/Footer/Footer";
import SliderProduct from "../../../component/Sliders/SliderProduct/SliderProduct";
import Announcement from "../../../component/Announcement/Announcement";
import ListPageProductsProduct from "../../../component/ListPageProducts/ListPageProductsProduct/ListPageProductsProduct";
import GoogleMap from "../../../component/GoogleMap/GoogleMaps";
import Product from "../../../component/Products/Product";
import {GlobalState} from '../../../GlobalState';


export default function ProductMale() {
  const state = useContext(GlobalState)
  const [product_boy] = state.productboyApi.product_boy // lấy sp ra từ api GlobalState
  var arrayPrBoy = [];      // khởi tạo mảng lưu trữ
    arrayPrBoy.push(        // lấy dữ liệu trong data ra rồi push vô mảng
      product_boy.map(item => (   // sử dụng map đẻ lấy dữ liệu trong collection
          <Product  
          key={item._id}
          masp = {item.idCategory_product}
          image={item.image}
          TotalSize={item.size.length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          typee = "nam"
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
      <ListPageProductsProduct array={arrayPrBoy} name="HUNTER NAM" />
      <GoogleMap/>
      <Footer />
    </>
  );
}
