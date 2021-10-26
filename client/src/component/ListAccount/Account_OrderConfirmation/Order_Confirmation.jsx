import React from "react";
import "./Account_OrderConfirmation.css";
export default function Account_OrderManagement(props) {
  return (
    <div className="order-box">
      <div className="order-oder-box">
        <div className="order-oder-status">
          <p>#{props.id.slice(0,12)}</p>
        </div>
        {/*  */}
        <div className="order-oder-list">
          <div className="order-oder-decs">
              <span> {props.delivery_date.slice(0,10)}</span>
          </div>
          <span class = "order-oder-decst" style={{ color: "red" }}>{props.totalPrice} đ</span>
        </div>
        {/*  */}
        <div className="order-oder-deliveryDate">
          <span>{props.payment_status}</span>
        </div>
        <div className="order-oder-singleBadge">
            <span>{props.status}</span>
        </div>
      </div>
    </div>
  );
}