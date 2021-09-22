const Products =  require('../../user/models/paymentModels')
const productCtrl = {
    // delete product from admin
    deleteProduct : async(req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted User Successfully" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = productCtrl