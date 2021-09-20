import React, { Fragment } from "react";
import "./ListAccount.css";
import { Link } from "react-router-dom";

//Đóng form xác nhận mật khẩu
const CloseConfirmPassword = () => {
  var x = document.getElementById("modal-ConfirmPassword");
  x.style.display="none"
};
export default function ListAccount(props) {
  return (
    <Fragment>
      <div id="modal-ConfirmPassword">
        <div className="modal-content">
          <i class="fas fa-times" onClick={CloseConfirmPassword}></i>
          <form action="" className="newUserForm">
            <div className="newUserItem">
              <label>Vui lòng nhập mặt khẩu của bạn</label>
              <input type="password" placeholder="Please enter a password" />
            </div>
            <button className="newUserButton">Confirm</button>
          </form>
        </div>
      </div>
      <section className="account">
        <div className="container">
          <div className="row">
            <div className="Cart_title">
              <h1>{props.title}</h1>
            </div>
            <div className="account_wrapper">
              <div className="account_box-menu">
                <h2>Tài Khoản</h2>
                <Link to="/Profile">
                  <i class="fa fa-user"></i>Thông tin tài khoản
                </Link>
                <Link to="/AccountOderManagement">
                  <i class="fa fa-list"></i>Quản lý đơn hàng
                </Link>
                <Link to="/AccountAddress">
                  <i class="fa fa-map-marker"></i>Danh sách địa chỉ
                </Link>
              </div>
              <div className="account_box-info">{props.link}</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
