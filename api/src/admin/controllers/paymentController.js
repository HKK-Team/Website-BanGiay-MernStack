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
    // get orderbrowsing
    getOrderBrowsing : async(req,res) => {
        try {
            const payment = await Payments.find({ status: { $eq: "Chưa duyệt đơn hàng" } })
            res.json(payment)
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    },
    // update OrderBrowsing from admin
    updateOrderBrowsing: async(req, res) =>{
        try {
            const {status} = req.body;
            // search id Payments and update to mongodb
            await Payments.findOneAndUpdate({_id: req.body._id}, {
                status
            })
            res.json({msg: "Updated a Payments"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = paymentCtrl