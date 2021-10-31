/* eslint-disable react-hooks/exhaustive-deps */
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
import CatalogLeft from "../Catalog/CatalogLeft/CatalogLeft";

export default function Header(props) {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [profile] = state.userAPI.user;
  //get id user current
  const [iduser] = state.userAPI.iduser;
  const [search, setSearch] = state.searchProductApi.search;
  const [productFavorites] = state.productFavorites.productFavorites;
  const detail = productFavorites.filter((item) => {
    // tìm và trả về đối tượng chứa thuộc tính của giày
    return item.iduser === iduser;
  });

  //get values form input search
  const [statetemp, setstatetemp] = useState("");
  function handleChange(e) {
    setstatetemp(e.toString());
  }
  // event enter then begin search
  function eventSearch() {
    if (statetemp === "") {
      setSearch("Không tìm thấy sản phẩm!!!");
    } else {
      var temp = statetemp[0].toUpperCase();
      for (let i = 1; i < statetemp.length; i++) {
        let code = statetemp.charCodeAt(i);
        let codeprev = statetemp.charCodeAt(i - 1);
        if (code >= 97 && code <= 122 && codeprev === 32) {
          code -= 32;
        } else if (statetemp[i] === "đ") {
          temp += "Đ";
          continue;
        }
        temp += String.fromCharCode(code);
      }
      setSearch(temp);
    }
  }

  //create variable count for carts
  var storedArray = JSON.parse(sessionStorage.getItem("settings"));
  var ltg;
  if (storedArray === null) {
    ltg = 0;
  } else {
    ltg = storedArray.length;
  }
  //create for quantity cart
  var quantity = 1;
  for (let i = 0; i < ltg; i++) {
    if (storedArray[i].idproduct === props.idproduct) {
      quantity = storedArray[i].quantity;
    }
  }
  //create sum cart
  var sum = 0;
  for (let i = 0; i < ltg; i++) {
    sum += storedArray[i].totalprice;
  }
  // Logout
  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
    sessionStorage.removeItem("settings");
  };
  // Logged
  const loggedRouter = () => {
    return (
      <>
        <span>
          <Link to="/Profile" className="header_top-link">
            {profile.lastname}
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
          <i className="far fa-heart"></i>{" "}
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
          <i className="far fa-heart"></i> <span className="Cart_count">0</span>
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
    document.getElementById("navbar").style.transform =
      "translate3d(300px,0px,0px)";
  };
  //  auto đóng sidebar
  // useEffect(() => {
  //   var lock = setInterval(function () {
  //     if (document.getElementById("root").clientWidth > 1024) {
  //       document.getElementById("navbar").style.transform =
  //         "translate3d(0px,0px,0px)";
  //     }
  //   });
  //   return () => clearInterval(lock);
  // },[]);
  //overflow y cart-empty
  // số lượng sản phẩm trong giỏ hàng
  var cartCount = ltg;
  useEffect(() => {
    var setHeight = cartCount * 135.6;
    if (cartCount !== 0 && setHeight <= 350) {
      document.getElementsByClassName(
        "cart_box_wrapper"
      )[0].style.height = `${setHeight}px`;
    } else if (cartCount === 0) {
      document.getElementsByClassName("cart_box_wrapper")[0].style.display =
        "none";
    }
    return () => null;
  }, [cartCount]);
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
                      <Link
                        to={item.slug.toString()}
                        className="header_top-link"
                      >
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
          <Navbar />
          <CatalogLeft />
          {/* < container>  */}
          <div className="container width-1280">
            {/* <row>  */}
            <div className="row">
              {/* header_bottom-wrapper */}
              <div className="header_bottom-wrapper">
                {/* <header_bottom-icon>  */}
                <div id="toggle">
                  <i className="fas fa-bars" onClick={open}></i>
                </div>
                <Link to="/">
                  <div className="header_bottom-icon">
                    <img src={Logo} alt="/" />
                  </div>
                </Link>
                <nav className="header_bottom-menu">
                  <ul className="header_bottom-list">
                    {menus2.map((item) => (
                      <li className="header_bottom-item" key={item._id}>
                        <NavLink
                          activeClassName="active"
                          to={item.slug.toString()}
                          className="header_bottom-link"
                        >
                          {item.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="header_bottom-search">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Nhập thông tin cần tìm..."
                      className="header_bottom-search-input"
                      name="search"
                      onChange={(e) =>
                        handleChange(e.target.value.toLowerCase())
                      }
                    />
                    <Link to="/Search">
                      <button
                        type="submit"
                        className="header_bottom-search-button"
                        onClick={eventSearch}
                      >
                        <i className="fas fa-search"></i>
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
                      <i className="fas fa-shopping-cart">
                        <span className="Cart_count">{ltg}</span>
                      </i>
                    </Link>
                    {/* Thẻ Cart ẩn  */}
                    <div className="header_bottom-cart-empty">
                      {cartCount < 1 && (
                        <Fragment>
                          <div className="cart_box_wrapper"></div>
                          <div className="Cart_empty">
                            <span>Hiện chưa có sản phẩm.</span>
                          </div>
                        </Fragment>
                      )}
                      {cartCount >= 1 && (
                        <div className="cart_box_wrapper">
                          {/* cart_box_wrapper */}
                          {storedArray.map((item) => (
                            <div className="cart_item clearfix">
                              <i className="fa fa-times"></i>
                              <img src={item.image} alt="" />
                              <div className="cart_item-info">
                                <Link to='/'>
                                  {item.nameProduct} <br /> {item.color} -{" "}
                                  {item.size}{" "}
                                </Link>
                                <input
                                  value={quantity}
                                  type="text"
                                  id="update-quality"
                                />
                                <span className="cart_item-price">
                                  {item.totalprice.toLocaleString()} đ
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {/*  */}
                      <span className="line"></span>
                      <div className="Cart_TotalPrime">
                        <span className="Cart_TotalPrime-title">
                          Tổng Tiền:
                        </span>
                        <span className="Cart_TotalPrime-prime">
                          {sum.toLocaleString()} đ
                        </span>
                      </div>
                      <div className="Cart_button">
                        <Link to="/Cart" className="Cart_button-watch">
                          XEM GIỎ HÀNG
                        </Link>
                        <Link to="/payment" className="Cart_button-pay">
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
