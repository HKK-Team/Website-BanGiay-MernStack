import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import ProductMale from "../page/Product/ProductMale/ProductMale";
import ProductFemale from "../page/Product/ProductFemale/ProductFemale";
import ProductBoys from "../page/Product/ProductBoys/ProductBoys";
import ProductGirls from "../page/Product/ProductGirls/ProductGirls";
import ProductGosto from "../page/Product/ProductGosto/ProductGosto";
import ProductAccessory from "../page/Product/ProductAccessory/ProductAccessory";
import ProductDetails from "../page/ProductDetails/ProductDetails";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Cart from "./Cart/Cart";
import Favorite from "./Favorite/Favorite";
import Account_OderManagement from "./Account/Account_OderManagement";
import Account_Address from "./Account/Account_Address";
import ForgotPassword from "../page/Login/ForgotPassword/ForgotPassword";
import Home from "./Home/Home";
import Profile from "../page/Account/Account_Infomation";
import { GlobalState } from "../GlobalState";
import NotFound from "../component/utils/not_found/NotFound";
import UpdateAccount from "../page/Account/Update_Account";
import Search from "./Search/Search";
import Payment from "./Payment/Payment";
import PaymentNoLogged from "./Payment/PaymentNoLogged";
import PaymentMethods from "../page/PaymentMethods/PaymentMethods";
import Charge_Password from "../page/Account/Charge_password";
import OrderConfirmation from "../page/Account/Order_Confirmation";

// admin
import NavBarAdmin from "../admins/NavBarAdmin";

function Pages() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;

  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/nam" component={ProductMale}></Route>
      <Route exact path="/nu" component={ProductFemale}></Route>
      <Route exact path="/gosto" component={ProductGosto}></Route>
      <Route exact path="/be-trai" component={ProductBoys}></Route>
      <Route exact path="/be-gai" component={ProductGirls}></Route>
      <Route exact path="/phu-kien" component={ProductAccessory}></Route>
      <Route exact path="/nam/:id" component={ProductDetails}></Route>
      <Route exact path="/nu/:id" component={ProductDetails}></Route>
      <Route exact path="/gosto/:id" component={ProductDetails}></Route>
      <Route exact path="/be-trai/:id" component={ProductDetails}></Route>
      <Route exact path="/be-gai/:id" component={ProductDetails}></Route>
      <Route exact path="/phu-kien/:id" component={ProductDetails}></Route>
      <Route
        exact
        path="/Login"
        component={isLogged ? NotFound : Login}
      ></Route>
      <Route
        exact
        path="/Register"
        component={isLogged ? NotFound : Register}
      ></Route>
      <Route exact path="/Cart" component={Cart}></Route>
      <Route exact path="/Favorite" component={Favorite}></Route>
      <Route
        exact
        path="/AccountOderManagement"
        component={isLogged ? Account_OderManagement : NotFound}
      ></Route>
      <Route
        exact
        path="/AccountAddress"
        component={isLogged ? Account_Address : NotFound}
      ></Route>
      <Route exact path="/Profile" component={Profile}></Route>
      <Route exact path="/ForgotPassword" component={ForgotPassword}></Route>
      <Route exact path="/Search" component={Search}></Route>
      <Route exact path="/Payment" component={Payment}></Route>
      <Route exact path="/PaymentNoLogged" component={PaymentNoLogged}></Route>
      <Route exact path="/UpdateAccount" component={UpdateAccount}></Route>
      <Route exact path="/PaymentMethods" component={PaymentMethods}></Route>
      <Route exact path="/Charge_Password" component={Charge_Password}></Route>
      <Route
        exact
        path="/Account_OrderConfirmation"
        component={OrderConfirmation}
      ></Route>
      {/* admin  */}
      <NavBarAdmin />
    </Switch>
  );
}

export default Pages;
