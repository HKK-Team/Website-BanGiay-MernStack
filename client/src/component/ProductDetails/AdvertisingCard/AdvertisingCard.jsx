/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from "react-router-dom";
import'./AdvertisingCard.css'
export default function AdvertisingCard(props) {

  return (
    <div className="xlab-card">
      <Link to className="xlab-card_image" >
        <img src={props.image} alt="image"/>
      </Link>
      <div className="xlab-card_pre">
        <Link to title={props.name}>{props.name}</Link>
        <div className="xlab-card_price">{props.price} đ</div>
        <a className="xlab-card_btn" href={props.masp.toString()}>Xem chi tiết</a>
      </div>
    </div>
  );
}
