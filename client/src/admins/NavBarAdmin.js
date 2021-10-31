import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import React, { useContext } from "react";
import "./app.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import BillList from "./pages/BillList/BillList";
import AdminLogin from "../admins/pages/AdminLogins/AdminLogins";
import Statistic from "./pages/Statistic/Statistic";
import MarketAnalysis from "./pages/MarketAnalysis/MarketAnalysis";
import SalesAnalysis from "./components/SalesAnalysis/SalesAnalysis";
import { GlobalState } from "../GlobalState";
import NotFound from "../component/utils/not_found/NotFound";
import OrderBrowsing from "../admins/pages/OrderBrowsing/OrderBrowsing";
import DashBoardMessengerPage from "./pages/DashBoardMessengerPage/DashBoardMessengerPage";
function NavBarAdmin() {
  const state = useContext(GlobalState);
  const [isLogin] = state.adminApi.isLogin;
  return (
    <Router>
        <Route exact path="/Admin" component={AdminLogin} />
      <Topbar />
      <div className="containerAdmin">
        <Sidebar /> {/* Menu nav */}
        {/* Link url */}
        <Switch>
          <Route
            exact
            path="/Statistic"
            component={isLogin ? Statistic : NotFound}
          />
          <Route
            exact
            path="/SalesAnalysis"
            component={isLogin ? SalesAnalysis : NotFound}
          />
          <Route
            exact
            path="/MarketAnalysis"
            component={isLogin ? MarketAnalysis : NotFound}
          />
          <Route
            exact
            path="/Dashboard"
            component={isLogin ? Home : NotFound}
          />
          <Route
            exact
            path="/usersAdmin"
            component={isLogin ? UserList : NotFound}
          />
          <Route
            exact
            path="/userAdmin/:userAdminId"
            component={isLogin ? User : NotFound}
          />
          <Route
            exact
            path="/newUserAdmin"
            component={isLogin ? NewUser : NotFound}
          />
          <Route
            exact
            path="/productsAdmin"
            component={isLogin ? ProductList : NotFound}
          />
          <Route
            exact
            path="/productAdmin/:productAdminId"
            component={isLogin ? Product : NotFound}
          />
          <Route
            exact
            path="/newproductAdmin"
            component={isLogin ? NewProduct : NotFound}
          />
          <Route
            exact
            path="/BillsAdmin"
            component={isLogin ? BillList : NotFound}
          />
          <Route
            exact
            path="/OrderBrowsing"
            component={isLogin ? OrderBrowsing : NotFound}
          />
          <Route
            exact
            path="/DashBoardMessenger"
            component={isLogin ? DashBoardMessengerPage : NotFound}
          />
        </Switch>
        {/* Link url */}
      </div>
    </Router>
  );
}

export default NavBarAdmin;
