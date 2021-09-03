import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Redirect,
} from "react-router-dom";
import Home from "./page/Home/Home";
import ProductMale from'./page/Product/ProductMale/ProductMale'
import ProductDetail from './page/ProductDetails/ProductDetails'
import Cart from "./page/Cart/Cart";
import Favorite from "./page/Favorite/Favorite";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";
import { DataProvider } from "./GlobalState";
// import ProductMale from "./page/Product/ProductMale/ProductMale";
// import ProductFemale from "./page/Product/ProductFemale/ProductFemale";
// import ProductBoys from "./page/Product/ProductBoys/ProductBoys";
// import ProductGirls from "./page/Product/ProductGirls/ProductGirls";
// import ProductGosto from "./page/Product/ProductGosto/ProductGosto";
// import ProductAccessory from "./page/Product/ProductAccessory/ProductAccessory";
// import ProductDetails from "./page/ProductDetails/ProductDetails";
import Pages from "./page/Pages";
function App() {
  return (
    // Định tuyển path cho các pages . sử dụng react dom router
    <DataProvider>
      <Router>
        <Pages/>
      </Router>
    </DataProvider>
  );
}

export default App;
