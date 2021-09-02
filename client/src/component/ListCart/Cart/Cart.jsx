import React from "react";

import "./Cart.css";

export default function Cart(props) {
  return (
    <div className="line_item">
      <div className="line_item-img">
        <img className="Cart_image" alt="" src={props.image}></img>
      </div>
      <div className="line_item-title">
        <a href="#">
          {props.name}
        </a>
        <p className="variant_cart">
          <span className="variant_cart-title">Màu: </span>
          <span className="variant_cart-color">{props.color}</span>
        </p>
        <p className="variant_cart">
          <span className="variant_cart-title">Size: </span>
          <span className="variant_size">{props.size}</span>
        </p>
        <a href="#" className="cart_delete">
          <i class="far fa-trash-alt"></i> Xóa
        </a>
      </div>
      <div className="line_item-quality">
        <input
          type="number"
          className="Cart_quality"
          min="1"
          max="100"
          placeholder="1"
        />
      </div>
      <div className="line_item-price">{props.price} đ</div>
      <div className="line_item-total_price">{props.totalprice} đ</div>
    </div>
  );
}
