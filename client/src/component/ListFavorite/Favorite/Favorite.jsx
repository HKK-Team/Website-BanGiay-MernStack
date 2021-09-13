/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Favorite.css";
export default function Favorite(props) {
  const [quantity,setquantity] = useState(1);
  function eventdelete(e){
    e.preventDefault();
    window.confirm("Bạn thực sự muốn bỏ yêu thích sản phẩm ?")
  }
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
          value={quantity}
          onChange={(e) => {
            setquantity(e.target.value);
          }}
            type="number"
            className="Cart_quality"
            min="1"
            max="100"
            placeholder="1"
          />
        </td>
        <td className="customer-wishlist-item-price">
          <p className="special-price">
            <span className="price">{props.price* quantity} đ</span>
          </p>
        </td>
        <td className="customer-wishlist-item-cart">
          <button className="btn_cart" type="submit">THÊM VÀO GIỎ</button>
        </td>
        <td className="customer-wishlist-item-remove">
          <button onClick={eventdelete} className="favorite_remove" type="submit">
            <i class="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}
