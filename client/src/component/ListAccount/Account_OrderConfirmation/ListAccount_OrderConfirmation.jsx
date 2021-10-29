import React, { Fragment } from "react";
import "../ListAccount.css";
import { Link } from "react-router-dom";
export default function ListAccount(props) {
  
  return (
    <Fragment>
      <section className="account">
        <div className="container" style={{margin:'0px 100px'}}>
          <div className="row">
            <div className="Cart_title">
              <h1>{props.title}</h1>
            </div>
            <div className="account_wrapper">
              <div className="account_box-menu">
                <h2>Tài Khoản</h2>
                <Link to="/Profile">
                  <i className="fa fa-user"></i> Thông tin tài khoản
                </Link>
                <Link to="/AccountOderManagement">
                  <i className="fa fa-list"></i> Quản lý đơn hàng
                </Link>
                <Link to="/Account_OrderConfirmation">
                  <i className="fa fa-list-alt"></i> Xác nhận đã nhận được hàng
                </Link>
                <Link to="/Charge_Password">
                  <i className="fa fa-lock"></i> Đổi mật khẩu
                </Link>
                <Link to="/AccountAddress">
                  <i className="fa fa-map-marker"></i> Danh sách địa chỉ cửa hàng
                </Link>
              </div>
              <div className="account_box-info">
                <h2 className="title_detail">Xác nhận đơn hàng</h2>
                {/* <p>Bạn chưa đặt mua sản phẩm.</p> */}
                <div className="product-oder-headerr">
                  <h3>Mã đơn hàng</h3>
                  <h3>Ngày đặt</h3>
                  <h3>Thành tiền</h3>
                  <h3>Tình trạng thanh toán</h3>
                  <h3>Vận chuyển</h3>
                  <h3>Hoạt động</h3>
                </div>
                {props.order }    
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
