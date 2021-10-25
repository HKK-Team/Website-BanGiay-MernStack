/* eslint-disable react/jsx-pascal-case */
import React, { Fragment,useContext } from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import { GlobalState } from "../../GlobalState";
import ListAccount_OrderConfirmation from "../../component/ListAccount/Account_OrderConfirmation/ListAccount_OrderConfirmation";
import Account_OrderConfirmation from "../../component/ListAccount/Account_OrderConfirmation/Order_Confirmation";
import Account_OrderManagement_Empty from "../../component/ListAccount/Account_OrderManagement_Empty/Account_OrderManager_Empty";
import ListAccount_OrderEmpty from "../../component/ListAccount/Account_OrderManagement_Empty/ListAccount_Order";

export default function Account_OderManagement() {
  // call api
  const state = useContext(GlobalState);
  const [profile] = state.userAPI.user;
  const [list_order] = state.list_oderApi.list_oder;
  // get all list_order
  const order = list_order.filter((item)=>{
    return item.user_id === profile._id
  })
  if(order.length !== 0){
      // get last one list_order
    const arr = (order[order.length-1])
    // get object cart in object arr
  return (
    <Fragment>
      <Header />
      <Title name="Xác nhận đơn hàng" />
      <ListAccount_OrderConfirmation
        order ={
            <Account_OrderConfirmation
              id = {arr._id}
              status = {arr.status}
              delivery_date = {arr.orderDate}
              totalPrice = {arr.total_price}
              payment_status = {arr.payment_status}
            />
        }
        title="DANH SÁCH ĐƠN HÀNG TRÊN WEBSITE"
      />
      <Footer />
    </Fragment>
  );
  }
  else{
    return(
      <Fragment>
        <Header />
        <Title name="Xác nhận đơn hàng" />
        <ListAccount_OrderEmpty
          order = {<Account_OrderManagement_Empty/>}
          title="XÁC NHẬN ĐÃ NHẬN ĐƯỢC ĐƠN HÀNG TRÊN WEBSITE"
        />
        <Footer />
      </Fragment>
    );
  }
}
