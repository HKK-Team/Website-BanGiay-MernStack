/* eslint-disable react/jsx-pascal-case */
import React, { Fragment } from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import ListAccount from "../../component/ListAccount/ListAccount";
import Update_Accounts from "../../component/ListAccount/Update_Account/Update_Account";

export default function Update_Account() {
  return (
    <Fragment>
      <Header />
      <Title name="Cập nhật tài khoản" />
      <ListAccount
        link ={<Update_Accounts/>}
        title="TÀI KHOẢN CỦA BẠN"
      />
      <Footer />
    </Fragment>
  );
}
