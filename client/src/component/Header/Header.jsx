import "./Header.css";
import Vi from "../../images/images/vi.png";
import Logo from "../../images/images/CôngtyTNHHABC.png";
import  React, { useEffect, useState, useContext } from "react"; 
import {GlobalState} from '../../GlobalState'

export default function Header(props) {
  const [small, setSmall] = useState(false);

  const state = useContext(GlobalState)

  const [menus] = state.menu1API.menus
  const [menus2] = state.menu2API.menus2
  
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 10)
      );
    } 
  }, []);
  return (
      <header>
      <div className="header_top">
        {/* <header_top> */}
        <div className="container">
          {/* <row> */}
          <div className="row">
          <div className="header_top-wrapper">
              {/* <header_top-list>*/}
              <ul className="header_top-list">
              {/* <load dữ liệu >*/}
                {menus.map(item => (
                  <li className="header_top-item" key={item._id}>
                  <a href={item.slug} className="header_top-link">
                    {item.text}
                    </a>
                  </li>
                ))}
                <li className="header_top-item">
                  <span>
                    <a href={props.login} className="header_top-link">
                      Đăng nhập
                    </a>
                  </span>
                  <span>|</span>
                  <span>
                    <a href={props.register} className="header_top-link">
                      Đăng ký
                    </a>
                  </span>
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
        {/* < container>  */}
        <div className="container">
          {/* <row>  */}
          <div className="row">
            {/* header_bottom-wrapper */}
            <div className="header_bottom-wrapper">
              {/* <header_bottom-icon>  */}
              <div className="header_bottom-icon">
                <img src={Logo} alt="/" />
              </div>
              <nav className="header_bottom-menu">
                <ul className="header_bottom-list">

                {menus2.map(item => (
                  <li className="header_bottom-item" key={item._id}>
                  <a href={item.slug} className="header_bottom-link">
                    {item.text}
                    </a>
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
                  />
                  <button type="submit" className="header_bottom-search-button">
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="header_bottom-cart">
                <span className="header_bottom-cart-favorite">
                  <a href={props.favorite} className="" style={{color:"black"}}>
                    {" "}
                    <i class="far fa-heart"></i>{" "}
                    <span className="Cart_count">0</span>
                  </a>
                </span>
                <span className="header_bottom-cart-cart">
                  <a href={props.cart} style={{color:"black"}}> 
                  <i class="fas fa-shopping-cart">
                    <span className="Cart_count">0</span>
                  </i>
                  </a>
                  {/* Thẻ Cart ẩn  */}
                  <div className="header_bottom-cart-empty">
                    <div className="Cart_empty">
                      <span>Hiện chưa có sản phẩm.</span>
                    </div>
                    <span className="line"></span>
                    <div className="Cart_TotalPrime">
                      <span className="Cart_TotalPrime-title">Tổng Tiền:</span>
                      <span className="Cart_TotalPrime-prime">0 đ</span>
                    </div>
                    <div className="Cart_button">
                      <a href={props.cart} className="Cart_button-watch">
                        XEM GIỎ HÀNG
                      </a>
                      <a href={props.payment} className="Cart_button-pay">
                        THANH TOÁN
                      </a>
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
  );
}
