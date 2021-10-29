/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useContext, useState } from "react";
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
  const [elmSorts, setElmSorts] = useState("");
  if (order.length !== 0) {
    let pending = order.filter((item) => item.status === "Chưa duyệt đơn hàng");
    let waiting = order.filter((item) => item.status === "Đang giao hàng");
    let success = order.filter(
      (item) => item.status === "Giao hàng thành công"
    );
    let cancel = order.filter((item) => item.status === "Hủy đơn hàng");
    const elmSort = (e) => {
      setElmSorts(e.target.value);
    };
    let result = [];
    switch (elmSorts) {
      case "pending":
        result = [...pending];
        break;
      case "waiting":
        result = [...waiting];
        break;
      case "success":
        result = [...success];
        break;
      case "cancel":
        result = [...cancel];
        break;
      default:
        result = [...waiting, ...pending, ...success, ...cancel];
        break;
    }
    return (
      <Fragment>
        <Header />
        <Title name="Danh sách đơn hàng" />
        <ListAccount_Order
          selector={
            <select name="orderSort" className="orderSort" onChange={elmSort}>
              <option value="default">---------- Chọn ----------</option>
              <option value="pending">Chưa duyệt đơn hàng</option>
              <option value="success">Giao hàng thành công</option>
              <option value="cancel">Hủy đơn hàng</option>
              <option value="waiting">Đang giao hàng</option>
            </select>
          }
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
