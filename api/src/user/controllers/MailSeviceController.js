const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const Users = require("../models/userModels");

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

  // xác thực email
  // [post] /sendMail/:email/conFirmEmail
  conFirmEmail = async(req,res) =>{
    let isEmail = true;
    const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(req.params.email)){
      isEmail = false
      return res.status(400).json({ msg: "Trường này phải là Email." });
    }
      
      
    const email = req.params.email;
    const user = await Users.findOne({ email });
    // check email
    if (user === null){
      isEmail = false
      return res.status(400).json({ msg: "Email này không tồn tại." });
    }
    res.status(200).json(isEmail);
  }

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
      res.status(200).json({ msg: "Send email otp code successfully" });
      this.resetOtpCode();
    } catch (err) {
      return res.status(500).json({ msg: err.message });
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
        subject: `Xác nhận đăng ký tài khoản `,
        text: `Xin chào. 
        Tài khoản với email ${req.params.id} của bạn đã được đăng ký bên chúng tôi.
        Cảm ơn bạn đã xử dụng dịch vụ. Chúc bạn một ngày tốt lành
        Trân trọng.`,
      };
      transporter.sendMail(mailOptions);
      res.status(201).json("Send email successfully");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  // thay đổi pass word
  // [put]/editPassword
  editPassword = async (req, res) => {
    // check password
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!regex.test(req.body.password))
      return res.status(400).json({
        msg: `Mật khẩu phải chứa ít nhất một chữ số [0-9].
        Mật khẩu phải chứa ít nhất một ký tự Latinh viết thường [a-z].
        Mật khẩu phải chứa ít nhất một ký tự Latinh viết hoa [A-Z].
        Mật khẩu phải có độ dài ít nhất 6 ký tự và tối đa 20 ký tự.`,
      });

    if (req.body.confirm_password !== req.body.password)
      return res
        .status(400)
        .json({ msg: "Xác nhận mật khẩu không chính xác , vui lòng thử lại" });

    const passwordHash = await bcrypt.hash(req.body.password, 10);
    try {
      await Users.findOneAndUpdate(
        { email: req.body.email },
        { password: passwordHash }
      );
      return res.status(200).json("Bạn đã đổi mật khẩu thành công!");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  };
}

module.exports = new MailSevice();
