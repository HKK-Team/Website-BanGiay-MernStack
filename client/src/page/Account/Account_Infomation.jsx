import React, { Fragment} from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import ListAccount from "../../component/ListAccount/ListAccount";
import Account_Infomations from "../../component/ListAccount/Account_Infomation/Account_Infomation";
export default function Account_Infomation() {
  return (
    <Fragment>
      <Header />
      <Title name="Thông tin tài khoản" />
      <ListAccount
          // eslint-disable-next-line react/jsx-pascal-case
          link ={<Account_Infomations/>}
          title="TÀI KHOẢN CỦA BẠN"
      />
      <Footer />
    </Fragment>
  );
}
