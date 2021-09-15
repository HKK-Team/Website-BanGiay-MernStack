import React from "react";
import "./ListPayment.css";
import logo from "./../../images/images/CôngtyTNHHABC.png";
import PaymentProduct from "./PaymentProduct/PaymentProduct";
import PaymentSidebar from "./PaymentSidebar/PaymentSidebar";
export default function ListPayment(props) {
  // get product in sessionStorage and payment
  var storedArray = JSON.parse(sessionStorage.getItem("settings"));
  var arr = [];
  arr.push(
    storedArray.map((item) => (
      <PaymentProduct
        image={item.image}
        name={item.nameProduct}
        quantity={item.quantity}
        color={item.color}
        size={item.size}
        price={item.price}
      />
    ))
  )
  return (
    <section className="payment">
      <div className="banner_payment">
        <img src={logo} alt="logo" />
      </div>
      <div className="wrap">
        <PaymentSidebar arraylist={arr} />
        {props.payname}
      </div>
    </section>
  );
}
