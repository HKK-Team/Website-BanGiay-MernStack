import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./page/Home/Home";
import ProductMale from'./page/Product/ProductMale/ProductMale'
import ProductDetail from './page/ProductDetails/ProductDetails'
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
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
