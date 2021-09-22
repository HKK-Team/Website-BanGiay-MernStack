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
                    $addFields:
                    {
                          name:{
                              $switch: {
                                branches: [
                                   { case: { $eq: [ "$_id", "01" ] }, then: "Jan" },
                                   { case: { $eq: [ "$_id", "02" ] }, then: "Feb" },
                                   { case: { $eq: [ "$_id", "03" ] }, then: "Mar" },
                                   { case: { $eq: [ "$_id", "04" ] }, then: "Apr" },
                                   { case: { $eq: [ "$_id", "05" ] }, then: "May" },
                                   { case: { $eq: [ "$_id", "06" ] }, then: "Jun" },
                                   { case: { $eq: [ "$_id", "07" ] }, then: "Jul" },
                                   { case: { $eq: [ "$_id", "08" ] }, then: "Agu" },
                                   { case: { $eq: [ "$_id", "09" ] }, then: "Sep" },
                                   { case: { $eq: [ "$_id", "10" ] }, then: "Oct" },
                                   { case: { $eq: [ "$_id", "11" ] }, then: "Nov" },
                                   { case: { $eq: [ "$_id", "12" ] }, then: "Dec" },
                                ],
                                default: "No scores"
                             },
                          },
                      }
                  },
                  
                {
                     $sort: { _id: 1 } 
                },
                ] )
            res.json(chartdata)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getdataall: async (req, res) =>{
        try {
            const chartdataall = await Payments.aggregate( [
                 {
                      $project : { cart : 1 } 
                } 
                ] )
            res.json(chartdataall)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = chartCtrl;