import React, { useContext } from "react";
import "./Navbar.css";
import logo from "./../../../../images/images/CôngtyTNHHABC.png";
import logoMember from "./../../../../images/images/member.webp";
import { Link } from "react-router-dom"; // thư viện dùng để lưu active link
import { GlobalState } from "../../../../GlobalState";
import axios from "axios";

export default function Navbar(props) {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [profile] = state.userAPI.user;
  // Logout
  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  // Logged
  const loggedRouter = () => {
    return (
      <div className="account-moble">
        <img src={logoMember} alt="" />
        <p>
          <a href className="XinChao">
            Xin chào!
          </a>{" "}
          <Link to="/Profile"> {profile.lastname} {profile.firstname}</Link>
        </p>
        <Link to="/" onClick={logoutUser} className="link">
          Đăng xuất
        </Link>
      </div>
    );
  };
  // not logged in
  const nologgedRouter = () => {
    return (
      <div className="account-moble">
        <img src={logoMember} alt="" />
        <p>
          <a href className="XinChao">
            Xin chào!
          </a>{" "}
          <Link to="/Login">Đăng Nhập</Link>
        </p>
        <Link to="/Register" className="link">
          Đăng Ký
        </Link>
      </div>
    );
  };
  const [menus2] = state.menu2API.menus2;
  return (
    <div id="navbar">
      <div className="logo-nav">
        <img src={logo} alt="" />
        <span className="back" onClick={props.event}>
          <i class="fas fa-chevron-left"></i>
        </span>
      </div>
      {/* login */}
      {isLogged ? loggedRouter() : nologgedRouter()}
      {/* menu */}
      <div className="mplus-menu">
        <ul className="mm-panel">
          {menus2.map((item) => (
            <li key={item._id}>
              <Link to={item.slug}>
                <a href>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
