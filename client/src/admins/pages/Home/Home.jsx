import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import  React from "react"; 
// import { GlobalState } from "../../../GlobalState";
import { getdata } from "../../TotalData";
import { mostRecentTransactionDate } from "../../TotalData";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
var mostRecentTransaction = [...mostRecentTransactionDate];


export default function Home() {

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={getdata.monthlyRevenueData}
        color="#5550bd"
        title="Phân tích tần suất hoạt động của người dùng"
        grid
        dataKey="total"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Giao dịch mới nhất</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Khách hàng</th>
              <th className="widgetLgTh">Ngày</th>
              <th className="widgetLgTh">Trị giá</th>
              <th className="widgetLgTh">Mã hóa đơn</th>
              <th className="widgetLgTh">Trạng thái</th>
            </tr>
            {mostRecentTransaction}
          </table>
        </div>
      </div>
    </div>
  );
}
