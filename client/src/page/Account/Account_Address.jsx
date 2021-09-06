/* eslint-disable react/jsx-pascal-case */
import React, { Fragment } from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import ListAccount from "../../component/ListAccount/ListAccount";
import Account_Addresss from "../../component/ListAccount/Account_Address/Account_Address";

export default function Account_Address() {
  return (
    <Fragment>
      <Header />
      <Title name="Địa chỉ" />
      <ListAccount
        link ={<Account_Addresss/>}
        title="DANH SÁCH ĐỊA CHỈ"
      />
      <Footer />
    </Fragment>
  );
}
