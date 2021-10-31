import "./Footer.css";
import ScrollToOnTop from "../ScrollToTop/ScrollToTop";
import Model_1 from "../../images/mau/1.png";
import Model_2 from "../../images/mau/2.png";
import Model_3 from "../../images/mau/3.png";
import Model_4 from "../../images/mau/4.png";
import Model_5 from "../../images/mau/5.png";
import Model_6 from "../../images/mau/6.png";
import Model_7 from "../../images/mau/7.png";
import Model_8 from "../../images/mau/8.png";
import {Link} from "react-router-dom";
import React from "react";
import BoxChatMessenger from "../BoxChatMessenger/BoxChatMessenger";

export default function Footer() {
  return (
    <footer>
      {/* footer_top */}
      <div className="footer_top">
        {/* footer_top-title */}
        <div className="footer_top-title">
          <span>
            HASHTAG<Link to='/'> ABC </Link> ĐỂ CÓ CƠ HỘI XUẤT HIỆN TRÊN WEBSITE
            CỦA CHÚNG TÔI
          </span>
        </div>
        {/*</ footer_top-title >*/}
        {/* footer_top-model */}
        <div className="footer_top-model">
          <img src={Model_1} alt="Model" />
          <img src={Model_2} alt="Model" />
          <img src={Model_3} alt="Model" />
          <img src={Model_4} alt="Model" />
          <img src={Model_5} alt="Model" />
          <img src={Model_6} alt="Model" />
          <img src={Model_7} alt="Model" />
          <img src={Model_8} alt="Model" />
        </div>
        {/*</ footer_top-model >*/}
        {/* footer_top-sendmail-sendmail */}
        <div className="footer_top-sendmail">
          {/* footer_top-sendmail-warpper */}
          <div className="footer_top-sendmail-warpper">
            <span className="footer_top-sendmail-title">
              Đăng ký EMAIL ĐỂ NHẬN THÊM NHIỀU THÔNG TIN MỚI TỪ CHÚNG TÔI
            </span>
            <form className="footer_top-email-form">
              <input
                type="email"
                className="footer_top-sendmail-input"
                placeholder="Nhập E-Mail của bạn..."
              />
              <button type="submit" className="footer_top-sendmail-button">
                <i className="fab fa-telegram-plane"></i>
                <span> Đăng ký</span>
              </button>
            </form>
          </div>
          {/* </footer_top-sendmail-warpper> */}
        </div>
        {/* </footer_top-sendmail-sendmail> */}
      </div>
      {/* </footer_top> */}
      <div className="footer_bottom">
        <div className="footer_bottom-wrapper">
          <div className="footer_botom-infor">
            <h3 className="footer_bottom-infor-title">
              Đồ Án Cơ Sở Ngành <br />
              HK1.TT.01{" "}
            </h3>
            <p className="footer_bottom-infor-text">Đoàn Minh Khánh</p>
            <p className="footer_bottom-infor-text">Vũ Quốc Khánh</p>
            <p className="footer_bottom-infor-text">Huỳnh Đức Huy</p>
            <p className="footer_bottom-infor-text">Nguyễn Tiến Đạt</p>
          </div>
          <div className="footer_botom-infor">
            <h3 className="footer_bottom-infor-title">Đoàn Minh Khánh </h3>
            <p className="footer_bottom-infor-text">
              Student code : 1924801030111
            </p>
            <p className="footer_bottom-infor-text">
              Facebook :
              <a
                href="https://www.facebook.com/profile.php?id=100013505409162"
                target="_blank" rel="noreferrer"
              >
                Minh Khánh
              </a>
            </p>
            <p className="footer_bottom-infor-text">Class : D19PM02</p>
          </div>
          <div className="footer_botom-infor">
            <h3 className="footer_bottom-infor-title">Vũ Quốc Khánh </h3>
            <p className="footer_bottom-infor-text">
              Student code : 1924801030...
            </p>
            <p className="footer_bottom-infor-text">
              Facebook :
              <a
                href="https://www.facebook.com/profile.php?id=100041352821968"
                target="_blank" rel="noreferrer"
              >
                {" "}
                Khánh vũ
              </a>
            </p>
            <p className="footer_bottom-infor-text">Class : D19PM02</p>
          </div>
          <div className="footer_botom-infor">
            <h3 className="footer_bottom-infor-title">Huỳnh Đức Huy </h3>
            <p className="footer_bottom-infor-text">
              Student code : 1924801030...
            </p>
            <p className="footer_bottom-infor-text">
              Facebook :
              <a href="https://www.facebook.com/hyuezh01" target="_blank" rel="noreferrer">
                {" "}
                Huy Huỳnh
              </a>
            </p>
            <p className="footer_bottom-infor-text">Class : D19PM02</p>
          </div>
          <div className="footer_botom-infor">
            <h3 className="footer_bottom-infor-title">Nguyễn Tiến Đạt </h3>
            <p className="footer_bottom-infor-text">
              Student code : 1924801030...
            </p>
            <p className="footer_bottom-infor-text">
              Facebook :
              <a
                href="https://www.facebook.com/profile.php?id=100033150050382"
                target="_blank" rel="noreferrer"
              >
                Tiến Đạt
              </a>
            </p>
            <p className="footer_bottom-infor-text">Class : D19PM02</p>
          </div>
        </div>
      </div>
      <div className="footer_bottom-box">
        <h2 className="footer_bottom-box-title">
          Website bán giày công ty TNHH 4 thành viên
        </h2>
      </div>
      <BoxChatMessenger/>
      <ScrollToOnTop />
    </footer>
  );
}
