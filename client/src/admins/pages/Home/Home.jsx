import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import React, { useState } from "react";
import { getdata } from "../../TotalData";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
  const [payment] = useState(getdata.payments);
  // get the last 20 bills
  var arr = [];
  arr.push(
    payment
      .slice(-20)
      .reverse()
      .map((item) => (
        <WidgetLg
          fullname={item.fullName}
          date={item.orderDate}
          totalprice={item.total_price}
          codebill={item._id}
          status={item.status}
        />
      ))
  );

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={getdata.chartbycountuser}
        color="#5550bd"
        title="Phân tích tần suất hoạt động của người dùng"
        grid
        dataKey="User"
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
            {arr}
          </table>
        </div>
      </div>
    </div>
  );
}
