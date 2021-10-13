import React, { Fragment } from "react";
import Header from "./../../../component/Header/Header";
import Footer from "./../../../component/Footer/Footer";
import Titlebar from "../../../component/ProductDetails/Titlebar/Titlebar";
import ForgotPassword from "../../../component/Login/ForgotPassword/ForgotPassword";

export default function Login() {
  return (
    <Fragment>
      <Header />
      <Titlebar name="Đăng nhập" />
      <ForgotPassword />
      <Footer />
    </Fragment>
  );
}
