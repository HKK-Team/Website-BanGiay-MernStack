import React from "react";
import { Link } from "react-router-dom";
import "./../PaymentMain/PaymentMain.css";
import "./PaymentMethod.css";
import logo from "./../../../images/images/CôngtyTNHHABC.png";
export default function PaymentMethod() {
  return (
    <div className="main">
      <div className="main_header">
        <Link to="/" className="logo">
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
      <div className="section_header">
        <h2 className="section_title">Phương thức vận chuyển</h2>
        <label htmlFor="shipping-rate" className="radio-label">
          <div className="radio-input">
            <input type="radio" id="shipping-rate" className="input-radio" name="rate-id" checked="true"/>
          </div>
          <span className="radio-label-primary">Freeship cho đơn hàng</span>
          <div className="radio-accessory">0đ</div>
        </label>
      </div>
      <div className="section_payment_methods">
        <h2 className="section_title">Phương thức thanh toán</h2>
        <label htmlFor="shipping-rate" className="radio-label">
          <div className="radio-input">
            <input type="radio" id="shipping-rate" className="input-radio" name="payment_methods_id"/>
          </div>
          <span className="radio-label-primary">
            Thanh toán khi giao hàng (COD)
          </span>
        </label>
        <label htmlFor="shipping-rate" className="radio-label">
          <div className="radio-input">
            <input type="radio" id="shipping-rate" className="input-radio" name="payment_methods_id"/>
          </div>
          <span className="radio-label-primary">
            Thanh toán online qua cổng PayPal
          </span>
        </label>
      </div>
      <div className="step_footer">
        <Link to="/Payment">Quay lại thông tin giao hàng</Link>
        <Link to="" className="btn-addPaymentMethods">
          <span>Hoàn tất đơn hàng</span>
        </Link>
      </div>
    </div>
  );
}
