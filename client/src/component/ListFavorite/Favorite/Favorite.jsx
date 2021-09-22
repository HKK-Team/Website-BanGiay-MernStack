/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  useState, useContext } from "react";
import "./Favorite.css";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";

export default function Favorite(props) {
  console.log(props)
  const state = useContext(GlobalState);
  const [iduser] = state.userAPI.iduser;
  const [productFavorites] =
    state.productFavorites.productFavorites;

  const detail = productFavorites.filter((item) => {
    return item.iduser === iduser;
  });
  const [quantity, setquantity] = useState(1);

  function eventdelete(e) {
    e.preventDefault();
    for (let i = 0; i < detail.length; i++) {
        if (detail[i]._id === props.idproduct) {
          if(window.confirm("Bạn thực sự muốn bỏ yêu thích sản phẩm ?")){
              axios.delete(`http://localhost:5000/api/favorite/${props.idproduct}`);
              window.location.reload(false);
          }
          else{
            break;
          }
        }
    }
  }
  function eventcart(e) {
    e.preventDefault();
      const settings = {
      idproduct:props.idproduct,
      id_product : props.id_product,
      nameProduct: props.name,
      color: props.color,
      price: props.price,
      totalprice: props.price * quantity,
      size: props.size,
      image: props.image,
      quantity: quantity,
      nameCategoryProduct : props.nameCategoryProduct
    };

    if (sessionStorage.getItem("settings") === null) {
      var data = [];
      data.push(settings);
      sessionStorage.setItem("settings", JSON.stringify(data));
      alert("Sản phẩm đã được thêm vào giỏ hàng !!!");
    } else {
      data = JSON.parse(sessionStorage.getItem("settings"));
      
      if(data.map(e => e.id_product).indexOf(settings.id_product) === -1){
        data.push(settings);
        alert("Sản phẩm đã được thêm vào giỏ hàng !!!");
      }
      else{
        alert("Sản phẩm đã tồn tại trong giỏ hàng !!!");
      }
      sessionStorage.setItem("settings", JSON.stringify(data));
    }
  }
    

  return (
    <tbody className="wish-list">
      <tr className="wish-item">
        <td className="customer-wishlist-item-image">
          <img
            src={props.image}
            alt="image"
            className="product_featured_image"
          />
        </td>
        <td className="customer-wishlist-item-info">
          <a href>{props.name}</a>
          <dt>
            Color: <dd>{props.color}</dd>
          </dt>
          <br />
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
            <span className="price">{(props.price * quantity).toLocaleString()} đ</span>
          </p>
        </td>
        <td className="customer-wishlist-item-cart">
          <button onClick={eventcart} className="btn_cart" type="submit">
            THÊM VÀO GIỎ
          </button>
        </td>
        <td className="customer-wishlist-item-remove">
          <button
            onClick={eventdelete}
            className="favorite_remove"
            type="submit"
          >
            <i class="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}
