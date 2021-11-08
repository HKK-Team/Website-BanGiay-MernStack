import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { GlobalState } from "../../../GlobalState";
import { useContext } from "react";

// Thống kê doanh thu
export default function FeaturedInfo() {
  const state = useContext(GlobalState);
  const [widget] = state.widgetAPI.widget;
  const [widgetbyyear] = state.widgetAPI.widgetbyyear;


  // chuyển vnd thành usd
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  var iconwidget;
  var totalcurrentmonth;
  for(let i = 0; i < widget.length;i++){
    totalcurrentmonth = widget[i].total;
    break;
  }
  var totalprevmonth;
  for(let i = 1; i < widget.length;i++){
    totalprevmonth = widget[i].total;
    break;
  }

  if ((totalcurrentmonth -  totalprevmonth) / totalprevmonth >= 0) {
    iconwidget = <ArrowUpward className="featuredIcon" />;
  } else {
    iconwidget = <ArrowDownward className="featuredIcon negative" />;
  }

  var iconwidget1;
  var countcurrentmonth;
  for(let i = 0; i < widget.length;i++){
    countcurrentmonth = widget[i].count;
    break;
  }
  var countprevmonth;
  for(let i = 1; i < widget.length;i++){
    countprevmonth = widget[i].count;
    break;
  }
  if (countcurrentmonth - countprevmonth >= 0) {
    iconwidget1 = <ArrowUpward className="featuredIcon" />;
  } else {
    iconwidget1 = <ArrowDownward className="featuredIcon negative" />;
  }

  var iconwidget2;
  var totalcurrentyear;
  for(let i = 0; i < widgetbyyear.length;i++){
    totalcurrentyear = widgetbyyear[i].total;
    break;
  }
    var totalprevyear;
  for(let i = 1; i < widgetbyyear.length;i++){
    totalprevyear = widgetbyyear[i].total;
    break;
  }
  if ((totalcurrentyear - totalprevyear) / totalprevyear >= 0) {
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
            {totalcurrentmonth?.toLocaleString()}
          </span>
          <span className="featuredMoneyRate">
             {/* nếu tháng hiên tại thấp hơn tháng trước */}
            {totalcurrentmonth <= totalprevmonth &&((1-(totalcurrentmonth /  totalprevmonth))*100).toString().slice(0, 4) + "%"}{" "}
             {/* nếu tháng hiên tại lớn hơn tháng trước */}
             {totalcurrentmonth > totalprevmonth &&((totalcurrentmonth /  totalprevmonth)*100).toString().slice(0, 4) + "%"}{" "}
            {iconwidget}
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Bán hàng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{countcurrentmonth}</span>
          <span className="featuredMoneyRate">
            {(countcurrentmonth - countprevmonth) + " sản phẩm"} {iconwidget1}
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Trị giá</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{formatter.format(totalcurrentyear/22765)}</span>
          <span className="featuredMoneyRate">
             {/* nếu năm hiên tại thấp hơn năm trước */}
            {totalcurrentyear <= totalprevyear &&((1-(totalcurrentyear /  totalprevyear))*100).toString().slice(0, 4) + "%"}{" "}
             {/* nếu năm hiên tại lớn hơn năm trước */}
             {totalcurrentyear > totalprevyear &&((totalcurrentyear /  totalprevyear)*100).toString().slice(0, 4) + "%"}{" "}
            {iconwidget2}
          </span>
        </div>
        <span className="featuredSub">So với năm trước</span>
      </div>
    </div>
  );
}
