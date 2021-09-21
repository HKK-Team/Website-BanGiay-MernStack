const Payments = require('../../user/models/paymentModels')

const chartCtrl = {

    getdata: async (req, res) =>{
        try {
            const chartdata = await Payments.aggregate( [
                {
                    $group: {
                      _id: { $dateToString: { format: "%m", date: "$orderDate" } },
                      total: {
                        $sum: "$total_price"
                      }
                    },
                },
                {
                     $sort: { _id: 1 } 
                },
                ] )

            res.json(chartdata)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = chartCtrl;