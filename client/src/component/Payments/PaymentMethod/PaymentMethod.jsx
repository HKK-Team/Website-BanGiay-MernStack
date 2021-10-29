import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../PaymentMain/PaymentMain.css";
import "./PaymentMethod.css";
import logo from "./../../../images/images/CôngtyTNHHABC.png";
import axios from "axios";
import PaypalButton from "../../PaymentPayPal/PaypalButton";
import {
  toastPromise,
  toastSuccess,
} from "../../../admins/components/ToastMassage/ToastMassage";
import { sendMailOrderStatus } from "../../../api/mailSeviceApi";
export default function PaymentMethod() {
  // get information payment
  const payment = JSON.parse(sessionStorage.getItem("payment"));
  var storedArray = JSON.parse(sessionStorage.getItem("settings"));
  var ltg;
  if (storedArray === null) {
    ltg = 0;
  } else {
    ltg = storedArray.length;
  }
  var sum = 0;

  for (let i = 0; i < ltg; i++) {
    sum += storedArray[i].totalprice;
  }

  //xử lý gửi mail status cho khách hàng
  const handleSendMailOrderStatus = () => {
    let obj = {};
    obj.context = [...storedArray];
    obj.title = "Thông báo đặt hàng thành công";
    obj.contextStatus = "Chúng tôi sẽ thông báo với bạn ngay khi đơn hàng được duyệt ,cảm ơn"
    obj.contextTitle = "Chúng tôi đã nhận được đơn hàng của bạn"
    obj.email = payment.email;
    obj.address = payment.address;
    obj.fullName = payment.fullName;
    obj.phone_number = payment.phone_number;
    obj.total_price = payment.total_price;
    sendMailOrderStatus(obj);
  };
  // post
  const paymentSubmit = async (e) => {
    e.preventDefault();

    await toastPromise(
      axios.post("http://localhost:5000/payment/creat_payment", payment),
      () => {
        window.sessionStorage.removeItem("settings");
        window.sessionStorage.removeItem("payment");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        setTimeout(() => {
          toastSuccess(
            "Cảm ơn bạn đã đặt hàng tại hệ thống Cửa Hàng HKK Team! Quay lại trang chủ để tiếp tục mua hàng nhé!"
          );
          handleSendMailOrderStatus();
        }, 1000);
        return "You have successfully placed your order!";
      }
    );
  };
  // payment with paypal
  const tranSuccess = async () => {
    await toastPromise(
      axios.post("http://localhost:5000/payment/creat_payment", payment),
      () => {
        window.sessionStorage.removeItem("settings");
        window.sessionStorage.removeItem("payment");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        setTimeout(() => {
          toastSuccess(
            "Cảm ơn bạn đã đặt hàng tại hệ thống Cửa Hàng HKK Team! Quay lại trang chủ để tiếp tục mua hàng nhé!"
          );
        }, 1000);
        return "You have successfully placed your order!";
      }
    );
  };
  // checked radio
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    var x = document.getElementById("shipping-rate-COD");
    x.addEventListener("click", function () {
      setcheckedPayPal(false);
      setchecked(true);
    });
    return () => null;
  }, [checked]);
  const [checkedPayPal, setcheckedPayPal] = useState(false);
  useEffect(() => {
    var x = document.getElementById("shipping-rate-paypal");
    x.addEventListener("click", function () {
      setcheckedPayPal(true);
      setchecked(false);
    });
    return () => null;
  }, [checkedPayPal]);
  const payment_status = checked === true ? "Chưa thanh toán" : "Đã thanh toán";
  payment.payment_status = payment_status;
  return (
    <div className="main">
      <div className="main_header">
        <Link to="/" className="logo">
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
      <div className="section_header">
        <h2 className="section_title">Phương thức vận chuyển</h2>
        <label htmlFor="" className="radio-label">
          <div className="radio-input">
            <input
              type="radio"
              id="shipping-rate"
              className="input-radio"
              name="rate-id"
              checked="true"
            />
          </div>
          <span className="radio-label-primary">Freeship cho đơn hàng</span>
          <div className="radio-accessory">0 đ</div>
        </label>
      </div>
      <div className="section_payment_methods">
        <h2 className="section_title">Phương thức thanh toán</h2>
        <label htmlFor="shipping-rate-COD" className="radio-label">
          <div className="radio-input">
            <input
              type="radio"
              id="shipping-rate-COD"
              className="input-radio"
              name="payment_methods_id"
            />
          </div>
          <span className="radio-label-primary">
            Thanh toán khi giao hàng (COD)
          </span>
        </label>
        {checked && (
          <div className="total COD">
            <h3>Thanh toán cho nhà giao hàng khi bạn nhận được hàng.</h3>
          </div>
        )}
        <label htmlFor="shipping-rate-paypal" className="radio-label">
          <div className="radio-input">
            <input
              type="radio"
              id="shipping-rate-paypal"
              className="input-radio"
              name="payment_methods_id"
            />
          </div>
          <span className="radio-label-primary">
            Thanh toán online qua cổng PayPal
          </span>
        </label>
        {checkedPayPal ? (
          <div className="total">
            <h3
              style={{
                color: "black",
                marginBottom: 5,
                fontSize: 18,
                padding: 10,
              }}
            >
              Total: $ {Math.round(sum / 23000).toLocaleString()}
            </h3>
            <PaypalButton
              total={sum}
              tranSuccess={tranSuccess}
              currency="USD"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <form onSubmit={paymentSubmit}>
        <div className="step_footer">
          <Link to="/Payment">Quay lại thông tin giao hàng</Link>
          <button className="btn-addPaymentMethods" onSubmit={paymentSubmit}>
            <span>Hoàn tất đơn hàng</span>
          </button>
        </div>
      </form>
    </div>
  );
}
