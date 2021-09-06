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

  //đỉnh cao việt nam là đây
  const temp=[];
    for(let i = colorboy.length -1; i >= 0;i--)
    {
      if(colorboy[i] === '=')
      break;
      temp.push(colorboy[i])
    }
    //thêm đây nữa
    const tempsize=[];
    for(let i = sizeminboy.length -1; i >= 0;i--)
    {
      if(sizeminboy[i] === '=')
      break;
      tempsize.push(sizeminboy[i])
    }
    function eventchangecolor(e){
      e.preventDefault();
      setcolorboy("")
    }
    function eventchangesize(e){
      e.preventDefault();
      setsizeminboy("")
    }
    return (
      <div className="sort_by">
        <div className="sort_by-wrapper">
          <label htmlFor="">LỌC THEO : </label>
          <a href>
              {temp.reverse().toString().replaceAll(",","")}
            <i class="fas fa-times" onClick={eventchangecolor}></i>
          </a>
          <a href>
            {tempsize.reverse().toString().replaceAll(",","")} <i class="fas fa-times"onClick={eventchangesize}></i>
          </a>
        </div>
      </div>
    );
}
