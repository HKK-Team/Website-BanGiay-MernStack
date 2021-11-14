import React from "react";
import "./Account_OrderManagement.css";
import {Link} from "react-router-dom";
export default function Account_OrderManagement() {
  return (
    <section className="Cartt">
      <div className="containerr">
        <div className="row">
          <div className="Cart_title">
            <h1>ĐƠN HÀNG CỦA BẠN</h1>
          </div>
          <div className="empty_cart">
            <p className="message">
              Không có sản phẩm nào trong đơn hàng của bạn.
            </p>
            <Link to = "/" className="myoder">
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