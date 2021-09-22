// file để xử lý dữ liệu trước khi chuyển qua TotalData
import { GlobalState } from "../GlobalState";
import {useContext } from "react";
import TotalData from "./TotalData"
export default function GetData(){
    const state = useContext(GlobalState);
    const [allproduct] = state.productDetailApi.productDetail;
    allproduct.map((item) =>(
        <TotalData
            id = {item._id}
            idCategory_product = {item.idCategory_product}
            name = {item.nameProduct}
            image = {item.image}
            nameCategoryProduct = {item.nameCategoryProduct}
            color = {item.color}
            price = {item.price}
        />
    ))
}
