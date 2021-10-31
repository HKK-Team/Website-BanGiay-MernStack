/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import "./SortBy.css";
import { GlobalState } from "../../../../GlobalState";
import { Link } from "react-router-dom";

export default function SortBy() {
  const state = useContext(GlobalState);
  //information by color
  const [colorboy, setcolorboy] = state.productboyApi.colorboy;
  //information by size product
  const [sizeminboy, setsizeminboy] = state.productboyApi.sizeminboy;
  const [sizemaxboy, setsizemaxboy] = state.productboyApi.sizemaxboy;

  //đỉnh cao việt nam là đây
  const temp = [];
  for (let i = colorboy.length - 1; i >= 0; i--) {
    if (colorboy[i] === "=") break;
    temp.push(colorboy[i]);
  }
  //thêm đây nữa
  const tempsize = [];
  for (let i = sizeminboy.length - 1; i >= 0; i--) {
    if (sizeminboy[i] === "=") break;
    tempsize.push(sizeminboy[i]);
  }
  function eventchangecolor(e) {
    e.preventDefault();
    setcolorboy(" ");
  }
  function eventchangesize(e) {
    e.preventDefault();
    setsizeminboy(" ");
    setsizemaxboy(" ");
  }
  if (colorboy !== " " || sizeminboy !== " ") {
    return (
      <div className="sort_by">
        <div className="sort_by-wrapper">
          <label htmlFor="">LỌC THEO : </label>
          <Link to="/">
            {temp.reverse().toString().replaceAll(",", "")}
            <i className="fas fa-times" onClick={eventchangecolor}></i>
          </Link>
          <Link to="/">
            {tempsize.reverse().toString().replaceAll(",", "")}{" "}
            <i className="fas fa-times" onClick={eventchangesize}></i>
          </Link>
        </div>
      </div>
    );
  }else{
    return<></>
  }
}
