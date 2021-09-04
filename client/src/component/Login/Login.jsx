import React from "react";
import "./Login.css";
import facebook from "./../../images/images/fb-btn.png";
import google from "./../../images/images/google-btn.png";

export default function Login() {
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className="register_wrapper">
            <div id="login" className="user_box">
              <h1 className="account-title">Đăng nhập</h1>
              <form action="/login" id="customer_register">
                <div className="email input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    id="email-user"
                    className="text"
                    placeholder="Email"
                    size="32"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                </div>
                <div className="password input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    id="password-user"
                    className="text"
                    placeholder="Mật khẩu"
                    size="32"
                    pattern="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){6,20})"
                  />
                  {/* Mật khẩu phải chứa ít nhất một chữ số [0-9].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết thường [a-z].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết hoa [A-Z].
                    Mật khẩu phải chứa ít nhất một ký tự đặc biệt như! @ # & ().
                    Mật khẩu phải có độ dài ít nhất 6 ký tự và tối đa 20 ký tự. */}

                </div>
                <input type="submit" value="Đăng nhập" className="btn-signin" />
                <div className="req_pass">
                  <a href="#">Chưa có tài khoản? Đăng ký</a>
                </div>
                <div className="req_pass">
                  <a href="#">Quên mật khẩu</a>
                </div>
              </form>
              <div id="btn-facebook-login" className="face-btn">
                <img src={facebook} alt="facebook" />{" "}
                <span>Đăng nhập bằng facebook</span>
              </div>
              <div id="btn-google-login" className="google-btn">
                <img src={google} alt="facebook" />{" "}
                <span>Đăng nhập bằng google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}