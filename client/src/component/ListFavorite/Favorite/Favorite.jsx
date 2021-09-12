/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Favorite.css";
export default function Favorite(props) {
  return (
    <tbody className="wish-list">
      <tr className="wish-item">
        <td className="customer-wishlist-item-image">
          <img src={props.image} alt="image" className="product_featured_image" />
        </td>
        <td className="customer-wishlist-item-info">
          <a href>{props.name}</a>
          <dt>
            Color: <dd>{props.color}</dd>
          </dt>
          <br/>
          <dt>
            size: <dd>{props.size}</dd>
          </dt>
        </td>
        <td className="customer-wishlist-item-quality">
          <input
            type="number"
            className="Cart_quality"
            min="1"
            max="100"
            placeholder="1"
          />
        </td>
        <td className="customer-wishlist-item-price">
          <p className="special-price">
            <span className="price">{props.price} đ</span>
          </p>
        </td>
        <td className="customer-wishlist-item-cart">
          <button className="btn_cart" type="submit">THÊM VÀO GIỎ</button>
        </td>
        <td className="customer-wishlist-item-remove">
          <button className="favorite_remove" type="submit">
            <i class="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}
