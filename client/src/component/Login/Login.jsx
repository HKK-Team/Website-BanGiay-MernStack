import React, { useState } from "react";
import "./Login.css";
import facebook from "./../../images/images/fb-btn.png";
import google from "./../../images/images/google-btn.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toastPromise } from "../../admins/components/ToastMassage/ToastMassage";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    await toastPromise(axios.post("/user/login", { ...user }), () => {
      localStorage.setItem("firstLogin", true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      return "Login Successfully!";
    });
  };
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className="register_wrapper">
            <div id="login" className="user_box">
              <h1 className="account-title">Đăng nhập</h1>
              <form
                action="/login"
                id="customer_register"
                onSubmit={loginSubmit}
              >
                <div className="email input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    id="email-user"
                    className="text"
                    name="email"
                    placeholder="Email"
                    size="32"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    autoComplete="on"
                    value={user.email}
                    onChange={onChangeInput}
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
                    name="password"
                    placeholder="Mật khẩu"
                    size="32"
                    required
                    pattern="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){6,20})"
                    autoComplete="on"
                    value={user.password}
                    onChange={onChangeInput}
                  />
                  {/* Mật khẩu phải chứa ít nhất một chữ số [0-9].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết thường [a-z].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết hoa [A-Z].
                    Mật khẩu phải chứa ít nhất một ký tự đặc biệt như! @ # & ().
                    Mật khẩu phải có độ dài ít nhất 6 ký tự và tối đa 20 ký tự. */}
                </div>
                <input type="submit" value="Đăng nhập" className="btn-signin" />
                <div className="req_pass">
                  <Link to="/Register">Chưa có tài khoản? Đăng ký</Link>
                </div>
                <div className="req_pass">
                  <Link to="/ForgotPassword">Quên mật khẩu</Link>
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
export default Login;
