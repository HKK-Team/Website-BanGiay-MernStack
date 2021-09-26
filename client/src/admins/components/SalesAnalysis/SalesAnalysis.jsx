import Chart from "../../components/Chart/Chart";
import { getdata } from "../../TotalData";

export default function SalesAnalysis() {
  console.log(getdata.sellingProductsData);
    return (
        <div className="MarketAnaly">
        <Chart
        data={getdata.chartbycountuser}
          color="#5550bd"
          title="Phân tích tần suất hoạt động của người dùng"
          grid
          dataKey="User"
        />
        <div className="homeWidgets">
          {/* sản phẩm bán chạy */}
          <div className="widgetLg">
            <h3 className="widgetLgTitle">Sản phẩm bán chạy nhất</h3>
            <table className="widgetLgTable">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">MÃ sản phẩm</th>
                <th className="widgetLgTh">Số lượng</th>
                <th className="widgetLgTh">Trị giá</th>
                <th className="widgetLgTh">Trạng thái</th>
              </tr>
              {getdata.sellingProductsData}
            </table>
          </div>
          {/* sản phâm yêu thích nhất */}
          <div className="widgetLg">
            <h3 className="widgetLgTitle">Sản phẩm được yêu thích nhất</h3>
            <table className="widgetLgTable">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">Mã sản phẩm</th>
                <th className="widgetLgTh">Lượt thích</th>
                <th className="widgetLgTh">Bán được</th>
                <th className="widgetLgTh">Trị giá</th>
                <th className="widgetLgTh">Trạng thái</th>
              </tr>
              {getdata.mostPopularProductsData}
            </table>
          </div>
        </div>
      </div>
    )
}
