import React, { useState } from "react";
import { sendMailOtpcode, conFirmOtpCode } from "../../../api/mailSeviceApi";

function ForgotPassword() {
  const [email, setMail] = useState({ email: "" });
  const [otpCode, setOtpCode] = useState();
  const onChangeSeletor = (e) => {
    const { name, value } = e.target;
    setMail({ ...email, [name]: value });
  };
  const onChangeSeletorOptCode = (e) => {
    const { value } = e.target;
    setOtpCode({ value });
  };
  // xử lý sự kiện gửi mail
  const handleBtnCick = async (e) => {
    try {
      if (email.email.includes("@")) {
        sendMailOtpcode(email.email);
        countDownReqSendMail();
      } else {
        alert("vui lòng nhập email của bạn");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // xứ lý sự kiện gửi lại mail
  const countDownReqSendMail = () => {
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
      sendMailOtpcode(email.email);
      countDownReqSendMail();
    } catch (err) {
      console.log(err);
    }
  };
  // hàm xác nhập otp code
  const handleConFirmOtpCode = () => {
    try {
      conFirmOtpCode(otpCode.value)
        .then((value) => value.data)
        .then((value) => {
          if (value) {
            alert("xác thực thành công");
          } else {
            alert("vui lòng kiểm tra lại mã otp");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className="register_wrapper">
            <div id="login" className="user_box">
              <h1 className="account-title">Quên Mật khẩu</h1>
              <form action="/sendMail" id="customer_register">
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

                <button
                  style={{ display: "none" }}
                  name="OtpCode"
                  type="button"
                  className="btn-signin"
                  onClick={handleConFirmOtpCode}
                >
                  Xác thực
                </button>

                <button
                  name="conFirmEmail"
                  type="button"
                  className="btn-signin"
                  onClick={handleBtnCick}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ForgotPassword;
