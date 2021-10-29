/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useContext,useState} from "react";
import logo from "./../../../images/images/CôngtyTNHHABC.png";
import "./PaymentMain.css";
import {Link} from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
export default function PaymentMain() {
  //call api
  const state = useContext(GlobalState);
  const [profile] = state.userAPI.user;
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
  };
  // useState Logged
  const [payment,setPayment] = useState({
    user_id : profile._id, fullName : profile.firstname + " " + profile.lastname,
    email : profile.email,phone_number : profile.phonenumber , address : profile.address, cart : storedArray,total_price : sum,payment_status : ''
  })
  window.sessionStorage.setItem('payment', JSON.stringify(payment))
  const onChangeInput = e =>{
    const {name, value} = e.target;
    setPayment({...payment, [name]:value,})
  };
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
                    <Link to ='/Profile' className="section_text">
                    {profile.firstname} {profile.lastname} ({profile.email})
                    </Link>
                  </div>
                  <div className="section_content">
                    <div className="fieldset">
                      <div className="field">
                        <input
                          type="text"
                          size="30"
                          name ="fullName"
                          className="field-input"
                          placeholder="Họ và tên"
                          value = {payment.fullName}
                          onChange={onChangeInput}
                        />
                      </div>
                      <div className="field">
                        <input
                          className="field-input"
                          placeholder="Email"
                          type="email"
                          name = "email"
                          value = {payment.email}
                          size="30"
                          onChange={onChangeInput}
                        />
                      </div>
                      <div className="field">
                        <input
                          size="30"
                          maxLength="10"
                          type="tel"
                          name = "phone_number"
                          className="field-input"
                          placeholder="Số điện thoại"
                          value = {payment.phone_number}
                          onChange={onChangeInput}
                        />
                      </div>
                      <div className="field">
                        <input
                          type="text"
                          size="30"
                          className="field-input"
                          name = "address"
                          placeholder="Địa chỉ"
                          value = {payment.address}
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
