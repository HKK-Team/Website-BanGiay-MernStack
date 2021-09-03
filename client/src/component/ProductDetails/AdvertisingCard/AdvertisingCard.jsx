import React from "react";
import'./AdvertisingCard.css'
export default function AdvertisingCard(props) {
  return (
    <div className="xlab-card">
      <a href="#" className="xlab-card_image">
        <img src={props.image} alt="image" />
      </a>
      <div className="xlab-card_pre">
        <a href="#" title={props.name}>{props.name}</a>
        <div className="xlab-card_price">{props.price} đ</div>
        <a className="xlab-card_btn" href={props.url}>Xem chi tiết</a>
      </div>
    </div>
  );
}
