/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useState} from "react";
import logo from "./../../../images/images/CôngtyTNHHABC.png";
import "./PaymentMain.css";
import {Link} from "react-router-dom";
export default function PaymentMain() {
  // get totalPrice
  var storedArray = JSON.parse(sessionStorage.getItem('settings'));
  var ltg;
  if(storedArray === null){
    ltg = 0;
  }
  else{
    ltg =  storedArray.length;
  }
  var sum = 0;
    
  for (let i = 0; i < ltg; i++) {
        sum += storedArray[i].totalprice;
  }
  // useState no login
  const [payments,setpayments] = useState({
    user_id : '', fullName : '',phone_number : '',
    email : '', address : '', cart : storedArray,total_price : sum,payment_status :''
  })
  // onchage no login
  const onChangeInput = e =>{
    const {name, value} = e.target;
    setpayments({...payments, [name]:value})
  }
  window.sessionStorage.setItem('payment', JSON.stringify(payments))
  return (
    <div className="main">
      <div className="main_header">
        <Link to = "/" className="logo">
          <h1 className="logo_text">
            <img src={logo} alt="" />
          </h1>
        </Link>
          <ul className="breadcrumb">
            <li className="breadcrumb-item" data-metatip="true">
              <Link to="/cart">Giỏ hàng {">"}</Link>
            </li>
            <li className="breadcrumb-item breadcrumb-item-current">
              Thông tin giao hàng {">"}
            </li>
            <li className="breadcrumb-item ">Phương thức thanh toán</li>
          </ul>
        </div>
          <div className="main_content">
            <div className="step">
              <div className="step_sections">
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
                        name = "fullName"
                        value = {payments.fullName}
                        onChange={onChangeInput}
                        />
                    </div>
                    <div className="field">
                        <input
                        className="field-input"
                        placeholder="Email"
                        type="email"
                        size="30"
                        required
                        name = "email"
                        value = {payments.email}
                        onChange={onChangeInput}
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
                        name = "phone_number"
                        value = {payments.phone_number}
                        onChange={onChangeInput}
                        />
                    </div>
                    <div className="field">
                        <input
                        type="text"
                        size="30"
                        className="field-input"
                        placeholder="Địa chỉ"
                        required
                        name = "address"
                        value = {payments.address}
                        onChange={onChangeInput}
                        />
                    </div>
                    </div>
                </div>
                </div>
                <div className="step_footer">
                  <Link to="/cart">Giỏ hàng</Link>
                  <Link to="/PaymentMethods" className="btn-addPaymentMethods">
                    <span>Tiếp tục đến phương thức thanh toán</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
