import React,{useContext} from "react";
import "./Account_Infomation.css";
import {Link} from "react-router-dom"
import { GlobalState } from "../../../GlobalState";
export default function Account_Infomation(props) {
  // get object
  const state = useContext(GlobalState);
  const [profile] = state.userAPI.user;
  return (
    <div className="user-box">
      <h2 className="title-detail">
        Thông tin tài khoản
        <Link to="/UpdateAccount">
          <i className="fas fa-edit"></i> Cập nhật thông tin khách hàng
        </Link>
      </h2>
      <p>Họ và Tên : {profile.firstname +" "+ profile.lastname}</p>
      <p className="email">Email: {profile.email}</p>
      <p>Địa chỉ : {profile.address}</p>
      <p>Tỉnh / Thành Phố : {profile.nationality}</p>
      <p>Điện thoại : {profile.phonenumber}</p>
      <span className="p">Hạng thẻ tiếp theo Silver - chiết khẩu 3%</span>
      <Link to = "#" className="a">
        Xem thêm chính sách khách hàng thân thiết.
      </Link>
      <Link to = "#" id="view-address">
        Xem địa chỉ <i className="fa fa-share"></i>
      </Link>
    </div>
  );
}
