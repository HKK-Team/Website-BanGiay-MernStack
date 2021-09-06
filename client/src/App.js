import {
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react';
// import Home from "./page/Home/Home";
import { DataProvider } from "./GlobalState";
// import ProductFemale from "./page/Product/ProductFemale/ProductFemale";
// import ProductBoys from "./page/Product/ProductBoys/ProductBoys";
// import ProductGirls from "./page/Product/ProductGirls/ProductGirls";
// import ProductGosto from "./page/Product/ProductGosto/ProductGosto";
// import ProductAccessory from "./page/Product/ProductAccessory/ProductAccessory";
import Pages from "./page/Pages";
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
  <Provider store = {store}>
      <DataProvider>
        <Router>
          <Pages>
            {/* VD : localhost:3000/header */}
            <Route exact path="/Cart" component={Cart}></Route>
            <Route exact path="/Favorite" component={Favorite}></Route>
            <Route exact path="/Register" component={Register}></Route>
            <Route exact path="/dang-nhap" component={Login}></Route>
            <Route exact path="/ProductDetail" component={ProductDetail}></Route>
          </Pages>
        </Router> 
      </DataProvider>
    </Provider>
  );
}

export default App;
