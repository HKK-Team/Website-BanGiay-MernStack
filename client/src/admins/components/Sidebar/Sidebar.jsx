import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import GetData from "../../TotalData";


export default function Sidebar() {
  GetData();// hàm getall dữ liệu
  return (
    <div className="sidebarAdmin">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Bảng điều khiển</h3>
          <ul className="sidebarList">
            <NavLink to="/DashBoard" className="link">
              <li className="sidebarListItem activeAdmin">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <NavLink to="/MarketAnalysis" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Phân tích
            </li>
            </NavLink>
            <NavLink to="/SalesAnalysis" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Bán hàng
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/usersAdmin" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Người dùng
              </li>
            </NavLink>
            <NavLink to="/productsAdmin" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Các sản phảm
              </li>
            </NavLink>
            <NavLink to="/BillsAdmin" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Giao dịch
              </li>
            </NavLink>
            <NavLink to="/OrderBrowsing" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Duyệt đơn hàng
              </li>
            </NavLink>
            <NavLink to="/Statistic" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Báo cáo
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Thông báo</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <NavLink to="/DashBoardMessenger" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Nhân viên</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Quản lý
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Phân tích
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Báo cáo
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
