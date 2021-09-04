import React  from "react";
import "./ListAccount.css";
export default function ListAccount(props) {
  return (
    <section className="account">
      <div className="container">
        <div className="row">
          <div className="Cart_title">
            <h1>{props.title}</h1>
          </div>
          <div className="account_wrapper">
            <div className="account_box-menu">
              <h2>Tài Khoản</h2>
              <a href='/Account'>
                <i class="fa fa-user"></i>Thông tin tài khoản
              </a>
              <a href='/AccountOderManagement'>
                <i class="fa fa-list"></i>Quản lý đơn hàng
              </a>
              <a href='/AccountAddress'>
                <i class="fa fa-map-marker"></i>Danh sách địa chỉ
              </a>
            </div>
            <div className="account_box-info">{props.link}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
