/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import "./ListPageProductsProduct.css";
import Catalog from "../../Catalog/Catalog";
import Pagination from "../../Pagination/Pagination";
import SortBy from "./SortBy/SortBy";
import { GlobalState } from '../../../GlobalState'
import { Link } from "react-router-dom";


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
    setdetailCategoryboy('detailCategory=hunter')
    setdetailCategorygirl('detailCategory=hunter')
    setdetailCategorypk('detailCategory=hunter')
    setdetailCategorygosto('detailCategory=hunter')
    setdetailCategorybetrai('detailCategory=hunter')
    setdetailCategorybegai('detailCategory=hunter')
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
    setdetailCategoryboy('detailCategory=giaythethao')
    setdetailCategorygirl('detailCategory=giaythethao')
    setdetailCategorypk('detailCategory=giaythethao')
    setdetailCategorygosto('detailCategory=giaythethao')
    setdetailCategorybetrai('detailCategory=giaythethao')
    setdetailCategorybegai('detailCategory=giaythethao')
  }
  function eventchaybo(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=giaychaybo')
    setdetailCategorygirl('detailCategory=giaychaybo')
    setdetailCategorypk('detailCategory=giaychaybo')
    setdetailCategorygosto('detailCategory=giaychaybo')
    setdetailCategorybetrai('detailCategory=giaychaybo')
    setdetailCategorybegai('detailCategory=giaychaybo')
  }
  function eventdabanh(e) {
    e.preventDefault();
    setdetailCategoryboy('detailCategory=giaydabanh')
    setdetailCategorygirl('detailCategory=giaydabanh')
    setdetailCategorypk('detailCategory=giaydabanh')
    setdetailCategorygosto('detailCategory=giaydabanh')
    setdetailCategorybetrai('detailCategory=giaydabanh')
    setdetailCategorybegai('detailCategory=giaydabanh')
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
  //open catalogLeft
  const open =()=>{
    document.getElementById("catalogleft").style.transform="translate3d(-234.2px,0px,0px)"
  }
  //auto close catalogLeft
  // useEffect(() => {
  //   var lock = setInterval(function () {
  //     if (document.getElementById("root").clientWidth > 1024) {
  //       document.getElementById("catalogleft").style.transform =
  //         "translate3d(0px,0px,0px)";
  //     }
  //   });
  //   return () => clearInterval(lock);
  // },[]);
  return (
    <section className="container-product">
      <div className="container">
        <div className="row">
          <div className="container-product_title">
            <h1>{props.name}</h1>
          </div>
          <ul className="menu_collection">
            <Link to="/" onClick={eventhunter}>Hunter</Link>
            <Link to="/" onClick={eventsandal}>Sandal</Link>
            <Link to="/" onClick={eventthethao}>Giày Thể Thao</Link>
            <Link to="/" onClick={eventchaybo}>Giày Chạy Bộ</Link>
            <Link to="/" onClick={eventdabanh}>Giày Đá Banh</Link>
            <Link to="/" onClick={eventgiaytay}>Giày Tây</Link>
            <Link to="/" onClick={eventdep}>Dép</Link>
          </ul>
          <div className="container-product-wrapper">
            <Catalog />
            <div className="container-product_list-products">
              <SortBy />
              <div className="dis_inline">
                <Link >
                  <i className="fa fa-filter" onClick={open}></i>
                </Link>
              </div>
              <div className="container-product_list-products-wrapper">
                {props.array}
              </div>
              <Pagination
              quantity={props.arrayall}
              />
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
}
