/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useContext } from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import { GlobalState } from "../../GlobalState";
import ListAccount_OrderConfirmation from "../../component/ListAccount/Account_OrderConfirmation/ListAccount_OrderConfirmation";
import Account_OrderConfirmation from "../../component/ListAccount/Account_OrderConfirmation/Order_Confirmation";
import ListAccount_OrderEmpty from "../../component/ListAccount/Account_OrderManagement_Empty/ListAccount_Order";

export default function Account_OderManagement() {
  // call api
  const state = useContext(GlobalState);
  const [profile] = state.userAPI.user;
  const [list_order] = state.list_oderApi.list_oder;

  // get all list_order
  const order = list_order.filter((item) => {
    return item.user_id === profile._id;
  });
  if (order.length !== 0) {
    const waiting = order.filter((item) => item.status === "Đang giao hàng" )
    const success = order.filter((item) => item.status === "Giao hàng thành công" )
    const arr = [...waiting,...success];

    return (
      <Fragment>
        <Header />
        <Title name="Xác nhận đơn hàng" />
        <ListAccount_OrderConfirmation
          order={arr.map((item) => (
            <Account_OrderConfirmation
              id={item._id}
              status={item.status}
              delivery_date={item.orderDate}
              totalPrice={item.total_price}
              payment_status={item.payment_status}
            />
          ))}
          title="DANH SÁCH ĐƠN HÀNG TRÊN WEBSITE"
        />
        <Footer />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Header />
        <Title name="Xác nhận đơn hàng" />
        <ListAccount_OrderEmpty
          order="Hãy đăng nhập trước khi vào trang này"
          title="XÁC NHẬN ĐÃ NHẬN ĐƯỢC ĐƠN HÀNG TRÊN WEBSITE"
        />
        <Footer />
      </Fragment>
    );
  }
}
