const nodemailer = require("nodemailer");

class MailSevice {
  #codeOTP; // lưu trữ mã otp
  #mailManage = "hkkteamsp@gmail.com"; // Mail quản lý
  #passWordManage = "khanhvlcm12"; // password quản lý
  #isResetOtp = false; // Mã otp đã được gửi chưa
  #title = "Hello";
  #context = "Nice to much you !, how are you today";

  // tạo mail quản lý
  addMailManage(user = "hkkteamsp@gmail.com", password = "khanhvlcm12") {
    this.#mailManage = user;
    this.#passWordManage = password;
  }
  // tạo context cho email
  addMailContex(title, context) {
    this.#title = title;
    this.#context = context;
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
  // [post] /sendMail/:otp/confrimOtp
  conFirmOtpCode = async (req, res) => {
    try {
      let otpCodeValue = req.params.otp;
      let isOtp = false;
      if (Number(otpCodeValue) === this.#codeOTP) {
        isOtp = true;
      }
      res.status(200).json(isOtp);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  // gửi mail mã otp xác nhận
  // [post] /sendMail/:email
  sendMailOtpcode = async (req, res) => {
    try {
      this.createtOptCode();
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        service: "gmail",
        auth: {
          user: this.#mailManage,
          pass: this.#passWordManage,
        },
      });
      let mailOptions = {
        from: this.#mailManage,
        to: req.params.email,
        subject: `Xác nhập mã otp đến từ HKK team`,
        html: `<h1>Xin chào.</h1><h2>Chúng tôi nhận được yêu cầu xác nhận, Mã OTP của bạn là: ${
          this.#codeOTP
        }</h2>
      <strong>Mã của bạn sẽ hết hạn sau 5 phút</strong>`,
      };
      transporter.sendMail(mailOptions);
      res.status(200).json("Send email otp code successfully");
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  // gửi mail context
  // [post] /sendMail/:email
  sendMailContext = async (req, res) => {
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
        to: req.params.id,
        subject: this.#title,
        text: this.#context,
      };
      transporter.sendMail(mailOptions);
      res.status(201).json("Send email successfully");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
}

module.exports = new MailSevice();
