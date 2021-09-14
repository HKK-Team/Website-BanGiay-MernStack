import React from "react";
import "./PaymentProduct.css";

export default function PaymentProduct(props) {
  return (
    <div className="oder-summary product-list">
      <div className="product-thumbnail">
        <div className="product-thumbnail-wrapper">
          <img src={props.image} alt="" />
        </div>
        <span className="product-thumbnail-quality">{props.quantity}</span>
      </div>
      <div className="product-description">
        <span className="product-description-name">{props.name}</span>
        <span className="product-color-size">{props.color} / {props.size}</span>
      </div>
      <div className="product-price">
        <span>{props.price.toLocaleString()} đ</span>
      </div>
    </div>
  );
}
