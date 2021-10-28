/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useContext } from "react";
import Header from "./../../component/Header/Header";
import Footer from "./../../component/Footer/Footer";
import Title from "./../../component/ProductDetails/Titlebar/Titlebar";
import ListAccount_Order from "../../component/ListAccount/Account_OrderManagement/ListAccount_Order";
import Account_OrderManagement, {
  ProductOrderList,
} from "../../component/ListAccount/Account_OrderManagement/Account_OrderManagement";
import { GlobalState } from "../../GlobalState";
import ListAccount_OrderEmpty from "../../component/ListAccount/Account_OrderManagement_Empty/ListAccount_Order";
import Account_OrderManagement_Empty from "../../component/ListAccount/Account_OrderManagement_Empty/Account_OrderManager_Empty";
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
    let pending = order.filter((item) => item.status === "Chưa duyệt đơn hàng");
    let waiting = order.filter((item) => item.status === "Đang giao hàng");
    let success = order.filter(
      (item) => item.status === "Giao hàng thành công"
    );
    let cancel = order.filter((item) => item.status === "Hủy đơn hàng");
    let result = [...waiting, ...pending, ...success, ...cancel];
    return (
      <Fragment>
        <Header />
        <Title name="Danh sách đơn hàng" />
        <ListAccount_Order
          order={result.map((item) => (
            <Account_OrderManagement
              oderCode={item._id}
              status={item.status}
              delivery_date={item.orderDate}
              TotalPrice={item.total_price}
              productOrderList={item.cart.map((element) => (
                <ProductOrderList
                  quantity={element.quantity}
                  name={element.nameProduct}
                  image={element.image}
                  totalPrice={element.totalprice}
                  size={element.size}
                />
              ))}
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
        <Title name="Danh sách đơn hàng" />
        <ListAccount_OrderEmpty
          order={<Account_OrderManagement_Empty />}
          title="DANH SÁCH ĐƠN HÀNG TRÊN WEBSITE"
        />
        <Footer />
      </Fragment>
    );
  }
}
