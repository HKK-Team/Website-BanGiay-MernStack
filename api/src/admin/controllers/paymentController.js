const Payments =  require('../../user/models/paymentModels')
const paymentCtrl = {
    // delete bills from admin
    deletePayment : async(req, res) => {
        try {
            await Payments.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted User Successfully" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = paymentCtrl