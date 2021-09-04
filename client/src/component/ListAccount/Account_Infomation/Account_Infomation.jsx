import React from "react";
import "./Account_Infomation.css";

export default function Account_Infomation(props) {
  return (
    <div className="user-box">
      <h2 className="title-detail">
        Thông tin tài khoản
        <a href="/updateAccount">
          <i class="fas fa-edit"></i> Cập nhật thông tin khách hàng
        </a>
      </h2>
      <p>Họ và Tên: </p>
      <p className="email">Email: </p>
      <p>Địa chỉ: </p>
      <p>Quốc gia: </p>
      <p>Điện thoại: </p>
      <span className="p">Hạng thẻ tiếp theo Silver - chiết khẩu 3%</span>
      <a href className="a">
        Xem thêm chính sách khách hàng thân thiết.
      </a>
      <a href id="view-address">
        Xem địa chỉ <i class="fa fa-share"></i>
      </a>
      <h2 className="title-detail">Danh sách đơn hàng mới nhất</h2>
      <p>Bạn chưa đặt mua sản phẩm nào</p>
    </div>
  );
}
