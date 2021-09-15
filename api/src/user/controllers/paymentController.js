const Payments = require('../models/paymentModels')

const paymentCtrl = {
    // creat bills
    creatPayment : async (req,res) =>{
        try {
            const {user_id,fullName,email,phone_number,address,cart,total_price} = req.body;
            const newPayment = new Payments({
                user_id,fullName,email,phone_number,address,cart,total_price
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
    }
}
module.exports = paymentCtrl