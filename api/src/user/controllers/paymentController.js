const Payments = require('../models/paymentModels')
const Users = require('../models/userModels')
const bcrypt = require('bcrypt')
const paymentCtrl = {
    // creat bills
    creatPayment : async (req,res) =>{
        try {
            const {user_id,paymentID,fullName,email,phone_number,address,cart,total_price,status} = req.body;
            const newPayment = new Payments({
                user_id,paymentID,fullName,email,phone_number,address,cart,total_price,status
            })
            // Save mongodb
            await newPayment.save()
            return res.status(200).json({msg : "You have successfully placed your order!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // get payment
    getPayment : async(req,res) =>{
        try {
            const payment = await Payments.find()
            res.json(payment)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    // cancel orders from admin
    cancelOrders: async(req, res) =>{
        try {
            const {_id,password,status} = req.body;
            // search id Payments and cancel order to mongodb
            const user = await Users.findOne({_id})
            const check = await bcrypt.compare(password, user.password)
            if(!check) return res.status(400).json({msg: "Wrong email or password, Please re-enter your account or password."})
            await Payments.findOneAndUpdate({_id: req.body.id}, {
                status
            })
            res.json({msg: "Updated a Payments"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = paymentCtrl