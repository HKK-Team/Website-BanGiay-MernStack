/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext, NavLink } from "react";
import "./Pagination.css";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";

export default function Pagination({ quantity }) {
  const state = useContext(GlobalState);
  const [currentPageboy, setcurrentPageboy] =
    state.productboyApi.currentPageboy;
  const [currentPagegirl, setcurrentPagegirl] =
    state.productgirlApi.currentPagegirl;
  const [currentPagepk, setcurrentPagepk] = state.productpkApi.currentPagepk;
  const [currentPagegosto, setcurrentPagegosto] =
    state.productgostoApi.currentPagegosto;
  const [currentPagebetrai, setcurrentPagebetrai] =
    state.productbetraiApi.currentPagebetrai;
  const [currentPagebegai, setcurrentPagebegai] =
    state.productbegaiApi.currentPagebegai;
  const [currentPagesearch, setcurrentPagesearch] =
    state.searchProductApi.currentPagesearch;

  //Get post current
  const total = Math.ceil(quantity.length / 9);

  const pageNumber = [];

  for (let i = 1; i <= total; i++) {
    pageNumber.push(i);
  }

  var temp = window.location.href;
  const arr = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] === "/") break;
    arr.push(temp[i]);
  }
  var strtemp = arr.reverse().toString().replaceAll(",", "");

  function paginate(number) {
    if (strtemp === "nam") {
      setcurrentPageboy(number);
    } else if (strtemp === "nu") {
      setcurrentPagegirl(number);
    } else if (strtemp === "phu-kien") {
      setcurrentPagepk(number);
    } else if (strtemp === "gosto") {
      setcurrentPagegosto(number);
    } else if (strtemp === "be-trai") {
      setcurrentPagebetrai(number);
    } else if (strtemp === "be-gai") {
      setcurrentPagebegai(number);
    }
    setcurrentPagesearch(number);
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  }

  function eventpre(e) {
    e.preventDefault();
    if (strtemp === "nam") {
      setcurrentPageboy(currentPageboy - 1);
    } else if (strtemp === "nu") {
      setcurrentPagegirl(currentPagegirl - 1);
    } else if (strtemp === "phu-kien") {
      setcurrentPagepk(currentPagepk - 1);
    } else if (strtemp === "gosto") {
      setcurrentPagegosto(currentPagegosto - 1);
    } else if (strtemp === "be-trai") {
      setcurrentPagebetrai(currentPagebetrai - 1);
    } else if (strtemp === "be-gai") {
      setcurrentPagebegai(currentPagebegai - 1);
    }
    setcurrentPagesearch(currentPagesearch - 1);

    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  }

  function eventnext(e) {
    e.preventDefault();
    if (strtemp === "nam") {
      setcurrentPageboy(currentPageboy + 1);
    } else if (strtemp === "nu") {
      setcurrentPagegirl(currentPagegirl + 1);
    } else if (strtemp === "phu-kien") {
      setcurrentPagepk(currentPagepk + 1);
    } else if (strtemp === "gosto") {
      setcurrentPagegosto(currentPagegosto + 1);
    } else if (strtemp === "be-trai") {
      setcurrentPagebetrai(currentPagebetrai + 1);
    } else if (strtemp === "be-gai") {
      setcurrentPagebegai(currentPagebegai + 1);
    }
    setcurrentPagesearch(currentPagesearch + 1);

    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  }
  if (
    currentPageboy === 1 ||
    currentPagegirl === 1 ||
    currentPagepk === 1 ||
    currentPagegosto === 1 ||
    currentPagebetrai === 1 ||
    currentPagebegai === 1 ||
    currentPagesearch === 1
  ) {
    return (
      <div id="pagination">
        <button
          style={{ display: "none" }}
          className="prev "
          onClick={eventpre}
          disabled={currentPageboy <= 1}
        >
          Trước
        </button>
        {pageNumber.map((number) => (
          <Link to="/"
            onClick={() => paginate(number)}
            className="page_node"
            key={number}
          >
            {number}
          </Link>
        ))}
        <button
          className="next "
          onClick={eventnext}
          disabled={currentPageboy >= total}
        >
          Tiếp
        </button>
      </div>
    );
  } else if (
    currentPageboy >= total ||
    currentPagegirl >= total ||
    currentPagepk >= total ||
    currentPagegosto >= total ||
    currentPagebetrai >= total ||
    currentPagebegai >= total ||
    currentPagesearch >= total
  ) {
    return (
      <div id="pagination">
        <button
          className="prev "
          onClick={eventpre}
          disabled={currentPageboy <= 1}
        >
          Trước
        </button>
        {pageNumber.map((number) => (
          <Link to="/"
            onClick={() => paginate(number)}
            className="page_node"
            key={number}
          >
            {number}
          </Link>
        ))}
        <button
          style={{ display: "none" }}
          className="next "
          onClick={eventnext}
          disabled={currentPageboy >= total}
        >
          Tiếp
        </button>
      </div>
    );
  } else {
    return (
      <div id="pagination">
        <button
          className="prev "
          onClick={eventpre}
          disabled={currentPageboy <= 1}
        >
          Trước
        </button>
        {pageNumber.map((number) => (
          <Link to="/"
            onClick={() => paginate(number)}
            className="page_node"
            key={number}
          >
            {number}
          </Link>
        ))}
        <button
          className="next "
          onClick={eventnext}
          disabled={currentPageboy >= total}
        >
          Tiếp
        </button>
      </div>
    );
  }
}
