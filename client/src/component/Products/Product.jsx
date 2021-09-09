/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Product.css";
import iconNew from "../../images/images/new.webp";
import {Link} from "react-router-dom";
export default function Product(props) {  // props là dữ liệu được lưu trong mảng
  return (
    <div className="product_item" style={{width:`${props.width}`,height:`${props.height}`}}>
      <div className="product_item-image">
        <Link to={props.typee +"/"+props.masp}>
          <img src={props.image} alt="image" className='image_Product' title={props.name}/>
          <span className="new">
            <img src={iconNew} alt="icon" />
          </span>
        </Link>
      </div>
      <div className="product_size">
        <div className="product_size-variant">
          <p>+ {props.TotalSize} Size</p>
          <div className="product_item-sizebox">
            <span className="product_item-size">{props.valueSize_1}</span>
            <span className="product_item-size">{props.valueSize_2}</span>
            <span className="product_item-size">{props.valueSize_3}</span>
            <span className="product_item-size">{props.valueSize_4}</span>
            <span className="product_item-size">{props.valueSize_5}</span>
          </div>
        </div>
      </div>
      <Link to={props.typee +"/"+ props.masp} className="product_item-name" title={props.name}>
        {props.name}
      </Link>
      <Link to={props.typee} className="product_item-productType">
        {props.type}
      </Link>
      <span className="product_item-price">{props.prime} đ</span>
      <button className="product_item-addToCart" type="submit">
        Mua Hàng
      </button>
    </div>
  );
}
