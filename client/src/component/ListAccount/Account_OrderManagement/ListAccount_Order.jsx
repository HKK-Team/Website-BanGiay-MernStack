import React  from "react";
import "../ListAccount.css";
import {Link} from "react-router-dom";
export default function ListAccount(props) {
    // Xử lý sự kiện hủy đơn
    const handelSingleBadge = () => {
        var checkbox = document.getElementsByName("SingleBadge");
        var result = []; //array chứa id hủy đơn 
        for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            result += " [" + checkbox[i].value + "]";
        }
        console.log(result)
    }};
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
              <Link to='/Profile'>
                <i class="fa fa-user"></i>Thông tin tài khoản
              </Link>
              <Link to='/AccountOderManagement'>
                <i class="fa fa-list"></i>Quản lý đơn hàng
              </Link>
              <Link to='/AccountAddress'>
                <i class="fa fa-map-marker"></i>Danh sách địa chỉ
              </Link>
            </div>
            <div className="account_box-info">
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
                {props.order}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}