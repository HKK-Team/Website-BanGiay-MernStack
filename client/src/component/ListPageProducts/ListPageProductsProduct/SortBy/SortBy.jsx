/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import "./SortBy.css";
import { GlobalState } from "../../../../GlobalState";

export default function SortBy() {
  const state = useContext(GlobalState);
  //information by color
  const [colorboy, setcolorboy] = state.productboyApi.colorboy;
  //information by size product
  const [sizeminboy, setsizeminboy] = state.productboyApi.sizeminboy;

  if (colorboy !== " " || sizeminboy !== " ") {
    return (
      <div className="sort_by">
        <div className="sort_by-wrapper">
          <label htmlFor="">LỌC THEO : </label>
          <a href>
            {colorboy}
            <i class="fas fa-times"></i>
          </a>
          <a href>
            {sizeminboy} <i class="fas fa-times"></i>
          </a>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
