import React, { useState } from "react";
import {
  sendMailOtpcode,
  conFirmOtpCode,
  conFirmEmail,
} from "../../../api/mailSeviceApi";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setMail] = useState({ value: "" });
  const [otpCode, setOtpCode] = useState();
  const [user, setUser] = useState({
    password: "",
    confirm_password: "",
    email: "",
  });

  const errMessage = document.getElementById("message-error");
  // lắng nghe input password
  const onChangeSeletorPassWord = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // lắng nghe input email
  const onChangeSeletor = (e) => {
    const { value } = e.target;
    setMail({ value });
  };

  // lắng nghe input mã otp
  const onChangeSeletorOptCode = (e) => {
    const { value } = e.target;
    setOtpCode({ value });
  };

  // xử lý sự kiện gửi mail
  const submitSendMail = async (e) => {
    if (email.value !== "") {
      conFirmEmail(email.value)
        .then((data) => {
          if (data.data) {
            sendMailOtpcode(email.value);
            handleSendMail();
          }
        })
        .catch((err) => {
          errMessage.innerText = err.response.data.msg;
        });
    } else {
      errMessage.innerText = "vui lòng nhập email của bạn";
    }
  };

  // xứ lý sự kiện gửi lại mail
  const handleSendMail = () => {
    const errMessage = document.getElementById("message-error");
    errMessage.textContent = "";

    let btnOtpCode = document.querySelector('button[name="OtpCode"]');
    btnOtpCode.style.display = "block";
    let btnEmail = document.querySelector('button[name="conFirmEmail"]');
    btnEmail.style.display = "none";

    let selectorOtpCode = document.querySelector("#otp-user");
    selectorOtpCode.style.display = "block";
    let selectorEmail = document.querySelector("#email-user");
    selectorEmail.style.display = "none";

    let selector = document.querySelector(".req_pass button");
    let countDownValue = document.querySelector(".req_pass button span");
    selector.style.display = "inline";
    selector.setAttribute("disabled", "disabled");

    let countDown = 30;
    let loop = setInterval(() => {
      selector.style.color = "red";
      countDownValue.textContent = countDown;
      if (countDown === 0) {
        selector.style.color = "blue";
        selector.removeAttribute("disabled");
        clearInterval(loop);
      } else {
        countDown--;
      }
    }, 1000);
  };

  // hàm gửi lại mail
  const handleReqMail = (e) => {
    e.preventDefault();
    try {
      sendMailOtpcode(email.value);
      handleSendMail();
    } catch (err) {
      console.log(err);
    }
  };

  // hàm sử lý khi xác nhận otp code
  const handleConFirmOtpCode = () => {
    let FormConFirmOtp = document.querySelector('form[name="conFrimOtp"]');
    FormConFirmOtp.style.display = "none";
    let FormConFirmPassWord = document.querySelector(
      'form[name="conFrimPassword"]'
    );
    FormConFirmPassWord.style.display = "block";
  };

  // hàm xác nhập otp code
  const submitConFirmOtpCode = () => {
    const errMessage = document.getElementById("message-error");
    try {
      conFirmOtpCode(otpCode.value).then((value) => {
        if (value.data) {
          handleConFirmOtpCode();
          errMessage.textContent = "";
        } else {
          errMessage.textContent = "vui lòng kiểm tra lại mã otp !!!";
        }
      });
    } catch (err) {
      console.log(err);
      errMessage.textContent = "vui lòng kiểm tra lại mã otp";
    }
  };

  // hàm xác nhận mật khẩu
  const submitChangePassword = async (e) => {
    e.preventDefault();
    setUser((user.email = email.value));
    try {
      await axios.put("http://localhost:3000/sendMail/editPassword", {
        ...user,
      });
      errMessage.textContent = "Thay đổi mật khẩu thành công!!";
      window.location.href = "/login";
    } catch (err) {
      errMessage.innerText = err.response.data.msg;
    }
  };
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className="register_wrapper">
            <div id="login" className="user_box">
              <h1 className="account-title">Quên Mật khẩu</h1>
              <span id="message-error"></span>

              <form action="/sendMail" id="customer_register" name="conFrimOtp">
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
                  <input
                    style={{ display: "none" }}
                    type="text"
                    id="otp-user"
                    className="text"
                    name="OtpCode"
                    placeholder="Vui lòng nhập mã OTP"
                    size="32"
                    required
                    autoComplete="on"
                    onChange={onChangeSeletorOptCode}
                  />
                </div>
                {/* xác nhận mã otp */}
                <button
                  style={{ display: "none" }}
                  name="OtpCode"
                  type="button"
                  className="btn-signin"
                  onClick={submitConFirmOtpCode}
                >
                  Xác thực
                </button>
                {/* xác nhận email */}
                <button
                  name="conFirmEmail"
                  type="button"
                  className="btn-signin"
                  onClick={submitSendMail}
                >
                  Xác nhận
                </button>
                <div className="req_pass">
                  <button
                    type="button"
                    onClick={handleReqMail}
                    style={{ display: "none" }}
                  >
                    Gửi lại mã (<span>30</span>)
                  </button>
                </div>
              </form>

              {/* form đổi pass word */}
              <form
                // action="/sendMail"
                name="conFrimPassword"
                style={{ display: "none" }}
              >
                <div className="email input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    className="text"
                    name="password"
                    placeholder="Nhập mật khẩu mới"
                    size="32"
                    required
                    autoComplete="on"
                    onChange={onChangeSeletorPassWord}
                  />
                </div>
                <div className="email input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    className="text"
                    name="confirm_password"
                    placeholder="Xác nhận mật khẩu mới"
                    size="32"
                    required
                    autoComplete="on"
                    onChange={onChangeSeletorPassWord}
                  />
                </div>
                {/* xác nhận đổi mật khẩu */}
                <button
                  name="conFirmPassWord"
                  type="button"
                  className="btn-signin"
                  onClick={submitChangePassword}
                >
                  Xác nhận
                </button>

                <div className="req_pass">
                  <Link to="/" type="button">
                    Hủy
                  </Link>
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
