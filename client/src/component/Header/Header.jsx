/* eslint-disable no-unused-vars */
import "./Header.css";
import Vi from "../../images/images/vi.png";
import Logo from "../../images/images/CôngtyTNHHABC.png";
import React, { useEffect, useState, useContext, Fragment } from "react";
import { GlobalState } from "../../GlobalState";
import { NavLink } from "react-router-dom"; // thư viện dùng để lưu active link
import { Link } from "react-router-dom"; // thu vien de chuyen trang ko bi load
import axios from "axios";
import Navbar from "./Sidebar/Navbar/Navbar";

export default function Header(props) {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [profile] = state.userAPI.user;
  //get id user current
  const [iduser, setiduser] = state.userAPI.iduser;
  const [search, setSearch] = state.searchProductApi.search;
  const [productFavorites, setproductFavorites] =
    state.productFavorites.productFavorites;
  const detail = productFavorites.filter((item) => {
    // tìm và trả về đối tượng chứa thuộc tính của giày
    return item.iduser === iduser;
  });
  const [productCarts, setproductCarts] = state.productCarts.productCarts;
  // Logout
  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  // Logged
  const loggedRouter = () => {
    return (
      <>
        <span>
          <Link to="/Profile" className="header_top-link">
            {profile.lastname} {profile.firstname}
          </Link>
        </span>
        <span>
          <Link to="/" onClick={logoutUser} className="header_top-link">
            Logout
          </Link>
        </span>
      </>
    );
  };
  // not logged in
  const nologgedRouter = () => {
    return (
      <>
        <span>
          <Link to="/Login" className="header_top-link">
            Đăng nhập
          </Link>
        </span>
        <span>
          <Link to="/Register" className="header_top-link">
            Đăng ký
          </Link>
        </span>
      </>
    );
  };
  // Logged
  const IsFavorite = () => {
    return (
      <>
        <Link to="/favorite" className="" style={{ color: "black" }}>
          {" "}
          <i class="far fa-heart"></i>{" "}
          <span className="Cart_count">{detail.length}</span>
        </Link>
      </>
    );
  };
  // no logged in
  const NotFavorite = () => {
    return (
      <>
        <Link to="/Login" className="" style={{ color: "black" }}>
          {" "}
          <i class="far fa-heart"></i> <span className="Cart_count">0</span>
        </Link>
      </>
    );
  };

  const [small, setSmall] = useState(false);

  const [menus] = state.menu1API.menus; // lấy dữ liệu từ model menus trong db
  const [menus2] = state.menu2API.menus2;

  useEffect(() => {
    // tạo thanh header cố định khi scroll
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 10)
      );
    }
  });
  //luôn luôn xuất hiện đầu trang khi load page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Đóng mở sidebar 
  const open = () => {
      document.getElementById("navbar").style.transform="translate3d(300px,0px,0px)";
  };
  //  auto đóng sidebar
  useEffect(() => {
    var lock = setInterval(function () {
      if (document.getElementById("root").clientWidth > 1024 ) {
        document.getElementById("navbar").style.transform="translate3d(0px,0px,0px)";
      } 
    });
    return () => clearInterval(lock);
  }, []);
  return (
    <Fragment>
      <header>
        <div className="header_top">
   
          {/* <header_top> */}
          <div className="container width-1280">
            {/* <row> */}
            <div className="row">
              <div className="header_top-wrapper">
                {/* <header_top-list>*/}
                <ul className="header_top-list">
                  {/* <load dữ liệu >*/}
                  {menus.map((item) => (
                    <li className="header_top-item" key={item._id}>
                      <Link to={item.slug} className="header_top-link">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  <li className="header_top-item">
                    {" "}
                    {/*check logged */}
                    {isLogged ? loggedRouter() : nologgedRouter()}
                  </li>
                  <img src={Vi} alt="Viet Nam" className="header_top-VN" />
                </ul>
                {/*</header_top-list> */}
              </div>
            </div>
            {/* </header_top-wrapper> */}
            {/* </container> */}
          </div>
          {/* </row> */}
        </div>
        {/* </ header_top>  */}

        {/* < header_bottom>  */}
        <div className={`header_bottom ${small ? "small" : ""}`}>
        <Navbar/>
          {/* < container>  */}
          <div className="container width-1280">
            {/* <row>  */}
            <div className="row">
              {/* header_bottom-wrapper */}
              <div className="header_bottom-wrapper">
                {/* <header_bottom-icon>  */}
                <div id="toggle">
                  <i class="fas fa-bars" onClick={open}></i>
                </div>
                <div className="header_bottom-icon">
                  <img src={Logo} alt="/" />
                </div>
                <nav className="header_bottom-menu">
                  <ul className="header_bottom-list">
                    {menus2.map((item) => (
                      <li className="header_bottom-item" key={item._id}>
                        <NavLink
                          activeClassName="active"
                          to={item.slug}
                          className="header_bottom-link"
                        >
                          {item.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="header_bottom-search">
                  <form action>
                    <input
                      type="text"
                      placeholder="Nhập thông tin cần tìm..."
                      className="header_bottom-search-input"
                      name="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Link to="/Search">
                      <button
                        type="submit"
                        className="header_bottom-search-button"
                      >
                        <i class="fas fa-search"></i>
                      </button>
                    </Link>
                  </form>
                </div>
                <div className="header_bottom-cart">
                  <span className="header_bottom-cart-favorite">
                    {isLogged ? IsFavorite() : NotFavorite()}
                  </span>
                  <span className="header_bottom-cart-cart">
                    <Link to="/cart" style={{ color: "black" }}>
                      <i class="fas fa-shopping-cart">
                        <span className="Cart_count">
                          {productCarts.length}
                        </span>
                      </i>
                    </Link>
                    {/* Thẻ Cart ẩn  */}
                    <div className="header_bottom-cart-empty">
                      <div className="Cart_empty">
                        <span>Hiện chưa có sản phẩm.</span>
                      </div>
                      <span className="line"></span>
                      <div className="Cart_TotalPrime">
                        <span className="Cart_TotalPrime-title">
                          Tổng Tiền:
                        </span>
                        <span className="Cart_TotalPrime-prime">0 đ</span>
                      </div>
                      <div className="Cart_button">
                        <Link to={props.cart} className="Cart_button-watch">
                          XEM GIỎ HÀNG
                        </Link>
                        <Link to={props.payment} className="Cart_button-pay">
                          THANH TOÁN
                        </Link>
                      </div>
                    </div>
                    {/* Đóng Thẻ cart ẩn */}
                  </span>
                </div>
                {/* header_bottom-icon */}
              </div>
              {/* header_bottom-wrapper */}
            </div>
            {/* </row> */}
          </div>
          {/* </container> */}
        </div>
        {/* </header_bottom> */}
      </header>
    </Fragment>
  );
}
