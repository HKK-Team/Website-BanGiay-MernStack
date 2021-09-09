import React,{useContext} from "react";
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
import Cart from './Cart/Cart'
import Favorite from './Favorite/Favorite'
import Account from './Account/Account_Infomation'
import Account_OderManagement from "./Account/Account_OderManagement";
import Account_Address from "./Account/Account_Address";
import Home from "./Home/Home";
import Loading from '../page/Loading/Loading';
import Profile from "../page/Account/Account_Infomation"
import {GlobalState} from '../GlobalState'
import NotFound from '../component/utils/not_found/NotFound'
function Pages() {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/nam" component={ProductMale}></Route>
      <Route exact path="/nu" component={ProductFemale}></Route>
      <Route exact path="/gosto" component={ProductGosto}></Route>
      <Route exact path="/be-trai" component={ProductBoys}></Route>
      <Route exact path="/be-gai" component={ProductGirls}></Route>
      <Route exact path="/phu-kien" component={ProductAccessory}></Route>
      <Route exact path="/:typee/:id" component={ProductDetails}></Route>
      <Route exact path="/Login" component={isLogged ? NotFound :Login}></Route>
      <Route exact path="/Register" component={isLogged ? NotFound :Register}></Route>
      <Route exact path="/Cart" component={Cart}></Route>
      <Route exact path="/Favorite" component={Favorite}></Route>
      <Route exact path="/Account" component={isLogged ? NotFound :Account}></Route>
      <Route exact path="/AccountOderManagement" component={isLogged ? NotFound :Account_OderManagement}></Route>
      <Route exact path="/AccountAddress" component={isLogged ? NotFound :Account_Address}></Route>
      <Route exact path="/Loading" component={Loading}></Route>
      <Route exact path="/Profile" component={Profile}></Route>
    </Switch>
  );
}

export default Pages;
