import React, { Fragment , useContext} from "react";
import GoogleMap from "../../component/GoogleMap/GoogleMaps";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import ProductDetail from "../../component/ProductDetails/ProductDetail";
import { GlobalState } from "../../GlobalState";
import { useParams} from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productDetailApi.productDetail
  const detail = products.filter((item) => {
    // tìm và trả về đối tượng chứa thuộc tính của giày
    return item.idCategory_product === params.id;

  });
  return (
    <Fragment>
      <Header />
      {detail.map((item) => (
        <ProductDetail
          name={item.nameProduct}
          ProductCode={item.idCategory_product}
          price={item.price.toLocaleString()}
          color={item.color}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          image={item.image}
          imageValue1={item.detailImages.images1}
          imageValue2={item.detailImages.images2}
          imageValue3={item.detailImages.images3}
          imageValue4={item.detailImages.images4}
          imageValue5={item.detailImages.images5}
        />
      ))}
      <GoogleMap />
      <Footer />
    </Fragment>
  );
}
