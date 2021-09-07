/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext ,NavLink } from "react";
import "./Pagination.css";
import { GlobalState } from "../../GlobalState";

export default function Pagination() {
  const state = useContext(GlobalState);
  const [product_boy] = state.productboyApi.product_boy;
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
  //Get post current
  const [postsPerPageboy] = state.productboyApi.postsPerPageboy;

  const total = Math.ceil(product_boy.length / postsPerPageboy);

  const pageNumber = [];

  for (let i = 1; i <= total; i++) {
    pageNumber.push(i);
  }

  function paginate(number) {
    setcurrentPageboy(number);
    setcurrentPagegirl(number);
    setcurrentPagepk(number);
    setcurrentPagegosto(number);
    setcurrentPagebetrai(number);
    setcurrentPagebegai(number);
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }

  function eventpre(e) {
    e.preventDefault();
    setcurrentPageboy(currentPageboy - 1);
    setcurrentPagegirl(currentPagegirl - 1);
    setcurrentPagepk(currentPagepk - 1);
    setcurrentPagegosto(currentPagegosto - 1);
    setcurrentPagebetrai(currentPagebetrai - 1);
    setcurrentPagebegai(currentPagebegai - 1);

    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }

  function eventnext(e) {
    e.preventDefault();
    setcurrentPageboy(currentPageboy + 1);
    setcurrentPagegirl(currentPagegirl + 1);
    setcurrentPagepk(currentPagepk + 1);
    setcurrentPagegosto(currentPagegosto + 1);
    setcurrentPagebetrai(currentPagebetrai + 1);
    setcurrentPagebegai(currentPagebegai + 1);
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }
  if (
    currentPageboy === 1 ||
    currentPagegirl === 1 ||
    currentPagepk === 1 ||
    currentPagegosto === 1 ||
    currentPagebetrai === 1 ||
    currentPagebegai === 1
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
          <a
            onClick={() => paginate(number)}
            href
            className="page_node"
            key={number}
          >
            {number}
          </a>
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
    currentPagebegai >= total
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
          <a
            onClick={() => paginate(number)}
            href
            className="page_node"
            key={number}
          >
            {number}
          </a>
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
          <a
            onClick={() => paginate(number)}
            href
            className="page_node"
            key={number}
          >
            {number}
          </a>
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
