import { useContext } from "react";
import MostPopularProducts from "./components/MostPopularProducts/MostPopularProducts";
import SellingProducts from "./components/SellingProducts/SellingProducts";
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
    const [hotproduct] =  state.favAndHotAPI.hotproduct;
    const [favproduct] =  state.favAndHotAPI.favproduct;
    const [orderbrowsings] = state.paymentsApi.orderbrowsings;

    var  sellingProductsData =[]; 
    sellingProductsData.push(
      hotproduct.slice(0, 5).map((item) => (
        <SellingProducts key={item._id}
        image={item._id.image}
        codeproduct={item._id.id_product}
        price={item.total}
        totalquality={item.count}
        />
      ))
  );

  // dữ liêu sản phẩm yêu thích nhất
  var mostPopularProductsData = [];
  mostPopularProductsData.push(
    favproduct.slice(0, 5).map((item) => (
      <MostPopularProducts key={item._id}
      image={item._id.image}
      codeproduct={item._id._id}
      totallike={item._id.count}
      totalquality={item.quantity}
      price={item.total}
      />
    ))
);
    

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
      chartbycountuser:[...chartbycountuser],
      sellingProductsData:sellingProductsData,
      mostPopularProductsData:mostPopularProductsData,
      orderbrowsing : [...orderbrowsings],
    }   
    return getdata;
}
// khởi tạo dữ liêu sản phẩm dạng biểu đồ 
export const productData = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 3000,
  },
  {
    name: "Mar",
    Sales: 5000,
  },
];