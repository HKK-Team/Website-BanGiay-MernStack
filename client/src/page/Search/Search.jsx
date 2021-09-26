/* eslint-disable no-unused-vars */
import React, { Fragment, useContext} from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Titlebar from "../../component/ProductDetails/Titlebar/Titlebar";
import ListSearch from "../../component/ListSearch/ListSearch";
import GoogleMap from "./../../component/GoogleMap/GoogleMaps";
import Product from "../../component/Products/Product";
import { GlobalState } from "../../GlobalState";

export default function Search() {
  const state = useContext(GlobalState);
  const [products] = state.searchProductApi.products

    //Get current pages and post current
    const [currentPagesearch, setcurrentPagesearch] = state.searchProductApi.currentPagesearch
    const [postsPerPagesearch] = state.searchProductApi.postsPerPagesearch
    // Get current posts
    const indexofLastPost = currentPagesearch * postsPerPagesearch;
    const indexofFirstPost = indexofLastPost - postsPerPagesearch;
     const currentPost = products.slice(indexofFirstPost, indexofLastPost)

  var allproduct = []; // khởi tạo mảng lưu trữ
  // push all product
  allproduct.push(
    // lấy dữ liệu trong data ra rồi push vô mảng
    currentPost.map(
      (
        item // sử dụng map đẻ lấy dữ liệu trong collection
      ) => (
        <Product
          width="293px"
          height="486px"
          key={item._id}
          masp={item.idCategory_product}
          image={item.image}
          TotalSize={Object.keys(item.size).length}
          valueSize_1={item.size.size1}
          valueSize_2={item.size.size2}
          valueSize_3={item.size.size3}
          valueSize_4={item.size.size4}
          valueSize_5={item.size.size5}
          name={item.nameProduct}
          typee="nam"
          type={item.nameCategoryProduct}
          prime={item.price.toLocaleString()}
          price = {item.price}
          color = {item.color}
        />
      )
    )
  );
  return (
    <Fragment>
      <Header />
      <Titlebar name="Tìm kiếm" />
      <ListSearch arraylist={allproduct} />
      <GoogleMap />
      <Footer />
    </Fragment>
  );
}
