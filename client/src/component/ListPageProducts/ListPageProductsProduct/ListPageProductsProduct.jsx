/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import "./ListPageProductsProduct.css";
import Catalog from "../../Catalog/Catalog";
import Pagination from "../../Pagination/Pagination";
import SortBy from "./SortBy/SortBy";
import { GlobalState } from '../../../GlobalState'

export default function ListPageProductsProduct(props) {

  const state = useContext(GlobalState);

  const [detailCategoryboy, setdetailCategoryboy] = state.productboyApi.detailCategoryboy
  const [detailCategorygirl, setdetailCategorygirl] = state.productgirlApi.detailCategorygirl
  const [detailCategorypk, setdetailCategorypk] = state.productpkApi.detailCategorypk
  const [detailCategorygosto, setdetailCategorygosto] = state.productgostoApi.detailCategorygosto
  const [detailCategorybetrai, setdetailCategorybetrai] = state.productbetraiApi.detailCategorybetrai
  const [detailCategorybegai, setdetailCategorybegai] = state.productbegaiApi.detailCategorybegai

  function eventhunter(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=Hunter')
    setdetailCategorygirl('detailCategory=Hunter')
    setdetailCategorypk('detailCategory=Hunter')
    setdetailCategorygosto('detailCategory=Hunter')
    setdetailCategorybetrai('detailCategory=Hunter')
    setdetailCategorybegai('detailCategory=Hunter')
  }
  function eventsandal(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=sandal')
    setdetailCategorygirl('detailCategory=sandal')
    setdetailCategorypk('detailCategory=sandal')
    setdetailCategorygosto('detailCategory=sandal')
    setdetailCategorybetrai('detailCategory=sandal')
    setdetailCategorybegai('detailCategory=sandal')
  }
  function eventthethao(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=thethao')
    setdetailCategorygirl('detailCategory=thethao')
    setdetailCategorypk('detailCategory=thethao')
    setdetailCategorygosto('detailCategory=thethao')
    setdetailCategorybetrai('detailCategory=thethao')
    setdetailCategorybegai('detailCategory=thethao')
  }
  function eventchaybo(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=giaydibo')
    setdetailCategorygirl('detailCategory=giaydibo')
    setdetailCategorypk('detailCategory=giaydibo')
    setdetailCategorygosto('detailCategory=giaydibo')
    setdetailCategorybetrai('detailCategory=giaydibo')
    setdetailCategorybegai('detailCategory=giaydibo')
  }
  function eventdabanh(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=dabanh')
    setdetailCategorygirl('detailCategory=dabanh')
    setdetailCategorypk('detailCategory=dabanh')
    setdetailCategorygosto('detailCategory=dabanh')
    setdetailCategorybetrai('detailCategory=dabanh')
    setdetailCategorybegai('detailCategory=dabanh')
  }
  function eventgiaytay(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=giaytay')
    setdetailCategorygirl('detailCategory=giaytay')
    setdetailCategorypk('detailCategory=giaytay')
    setdetailCategorygosto('detailCategory=giaytay')
    setdetailCategorybetrai('detailCategory=giaytay')
    setdetailCategorybegai('detailCategory=giaytay')
  }
  function eventdep(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=dep')
    setdetailCategorygirl('detailCategory=dep')
    setdetailCategorypk('detailCategory=dep')
    setdetailCategorygosto('detailCategory=dep')
    setdetailCategorybetrai('detailCategory=dep')
    setdetailCategorybegai('detailCategory=dep')
  }
  return (
    <section className="container-product">
      <div className="container">
        <div className="row">
          <div className="container-product_title">
            <h1>{props.name}</h1>
          </div>
          <ul className="menu_collection">
            <a href onClick={eventhunter}>Hunter</a>
            <a href onClick={eventsandal}>Sandal</a>
            <a href onClick={eventthethao}>Giày Thể Thao</a>
            <a href onClick={eventchaybo}>Giày Chạy Bộ</a>
            <a href onClick={eventdabanh}>Giày Đá Banh</a>
            <a href onClick={eventgiaytay}>Giày Tây</a>
            <a href onClick={eventdep}>Dép</a>
          </ul>
          <div className="container-product-wrapper">
            <Catalog />
            <div className="container-product_list-products">
              <SortBy />
              <div className="container-product_list-products-wrapper">
                {props.array}
              </div>
              <Pagination
              />
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
}
