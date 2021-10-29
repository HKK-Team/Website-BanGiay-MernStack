/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import "./SortBy.css";
import { GlobalState } from "../../../../GlobalState";
import { Link } from "react-router-dom";

export default function SortBy() {
  const state = useContext(GlobalState);

  //information by color
  const [colorboy, setcolorboy] = state.productboyApi.colorboy;
  const [colorgirl, setcolorgirl] = state.productgirlApi.colorgirl;
  const [colorpk, setcolorpk] = state.productpkApi.colorpk;
  const [colorgosto, setcolorgosto] = state.productgostoApi.colorgosto;
  const [colorbetrai, setcolorbetrai] = state.productbetraiApi.colorbetrai;
  const [colorbegai, setcolorbegai] = state.productbegaiApi.colorbegai;

  //information by size product
  const [sizeminboy, setsizeminboy] = state.productboyApi.sizeminboy;
  const [sizemaxboy, setsizemaxboy] = state.productboyApi.sizemaxboy;

  const [sizemingirl, setsizemingirl] = state.productgirlApi.sizemingirl;
  const [sizemaxgirl, setsizemaxgirl] = state.productgirlApi.sizemaxgirl;

  const [sizeminpk, setsizeminpk] = state.productpkApi.sizeminpk;
  const [sizemaxpk, setsizemaxpk] = state.productpkApi.sizemaxpk;

  const [sizemingosto, setsizemingosto] = state.productgostoApi.sizemingosto;
  const [sizemaxgosto, setsizemaxgosto] = state.productgostoApi.sizemaxgosto;

  const [sizeminbetrai, setsizeminbetrai] = state.productbetraiApi.sizeminbetrai;
  const [sizemaxbetrai, setsizemaxbetrai] = state.productbetraiApi.sizemaxbetrai;

  const [sizeminbegai, setsizeminbegai] = state.productbegaiApi.sizeminbegai;
  const [sizemaxbegai, setsizemaxbegai] = state.productbegaiApi.sizemaxbegai;

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
    setcolorgirl(" ");
    setcolorpk(" ");
    setcolorgosto(" ");
    setcolorbetrai(" ");
    setcolorbegai(" ");
  }
  function eventchangesize(e) {
    e.preventDefault();
    setsizeminboy(" ");
    setsizemaxboy(" ");

    setsizemingirl(" ");
    setsizemaxgirl(" ");

    setsizeminpk(" ");
    setsizemaxpk(" ");

    setsizemingosto(" ");
    setsizemaxgosto(" ");

    setsizeminbetrai(" ");
    setsizemaxbetrai(" ");

    setsizeminbegai(" ");
    setsizemaxbegai(" ");
  }
  if (colorboy !== " " || sizeminboy !== " ") {
    return (
      <div className="sort_by">
        <div className="sort_by-wrapper">
          <label htmlFor="">LỌC THEO : </label>
          <Link to>
            {temp.reverse().toString().replaceAll(",", "")}
            <i className="fas fa-times" onClick={eventchangecolor}></i>
          </Link>
          <Link to>
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
