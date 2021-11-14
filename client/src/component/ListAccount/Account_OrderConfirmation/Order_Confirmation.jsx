import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toastPromise } from "../../../admins/components/ToastMassage/ToastMassage";
import { sendMailOrderStatus } from "../../../api/mailSeviceApi";
import { GlobalState } from "../../../GlobalState";
import "./Account_OrderConfirmation.css";
export default function Account_OrderManagement(props) {
  const state = useContext(GlobalState);
  const [list_order] = state.list_oderApi.list_oder;
  const [profile] = state.userAPI.user;
  // get all list_order
  const order = list_order.filter((item) => {
    return item.user_id === profile._id;
  });

  
  let arr = order.find((item) => item.status === "Đang giao hàng");
  if (typeof arr !== "object") {
    arr = { id: 0 };
  } 
  const [confirm] = useState({
    id: arr._id,
    status: "Giao hàng thành công",
    payment_status: "Đã thanh toán",
  });
  // xử lý gửi mail status đã duyệt cho khách hàng
  const handleSendMailOrderStatus = () => {
    let obj = {};
    obj.context = arr.cart;
    obj.title = `Thông báo hoàn tất đơn hàng mã số #${arr._id}`;
    obj.contextStatus = `Cảm ơn vì đã tin tưởng và ủng hộ bên chúng tôi, mọi thông tin liên hệ vui lòng gửi đến địa chỉ 0982483015kk@gmail.com, chúc ${arr.fullName} 1 ngày tốt lành`;
    obj.contextTitle = "Đơn hàng của bạn đã được giao thành công, hãy xác nhận đơn hàng bên dưới 1 lần nữa";
    obj.email = arr.email;
    obj.address = arr.address;
    obj.fullName = arr.fullName;
    obj.phone_number = arr.phone_number;
    obj.total_price = arr.total_price;
    obj.orderDate = arr.orderDate;
    console.log(obj.context);
    sendMailOrderStatus(obj);
  };

  const Confirmation = async (e) => {
    e.preventDefault();

    await toastPromise(
      axios.post("/payment/ConfirmOrder", { ...confirm }),
      () => {
        setTimeout(() => {
          handleSendMailOrderStatus();
          window.location.href = "/Account_OrderConfirmation";
        }, 2000);
        return "Thanks you have confirmaiton orders!";
      }
    );
  };

  return (
    <div className="order-box">
      <div className="order-oder-box">
        {props.status === "Đang giao hàng" ? (
          <div className="order-oder-status waiting">
            <p>#{props.id}</p>
          </div>
        ) : (
          <div className="order-oder-status success">
            <p>#{props.id}</p>
          </div>
        )}
        {/*  */}
        <div className="order-oder-list">
          <div className="order-oder-decs">
            <span> {props.delivery_date.slice(0, 10)}</span>
          </div>
          <span className="order-oder-decst" style={{ color: "red" }}>
            {props.totalPrice.toLocaleString()} đ
          </span>
        </div>
        {/*  */}
        {props.status === "Đang giao hàng" ? (
          <div className="order-oder-deliveryDate waiting">
            <span>{props.payment_status}</span>
          </div>
        ) : (
          <div className="order-oder-deliveryDate success">
            <span>{props.payment_status}</span>
          </div>
        )}

        {props.status === "Đang giao hàng" ? (
          <div className="order-oder-singleBadge waiting">
            <span>{props.status}</span>
          </div>
        ) : (
          <div className="order-oder-singleBadge success">
            <span>{props.status}</span>
          </div>
        )}
        {props.status === "Đang giao hàng" ? (
          <form onSubmit={Confirmation}>
            <button className="btn-oder">Xác nhận đơn hàng</button>
          </form>
        ) : (
          <Link to="/AccountOderManagement">
            <span className="btn-oder">Chi tiết đơn hàng</span>
          </Link>
        )}
      </div>
    </div>
  );
}
