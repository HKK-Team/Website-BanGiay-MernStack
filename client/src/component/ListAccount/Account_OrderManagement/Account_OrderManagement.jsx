/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import "./Account_OrderManagement.css";
export default function Account_OrderManagement(props) {
  const state = useContext(GlobalState);
  const Span = ({ type }) => {
    return <span className={type}></span>;
  };
  const P = ({ type, name }) => {
    return <p style={{ color: type }}>{name}</p>;
  };
  let tick;
  let status;
  switch (props.status) {
    case "Chưa duyệt đơn hàng":
      tick = <Span type="pending" />;
      status = <P type="#128CB1" name={props.status} />;
      break;
    case "Giao hàng thành công":
      tick = <Span type="success" />;
      status = <P type="#3bb077" name={props.status} />;
      break;
    case "Đang giao hàng":
      tick = <Span type="waiting" />;
      status = <P type="rgb(162, 162, 58)" name={props.status} />;
      break;
    case "Hủy đơn hàng":
      tick = <Span type="cancel" />;
      status = <P type="rgb(158, 3, 3)" name={props.status} />;
      break;
    default:
  }

  const onChangeCheckBox = (e) => {
    let parent = e.target.closest(".product-oder-box");
    let id = parent.querySelector(".oderCode").innerText;
    let ischeck = false;
    ischeck = state.CheckBoxCancelOrder.includes(id);
    if (e.target.checked && !ischeck) {
      state.CheckBoxCancelOrder.push(id);
    } else if (!e.target.checked && ischeck) {
      let index = state.CheckBoxCancelOrder.lastIndexOf(id);
      if (state.CheckBoxCancelOrder.length !== 0) {
        delete state.CheckBoxCancelOrder[index];
      }
    }
  };

  return (
    <div className="user-box">
      <div className="product-oder-box">
        <div className="product-oder-status">
          {tick}
          {status}
        </div>
        <div className="product-oder-status">
          #<p className="oderCode">{props.oderCode}</p>
        </div>
        {/*  */}
        <div className="product-oder-box-list">{props.productOrderList}</div>
        {/*  */}
        <div className="product-oder-status">
          <p style={{ color: "red" }}>
            {props.TotalPrice.toLocaleString()} VND
          </p>
        </div>
        <div className="product-oder-deliveryDate">
          <span>{props.delivery_date.slice(0, 10)}</span>
        </div>
        <div className="product-oder-singleBadge">
          {props.status === "Hủy đơn hàng" ||
          props.status === "Giao hàng thành công" ? (
            props.status === "Giao hàng thành công" ? (
              <span>Đơn hàng đã giao</span>
            ) : (
              <span>Đơn hàng đã hủy</span>
            )
          ) : (props.status === "Đang giao hàng"? (
                <span>Đang giao hàng</span>
              ) :(<>
                <input
                  type="checkbox"
                  name="SingleBadge"
                  id
                  onChange={onChangeCheckBox}
                />{" "}
                <span>Hủy đơn hàng</span>
              </>)
            
          )}
        </div>
      </div>
    </div>
  );
}
export function ProductOrderList(props) {
  return (
    <div className="product-oder-list">
      <img src={props.image} alt="" />
      <div className="product-oder-decs">
        <p style={{ margin: 0 }}>
          {props.name} <br /> <span> số lượng : {props.quantity}</span>
          <span> size : {props.size}</span>
        </p>
      </div>
      <span style={{ color: "red" }}>
        {props.totalPrice.toLocaleString()} đ
      </span>
    </div>
  );
}
