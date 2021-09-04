import React ,{Link}from "react";
import "./ListPageProductsProduct.css";
import Catalog from "../../Catalog/Catalog";
import Pagination from "../../Pagination/Pagination";
import SortBy from "./SortBy/SortBy";

export default function ListPageProductsProduct(props) {
  return (
    <section className="container-product">
      <div className="container">
        <div className="row">
          <div className="container-product_title">
            <h1>{props.name}</h1>
          </div>
          <ul className="menu_collection">
            <Link href="#">Hunter</Link>
            <Link href="#">Sandal</Link>
            <Link href="#">Giày Chạy Bộ</Link>
            <Link href="#">Giày Đá Banh</Link>
            <Link href="#">Giày Tây</Link>
            <Link href="#">Dép</Link>
          </ul>
          <div className="container-product-wrapper">
            <Catalog />
            <div className="container-product_list-products">
              <SortBy />
              <div className="container-product_list-products-wrapper">
                {props.array}
              </div>
              <Pagination />
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
}
