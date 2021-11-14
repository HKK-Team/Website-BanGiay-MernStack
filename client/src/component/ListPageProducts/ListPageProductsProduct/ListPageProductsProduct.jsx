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

  var temp = window.location.href;
  const arr = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] === "/") break;
    arr.push(temp[i]);
  }
  var strtemp = arr.reverse().toString().replaceAll(",", "");

  //lọc theo loại sản phẩm
  const eventCategorys = (e) =>{
    if (strtemp === "nam") {
      setdetailCategoryboy(`detailCategory=${e}`)
    } else if (strtemp === "nu") {
      setdetailCategorygirl(`detailCategory=${e}`)
    } else if (strtemp === "phu-kien") {
      setdetailCategorypk(`detailCategory=${e}`)
    } else if (strtemp === "gosto") {
      setdetailCategorygosto(`detailCategory=${e}`)
    } else if (strtemp === "be-trai") {
      setdetailCategorybetrai(`detailCategory=${e}`)
    } else if (strtemp === "be-gai") {
      setdetailCategorybegai(`detailCategory=${e}`)
    }
  };
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
            <Link to onClick={(e) => eventCategorys(e.target.title)} title="hunter">Hunter</Link>
            <Link to onClick={(e) => eventCategorys(e.target.title)} title="sandal">Sandal</Link>
            <Link to onClick={(e) => eventCategorys(e.target.title)} title="giaythethao">Giày Thể Thao</Link>
            <Link to onClick={(e) => eventCategorys(e.target.title)} title="giaychaybo">Giày Chạy Bộ</Link>
            <Link to onClick={(e) => eventCategorys(e.target.title)} title="giaydabanh">Giày Đá Banh</Link>
            <Link to onClick={(e) => eventCategorys(e.target.title)} title="giaytay">Giày Tây</Link>
            <Link to onClick={(e) => eventCategorys(e.target.title)} title="dep">Dép</Link>
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
