import React from "react";
import "./Account_Infomation.css";
import {Link} from "react-router-dom"
export default function Account_Infomation(props) {
  return (
    <div className="user-box">
      <h2 className="title-detail">
        Thông tin tài khoản
        <Link to="/UpdateAccount">
          <i class="fas fa-edit"></i> Cập nhật thông tin khách hàng
        </Link>
      </h2>
      <p>Họ và Tên: </p>
      <p className="email">Email: </p>
      <p>Địa chỉ: </p>
      <p>Quốc gia: </p>
      <p>Điện thoại: </p>
      <span className="p">Hạng thẻ tiếp theo Silver - chiết khẩu 3%</span>
      <Link to = "#" className="a">
        Xem thêm chính sách khách hàng thân thiết.
      </Link>
      <Link to = "#" id="view-address">
        Xem địa chỉ <i class="fa fa-share"></i>
      </Link>
      <h2 className="title-detail">Danh sách đơn hàng mới nhất</h2>
      <p>Bạn chưa đặt mua sản phẩm nào</p>
    </div>
  );
}
