/* eslint-disable react/jsx-pascal-case */
import React, { Fragment,useContext } from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import ListAccount_Order from "../../component/ListAccount/Account_OrderManagement/ListAccount_Order";
import Account_OrderManagement from "../../component/ListAccount/Account_OrderManagement/Account_OrderManagement";
import { GlobalState } from "../../GlobalState";
export default function Account_OderManagement() {
  // call api
  const state = useContext(GlobalState);
  const [profile] = state.userAPI.user;
  const [list_order] = state.list_oderApi.list_oder;
  // get all list_order
  const order = list_order.filter((item)=>{
    return item.user_id === profile._id
  })
  // get last one list_order
  const arr = (order[order.length-1])
  // get object cart in object arr
  const ar = (Object.assign({},arr.cart))
  // conver object to array
  const result = Object.keys(ar).map((key) => ar[key]);
  return (
    <Fragment>
      <Header />
      <Title name="Danh sách đơn hàng" />
      <ListAccount_Order
        order ={
          result.map((item) =>(
            <Account_OrderManagement
              name = {item.nameProduct}
              status = {arr.status}
              quantity = {item.quantity}
              delivery_date = {arr.orderDate}
              totalPrice = {item.totalprice}
              image = {item.image}
              size = {item.size}
            />
          ))
        }
        title="DANH SÁCH ĐƠN HÀNG TRÊN WEBSITE"
      />
      <Footer />
    </Fragment>
  );
}
