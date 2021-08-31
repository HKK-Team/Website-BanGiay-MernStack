import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./page/Home/Home";
import ProductMale from "./page/Product/ProductMale/ProductMale";
import ProductFemale from "./page/Product/ProductFemale/ProductFemale";
import ProductGosto from'./page/Product/ProductGosto/ProductGosto'
import ProductBoys from './page/Product/ProductBoys/ProductBoys'
import ProductGirls from './page/Product/ProductGirls/ProductGirls'
import ProductAccessory from'./page/Product/ProductAccessory/ProductAccessory'
import ProductDetails from "./page/ProductDetails/ProductDetails";
function App() {
  return (
    // Định tuyển path cho các pages . sử dụng react dom router
    <Router>
      <Switch>
        {/* VD : localhost:3000/header */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/ProductMale" component={ProductMale}></Route>
        <Route exact path="/ProductFemale" component={ProductFemale}></Route>
        <Route exact path="/ProductGosto" component={ProductGosto}></Route>
        <Route exact path="/ProductBoys" component={ProductBoys}></Route>
        <Route exact path="/ProductGirls" component={ProductGirls}></Route>
        <Route exact path="/ProductAccessory" component={ProductAccessory}></Route>
        <Route exact path="/ProductDetails" component={ProductDetails}></Route>
      </Switch>
    </Router>
  );
}

export default App;
