import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./page/Home/Home";
import ProductMale from'./page/Product/ProductMale/ProductMale'
import ProductDetail from './page/ProductDetails/ProductDetails'
import Cart from "./page/Cart/Cart";
import Favorite from "./page/Favorite/Favorite";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";
import { DataProvider } from "./GlobalState";

function App() {
  return (
    // Định tuyển path cho các pages . sử dụng react dom router
    <DataProvider>
      <Router>
        <Switch>
          {/* VD : localhost:3000/header */}
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/ProductMale" component={ProductMale}></Route>
          <Route exact path="/ProductDetail" component={ProductDetail}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
          <Route exact path="/Favorite" component={Favorite}></Route>
          <Route exact path="/Register" component={Register}></Route>
          <Route exact path="/Login" component={Login}></Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
