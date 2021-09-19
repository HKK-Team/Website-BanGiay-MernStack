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
import AdminLogin from './../admins/pages/AdminLogins/AdminLogins'
function App() {
  return (
    <Router>
      <Route exact path="/Admin" component={AdminLogin}></Route>
      <Topbar />
      <div className="containerAdmin">
        <Sidebar /> {/* Menu nav */}
        {/* Link url */}
        <Switch> 
          <Route exact path="/Dashboard">
            <Home />
          </Route>
          <Route path="/usersAdmin">
            <UserList />
          </Route>
          <Route path="/userAdmin/:userAdminId">
            <User />
          </Route>
          <Route path="/newUserAdmin">
            <NewUser />
          </Route>
          <Route path="/productsAdmin">
            <ProductList />
          </Route>
          <Route path="/productAdmin/:productAdminId">
            <Product />
          </Route>
          <Route path="/newproductAdmin">
            <NewProduct />
          </Route>
        </Switch>
        {/* Link url */}
      </div>
    </Router>
    
  );
}

export default App;