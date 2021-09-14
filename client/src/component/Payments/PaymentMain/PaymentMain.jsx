/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useContext} from "react";
import logo from "./../../../images/images/CôngtyTNHHABC.png";
import "./PaymentMain.css";
import {Link} from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
export default function PaymentMain() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [profile] = state.userAPI.user;
  // noLogged
  const noLogged = () =>{
    return(
      <div className="sections">
      <div className="section_header">
        <h2 className="section_title">Thông tin giao hàng</h2>
        <p className="section_text">
        Bạn đã có tài khoản? <Link to="/Login">Đăng nhập</Link>
        </p>
      </div>
      <div className="section_content">
        <div className="fieldset">
          <div className="field">
            <input
              type="text"
              size="30"
              className="field-input"
              placeholder="Họ và tên"
              required
            />
          </div>
          <div className="field">
            <input
              className="field-input"
              placeholder="Email"
              type="email"
              size="30"
              required
            />
          </div>
          <div className="field">
            <input
              size="30"
              maxLength="10"
              type="tel"
              className="field-input"
              placeholder="Số điện thoại"
              required
            />
          </div>
          <div className="field">
            <input
              type="text"
              size="30"
              className="field-input"
              placeholder="Địa chỉ"
              required
            />
          </div>
        </div>
      </div>
    </div>
    )
  };
  // logged
  const Logged = () =>{
    return(
      <div className="sections">
        <div className="section_header">
          <h2 className="section_title">Thông tin giao hàng</h2>
          <p className="section_text">
          {profile.firstname} {profile.lastname} ({profile.email})
          </p>
        </div>
        <div className="section_content">
          <div className="fieldset">
            <div className="field">
              <input
                type="text"
                size="30"
                className="field-input"
                placeholder="Họ và tên"
                value = {profile.firstname +" "+ profile.lastname}
              />
            </div>
            <div className="field">
              <input
                className="field-input"
                placeholder="Email"
                type="email"
                value = {profile.email}
                size="30"
              />
            </div>
            <div className="field">
              <input
                size="30"
                maxLength="10"
                type="tel"
                className="field-input"
                placeholder="Số điện thoại"
                value = {profile.phonenumber}
              />
            </div>
            <div className="field">
              <input
                type="text"
                size="30"
                className="field-input"
                placeholder="Địa chỉ"
                value = {profile.address}
              />
            </div>
          </div>
        </div>
      </div>
    )
  };
  return (
    <div className="main">
      <div className="main_header">
        <Link to = "/" className="logo">
          <h1 className="logo_text">
            <img src={logo} alt="" />
          </h1>
        </Link>
        <ul class="breadcrumb">
          <li class="breadcrumb-item" data-metatip="true">
            <Link to="/cart">Giỏ hàng {">"}</Link>
          </li>
          <li class="breadcrumb-item breadcrumb-item-current">
            Thông tin giao hàng {">"}
          </li>
          <li class="breadcrumb-item ">Phương thức thanh toán</li>
        </ul>
      </div>
      <div className="main_content">
        <div className="step">
          <div className="step_sections">
            {
              isLogged ? Logged() : noLogged()
            }
            <div className="step_footer">
              <Link to="/cart">Giỏ hàng</Link>
              <button type="submit">
                <span>Tiếp tục đến phương thức thanh toán</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
