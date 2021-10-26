/* eslint-disable no-loop-func */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./Product.css";
import iconNew from "../../images/images/new.webp";
import { Link } from "react-router-dom";
import { toastInfor, toastSuccess } from "../../admins/components/ToastMassage/ToastMassage";
export default function Product(props) {
  // props là dữ liệu được lưu trong mảng
  const [sizebychoice, setsizebychoice] = useState(0);

  function eventaddcart(e) {
    e.preventDefault();
    if (sizebychoice === 0) {
      toastInfor("Vui lòng chọn size sản phẩm !!");
    } else {
      const settings = {
        idproduct: props.key,
        id_product: props.masp,
        nameProduct: props.name,
        nameCategoryProduct:props.type,
        price: props.price,
        totalprice: props.price,
        size: sizebychoice,
        image: props.image,
        quantity: 1,
        color : props.color
      };

      if (sessionStorage.getItem("settings") === null) {
        var data = [];
        data.push(settings);
        sessionStorage.setItem("settings", JSON.stringify(data));
        toastSuccess("Sản phẩm đã được thêm vào giỏ hàng !!!");
      } else {
        data = JSON.parse(sessionStorage.getItem("settings"));
        if (data.map((e) => e.id_product).indexOf(settings.id_product) === -1) {
          data.push(settings);
          toastSuccess("Sản phẩm đã được thêm vào giỏ hàng !!!");
        } else {
          toastInfor("Sản phẩm đã tồn tại trong giỏ hàng !!!");
        }
        sessionStorage.setItem("settings", JSON.stringify(data));
      }
    }
  }
 
  // Hiện thị UI click size 
  const [active, setactive] = useState();
  useEffect(() => {
    var flag = false;
    var btnContainer = document.getElementsByClassName("product_item-sizebox");
    for (let i = 0; i < btnContainer.length; i++) {
      var btns = btnContainer[i].getElementsByClassName("product_item-size");
      for (let j = 0; j < btns.length; j++) {
        btns[j].addEventListener("click", function () {
          var current = document.getElementsByClassName("checkedListSize");
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" checkedListSize", "");
          }
          this.className += " checkedListSize";
          flag = true;
        });
        if (flag === true) return;
      }
      if (flag === true) return;
    }
    return () => null;
  }, [active]);

  function eventchoice1(size) {
    setsizebychoice(size);
    setactive(0);
  }
  function eventchoice2(size) {
    setsizebychoice(size);
    setactive(1);
  }
  function eventchoice3(size) {
    setsizebychoice(size);
    setactive(2);
  }
  function eventchoice4(size) {
    setsizebychoice(size);
    setactive(3);
  }
  function eventchoice5(size) {
    setsizebychoice(size);
    setactive(4);
  }
  return (
    <div
      className="product_item"
      style={{ width: `${props.width}`, height: `${props.height}` }}
    >
      <div className="product_item-image">
        <Link to={props.typee + "/" + props.masp}>
          <img
            src={props.image}
            alt="image"
            className="image_Product"
            title={props.name}
          />
          <span className="new">
            <img src={iconNew} alt="icon" />
          </span>
        </Link>
      </div>
      <div className="product_size">
        <div className="product_size-variant">
          <p>+ {props.TotalSize} Size</p>
          <div className="product_item-sizebox">
            <span
              onClick={() => eventchoice1(props.valueSize_1)}
              className="product_item-size"
            >
              {props.valueSize_1}
            </span>
            <span
              onClick={() => eventchoice2(props.valueSize_2)}
              className="product_item-size"
            >
              {props.valueSize_2}
            </span>
            <span
              onClick={() => eventchoice3(props.valueSize_3)}
              className="product_item-size"
            >
              {props.valueSize_3}
            </span>
            <span
              onClick={() => eventchoice4(props.valueSize_4)}
              className="product_item-size"
            >
              {props.valueSize_4}
            </span>
            <span
              onClick={() => eventchoice5(props.valueSize_5)}
              className="product_item-size"
            >
              {props.valueSize_5}
            </span>
          </div>
        </div>
      </div>
      <Link
        to={props.typee + "/" + props.masp}
        className="product_item-name"
        title={props.name}
      >
        {props.name}
      </Link>
      <Link to={props.typee} className="product_item-productType">
        {props.type}
      </Link>
      <span className="product_item-price">{props.prime} đ</span>
      <button
        onClick={eventaddcart}
        className="product_item-addToCart"
        type="submit"
      >
        Mua Hàng
      </button>
    </div>
  );
}
