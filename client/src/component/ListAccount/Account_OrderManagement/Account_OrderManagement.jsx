/* eslint-disable no-unused-vars */
import React from "react";
import "./Account_OrderManagement.css";
import image from "./../../../images/Hunter-Nam/01_e07b5f71bd82468da19d879d25014315_medium.jpg";
// Xử lý sự kiện hủy đơn
const handelSingleBadge = () => {
  var checkbox = document.getElementsByName("SingleBadge");
  var result = ""; //array chưa id hủy đơn 
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      result += " [" + checkbox[i].value + "]";
    }
  }
};
//  xác nhận mật khẩu
var errPasswordCount = 0; // Đếm số lần nhập sai
const ConfirmPassword = () => {
  var password = prompt('Vui lòng nhập mật khẩu', ' ');
  if (password === "hello") {
    handelSingleBadge();
    alert("Thay đổi của bạn đã đc ghi lại");
  } else if (password === " ") {
    alert("Vui lòng nhập mật khẩu");
  } else {
    errPasswordCount++;
    alert(`Xin lỗi ! Mật khẩu không chính xác lần ${errPasswordCount}`);
  }
  if (errPasswordCount === 3) {
    // logout
    window.location.href = "/";
  }
};
export default function Account_OrderManagement() {
  return (
    <div className="user-box">
      <h2 className="title_detail">Danh sách đơn hàng mới nhất</h2>
      <button className="btn-oder" onClick={ConfirmPassword}>
        Lưu thay đổi
      </button>
      {/* <p>Bạn chưa đặt mua sản phẩm.</p> */}
      <div className="product-oder-header">
        <h3>Tình trạng</h3>
        <h3>Sản phẩm</h3>
        <h3>Giá tiền</h3>
        <h3>Ngày giao</h3>
        <h3>Yêu cầu</h3>
      </div>
      <div className="product-oder-box">
        <div className="product-oder-status">
          <span></span>
          <p>Đang giao hàng</p>
        </div>
        {/*  */}
        <div className="product-oder-list">
          <img src={image} alt="" />
          <div className="product-oder-decs">
            <p style={{ margin: 0}}>
              Sandal Da Thật Nữ Gosto Slinky GFW017300DEN (Đen) <br />{" "}
              <span> số lượng : 1</span>
            </p>
            <span>Trắng / 49</span>
          </div>
          <span style={{ color: "red" }}>100000 đ</span>
        </div>
        {/*  */}
        <div className="product-oder-deliveryDate">
          <span>24-9-2021</span>
        </div>
        <div className="product-oder-singleBadge">
          <input type="checkbox" name="SingleBadge" id/> <span>Hủy đơn hàng</span>
        </div>
      </div>
    </div>
  );
}
