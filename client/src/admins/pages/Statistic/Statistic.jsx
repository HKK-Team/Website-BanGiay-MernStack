
import Chart from "../../components/Chart/Chart";
import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState"; 

export default function Statistic() {
  const state = useContext(GlobalState);
  const [chartbymonth, setchartbymonth] = state.chartAPI.chartbymonth;
  return (
    <div className="Statistic">
      <Chart
        data={chartbymonth}
        title="Phân tích doanh thu các tháng (USD)"
        grid
        dataKey="total"
        color='#5550bd'
      />
      <Chart
        data={chartbymonth}
        title="Phân tích doanh thu các quý (USD)"
        grid
        dataKey="total"
        color="green"
      />
      <Chart
        data={chartbymonth}
        title="Phân tích doanh thu các năm gần đây (USD)"
        grid
        dataKey="total"
        color="red"
      />
    </div>
  );
}
