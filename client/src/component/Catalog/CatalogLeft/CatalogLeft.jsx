/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import "./CatalogLeft.css";
import { GlobalState } from "../../../GlobalState";

export default function CatalogLeft() {
  const state = useContext(GlobalState);
  //sorting
  const [sortnam, setSortnam] = state.productboyApi.sort;
  const [sortnu, setSortnu] = state.productgirlApi.sort;
  const [sortpk, setSortpk] = state.productpkApi.sort;
  const [sortgosto, setSortgosto] = state.productgostoApi.sort;
  const [sortbetrai, setSorttrai] = state.productbetraiApi.sort;
  const [sortbegai, setSortgai] = state.productbegaiApi.sort;

  //filtering by color
  const [colorboy, setcolorboy] = state.productboyApi.colorboy;
  const [colorgirl, setcolorgirl] = state.productgirlApi.colorgirl;
  const [colorpk, setcolorpk] = state.productpkApi.colorpk;
  const [colorgosto, setcolorgosto] = state.productgostoApi.colorgosto;
  const [colorbetrai, setcolorbetrai] = state.productbetraiApi.colorbetrai;
  const [colorbegai, setcolorbegai] = state.productbegaiApi.colorbegai;

  //filtering by size product
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

  //get max price product
  const [priceProduct_max, setpriceProduct_max] =
    state.priceProduct_max.priceProduct_max;

  //set min and max price for many product
  const [maxPice, setmaxPice] = state.productboyApi.maxPice;
  const [minPrice, setminPrice] = state.productboyApi.minPrice;

  const [minPricegirl, setminPricegirl] = state.productgirlApi.minPricegirl;
  const [maxPicegirl, setmaxPicegirl] = state.productgirlApi.maxPicegirl;

  const [maxPicepk, setmaxPicepk] = state.productpkApi.maxPicepk;
  const [minPricepk, setminPricepk] = state.productpkApi.minPricepk;

  const [maxPicegosto, setmaxPicegosto] = state.productgostoApi.maxPicegosto;
  const [minPricegosto, setminPricegosto] = state.productgostoApi.minPricegosto;

  const [maxPicebegai, setmaxPicebegai] = state.productbegaiApi.maxPicebegai;
  const [minPricebegai, setminPricebegai] = state.productbegaiApi.minPricebegai;

  const [minPricebetrai, setminPricebetrai] =
    state.productbetraiApi.minPricebetrai;
  const [maxPicebetrai, setmaxPicebetrai] =
    state.productbetraiApi.maxPicebetrai;

  //add event cho m???i m??u khi click
  function eventBlack(e) {
    e.preventDefault();
    setcolorboy("color=??en");
    setcolorgirl("color=??en");
    setcolorpk("color=??en");
    setcolorgosto("color=??en");
    setcolorbetrai("color=??en");
    setcolorbegai("color=??en");
  }
  function eventWhile(e) {
    e.preventDefault();
    setcolorboy("color=Tr???ng");
    setcolorgirl("color=Tr???ng");
    setcolorpk("color=Tr???ng");
    setcolorgosto("color=Tr???ng");
    setcolorbetrai("color=Tr???ng");
    setcolorbegai("color=Tr???ng");
  }
  function eventcam(e) {
    e.preventDefault();
    setcolorboy("color=Cam");
    setcolorgirl("color=Cam");
    setcolorpk("color=Cam");
    setcolorgosto("color=Cam");
    setcolorbetrai("color=Cam");
    setcolorbegai("color=Cam");
  }
  function eventdocam(e) {
    e.preventDefault();
    setcolorboy("color=????? Cam");
    setcolorgirl("color=????? Cam");
    setcolorpk("color=????? Cam");
    setcolorgosto("color=????? Cam");
    setcolorbetrai("color=????? Cam");
    setcolorbegai("color=????? Cam");
  }
  function eventdo(e) {
    e.preventDefault();
    setcolorboy("color=?????");
    setcolorgirl("color=?????");
    setcolorpk("color=?????");
    setcolorgosto("color=?????");
    setcolorbetrai("color=?????");
    setcolorbegai("color=?????");
  }
  function eventkemdam(e) {
    e.preventDefault();
    setcolorboy("color=Kem ?????m");
    setcolorgirl("color=Kem ?????m");
    setcolorpk("color=Kem ?????m");
    setcolorgosto("color=Kem ?????m");
    setcolorbetrai("color=Kem ?????m");
    setcolorbegai("color=Kem ?????m");
  }
  function eventnau(e) {
    e.preventDefault();
    setcolorboy("color=N??u");
    setcolorgirl("color=N??u");
    setcolorpk("color=N??u");
    setcolorgosto("color=N??u");
    setcolorbetrai("color=N??u");
    setcolorbegai("color=N??u");
  }
  function eventreu(e) {
    e.preventDefault();
    setcolorboy("color=R??u");
    setcolorgirl("color=R??u");
    setcolorpk("color=R??u");
    setcolorgosto("color=R??u");
    setcolorbetrai("color=R??u");
    setcolorbegai("color=R??u");
  }
  function eventvang(e) {
    e.preventDefault();
    setcolorboy("color=V??ng");
    setcolorgirl("color=V??ng");
    setcolorpk("color=V??ng");
    setcolorgosto("color=V??ng");
    setcolorbetrai("color=V??ng");
    setcolorbegai("color=V??ng");
  }
  function eventxam(e) {
    e.preventDefault();
    setcolorboy("color=X??m");
    setcolorgirl("color=X??m");
    setcolorpk("color=X??m");
    setcolorgosto("color=X??m");
    setcolorbetrai("color=X??m");
    setcolorbegai("color=X??m");
  }
  function eventxanhduongdam(e) {
    e.preventDefault();
    setcolorboy("color=Xanh D????ng ?????m");
    setcolorgirl("color=Xanh D????ng ?????m");
    setcolorpk("color=Xanh D????ng ?????m");
    setcolorgosto("color=Xanh D????ng ?????m");
    setcolorbetrai("color=Xanh D????ng ?????m");
    setcolorbegai("color=Xanh D????ng ?????m");
  }
  function eventxanhduong(e) {
    e.preventDefault();
    setcolorboy("color=Xanh D????ng");
    setcolorgirl("color=Xanh D????ng");
    setcolorpk("color=Xanh D????ng");
    setcolorgosto("color=Xanh D????ng");
    setcolorbetrai("color=Xanh D????ng");
    setcolorbegai("color=Xanh D????ng");
  }
  function eventxanhduongnhat(e) {
    e.preventDefault();
    setcolorboy("color=Xanh D????ng Nh???t");
    setcolorgirl("color=Xanh D????ng Nh???t");
    setcolorpk("color=Xanh D????ng Nh???t");
    setcolorgosto("color=Xanh D????ng Nh???t");
    setcolorbetrai("color=Xanh D????ng Nh???t");
    setcolorbegai("color=Xanh D????ng Nh???t");
  }
  function eventxanhmino(e) {
    e.preventDefault();
    setcolorboy("color=Xanh Mi N??");
    setcolorgirl("color=Xanh Mi N??");
    setcolorpk("color=Xanh Mi N??");
    setcolorgosto("color=Xanh Mi N??");
    setcolorbetrai("color=Xanh Mi N??");
    setcolorbegai("color=Xanh Mi N??");
  }
  function eventxanh(e) {
    e.preventDefault();
    setcolorboy("color=Xanh");
    setcolorgirl("color=Xanh");
    setcolorpk("color=Xanh");
    setcolorgosto("color=Xanh");
    setcolorbetrai("color=Xanh");
    setcolorbegai("color=Xanh");
  }
  function eventxanhnhot(e) {
    e.preventDefault();
    setcolorboy("color=Xanh Nh???t");
    setcolorgirl("color=Xanh Nh???t");
    setcolorpk("color=Xanh Nh???t");
    setcolorgosto("color=Xanh Nh???t");
    setcolorbetrai("color=Xanh Nh???t");
    setcolorbegai("color=Xanh Nh???t");
  }
  function eventhong(e) {
    e.preventDefault();
    setcolorboy("color=H???ng");
    setcolorgirl("color=H???ng");
    setcolorpk("color=H???ng");
    setcolorgosto("color=H???ng");
    setcolorbetrai("color=H???ng");
    setcolorbegai("color=H???ng");
  }
  //filtering by size event
  function eventsize24(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=24");
    setsizemaxboy("size.size5[gte]=24");

    setsizemingirl("size.size1[lte]=24");
    setsizemaxgirl("size.size5[gte]=24");

    setsizeminpk("size.size1[lte]=24");
    setsizemaxpk("size.size5[gte]=24");

    setsizemingosto("size.size1[lte]=24");
    setsizemaxgosto("size.size5[gte]=24");

    setsizeminbetrai("size.size1[lte]=24");
    setsizemaxbetrai("size.size5[gte]=24");

    setsizeminbegai("size.size1[lte]=24");
    setsizemaxbegai("size.size5[gte]=24");
  }
  function eventsize25(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=25");
    setsizemaxboy("size.size5[gte]=25");

    setsizemingirl("size.size1[lte]=25");
    setsizemaxgirl("size.size5[gte]=25");

    setsizeminpk("size.size1[lte]=25");
    setsizemaxpk("size.size5[gte]=25");

    setsizemingosto("size.size1[lte]=25");
    setsizemaxgosto("size.size5[gte]=25");

    setsizeminbetrai("size.size1[lte]=25");
    setsizemaxbetrai("size.size5[gte]=25");

    setsizeminbegai("size.size1[lte]=25");
    setsizemaxbegai("size.size5[gte]=25");
  }
  function eventsize26(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=26");
    setsizemaxboy("size.size5[gte]=26");

    setsizemingirl("size.size1[lte]=26");
    setsizemaxgirl("size.size5[gte]=26");

    setsizeminpk("size.size1[lte]=26");
    setsizemaxpk("size.size5[gte]=26");

    setsizemingosto("size.size1[lte]=26");
    setsizemaxgosto("size.size5[gte]=26");

    setsizeminbetrai("size.size1[lte]=26");
    setsizemaxbetrai("size.size5[gte]=26");

    setsizeminbegai("size.size1[lte]=26");
    setsizemaxbegai("size.size5[gte]=26");
  }
  function eventsize27(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=27");
    setsizemaxboy("size.size5[gte]=27");

    setsizemingirl("size.size1[lte]=27");
    setsizemaxgirl("size.size5[gte]=27");

    setsizeminpk("size.size1[lte]=27");
    setsizemaxpk("size.size5[gte]=27");

    setsizemingosto("size.size1[lte]=27");
    setsizemaxgosto("size.size5[gte]=27");

    setsizeminbetrai("size.size1[lte]=27");
    setsizemaxbetrai("size.size5[gte]=27");

    setsizeminbegai("size.size1[lte]=27");
    setsizemaxbegai("size.size5[gte]=27");
  }
  function eventsize28(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=28");
    setsizemaxboy("size.size5[gte]=28");

    setsizemingirl("size.size1[lte]=28");
    setsizemaxgirl("size.size5[gte]=28");

    setsizeminpk("size.size1[lte]=28");
    setsizemaxpk("size.size5[gte]=28");

    setsizemingosto("size.size1[lte]=28");
    setsizemaxgosto("size.size5[gte]=28");

    setsizeminbetrai("size.size1[lte]=28");
    setsizemaxbetrai("size.size5[gte]=28");

    setsizeminbegai("size.size1[lte]=28");
    setsizemaxbegai("size.size5[gte]=28");
  }
  function eventsize29(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=29");
    setsizemaxboy("size.size5[gte]=29");

    setsizemingirl("size.size1[lte]=29");
    setsizemaxgirl("size.size5[gte]=29");

    setsizeminpk("size.size1[lte]=29");
    setsizemaxpk("size.size5[gte]=29");

    setsizemingosto("size.size1[lte]=29");
    setsizemaxgosto("size.size5[gte]=29");

    setsizeminbetrai("size.size1[lte]=29");
    setsizemaxbetrai("size.size5[gte]=29");

    setsizeminbegai("size.size1[lte]=29");
    setsizemaxbegai("size.size5[gte]=29");
  }
  function eventsize30(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=30");
    setsizemaxboy("size.size5[gte]=30");

    setsizemingirl("size.size1[lte]=30");
    setsizemaxgirl("size.size5[gte]=30");

    setsizeminpk("size.size1[lte]=30");
    setsizemaxpk("size.size5[gte]=30");

    setsizemingosto("size.size1[lte]=30");
    setsizemaxgosto("size.size5[gte]=30");

    setsizeminbetrai("size.size1[lte]=30");
    setsizemaxbetrai("size.size5[gte]=30");

    setsizeminbegai("size.size1[lte]=30");
    setsizemaxbegai("size.size5[gte]=30");
  }
  function eventsize31(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=31");
    setsizemaxboy("size.size5[gte]=31");

    setsizemingirl("size.size1[lte]=31");
    setsizemaxgirl("size.size5[gte]=31");

    setsizeminpk("size.size1[lte]=31");
    setsizemaxpk("size.size5[gte]=31");

    setsizemingosto("size.size1[lte]=31");
    setsizemaxgosto("size.size5[gte]=31");

    setsizeminbetrai("size.size1[lte]=31");
    setsizemaxbetrai("size.size5[gte]=31");

    setsizeminbegai("size.size1[lte]=31");
    setsizemaxbegai("size.size5[gte]=31");
  }
  function eventsize32(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=32");
    setsizemaxboy("size.size5[gte]=32");

    setsizemingirl("size.size1[lte]=32");
    setsizemaxgirl("size.size5[gte]=32");

    setsizeminpk("size.size1[lte]=32");
    setsizemaxpk("size.size5[gte]=32");

    setsizemingosto("size.size1[lte]=32");
    setsizemaxgosto("size.size5[gte]=32");

    setsizeminbetrai("size.size1[lte]=32");
    setsizemaxbetrai("size.size5[gte]=32");

    setsizeminbegai("size.size1[lte]=32");
    setsizemaxbegai("size.size5[gte]=32");
  }
  function eventsize33(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=33");
    setsizemaxboy("size.size5[gte]=33");

    setsizemingirl("size.size1[lte]=33");
    setsizemaxgirl("size.size5[gte]=33");

    setsizeminpk("size.size1[lte]=33");
    setsizemaxpk("size.size5[gte]=33");

    setsizemingosto("size.size1[lte]=33");
    setsizemaxgosto("size.size5[gte]=33");

    setsizeminbetrai("size.size1[lte]=33");
    setsizemaxbetrai("size.size5[gte]=33");

    setsizeminbegai("size.size1[lte]=33");
    setsizemaxbegai("size.size5[gte]=33");
  }
  function eventsize34(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=34");
    setsizemaxboy("size.size5[gte]=34");

    setsizemingirl("size.size1[lte]=34");
    setsizemaxgirl("size.size5[gte]=34");

    setsizeminpk("size.size1[lte]=34");
    setsizemaxpk("size.size5[gte]=34");

    setsizemingosto("size.size1[lte]=34");
    setsizemaxgosto("size.size5[gte]=34");

    setsizeminbetrai("size.size1[lte]=34");
    setsizemaxbetrai("size.size5[gte]=34");

    setsizeminbegai("size.size1[lte]=34");
    setsizemaxbegai("size.size5[gte]=34");
  }
  function eventsize35(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=35");
    setsizemaxboy("size.size5[gte]=35");

    setsizemingirl("size.size1[lte]=35");
    setsizemaxgirl("size.size5[gte]=35");

    setsizeminpk("size.size1[lte]=35");
    setsizemaxpk("size.size5[gte]=35");

    setsizemingosto("size.size1[lte]=35");
    setsizemaxgosto("size.size5[gte]=35");

    setsizeminbetrai("size.size1[lte]=35");
    setsizemaxbetrai("size.size5[gte]=35");

    setsizeminbegai("size.size1[lte]=35");
    setsizemaxbegai("size.size5[gte]=35");
  }
  function eventsize36(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=36");
    setsizemaxboy("size.size5[gte]=36");

    setsizemingirl("size.size1[lte]=36");
    setsizemaxgirl("size.size5[gte]=36");

    setsizeminpk("size.size1[lte]=36");
    setsizemaxpk("size.size5[gte]=36");

    setsizemingosto("size.size1[lte]=36");
    setsizemaxgosto("size.size5[gte]=36");

    setsizeminbetrai("size.size1[lte]=36");
    setsizemaxbetrai("size.size5[gte]=36");

    setsizeminbegai("size.size1[lte]=36");
    setsizemaxbegai("size.size5[gte]=36");
  }
  function eventsize37(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=37");
    setsizemaxboy("size.size5[gte]=37");

    setsizemingirl("size.size1[lte]=37");
    setsizemaxgirl("size.size5[gte]=37");

    setsizeminpk("size.size1[lte]=37");
    setsizemaxpk("size.size5[gte]=37");

    setsizemingosto("size.size1[lte]=37");
    setsizemaxgosto("size.size5[gte]=37");

    setsizeminbetrai("size.size1[lte]=37");
    setsizemaxbetrai("size.size5[gte]=37");

    setsizeminbegai("size.size1[lte]=37");
    setsizemaxbegai("size.size5[gte]=37");
  }
  function eventsize38(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=38");
    setsizemaxboy("size.size5[gte]=38");

    setsizemingirl("size.size1[lte]=38");
    setsizemaxgirl("size.size5[gte]=38");

    setsizeminpk("size.size1[lte]=38");
    setsizemaxpk("size.size5[gte]=38");

    setsizemingosto("size.size1[lte]=38");
    setsizemaxgosto("size.size5[gte]=38");

    setsizeminbetrai("size.size1[lte]=38");
    setsizemaxbetrai("size.size5[gte]=38");

    setsizeminbegai("size.size1[lte]=38");
    setsizemaxbegai("size.size5[gte]=38");
  }
  function eventsize39(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=39");
    setsizemaxboy("size.size5[gte]=39");

    setsizemingirl("size.size1[lte]=39");
    setsizemaxgirl("size.size5[gte]=39");

    setsizeminpk("size.size1[lte]=39");
    setsizemaxpk("size.size5[gte]=39");

    setsizemingosto("size.size1[lte]=39");
    setsizemaxgosto("size.size5[gte]=39");

    setsizeminbetrai("size.size1[lte]=39");
    setsizemaxbetrai("size.size5[gte]=39");

    setsizeminbegai("size.size1[lte]=39");
    setsizemaxbegai("size.size5[gte]=39");
  }
  function eventsize40(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=40");
    setsizemaxboy("size.size5[gte]=40");

    setsizemingirl("size.size1[lte]=40");
    setsizemaxgirl("size.size5[gte]=40");

    setsizeminpk("size.size1[lte]=40");
    setsizemaxpk("size.size5[gte]=40");

    setsizemingosto("size.size1[lte]=40");
    setsizemaxgosto("size.size5[gte]=40");

    setsizeminbetrai("size.size1[lte]=40");
    setsizemaxbetrai("size.size5[gte]=40");

    setsizeminbegai("size.size1[lte]=40");
    setsizemaxbegai("size.size5[gte]=40");
  }
  function eventsize41(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=41");
    setsizemaxboy("size.size5[gte]=41");

    setsizemingirl("size.size1[lte]=41");
    setsizemaxgirl("size.size5[gte]=41");

    setsizeminpk("size.size1[lte]=41");
    setsizemaxpk("size.size5[gte]=41");

    setsizemingosto("size.size1[lte]=41");
    setsizemaxgosto("size.size5[gte]=41");

    setsizeminbetrai("size.size1[lte]=41");
    setsizemaxbetrai("size.size5[gte]=41");

    setsizeminbegai("size.size1[lte]=41");
    setsizemaxbegai("size.size5[gte]=41");
  }
  function eventsize42(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=42");
    setsizemaxboy("size.size5[gte]=42");

    setsizemingirl("size.size1[lte]=42");
    setsizemaxgirl("size.size5[gte]=42");

    setsizeminpk("size.size1[lte]=42");
    setsizemaxpk("size.size5[gte]=42");

    setsizemingosto("size.size1[lte]=42");
    setsizemaxgosto("size.size5[gte]=42");

    setsizeminbetrai("size.size1[lte]=42");
    setsizemaxbetrai("size.size5[gte]=42");

    setsizeminbegai("size.size1[lte]=42");
    setsizemaxbegai("size.size5[gte]=42");
  }
  function eventsize43(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=43");
    setsizemaxboy("size.size5[gte]=43");

    setsizemingirl("size.size1[lte]=43");
    setsizemaxgirl("size.size5[gte]=43");

    setsizeminpk("size.size1[lte]=43");
    setsizemaxpk("size.size5[gte]=43");

    setsizemingosto("size.size1[lte]=43");
    setsizemaxgosto("size.size5[gte]=43");

    setsizeminbetrai("size.size1[lte]=43");
    setsizemaxbetrai("size.size5[gte]=43");

    setsizeminbegai("size.size1[lte]=43");
    setsizemaxbegai("size.size5[gte]=43");
  }
  function eventsize44(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=44");
    setsizemaxboy("size.size5[gte]=44");

    setsizemingirl("size.size1[lte]=44");
    setsizemaxgirl("size.size5[gte]=44");

    setsizeminpk("size.size1[lte]=44");
    setsizemaxpk("size.size5[gte]=44");

    setsizemingosto("size.size1[lte]=44");
    setsizemaxgosto("size.size5[gte]=44");

    setsizeminbetrai("size.size1[lte]=44");
    setsizemaxbetrai("size.size5[gte]=44");

    setsizeminbegai("size.size1[lte]=44");
    setsizemaxbegai("size.size5[gte]=44");
  }
  function eventsize45(e) {
    e.preventDefault();
    setsizeminboy("size.size1[lte]=45");
    setsizemaxboy("size.size5[gte]=45");

    setsizemingirl("size.size1[lte]=45");
    setsizemaxgirl("size.size5[gte]=45");

    setsizeminpk("size.size1[lte]=45");
    setsizemaxpk("size.size5[gte]=45");

    setsizemingosto("size.size1[lte]=45");
    setsizemaxgosto("size.size5[gte]=45");

    setsizeminbetrai("size.size1[lte]=45");
    setsizemaxbetrai("size.size5[gte]=45");

    setsizeminbegai("size.size1[lte]=45");
    setsizemaxbegai("size.size5[gte]=45");
  }
  // thanh s???p x???p ti???n
  const [valueMoney, setValueMoney] = React.useState([0, 1699000]);
  const rangeSelector = (event, newValue) => {
    setValueMoney(newValue);
    setminPrice("price[gte]=" + newValue[0]);
    setmaxPice("price[lte]=" + newValue[1]);

    setminPricegirl("price[gte]=" + newValue[0]);
    setmaxPicegirl("price[lte]=" + newValue[1]);

    setminPricepk("price[gte]=" + newValue[0]);
    setmaxPicepk("price[lte]=" + newValue[1]);

    setminPricegosto("price[gte]=" + newValue[0]);
    setmaxPicegosto("price[lte]=" + newValue[1]);

    setminPricebegai("price[gte]=" + newValue[0]);
    setmaxPicebegai("price[lte]=" + newValue[1]);

    setminPricebetrai("price[gte]=" + newValue[0]);
    setmaxPicebetrai("price[lte]=" + newValue[1]);
  };
  // close catalogLeft
  const close =()=>{
        document.getElementById("catalogleft").style.transform = "translate3d(0px,0px,0px)"
  }
  return (
    <aside id="catalogleft">
      <aside className="sidebar_collection_left">
        <div className="close">
          <i className="fas fa-times" onClick={close}></i>
        </div>
        <div className="block_content">
          <select
            name="Sort"
            id="sort-by"
            value={(sortnam, sortnu, sortpk, sortgosto, sortbetrai, sortbegai)}
            onChange={(e) => {
              setSortnam(e.target.value);
              setSortnu(e.target.value);
              setSortpk(e.target.value);
              setSortgosto(e.target.value);
              setSorttrai(e.target.value);
              setSortgai(e.target.value);
            }}
          >
            <option value="">S???p x???p: </option>
            <option value="sort=price">Gi??: T??ng d???n</option>
            <option value="sort=-price">Gi??: Gi???m d???n</option>
            <option value="sort=nameProduct">T??n : A - Z</option>
            <option value="sort=-nameProduct">T??n : Z - A</option>
            <option value="sort=dateCreate">C?? Nh???t</option>
            <option value="sort=-dateCreate">M???i Nh???t</option>
          </select>

          <div className="sidebar_collection-catalog">
            <span className="sidebar_collection-catalog-subtitle">Gi??</span>
            <label htmlFor="range-money">Gi?? t???:</label>
            <span id="amount-text">
              {" "}
              {valueMoney[0]} VND - {valueMoney[1]} VND
            </span>
            <Slider
              id="range-money"
              value={valueMoney}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
              max={priceProduct_max.price}
            />
          </div>

          <div className="sidebar_collection-catalog">
            <span className="sidebar_collection-catalog-subtitle">Size:</span>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize24}>24</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize25}>25</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize26}>26</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize27}>27</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize28}>28</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize29}>29</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize30}>30</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize31}>31</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize32}>32</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize33}>33</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize34}>34</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize35}>35</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize36}>36</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize37}>37</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize38}>38</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize39}>39</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize40}>40</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize41}>41</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize42}>42</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize43}>43</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize44}>44</span>
            </label>
            <label className="sidebar_collection-size-item">
              <span onClick={eventsize45}>45</span>
            </label>
          </div>

          <div className="sidebar_collection-catalog">
            <span className="sidebar_collection-catalog-subtitle">
              M??u s???c:
            </span>
            <span className="catalog_color cam" onClick={eventcam}>
              {" "}
            </span>
            <span className="catalog_color den" onClick={eventBlack}>
              {" "}
            </span>
            <span className="catalog_color do-dam" onClick={eventdocam}>
              {" "}
            </span>
            <span className="catalog_color do" onClick={eventdo}>
              {" "}
            </span>
            <span className="catalog_color nau-dat" onClick={eventkemdam}>
              {" "}
            </span>
            <span className="catalog_color nau" onClick={eventnau}>
              {" "}
            </span>
            <span className="catalog_color reu" onClick={eventreu}>
              {" "}
            </span>
            <span className="catalog_color trang" onClick={eventWhile}>
              {" "}
            </span>
            <span className="catalog_color vang" onClick={eventvang}>
              {" "}
            </span>
            <span className="catalog_color xam" onClick={eventxam}>
              {" "}
            </span>
            <span
              className="catalog_color xanh-duong-dam"
              onClick={eventxanhduongdam}
            >
              {" "}
            </span>
            <span className="catalog_color xanh-duong" onClick={eventxanhduong}>
              {" "}
            </span>
            <span
              className="catalog_color xanh-duong-nhat"
              onClick={eventxanhduongnhat}
            >
              {" "}
            </span>
            <span className="catalog_color xanh-mi-no" onClick={eventxanhmino}>
              {" "}
            </span>
            <span className="catalog_color xanh" onClick={eventxanh}>
              {" "}
            </span>
            <span className="catalog_color xanh-nhot" onClick={eventxanhnhot}>
              {" "}
            </span>
            <span className="catalog_color hong" onClick={eventhong}>
              {" "}
            </span>
          </div>
        </div>
      </aside>
    </aside>
  );
}
