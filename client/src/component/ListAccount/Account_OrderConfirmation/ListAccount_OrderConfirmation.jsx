import React, { Fragment,useState,useContext }  from "react";
import "../ListAccount.css";
import {Link} from "react-router-dom";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
export default function ListAccount(props) {
  const state = useContext(GlobalState);
  const [list_order] = state.list_oderApi.list_oder;
  const [profile] = state.userAPI.user;
  // get all list_order
  const order = list_order.filter((item)=>{
    return item.user_id === profile._id
  })
  // get last one list_order
  const arr = (order[order.length-1])
  const [confirm] = useState({
    id : arr._id,status : 'Giao hàng thành công',payment_status : 'Đã thanh toán'
  })
  const check = () =>{
    if(arr.status=== "Đang giao hàng")
    {
      return(
        <form onSubmit = {Confirmation}>
          <button className="btn-oder" >
            Xác nhận đã nhận được hàng
          </button>
        </form>
      );
    }
  }
  const checkk = () =>{
    return(
      <Link to = "/AccountOderManagement">
        <span className="btn-oder" >
            Xem đơn hàng của bạn
        </span>
      </Link>
    )
  }
  const Confirmation = async e =>{
    e.preventDefault()
    try {
        await axios.post('/payment/ConfirmOrder', {...confirm})
        alert("Thanks you have confirmaiton orders!")
        window.location.href = "/Account_OrderConfirmation";
    } catch (err) {
        alert(err.response.data.msg)
    }
  }
  return (
    <Fragment>
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
                <i class="fa fa-user"></i> Thông tin tài khoản
              </Link>
              <Link to='/AccountOderManagement'>
                <i class="fa fa-list"></i> Quản lý đơn hàng
              </Link>
              <Link to="/Account_OrderConfirmation">
                  <i class="fa fa-list-alt"></i> Xác nhận đã nhận được hàng
              </Link>
              <Link to="/Charge_Password">
                  <i class="fa fa-lock"></i> Đổi mật khẩu
              </Link>
              <Link to='/AccountAddress'>
                <i class="fa fa-map-marker"></i> Danh sách địa chỉ cửa hàng
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
                </div>
                {props.order}
                {arr.status ==="Đang giao hàng" ? check() : checkk()}
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  );
}