import  React, { useEffect, useState, useContext } from "react"; 
import "./ListPageProductsProduct.css";
import Catalog from "../../Catalog/Catalog";
import {GlobalState} from '../../../GlobalState'


export default function ListPageProductsProduct(props) {
  const state = useContext(GlobalState)

  // const [detailCategory, setdetailCategory] = state.productsApi.detailCategory
  // const [nameCategoryProduct, setnameCategoryProduct] = state.productsApi.nameCategoryProduct

  
  return (
    <section className="container-product">
      <div className="container">
        <div className="row">
          <div className="container-product_title">
            <h1>{props.name}</h1>
          </div>
          <ul className="menu_collection">
            <a href="">Hunter</a>
            <a href="">Sandal</a>
            <a href="">Giày Thể Thao</a>
            <a href="">Giày Chạy Bộ</a>
            <a href="">Giày Đá Banh</a>
            <a href="">Giày Tây</a>
            <a href="">Dép</a>
          </ul>
          <div className="container-product-wrapper">
              <Catalog/>
            <div className="container-product_list-products">
              {props.array}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}