const nodemailer = require("nodemailer");

module.exports = class mailSevice {
  #codeOTP; // lưu trữ mã otp
  #mailManage = "hkkteamsp@gmail.com"; // Mail quản lý
  #passWordManage = "khanhvlcm12"; // password quản lý
  #mailUser = 'khanhdoan693@gmail.com'; // mail người dùng
  #isResetOtp = false; // Mã otp đã được gửi chưa
  #title;
  #context;

  // tạo mail quản lý
  addMailManage(user = "hkkteamsp@gmail.com", password = "khanhvlcm12") {
    this.#mailManage = user;
    this.#passWordManage = password;
  }

  // thêm mail người dùng
  addMailUser(...mailUser) {
    this.#mailUser = mailUser;
  }

  //reset mã otp
  resetOtpCode(time = 300000) {
    if (this.#isResetOtp) {
      setTimeout(() => {
        this.#isResetOtp = false;
        return (this.#codeOTP = Math.round(
          Math.random() * (999999 - 100000 + 1) + 100000
        ));
      }, time);
    }
  }

  // khởi tạo mã otp
  createtOptCode() {
    return (this.#codeOTP = Math.round(
      Math.random() * (999999 - 100000 + 1) + 100000
    ));
  }

  // xác nhận mã otp
  conFirmOtpCode(inputSeletor) {
    let otpCodeValue = inputSeletor;
    let isOtp = false;
    if (Number(otpCodeValue) === this.#codeOTP) {
      isOtp = true;
    }
    return isOtp;
  }

  // gửi mail mã otp xác nhận
  sendMailOtpcode(email) {
    this.createtOptCode();
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: this.#mailManage,
          pass: this.#passWordManage,
        },
      });
      let mailOptions = {
        from: this.#mailManage,
        to: this.#mailUser = email,
        subject: `Xác nhập mã otp đến từ HKK team`,
        html: `<h1>Xin chào.</h1><h2>Chúng tôi nhận được yêu cầu xác nhận, Mã OTP của bạn là: ${
          this.#codeOTP
        }</h2>
      <strong>Mã của bạn sẽ hết hạn sau 5 phút</strong>`,
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    this.#isResetOtp = true;
    this.resetOtpCode();
  };

  // gửi mail context
  sendMailContext = async (request, response) => {
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: this.#mailManage,
          pass: this.#passWordManage,
        },
      });
      let mailOptions = {
        from: this.#mailManage,
        to: this.#mailUser,
        subject: this.title,
        text: this.context,
      };
      transporter.sendMail(mailOptions);
      response.status(201).json("Send email successfully");
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };
}
