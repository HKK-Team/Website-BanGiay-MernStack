import React from "react";
import "./ListSearch.css";
import Paginaton from "./../Pagination/Pagination";
export default function ListSearch(props) {
  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <div className="search_title">
            <h1>Kết quả tìm kiếm cho "Trắng"</h1>
          </div>
          <div id="product_list">{props.arraylist}</div>
          <Paginaton />
        </div>
      </div>
    </section>
  );
}
