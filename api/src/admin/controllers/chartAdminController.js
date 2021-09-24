const Payments = require("../../user/models/paymentModels");

const chartCtrl = {
  getdata: async (req, res) => {
    try {
      const chartdata = await Payments.aggregate([
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
          },
        },
        {
          $addFields: {
            name: {
              $switch: {
                branches: [
                  { case: { $eq: ["$_id", "01"] }, then: "Jan" },
                  { case: { $eq: ["$_id", "02"] }, then: "Feb" },
                  { case: { $eq: ["$_id", "03"] }, then: "Mar" },
                  { case: { $eq: ["$_id", "04"] }, then: "Apr" },
                  { case: { $eq: ["$_id", "05"] }, then: "May" },
                  { case: { $eq: ["$_id", "06"] }, then: "Jun" },
                  { case: { $eq: ["$_id", "07"] }, then: "Jul" },
                  { case: { $eq: ["$_id", "08"] }, then: "Agu" },
                  { case: { $eq: ["$_id", "09"] }, then: "Sep" },
                  { case: { $eq: ["$_id", "10"] }, then: "Oct" },
                  { case: { $eq: ["$_id", "11"] }, then: "Nov" },
                  { case: { $eq: ["$_id", "12"] }, then: "Dec" },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);
      res.json(chartdata);
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
          $sort: { _id: 1 },
        },
      ]);
      res.json(chartdata);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getdatabyqui: async (req, res) => {
    try {
      const chartdata = await Payments.aggregate([
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
          },
        },
        {
          $addFields: {
            name: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [
                        { $gte: ["$_id", "01"] },
                        { $lte: ["$_id", "03"] },
                      ],
                    },
                    then: "Quý 1",
                  },
                  {
                    case: {
                      $and: [
                        { $gte: ["$_id", "04"] },
                        { $lte: ["$_id", "06"] },
                      ],
                    },
                    then: "Quý 2",
                  },
                  {
                    case: {
                      $and: [
                        { $gte: ["$_id", "07"] },
                        { $lte: ["$_id", "09"] },
                      ],
                    },
                    then: "Quý 3",
                  },
                  {
                    case: {
                      $and: [
                        { $gte: ["$_id", "10"] },
                        { $lte: ["$_id", "12"] },
                      ],
                    },
                    then: "Quý 4",
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $group: {
            _id: { name: "$name" },
            total: {
              $sum: "$total",
            },
          },
        },
        {
          $addFields: {
            name: "$_id.name",
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);
      res.json(chartdata);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getdatabyproducthot: async (req, res) => {
    try {
      const chartdata = await Payments.aggregate([
        {
          $project: {
            _id: 1,
            orderDate: 1,
            cart: { nameCategoryProduct: 1, totalprice: 1 },
          },
        },
        { $unwind: "$cart" },
        {
          $addFields: {
            Sum: {
              $cond: [
                {
                  $eq: [
                    { $year: "$orderDate" },
                    { $year: new Date(Date.now()) },
                  ],
                },
                "$cart.totalprice",
                0,
              ],
            },
          },
        },
        {
          $group: {
            _id: "$cart.nameCategoryProduct",
            total: {
              $sum: "$Sum",
            },
            Quantity:{$sum:1}
          },
        },
        {
          $addFields: {
            name: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: "Hunter Nam",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: "Hunter Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: "Gosto",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: "Giày Bé Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: "Phụ Kiện",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: "Giày Bé Trai",
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $addFields: {
            stt: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: 1,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: 2,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: 3,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: 4,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: 6,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: 5,
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $sort: { stt: 1 },
        },
      ]);
      res.json(chartdata);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getdatabyproducthotquy1: async (req, res) => {
    try {
      const chartdataall = await Payments.aggregate([
        {
          $project: {
            _id: 1,
            orderDate: 1,
            cart: { nameCategoryProduct: 1, totalprice: 1 },
          },
        },
        { $unwind: "$cart" },
        {
          $addFields: {
            Sum: {
              $cond: [
                {
                  $and: [
                    {
                      $gte: [{ $month: "$orderDate" }, 1],
                    },
                    {
                      $lte: [{ $month: "$orderDate" }, 3],
                    },
                    {
                      $eq: [
                        { $year: "$orderDate" },
                        { $year: new Date(Date.now()) },
                      ],
                    },
                  ],
                },
                "$cart.totalprice",
                0,
              ],
            },
          },
        },
        {
          $group: {
            _id: "$cart.nameCategoryProduct",
            total: {
              $sum: "$Sum",
            },
          },
        },
        {
          $addFields: {
            name: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: "Hunter Nam",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: "Hunter Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: "Gosto",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: "Giày Bé Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: "Phụ Kiện",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: "Giày Bé Trai",
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $addFields: {
            stt: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: 1,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: 2,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: 3,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: 4,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: 6,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: 5,
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $sort: { stt: 1 },
        },
      ]);
      res.json(chartdataall);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getdatabyproducthotquy2: async (req, res) => {
    try {
      const chartdataall = await Payments.aggregate([
        {
          $project: {
            _id: 1,
            orderDate: 1,
            cart: { nameCategoryProduct: 1, totalprice: 1 },
          },
        },
        { $unwind: "$cart" },
        {
          $addFields: {
            Sum: {
              $cond: [
                {
                  $and: [
                    {
                      $gte: [{ $month: "$orderDate" }, 4],
                    },
                    {
                      $lte: [{ $month: "$orderDate" }, 6],
                    },
                    {
                      $eq: [
                        { $year: "$orderDate" },
                        { $year: new Date(Date.now()) },
                      ],
                    },
                  ],
                },
                "$cart.totalprice",
                0,
              ],
            },
          },
        },
        {
          $group: {
            _id: "$cart.nameCategoryProduct",
            total: {
              $sum: "$Sum",
            },
          },
        },
        {
          $addFields: {
            name: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: "Hunter Nam",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: "Hunter Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: "Gosto",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: "Giày Bé Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: "Phụ Kiện",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: "Giày Bé Trai",
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $addFields: {
            stt: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: 1,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: 2,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: 3,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: 4,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: 6,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: 5,
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $sort: { stt: 1 },
        },
      ]);
      res.json(chartdataall);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getdatabyproducthotquy3: async (req, res) => {
    try {
      const chartdataall = await Payments.aggregate([
        {
          $project: {
            _id: 1,
            orderDate: 1,
            cart: { nameCategoryProduct: 1, totalprice: 1 },
          },
        },
        { $unwind: "$cart" },
        {
          $addFields: {
            Sum: {
              $cond: [
                {
                  $and: [
                    {
                      $gte: [{ $month: "$orderDate" }, 7],
                    },
                    {
                      $lte: [{ $month: "$orderDate" }, 9],
                    },
                    {
                      $eq: [
                        { $year: "$orderDate" },
                        { $year: new Date(Date.now()) },
                      ],
                    },
                  ],
                },
                "$cart.totalprice",
                0,
              ],
            },
          },
        },
        {
          $group: {
            _id: "$cart.nameCategoryProduct",
            total: {
              $sum: "$Sum",
            },
          },
        },
        {
          $addFields: {
            name: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: "Hunter Nam",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: "Hunter Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: "Gosto",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: "Giày Bé Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: "Phụ Kiện",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: "Giày Bé Trai",
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $addFields: {
            stt: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: 1,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: 2,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: 3,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: 4,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: 6,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: 5,
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $sort: { stt: 1 },
        },
      ]);
      res.json(chartdataall);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getdatabyproducthotquy4: async (req, res) => {
    try {
      const chartdataall = await Payments.aggregate([
        {
          $project: {
            _id: 1,
            orderDate: 1,
            cart: { nameCategoryProduct: 1, totalprice: 1 },
          },
        },
        { $unwind: "$cart" },
        {
          $addFields: {
            Sum: {
              $cond: [
                {
                  $and: [
                    {
                      $gte: [{ $month: "$orderDate" }, 10],
                    },
                    {
                      $lte: [{ $month: "$orderDate" }, 12],
                    },
                    {
                      $eq: [
                        { $year: "$orderDate" },
                        { $year: new Date(Date.now()) },
                      ],
                    },
                  ],
                },
                "$cart.totalprice",
                0,
              ],
            },
          },
        },
        {
          $group: {
            _id: "$cart.nameCategoryProduct",
            total: {
              $sum: "$Sum",
            },
          },
        },
        {
          $addFields: {
            name: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: "Hunter Nam",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: "Hunter Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: "Gosto",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: "Giày Bé Nữ",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: "Phụ Kiện",
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: "Giày Bé Trai",
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $addFields: {
            stt: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nam"] }],
                    },
                    then: 1,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Hunter Nữ"] }],
                    },
                    then: 2,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Gosto"] }],
                    },
                    then: 3,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nữ"] }],
                    },
                    then: 4,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Phụ Kiện"] }],
                    },
                    then: 6,
                  },
                  {
                    case: {
                      $and: [{ $eq: ["$_id", "Bé Nam"] }],
                    },
                    then: 5,
                  },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $sort: { stt: 1 },
        },
      ]);
      res.json(chartdataall);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getdatacountuser: async (req, res) => {
    try {
      const chartdata = await Payments.aggregate([
        {
          $project: {
            _id: 1,
            orderDate: 1,
            userid: {
              $cond: [
                {
                  $eq: [
                    { $year: "$orderDate" },
                    { $year: new Date(Date.now()) },
                  ],
                },
                "$user_id",
                "0",
              ],
            },
          },
        },
        { $match: { "userid": { "$ne": "0" }}},
        { $group: {
          _id: {
            _id: { $dateToString: { format: "%m", date: "$orderDate" } },
            userid:"$userid",
          },
          "count": { "$sum": 1 }
      }
      },
        {
          $group: {
            _id: "$_id._id",
            User: { "$sum": 1 }
          },
        },
        {
          $addFields: {
            name: {
              $switch: {
                branches: [
                  { case: { $eq: ["$_id", "01"] }, then: "Jan" },
                  { case: { $eq: ["$_id", "02"] }, then: "Feb" },
                  { case: { $eq: ["$_id", "03"] }, then: "Mar" },
                  { case: { $eq: ["$_id", "04"] }, then: "Apr" },
                  { case: { $eq: ["$_id", "05"] }, then: "May" },
                  { case: { $eq: ["$_id", "06"] }, then: "Jun" },
                  { case: { $eq: ["$_id", "07"] }, then: "Jul" },
                  { case: { $eq: ["$_id", "08"] }, then: "Agu" },
                  { case: { $eq: ["$_id", "09"] }, then: "Sep" },
                  { case: { $eq: ["$_id", "10"] }, then: "Oct" },
                  { case: { $eq: ["$_id", "11"] }, then: "Nov" },
                  { case: { $eq: ["$_id", "12"] }, then: "Dec" },
                ],
                default: "No scores",
              },
            },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);
      res.json(chartdata);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = chartCtrl;
