/* eslint-disable jsx-a11y/anchor-has-content */
import Prev from "../../../images/images/arrow-next.webp"
import "./ListPageProductHome.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
var b = 0;
export default function ListPageProductHome(props) {
  const [transform, settransform] = useState(`translate3d(${b}px, 0px, 0px)`);
  const [transition, settransition] = useState(`all 500ms ease 0s`);
  function arrow_left() {
    if (b === 0) {
      b = - 2928;
      settransition(`all 2000ms ease 0s`);
      settransform(`translate3d(${b}px, 0px, 0px)`);
    } else {
      settransition(`all 500ms ease 0s`);
      settransform(`translate3d(${b + 244}px, 0px, 0px)`);
      b += 244;
    }
  }
  function arrow_right() {
    if (b === -2928) {
      b = 0;
      settransition(`all 2000ms ease 0s`);
      settransform(`translate3d(${b}px, 0px, 0px)`);
    } else {
      settransition(`all 500ms ease 0s`);
      settransform(`translate3d(${b - 244}px, 0px, 0px)`);
      b -= 244;
    }
  }

  return (
    <section className="home_cate">
      <div className="container">
        <div className="row">
          <div className="home_cate-box-title">
            <h2 style={{ background: props.color }}>
              <Link to={props.url}>{props.name}</Link>
              <img
                src={props.logo}
                alt="logo"
                style={{ display: props.visible }}
              />
            </h2>
          </div>
          <div className="home_cate-products">
            <div className="home_cate-products-content">
              <div className="home_cate-products-wrapper-outer">
                <div
                  className="home_cate-product-wrapper"
                  style={{ transform: transform, transition: transition }}
                >
                  {/* Đổ sản phẩm */}
                  {props.datalist}
                  {/* </ Đổ sản phẩm > */}
                </div>
              </div>
            </div>
            <div className="arrow_product-slider">
              <Link to="/" className="btn_prev"
                style={{ backgroundImage: `url(${Prev})` }}
                onClick={arrow_left} ></Link>
              <Link to="/"
                className="btn_next"
                style={{ backgroundImage: `url(${Prev})` }}
                onClick={arrow_right}
              ></Link>
            </div>
          </div>
          <div className="home_cate-link">
            <Link to={props.url} className="home_cate-link-text">
              XEM THÊM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
