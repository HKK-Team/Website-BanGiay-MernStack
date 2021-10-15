import axios from "axios";

export const sendMailOtpcode = async (...email) => {
  return await axios.post(`http://localhost:5000/sendMail/${email}/otpCode`);
};
export const sendMailContext = async (...email) => {
  return await axios.post(`http://localhost:5000/sendMail/${email}/context`);
};
export const conFirmOtpCode = async (otp) => {
  return await axios.post(`http://localhost:5000/sendMail/${otp}/confrimOtp`);
};
