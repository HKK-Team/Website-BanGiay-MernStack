/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Cart.css";

export default function Cart(props) {
  var storedArray = JSON.parse(sessionStorage.getItem("settings"));
  const ltg = storedArray.length;

  var quantity = 1;

  for (let i = 0; i < ltg; i++) {
    if (storedArray[i].idproduct === props.idproduct) {
      quantity = storedArray[i].quantity;
    }
  }

  function eventdelete(e) {
    e.preventDefault();
    for (let i = 0; i < storedArray.length; i++) {
      if (storedArray[i].idproduct === props.idproduct) {
        if (window.confirm("Bạn thực sự muốn xóa sản phẩm khỏi giỏ hàng ?")) {
          storedArray.splice([i], 1);
          sessionStorage.setItem("settings", JSON.stringify(storedArray));
          window.location.reload(false);
        } else {
          break;
        }
      }
    }
  }
  return (
    <div className="line_item">
      <div className="line_item-img">
        <img className="Cart_image" alt="" src={props.image}></img>
      </div>
      <div className="line_item-title">
        <a href>{props.name}</a>
        <p className="variant_cart">
          <span className="variant_cart-title">Màu: </span>
          <span className="variant_cart-color">{props.color}</span>
        </p>
        <p className="variant_cart">
          <span className="variant_cart-title">Size: </span>
          <span className="variant_size">{props.size}</span>
        </p>
        <a onClick={eventdelete} href className="cart_delete">
          <i class="far fa-trash-alt"></i> Xóa
        </a>
      </div>
      <div className="line_item-quality">
        <input
          value={quantity}
          type="number"
          className="Cart_quality"
          min="1"
          max="100"
        />
      </div>
      <div className="line_item-price">{props.price.toLocaleString()} đ</div>
      <div className="line_item-total_price">
        {props.totalprice.toLocaleString()} đ
      </div>
    </div>
  );
}
