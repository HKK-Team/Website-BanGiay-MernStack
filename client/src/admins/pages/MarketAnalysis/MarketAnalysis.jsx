import "./MarketAnalysis.css";
import {
  itemTypeRevenueData_Precious1,
  itemTypeRevenueData_Precious2,
  itemTypeRevenueData_Precious3,
  itemTypeRevenueData_Precious4,
  bestSellingItemData,
} from "../../TotalData";
import Chart from "../../components/Chart/Chart";
import { getdata } from "../../TotalData";

// phân tích
export default function MarketAnalysis() {
  return (
    <div className="MarketAnaly">
      <Chart
        data={getdata.chartbyproducthot}
        color="#5550bd"
        title="Thống kê loại mặt hàng bán chạy (sản phẩm)"
        grid
        dataKey="total"
      />
      <Chart
        data={getdata.chartbyproducthotquy1}
        color="#7FFF00"
        title="Thống kê doanh thu các mặt hàng quý 1 (USD)"
        grid
        dataKey="total"
      />
      <Chart
        data={getdata.chartbyproducthotquy2}
        color="#E74C3C"
        title="Thống kê doanh thu các mặt hàng quý 2 (USD)"
        grid
        dataKey="total"
      />
      <Chart
        data={getdata.chartbyproducthotquy3}
        color="#F1C40F"
        title="Thống kê doanh thu các mặt hàng quý 3 (USD)"
        grid
        dataKey="total"
      />
      <Chart
        data={getdata.chartbyproducthotquy4}
        color="#ABB2B9"
        title="Thống kê doanh thu các mặt hàng quý 4 (USD)"
        grid
        dataKey="total"
      />
    </div>
  );
}
