/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import logo from "./../../../images/images/CôngtyTNHHABC.png";
import "./PaymentMain.css";

export default function PaymentMain() {
  return (
    <div className="main">
      <div className="main_header">
        <a href className="logo">
          <h1 className="logo_text">
            <img src={logo} alt="" />
          </h1>
        </a>
        <ul class="breadcrumb">
          <li class="breadcrumb-item" data-metatip="true">
            <a href="/cart">Giỏ hàng {">"}</a>
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
            <div className="sections">
              <div className="section_header">
                <h2 className="section_title">Thông tin giao hàng</h2>
                <p className="section_text">
                  Bạn đã có tài khoản? <a href="/Login">Đăng nhập</a>
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
                    ></input>
                  </div>
                  <div className="field">
                    <input
                      className="field-input"
                      placeholder="Email"
                      type="email"
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
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      size="30"
                      className="field-input"
                      placeholder="Địa chỉ"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="step_footer">
              <a href="/cart">Giỏ hàng</a>
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
