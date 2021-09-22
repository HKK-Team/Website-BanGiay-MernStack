import Chart from "../../components/Chart/Chart";
import { getdata } from "../../TotalData";

export default function Statistic() {
  return (
    <div className="Statistic">
      <Chart
        data={getdata.monthlyRevenueData}
        title="Phân tích doanh thu các tháng (USD)"
        grid
        dataKey="total"
        color="#5550bd"
      />
      <Chart
        data={getdata.quarterlyRevenueData}
        title="Phân tích doanh thu các quý (USD)"
        grid
        dataKey="total"
        color="green"
      />
      <Chart
        data={getdata.monthlyRevenueData}
        title="Phân tích doanh thu các năm gần đây (USD)"
        grid
        dataKey="total"
        color="red"
      />
    </div>
  );
}
