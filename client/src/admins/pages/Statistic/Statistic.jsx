import React from "react";
import Chart from "../../components/Chart/Chart";
import "./Statistic.css";
import { getdata } from "../../TotalData";

export default function Statistic() {
  return (
    <div className="Statistic">
      <Chart
        data={getdata.monthlyRevenueData}
        title="Phân tích doanh thu các tháng (VND)"
        grid
        dataKey="total"
        color='#5550bd'
      />
      <Chart
        data={getdata.chartbyqui}
        title="Phân tích doanh thu các quý (VND)"
        grid
        dataKey="total"
        color="green"
      />
      <Chart
        data={getdata.chartbyyear}
        title="Phân tích doanh thu các năm gần đây (VND)"
        grid
        dataKey="total"
        color="red"
      />
    </div>
  );
}
