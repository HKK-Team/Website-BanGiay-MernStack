import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendMailOtpcode } from "../../../api/mailSeviceApi";

function ForgotPassword() {
  const [email, setMail] = useState({ email: "" });
  const onChangeSeletor = (e) => {
    const { name, value } = e.target;
    setMail({ ...email, [name]: value });
  };
  const handleBtnCick = async (e) => {
    e.preventDefault();
    try {
      sendMailOtpcode();
      alert("sendMail thanh cong");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className="register_wrapper">
            <div id="login" className="user_box">
              <h1 className="account-title">Quên Mật khẩu</h1>
              <form action="/login" id="customer_register">
                <div className="email input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    id="email-user"
                    className="text"
                    name="email"
                    placeholder="Vui lòng nhập email"
                    size="32"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    autoComplete="on"
                    onChange={onChangeSeletor}
                  />
                </div>
                <input
                  type="button"
                  value="Xác nhận"
                  className="btn-signin"
                  onClick={handleBtnCick}
                />
                <div className="req_pass">
                  <Link to="">Chưa có tài khoản? Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ForgotPassword;
