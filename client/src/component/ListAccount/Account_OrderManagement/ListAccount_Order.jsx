import React, { Fragment, useState, useContext } from "react";
import "../ListAccount.css";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import {
  toastInfor,
  toastPromise,
} from "../../../admins/components/ToastMassage/ToastMassage";
import { sendMailOrderStatus } from "../../../api/mailSeviceApi";
export default function ListAccount(props) {
  // call api
  const state = useContext(GlobalState);
  const [profile] = state.userAPI.user;
  const [list_order] = state.list_oderApi.list_oder;
  const checkbox = state.CheckBoxCancelOrder;
  // get all list_order
  const order = list_order.filter((item) => {
    return item.user_id === profile._id;
  });
  //  xác nhận mật khẩu
  const OpenConfirmPassword = () => {
    let arr = checkbox.find((item) => item !== undefined);
    if (checkbox.length === 0 || arr === undefined) {
      toastInfor("vui lòng lựa chọn trước khi thay đổi");
    } else {
      var x = document.getElementById("modal-ConfirmPassword");
      x.style.display = "block";
    }
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
    id: [...checkbox],
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setcancel({ ...cancel, [name]: value });
    setcancel((prev) => {
      return { ...prev, id: [...checkbox] };
    });
  };

  // xử lý gửi mail status đã duyệt cho khách hàng
  const handleSendMailOrderStatus = () => {
    let arr = [];
    for (let index = 0; index < checkbox.length; index++) {
      if (checkbox[index]) {
        arr.push(order.find((item) => item._id === checkbox[index]));
      }
    }
    let orders = { ...arr };

    for (let i = 0; i < arr.length; i++) {
      if (orders[i]) {
        let obj = {};
        obj.context = [...orders[i].cart];
        obj.title = `Thông báo hủy đơn hàng mã số #${orders[i]._id}`;
        obj.contextStatus = `Đơn hàng của bạn đã hủy thành công, xin lỗi nếu bạn có điều không hài lòng về chúng tôi, cảm ơn`;
        obj.contextTitle = "Đơn hàng của bạn đã được hủy thành công";
        obj.email = orders[i].email;
        obj.address = orders[i].address;
        obj.fullName = orders[i].fullName;
        obj.phone_number = orders[i].phone_number;
        obj.total_price = orders[i].total_price;
        obj.orderDate = orders[i].orderDate;
        sendMailOrderStatus(obj);
      }
    }
  };
  const PassWordSubmit = async (e) => {
    e.preventDefault();

    await toastPromise(axios.post("/payment/CancelOder", { ...cancel }), () => {
      handleSendMailOrderStatus();
      setTimeout(() => {
        window.location.href = "/AccountOderManagement";
      }, 3000);
      return "You have successfully cancel orders!";
    });
  };

  return (
    <Fragment>
      <div id="modal-ConfirmPassword">
        <div className="modal-content">
          <i className="fas fa-times" onClick={CloseConfirmPassword}></i>
          <form action="" className="newUserForm" onSubmit={PassWordSubmit}>
            <div className="newUserItem">
              <label>Vui lòng nhập mật khẩu của bạn</label>
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
        <div className="container" style={{ margin: "0px 100px" }}>
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
                <div className="account_box-header">
                  <h2 className="title_detail--order">Danh sách đơn hàng mới nhất</h2>
                  <h2 className="title_detail--order">Lọc đơn hàng theo tình trạng</h2>
                  {props.selector}
                  <button className="btn-oder" onClick={OpenConfirmPassword}>
                    Lưu thay đổi
                  </button>
                </div>
                {/* <p>Bạn chưa đặt mua sản phẩm.</p> */}
                <div className="product-oder-header">
                  <h3>Tình trạng</h3>
                  <h3>Đơn hàng</h3>
                  <h3>Sản phẩm</h3>
                  <h3>Giá tiền</h3>
                  <h3>Tổng tiền</h3>
                  <h3>Ngày giao</h3>
                  <h3>Yêu cầu</h3>
                </div>
                {props.order}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
