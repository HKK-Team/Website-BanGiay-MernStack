import React from "react";
import "./Product.css";
import iconNew from "../../images/images/new.webp";
export default function Product(props) {
  return (
    <div className="product_item">
      <div className="product_item-image">
        <img src={props.image} alt="image" className='image_Product' title={props.name}/>
        <span className="new">
          <img src={iconNew} alt="icon" />
        </span>
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
      <a href="#" className="product_item-name" title={props.name}>
        {props.name}
      </a>
      <a href="#" className="product_item-productType">
        {props.type}
      </a>
      <span className="product_item-price">{props.prime} đ</span>
      <button className="product_item-addToCart" type="submit">
        Mua Hàng
      </button>
    </div>
  );
}
