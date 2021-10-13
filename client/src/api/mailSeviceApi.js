import axios from "axios";

export const sendMailOtpcode = async (email = 'khanhdoan693@gmail.com',) => {
    return await axios.put(`http://localhost:3000/ForgotPassword/${email}`);
  };