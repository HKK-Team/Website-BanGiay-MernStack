import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ProductMale from "../page/Product/ProductMale/ProductMale";
import ProductFemale from "../page/Product/ProductFemale/ProductFemale";
import ProductBoys from "../page/Product/ProductBoys/ProductBoys";
import ProductGirls from "../page/Product/ProductGirls/ProductGirls";
import ProductGosto from "../page/Product/ProductGosto/ProductGosto";
import ProductAccessory from "../page/Product/ProductAccessory/ProductAccessory";
import ProductDetails from "../page/ProductDetails/ProductDetails";
import Login from './Login/Login';
import Register from './Register/Register'
import Home from "./Home/Home";
function Pages() {
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
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/Register" component={Register}></Route>
        </Switch>
    )
}

export default Pages