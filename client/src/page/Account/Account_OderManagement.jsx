/* eslint-disable react/jsx-pascal-case */
import React, { Fragment } from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import ListAccount from "../../component/ListAccount/ListAccount";
import Account_OrderManagement from "../../component/ListAccount/Account_OrderManagement/Account_OrderManagement";

export default function Account_OderManagement() {
  return (
    <Fragment>
      <Header />
      <Title name="Danh sách đơn hàng" />
      <ListAccount
        link ={<Account_OrderManagement/>}
        title="DANH SÁCH ĐƠN HÀNG TRÊN WEBSITE"
      />
      <Footer />
    </Fragment>
  );
}
