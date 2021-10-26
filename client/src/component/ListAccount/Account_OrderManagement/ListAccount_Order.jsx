import React, { Fragment, useState, useContext } from "react";
import "../ListAccount.css";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import { toastPromise } from "../../../admins/components/ToastMassage/ToastMassage";
export default function ListAccount(props) {
  // call api
  const state = useContext(GlobalState);
  const [profile] = state.userAPI.user;
  const [list_order] = state.list_oderApi.list_oder;
  // get all list_order
  const order = list_order.filter((item) => {
    return item.user_id === profile._id;
  });
  // get last one list_order
  const arr = order[order.length - 1];
  //  xác nhận mật khẩu
  const OpenConfirmPassword = () => {
    var x = document.getElementById("modal-ConfirmPassword");
    x.style.display = "block";
  };
  //Đóng form xác nhận mật khẩu
  const CloseConfirmPassword = () => {
    var x = document.getElementById("modal-ConfirmPassword");
    x.style.display = "none";
  };
  const [cancel, setcancel] = useState({
    _id: profile._id,
    password: "",
    status: "Hủy đơn hàng",
    id: arr._id,
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setcancel({ ...cancel, [name]: value });
  };
  const PassWordSubmit = async (e) => {
    e.preventDefault();

    await toastPromise(axios.post("/payment/CancelOder", { ...cancel }), () => {
      setTimeout(() => {
        window.location.href = "/AccountOderManagement";
      }, 2000);
      return "You have successfully cancel orders!";
    });
  };
  return (
    <Fragment>
      <div id="modal-ConfirmPassword">
        <div className="modal-content">
          <i class="fas fa-times" onClick={CloseConfirmPassword}></i>
          <form action="" className="newUserForm" onSubmit={PassWordSubmit}>
            <div className="newUserItem">
              <label>Vui lòng nhập mặt khẩu của bạn</label>
              <input
                type="password"
                placeholder="Please enter a password"
                name="password"
                value={cancel.password}
                onChange={onChangeInput}
              />
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
                  <i class="fa fa-user"></i> Thông tin tài khoản
                </Link>
                <Link to="/AccountOderManagement">
                  <i class="fa fa-list"></i> Quản lý đơn hàng
                </Link>
                <Link to="/Account_OrderConfirmation">
                  <i class="fa fa-list-alt"></i> Xác nhận đã nhận được hàng
                </Link>
                <Link to="/Charge_Password">
                  <i class="fa fa-lock"></i> Đổi mật khẩu
                </Link>
                <Link to="/AccountAddress">
                  <i class="fa fa-map-marker"></i> Danh sách địa chỉ cửa hàng
                </Link>
              </div>
              <div className="account_box-info">
                <h2 className="title_detail">Danh sách đơn hàng mới nhất</h2>
                {/* <p>Bạn chưa đặt mua sản phẩm.</p> */}
                <div className="product-oder-header">
                  <h3>Tình trạng</h3>
                  <h3>Sản phẩm</h3>
                  <h3>Giá tiền</h3>
                  <h3>Ngày giao</h3>
                  <h3>Yêu cầu</h3>
                </div>
                {props.order}
                <button className="btn-oder" onClick={OpenConfirmPassword}>
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
