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

  const [sizeminbetrai, setsizeminbetrai] =
    state.productbetraiApi.sizeminbetrai;
  const [sizemaxbetrai, setsizemaxbetrai] =
    state.productbetraiApi.sizemaxbetrai;

  const [sizeminbegai, setsizeminbegai] = state.productbegaiApi.sizeminbegai;
  const [sizemaxbegai, setsizemaxbegai] = state.productbegaiApi.sizemaxbegai;

  var temp = window.location.href;
  const arr = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] === "/") break;
    arr.push(temp[i]);
  }
  var strtemp = arr.reverse().toString().replaceAll(",", "");

  const tempcolorboy = [];
  for (let i = colorboy.length - 1; i >= 0; i--) {
    if (colorboy[i] === "=") break;
    tempcolorboy.push(colorboy[i]);
  }
  const tempcolorgirl = [];
  for (let i = colorgirl.length - 1; i >= 0; i--) {
    if (colorgirl[i] === "=") break;
    tempcolorgirl.push(colorgirl[i]);
  }
  const tempcolorpk = [];
  for (let i = colorpk.length - 1; i >= 0; i--) {
    if (colorpk[i] === "=") break;
    tempcolorpk.push(colorpk[i]);
  }
  const tempcolorgosto = [];
  for (let i = colorgosto.length - 1; i >= 0; i--) {
    if (colorgosto[i] === "=") break;
    tempcolorgosto.push(colorgosto[i]);
  }
  const tempcolorbetrai = [];
  for (let i = colorbetrai.length - 1; i >= 0; i--) {
    if (colorbetrai[i] === "=") break;
    tempcolorbetrai.push(colorbetrai[i]);
  }
  const tempcolorbegai = [];
  for (let i = colorbegai.length - 1; i >= 0; i--) {
    if (colorbegai[i] === "=") break;
    tempcolorbegai.push(colorbegai[i]);
  }

  const tempsizeboy = [];
  for (let i = sizeminboy.length - 1; i >= 0; i--) {
    if (sizeminboy[i] === "=") break;
    tempsizeboy.push(sizeminboy[i]);
  }
  const tempsizegirl = [];
  for (let i = sizemingirl.length - 1; i >= 0; i--) {
    if (sizemingirl[i] === "=") break;
    tempsizegirl.push(sizemingirl[i]);
  }
  const tempsizepk = [];
  for (let i = sizeminpk.length - 1; i >= 0; i--) {
    if (sizeminpk[i] === "=") break;
    tempsizepk.push(sizeminpk[i]);
  }
  const tempsizegosto = [];
  for (let i = sizemingosto.length - 1; i >= 0; i--) {
    if (sizemingosto[i] === "=") break;
    tempsizegosto.push(sizemingosto[i]);
  }
  const tempsizebetrai = [];
  for (let i = sizeminbetrai.length - 1; i >= 0; i--) {
    if (sizeminbetrai[i] === "=") break;
    tempsizebetrai.push(sizeminbetrai[i]);
  }
  const tempsizebegai = [];
  for (let i = sizeminbegai.length - 1; i >= 0; i--) {
    if (sizeminbegai[i] === "=") break;
    tempsizebegai.push(sizeminbegai[i]);
  }

  function eventchangecolor(e) {
    e.preventDefault();
    if (strtemp === "nam") {
      setcolorboy(" ");
    } else if (strtemp === "nu") {
      setcolorgirl(" ");
    } else if (strtemp === "phu-kien") {
      setcolorpk(" ");
    } else if (strtemp === "gosto") {
      setcolorgosto(" ");
    } else if (strtemp === "be-trai") {
      setcolorbetrai(" ");
    } else if (strtemp === "be-gai") {
      setcolorbegai(" ");
    }
  }
  function eventchangesize(e) {
    e.preventDefault();
    if (strtemp === "nam") {
      setsizeminboy(" ");
      setsizemaxboy(" ");
    } else if (strtemp === "nu") {
      setsizemingirl(" ");
      setsizemaxgirl(" ");
    } else if (strtemp === "phu-kien") {
      setsizeminpk(" ");
      setsizemaxpk(" ");
    } else if (strtemp === "gosto") {
      setsizemingosto(" ");
      setsizemaxgosto(" ");
    } else if (strtemp === "be-trai") {
      setsizeminbetrai(" ");
      setsizemaxbetrai(" ");
    } else if (strtemp === "be-gai") {
      setsizeminbegai(" ");
      setsizemaxbegai(" ");
    }
  }
  if (strtemp === "nam") {
    if (colorboy !== " " || sizeminboy !== " ") {
      return (
        <div className="sort_by">
          <div className="sort_by-wrapper">
            <label htmlFor="">LỌC THEO : </label>
            <Link to>
              {tempcolorboy.reverse().toString().replaceAll(",", "")}
              <i className="fas fa-times" onClick={eventchangecolor}></i>
            </Link>
            <Link to>
              {tempsizeboy.reverse().toString().replaceAll(",", "")}{" "}
              <i className="fas fa-times" onClick={eventchangesize}></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  } else if (strtemp === "nu") {
    if (colorgirl !== " " || sizemingirl !== " ") {
      return (
        <div className="sort_by">
          <div className="sort_by-wrapper">
            <label htmlFor="">LỌC THEO : </label>
            <Link to>
              {tempcolorgirl.reverse().toString().replaceAll(",", "")}
              <i className="fas fa-times" onClick={eventchangecolor}></i>
            </Link>
            <Link to>
              {tempsizegirl.reverse().toString().replaceAll(",", "")}{" "}
              <i className="fas fa-times" onClick={eventchangesize}></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  } else if (strtemp === "phu-kien") {
    if (colorpk !== " " || sizeminpk !== " ") {
      return (
        <div className="sort_by">
          <div className="sort_by-wrapper">
            <label htmlFor="">LỌC THEO : </label>
            <Link to>
              {tempcolorpk.reverse().toString().replaceAll(",", "")}
              <i className="fas fa-times" onClick={eventchangecolor}></i>
            </Link>
            <Link to>
              {tempsizepk.reverse().toString().replaceAll(",", "")}{" "}
              <i className="fas fa-times" onClick={eventchangesize}></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  } else if (strtemp === "gosto") {
    if (colorgosto !== " " || sizemingosto !== " ") {
      return (
        <div className="sort_by">
          <div className="sort_by-wrapper">
            <label htmlFor="">LỌC THEO : </label>
            <Link to>
              {tempcolorgosto.reverse().toString().replaceAll(",", "")}
              <i className="fas fa-times" onClick={eventchangecolor}></i>
            </Link>
            <Link to>
              {tempsizegosto.reverse().toString().replaceAll(",", "")}{" "}
              <i className="fas fa-times" onClick={eventchangesize}></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  } else if (strtemp === "be-trai") {
    if (colorbetrai !== " " || sizeminbetrai !== " ") {
      return (
        <div className="sort_by">
          <div className="sort_by-wrapper">
            <label htmlFor="">LỌC THEO : </label>
            <Link to>
              {tempcolorbetrai.reverse().toString().replaceAll(",", "")}
              <i className="fas fa-times" onClick={eventchangecolor}></i>
            </Link>
            <Link to>
              {tempsizebetrai.reverse().toString().replaceAll(",", "")}{" "}
              <i className="fas fa-times" onClick={eventchangesize}></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  } else if (strtemp === "be-gai") {
    if (colorbegai !== " " || sizeminbegai !== " ") {
      return (
        <div className="sort_by">
          <div className="sort_by-wrapper">
            <label htmlFor="">LỌC THEO : </label>
            <Link to>
              {tempcolorbegai.reverse().toString().replaceAll(",", "")}
              <i className="fas fa-times" onClick={eventchangecolor}></i>
            </Link>
            <Link to>
              {tempsizebegai.reverse().toString().replaceAll(",", "")}{" "}
              <i className="fas fa-times" onClick={eventchangesize}></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
