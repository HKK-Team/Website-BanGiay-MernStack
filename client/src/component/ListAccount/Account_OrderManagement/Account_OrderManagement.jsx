/* eslint-disable no-unused-vars */
import React from "react";
import "./Account_OrderManagement.css";
export default function Account_OrderManagement(props) {
  return (
    <div className="user-box">
      <div className="product-oder-box">
        <div className="product-oder-status">
          <span></span>
          <p>{props.status}</p>
        </div>
        {/*  */}
        <div className="product-oder-list">
          <img src={props.image} alt="" />
          <div className="product-oder-decs">
            <p style={{ margin: 0}}>
              {props.name} <br />{" "}
              <span> số lượng : {props.quantity}</span>
              <span> size : {props.size}</span>
            </p>
          </div>
          <span style={{ color: "red" }}>{props.totalPrice.toLocaleString()} đ</span>
        </div>
        {/*  */}
        <div className="product-oder-deliveryDate">
          <span>{props.delivery_date.slice(0,10)}</span>
        </div>
        <div className="product-oder-singleBadge">
          <input type="checkbox" name="SingleBadge" id/> <span>Hủy đơn hàng</span>
        </div>
      </div>
    </div>
  );
}
