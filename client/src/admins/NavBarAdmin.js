import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
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
import AdminLogin from "./../admins/pages/AdminLogins/AdminLogins";
import Statistic from "./pages/Statistic/Statistic";
import MarketAnalysis from "./pages/MarketAnalysis/MarketAnalysis";
import SalesAnalysis from "./components/SalesAnalysis/SalesAnalysis";
function NavBarAdmin() {
  return (
    <Router>
      <Route exact path="/Admin" component={AdminLogin} />
      <Topbar />
      <div className="containerAdmin">
        <Sidebar /> {/* Menu nav */}
        {/* Link url */}
        <Switch>
          <Route exact path="/Statistic" component={Statistic} />
          <Route exact path="/SalesAnalysis" component={SalesAnalysis} />
          <Route exact path="/MarketAnalysis" component={MarketAnalysis} />
          <Route exact path="/Dashboard" component={Home} />
          <Route exact path="/usersAdmin" component={UserList} />
          <Route exact path="/userAdmin/:userAdminId" component={User} />
          <Route exact path="/newUserAdmin" component={NewUser} />
          <Route exact path="/productsAdmin" component={ProductList} />
          <Route
            exact
            path="/productAdmin/:productAdminId"
            component={Product}
          />
          <Route exact path="/newproductAdmin" component={NewProduct} />
          <Route exact path="/BillsAdmin" component={BillList} />
        </Switch>
        {/* Link url */}
      </div>
    </Router>
  );
}

export default NavBarAdmin;
