import React, { useEffect, useState, useContext } from "react";
import './Pagination.css'
import {GlobalState} from '../../GlobalState'


export default function Pagination() {
  const state = useContext(GlobalState);
  const [product_boy] = state.productboyApi.product_boy;
  const[currentPageboy, setcurrentPageboy]= state.productboyApi.currentPageboy;
  const [currentPagegirl, setcurrentPagegirl] = state.productgirlApi.currentPagegirl;
  const [currentPagepk, setcurrentPagepk] =state.productpkApi.currentPagepk;
  const [currentPagegosto, setcurrentPagegosto]=state.productgostoApi.currentPagegosto;
  const [currentPagebetrai, setcurrentPagebetrai]=state.productbetraiApi.currentPagebetrai;
  const [currentPagebegai, setcurrentPagebegai]=state.productbegaiApi.currentPagebegai;
  //Get post current
  const [postsPerPageboy] = state.productboyApi.postsPerPageboy

  const pageNumber = [];

  for(let i = 1; i <= Math.ceil((product_boy.length) / postsPerPageboy);i++){
    pageNumber.push(i)
  }
  function paginate(number){
    setcurrentPageboy(number)
    setcurrentPagegirl(number)
    setcurrentPagepk(number)
    setcurrentPagegosto(number)
    setcurrentPagebetrai(number)
    setcurrentPagebegai(number)
    window.scrollTo({
      top: 700,
      behavior: 'smooth'
  });
  }
  return(
    <div id="pagination">
      <a href className="prev ">Trước</a>
          {pageNumber.map(number =>(
                    <a onClick={() => paginate(number)} href className='page_node' key={number}>
                        {number}
                    </a>
          ))}
          <a href className="next">Tiếp</a>
    </div>
  );
}
