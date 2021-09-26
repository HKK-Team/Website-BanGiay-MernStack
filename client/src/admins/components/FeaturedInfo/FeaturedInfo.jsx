import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { GlobalState } from "../../../GlobalState";
import { useContext } from "react";

// Thống kê doanh thu
export default function FeaturedInfo() {
  const state = useContext(GlobalState);
  const [widget] = state.widgetAPI.widget;
  const [widgetbyyear] = state.widgetAPI.widgetbyyear;
  const [chartbyyear] = state.chartAdminAPI.chartbyyear;

  //get tổng tiền năm hiện tại
  var currentyear;
  for (let i = chartbyyear.length - 1; i >= 0; i--) {
    currentyear = chartbyyear[i].total;
    break;
  }
  // chuyển vnd thành usd
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  var iconwidget;
  if (widget[0].total / widget[1].total >= 0) {
    iconwidget = <ArrowUpward className="featuredIcon" />;
  } else {
    iconwidget = <ArrowDownward className="featuredIcon negative" />;
  }

  var iconwidget1;
  if (widget[0].count - widget[1].count >= 0) {
    iconwidget1 = <ArrowUpward className="featuredIcon" />;
  } else {
    iconwidget1 = <ArrowDownward className="featuredIcon negative" />;
  }

  var iconwidget2;
  if (widgetbyyear[0].total / currentyear >= 0) {
    iconwidget2 = <ArrowUpward className="featuredIcon" />;
  } else {
    iconwidget2 = <ArrowDownward className="featuredIcon negative" />;
  }

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Doanh Thu</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {widget[0].total.toLocaleString()}
          </span>
          <span className="featuredMoneyRate">
            {(widget[0].total / widget[1].total).toString().slice(0, 4) + "%"}{" "}
            {iconwidget}
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Bán hàng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{widget[0].count}</span>
          <span className="featuredMoneyRate">
            {widget[0].count - widget[1].count + " sản phẩm"} {iconwidget1}
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Trị giá</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{formatter.format(widgetbyyear[0].total/230000)}</span>
          <span className="featuredMoneyRate">
            {(widgetbyyear[0].total / currentyear).toString().slice(0, 4) + "%"}{" "}
            {iconwidget2}
          </span>
        </div>
        <span className="featuredSub">So với năm trước</span>
      </div>
    </div>
  );
}
