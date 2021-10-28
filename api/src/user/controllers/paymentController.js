const Payments = require("../models/paymentModels");
const Users = require("../models/userModels");
const bcrypt = require("bcrypt");
const paymentCtrl = {
  // creat bills
  creatPayment: async (req, res) => {
    try {
      const {
        user_id,
        paymentID,
        fullName,
        email,
        phone_number,
        address,
        cart,
        total_price,
        status,
        payment_status,
      } = req.body;
      if (fullName === "")
        return res
          .status(400)
          .json({ msg: "Fullname is empty. Please enter again!" });
      if (email === "")
        return res
          .status(400)
          .json({ msg: "Email is empty. Please enter again!" });
      if (phone_number === "")
        return res
          .status(400)
          .json({ msg: "Phone number is empty. Please enter again!" });
      if (address === "")
        return res
          .status(400)
          .json({ msg: "Adress is empty. Please enter again!" });
      const newPayment = new Payments({
        user_id,
        paymentID,
        fullName,
        email,
        phone_number,
        address,
        cart,
        total_price,
        status,
        payment_status,
      });
      // Save mongodb
      await newPayment.save();
      return res
        .status(200)
        .json({ msg: "You have successfully placed your order!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // get payment
  getPayment: async (req, res) => {
    try {
      const payment = await Payments.find();
      res.json(payment);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // cancel orders from admin
  cancelOrders: async (req, res) => {
    try {
      const { _id, password, status } = req.body;
      const id = [...req.body.id]; // khởi tạo mảng danh sách hủy
      // search id Payments and cancel order to mongodb
      const user = await Users.findOne({ _id });
      const check = await bcrypt.compare(password, user.password);
      if (!check)
        return res.status(400).json({
          msg: "Wrong email or password, Please re-enter your account or password.",
        });
      for (let element = 0; element < id.length; element++) {
        if (id[element] !== null && id[element] !== undefined) {
          await Payments.findOneAndUpdate(
            { _id: id[element] },
            {
              status,
            }
          );
        }
      }
      res.json({ msg: "Updated a Payments" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  ConfirmOrder: async (req, res) => {
    try {
      const { status, payment_status } = req.body;
      // search id Payments and cancel order to mongodb
      await Payments.findOneAndUpdate(
        { _id: req.body.id },
        {
          status,
          payment_status,
        }
      );
      res.json({ msg: "Updated a Payments" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = paymentCtrl;
