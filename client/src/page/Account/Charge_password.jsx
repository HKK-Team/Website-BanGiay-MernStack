/* eslint-disable react/jsx-pascal-case */
import React, { Fragment } from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import ListAccount from "../../component/ListAccount/ListAccount";
import Charge_Password from "../../component/ListAccount/Charge_Password/Charge_password";

export default function Account_Address() {
  return (
    <Fragment>
      <Header />
      <Title name="Đổi mật khẩu" />
      <ListAccount
        link ={<Charge_Password/>}
        title="Đổi mật khẩu"
      />
      <Footer />
    </Fragment>
  );
}