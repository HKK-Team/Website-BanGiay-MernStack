import { useContext } from "react";
import MostPopularProducts from "./components/MostPopularProducts/MostPopularProducts";
import SellingProducts from "./components/SellingProducts/SellingProducts";
import WidgetLg from './components/WidgetLg/WidgetLg'
import { GlobalState } from "../GlobalState";

export var getdata ={}; // khởi tạo array object chứa các mảng dữ liệu 
export default function GetData(){
    const state = useContext(GlobalState);
    const [chartbymonth] = state.chartAdminAPI.chartbymonth;
    const [allproduct] = state.productDetailApi.productDetail;
    const [alluser] = state.alluserApi.allusers;
    const [allpayments] = state.paymentsApi.payments;
    const [chartbyyear] = state.chartAdminAPI.chartbyyear;
    const [chartbyqui] =  state.chartAdminAPI.chartbyqui;
    const [chartbyproducthot]  = state.chartAdminAPI.chartbyproducthot;
    const [chartbyproducthotquy1 ] = state.chartAdminAPI.chartbyproducthotquy1;
    const [chartbyproducthotquy2 ] = state.chartAdminAPI.chartbyproducthotquy2;
    const [chartbyproducthotquy3 ] = state.chartAdminAPI.chartbyproducthotquy3;
    const [chartbyproducthotquy4] = state.chartAdminAPI.chartbyproducthotquy4;
    const [chartbycountuser]  = state.chartAdminAPI.chartbycountuser;

    getdata ={
      monthlyRevenueData : [...chartbymonth],
      quarterlyRevenueData : [...chartbymonth],
      productRows : [...allproduct],
      allusers : [...alluser],
      payments : [...allpayments],
      chartbyyear:[...chartbyyear],
      chartbyqui:[...chartbyqui],
      chartbyproducthot:[...chartbyproducthot],
      chartbyproducthotquy1:[...chartbyproducthotquy1],
      chartbyproducthotquy2:[...chartbyproducthotquy2],
      chartbyproducthotquy3:[...chartbyproducthotquy3],
      chartbyproducthotquy4:[...chartbyproducthotquy4],
      chartbycountuser:[...chartbycountuser]
    }   
    return getdata;
}
// dữ liêu sản phẩm bán chạy nhất
export const sellingProductsData = [];
for (let i = 0; i < 5; i++) {
  sellingProductsData.push(
  <SellingProducts
    image="https://product.hstatic.net/1000230642/product/03900cam__2__5ed808cd7e35480dbb0340cf7e57c71a_1024x1024.jpg"
    codeproduct="DSMH03900CAM44"
    totalquality={200}
    price={990000}
  />
);
}
// dữ liêu sản phẩm yêu thích nhất
export const mostPopularProductsData = [];
for (let i = 0; i < 5; i++) {
  mostPopularProductsData.push(
    <MostPopularProducts
    image="https://product.hstatic.net/1000230642/product/03900cam__2__5ed808cd7e35480dbb0340cf7e57c71a_1024x1024.jpg"
    codeproduct="DSMH03900CAM44"
    totallike={2000}
    totalquality={200}
    price={990000}
  />
);
}
// dữ liêu giao dịch gần nhất
export const mostRecentTransactionDate = [];
for (let i = 0; i < 5; i++) {
  mostRecentTransactionDate.push(
    <WidgetLg
    fullname="Đoàn Minh Khánh"
    date ="20-09-2001"
    totalprice={20000}
    codebill= "121231231212"
  />
);
}