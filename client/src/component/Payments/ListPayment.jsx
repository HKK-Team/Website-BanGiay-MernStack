import React from "react";
import "./ListPayment.css";
import PaymentMain from "./PaymentMain/PaymentMain";
import PaymentProduct from "./PaymentProduct/PaymentProduct";
import PaymentSidebar from "./PaymentSidebar/PaymentSidebar";
import image from "./../../images/Hunter-Nam/dsmh03500trg__6__d26559701138471888855c5a80a86ce1_1024x1024.jpg";

var array = [];
for (let i = 0; i < 5; i++) {
  array.push(
    <PaymentProduct
      image={image}
      name="Giày Thể Thao Nữ Biti's Hunter Midnight 2 DSUH00500DEN (Đen)"
      quanlity ="2"
      color="Trang"
      size="39"
      price="999999"
    />
  );
}
export default function ListPayment() {
  return (
    <section className="payment">
      <div className="wrap">
        <PaymentSidebar arraylist={array} />
        <PaymentMain />
      </div>
    </section>
  );
}
