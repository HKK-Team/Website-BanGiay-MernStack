import React,{useContext} from "react";
import "./ListSearch.css";
import Paginaton from "./../Pagination/Pagination";
import { GlobalState } from "../../GlobalState";
export default function ListSearch(props) {
  const state = useContext(GlobalState)
  const [search] = state.searchProductApi.search;
  const [products] = state.searchProductApi.products
  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <div className="search_title">
            <h1>Kết quả tìm kiếm cho "{search}"</h1>
          </div>
          <div id="product_list">{props.arraylist}</div>
          <Paginaton
          quantity = {products}/>
        </div>
      </div>
    </section>
  );
}
