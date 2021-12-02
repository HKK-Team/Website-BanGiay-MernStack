import React, { useState } from "react";
import {
  conFirmEmail,
  sendMailOtpcode,
  conFirmOtpCode,
  sendMailContext,
} from "../../api/mailSeviceApi";
// import {Link} from 'react-router-dom'
import axios from "axios";
import "./Register.css";

export default function Register() {
  // khai báo error message
  const errMessage = document.getElementById("message-error");
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confirm_password: "",
    password: "",
    address: "",
    nationality: "",
    phonenumber: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const [otpCode, setOtpCode] = useState();
  // lắng nghe input mã otp
  const onChangeSeletorOptCode = (e) => {
    const { value } = e.target;
    setOtpCode({ value });
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    const errorMessage = document.getElementById("message-error");
    e.preventDefault();
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!regex.test(user.password))
      return (errorMessage.innerText = `Mật khẩu phải chứa ít nhất một chữ số [0-9].
        Mật khẩu phải chứa ít nhất một ký tự Latinh viết thường [a-z].
        Mật khẩu phải chứa ít nhất một ký tự Latinh viết hoa [A-Z].
        Mật khẩu phải có độ dài ít nhất 6 ký tự và tối đa 20 ký tự.`);
    else if (user.password !== user.confirm_password) {
      return (errorMessage.innerText = `Xác nhận mật khẩu không chính xác. Vui lòng kiểm tra lại`);
    } else {
      conFirmEmail(user.email)
        .then((data) => {
          if (data.data) {
            errorMessage.innerText = "Email này đã tồn tại !";
          }
        })
        .catch((err) => {
          sendMailOtpcode(user.email);
          handleConFirmOtpCode();
        });
    }
  };

  // hàm gửi lại mail
  const handleReqMail = (e) => {
    e.preventDefault();
    try {
      sendMailOtpcode(user.email);
      handleSendMail();
    } catch (err) {
      console.log(err);
    }
  };

  // hàm sử lý khi xác nhận đăng ký
  const handleConFirmOtpCode = () => {
    const errorMessage = document.getElementById("message-error");
    errorMessage.innerText = "";
    let FormConFirmOtp = document.querySelector('form[name="conFrimOtp"]');
    FormConFirmOtp.style.display = "block";
    handleSendMail();
    let FormConFirmPassWord = document.querySelector(
      'form[name="form-Register"]'
    );
    FormConFirmPassWord.style.display = "none";
  };

  // xứ lý sự kiện gửi lại mail
  const handleSendMail = () => {
    errMessage.textContent = "";

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

  // hàm xác nhận otp code
  const submitConFirmOtpCode = () => {
    conFirmOtpCode(otpCode.value)
      .then((data) => {
        if (data.data) {
          try {
            axios
              .post("http://localhost:5000/user/register", {
                ...user,
              })
              .then(() => {
                localStorage.setItem("firstLogin", true);
                errMessage.innerText = "Đăng ký tài khoản thành công!";
                setIsRegister(true);
                window.location.href = "/Login";
              })
              .catch((err) => {
                return (errMessage.innerText = `Mã xác thực không chính xác. Vui lòng kiểm tra lại`);
                // errMessage.innerText = err.response.data.msg;
              });
          } catch (err) {
            errMessage.innerText = err.response.data.msg;
          }
        }
      })
      .catch((err) => {
        errMessage.innerText = err.response.data.msg;
      });
  };

  // kiểm tra nếu đã đăng ký thì gửi mail xác nhận
  if (isRegister) {
    sendMailContext(user.email)
      .then((data) => console.log("sendMail thanh cong"))
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  }

  return (
    <section className="register">
      <div className="container">
        <div className="row">
          <div className="register_wrapper">
            <div id="login" className="user_box">
              <h1 className="account-title">Đăng ký</h1>

              <span id="message-error"></span>
              <form
                name="form-Register"
                action="/register"
                id="customer_register"
                onSubmit={registerSubmit}
              >
                <div className="last-name input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-user"></i>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="firstname"
                    className="text"
                    placeholder="Họ"
                    size="32"
                    required
                    value={user.firstname}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="fisrt-name input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-user"></i>
                  </label>
                  <input
                    type="text"
                    id="fisrt_name"
                    className="text"
                    name="lastname"
                    placeholder="Tên"
                    size="32"
                    required
                    value={user.lastname}
                    onChange={onChangeInput}
                  />
                </div>
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
                    autoComplete="on"
                    value={user.password}
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
                    name="confirm_password"
                    placeholder="Nhập lại mật khẩu"
                    size="32"
                    required
                    pattern="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){6,20})"
                    autoComplete="on"
                    value={user.confirm_password}
                    onChange={onChangeInput}
                  />
                </div>
                <input type="submit" value="Đăng ký" className="btn-signin" />
              </form>

              {/* form xác nhận mã otp */}
              <form
                action="/sendMail"
                id="customer_register"
                name="conFrimOtp"
                style={{ display: "none" }}
              >
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    paddingBottom: "10px",
                    color: "#cccccc",
                  }}
                >
                  Xin chào. Một mã otp đã được gửi về email của bạn vui lòng xác
                  nhận
                </span>
                <div className="email input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-envelope"></i>
                  </label>
                  <input
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
                  name="OtpCode"
                  type="button"
                  className="btn-signin"
                  onClick={submitConFirmOtpCode}
                >
                  Xác thực
                </button>
                {/* xác nhận email */}
                <div className="req_pass">
                  <button type="button" onClick={handleReqMail}>
                    Gửi lại mã (<span>30</span>)
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
