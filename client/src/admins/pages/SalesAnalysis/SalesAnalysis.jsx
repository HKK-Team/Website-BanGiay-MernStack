import React from "react";
import Chart from "../../components/Chart/Chart";
import { monthlyRevenueData } from "../../TotalData";
import { quarterlyRevenueData } from "../../TotalData";
import { annualRevenueData } from "../../TotalData";
import "./SalesAnalysis.css";

export default function SalesAnalysis() {
  return (
    <div className="SalesAnalysis">
      <Chart
        data={monthlyRevenueData}
        title="Phân tích doanh thu các tháng (USD)"
        grid
        dataKey="Doanh Thu"
        color='#5550bd'
      />
      <Chart
        data={quarterlyRevenueData}
        title="Phân tích doanh thu các quý (USD)"
        grid
        dataKey="Sales"
        color="green"
      />
      <Chart
        data={annualRevenueData}
        title="Phân tích doanh thu các năm gần đây (USD)"
        grid
        dataKey="Sales"
        color="red"
      />
    </div>
  );
}
