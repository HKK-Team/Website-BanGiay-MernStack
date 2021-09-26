
const Payments = require("../../user/models/paymentModels");
const widgetCtrl = {

  getdata: async (req, res) => {
        try {
                const getdata = await Payments.aggregate([
                        {
                                $project: {
                                  _id: 1,
                                  total_price: 1,
                                  orderDate: 1,
                                  Sum: {
                                    $cond: [
                                      {
                                        $eq: [
                                          { $year: "$orderDate" },
                                          { $year: new Date(Date.now()) },
                                        ],
                                      },
                                      "$total_price",
                                      0,
                                    ],
                                  },
                                },
                              },
                              {
                                $group: {
                                 _id: { $dateToString: { format: "%m", date: "$orderDate" } },
                                  total: {
                                    $sum: "$Sum",
                                  },
                                  count:{
                                        $sum:1
                                }
                                },
                              },
                              {
                                $sort: { _id: -1 },
                              },
                              { $limit : 2 }
                ]);
                res.json(getdata);
              } catch (err) {
                return res.status(500).json({ msg: err.message });
              }
  },
  getdatabyyear: async (req, res) => {
        try {
          const chartdata = await Payments.aggregate([
            {
              $group: {
                _id: { $dateToString: { format: "%Y", date: "$orderDate" } },
                total: {
                  $sum: "$total_price",
                },
              },
            },
            {
              $addFields: {
                name: {
                  $switch: {
                    branches: [
                      { case: { $eq: ["$_id", "2017"] }, then: "2017" },
                      { case: { $eq: ["$_id", "2018"] }, then: "2018" },
                      { case: { $eq: ["$_id", "2019"] }, then: "2019" },
                      { case: { $eq: ["$_id", "2020"] }, then: "2020" },
                      { case: { $eq: ["$_id", "2021"] }, then: "2021" },
                    ],
                    default: "No scores",
                  },
                },
              },
            },
            {
              $sort: { _id: -1 },
            },
            { $limit : 2 }
          ]);
          res.json(chartdata);
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },
};
module.exports = widgetCtrl;
