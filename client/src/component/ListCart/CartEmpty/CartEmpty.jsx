/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./CartEmpty.css";
import emptyCart from "./../../../images/images/icon_empty_cart.webp";
import {Link} from "react-router-dom"
export default function CartEmpty() {
  return (
    <section className="Cart">
      <div className="container">
        <div className="row">
          <div className="Cart_title">
            <h1>GIỎ HÀNG CỦA BẠN</h1>
          </div>
          <div className="empty_cart">
            <img src={emptyCart} alt="image" />
            <p className="message">
              Không có sản phẩm nào trong giỏ hàng của bạn.
            </p>
            <Link to = "/AccountOderManagement" className="myoder">
              Đơn hàng của tôi
            </Link>
            <Link to = "/" className="btn-red">
              Tiếp tục mua hàng
            </Link>
          </div>
          <div className="cart_gift_note">
            Bộ Y tế đã ra thông điệp 5K: “Khẩu trang - Khử khuẩn - Khoảng cách -
            Không tập trung - Khai báo y tế” <br />
            Kêu gọi mọi người cùng nhau thực hiện việc chung sống an toàn với
            dịch bệnh.
          </div>
        </div>
      </div>
    </section>
  );
}
