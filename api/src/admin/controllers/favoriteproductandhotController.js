const Favorites = require("../../user/models/favoriteModels");
const Payments = require("../../user/models/paymentModels");
const favoriteproductandhotCtrl = {

  getdatahot: async (req, res) => {
    try {
      const getdata = await Payments.aggregate([
        {
            $project: {
              _id: 1,
              cart:{id_product:1, totalprice:1,image:1},
              orderDate: 1,
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
          { $match: { "Sum": { "$ne": 0 }}},
          {
            $group: {
              _id: {
                id_product:"$cart.id_product",
                totalprice:"$cart.totalprice",
                image:"$cart.image",
              },
              total: {
                $sum: "$Sum",
              },
              count:{
                  $sum:1
              }
            },
          },
          {
            $sort: { count: -1 },
          },
      ]);
      res.json(getdata);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getdatafav: async (req, res) => {
    try {
      const getdata = await Favorites.aggregate([
        {
            $project: {
              _id: 1,
              idCategory_product:1,
              orderDate: 1,
              createdAt:1,
              image:1
            },
          },
          {
            $addFields: {
              date: {
                $cond: [
                  {
                    $eq: [
                      { $year: "$createdAt" },
                      { $year: new Date(Date.now()) },
                    ],
                  },
                  "$createdAt",
                  0,
                ],
              },
            },
          },
          { $match: { "date": { "$ne": 0 }}},
          {
            $group: {
              _id: {
                idCategory_product:"$idCategory_product",
                image:"$image",
              },
              count:{
                  $sum:1
              }
            },
          },
          {
          $lookup:
            {
              from: "payments",
              localField: "_id.idCategory_product",
              foreignField: "cart.id_product",
              as: "inventory_docs"
            }
       },
       {
        $project: {
          _id: 1,
          count:1,
          inventory_docs:{cart:{id_product:1,totalprice:1},orderDate:1},
        },
       },
       { $unwind: "$inventory_docs" },
       {
        $addFields: {
          date: {
            $cond: [
              {
                $eq: [
                  { $year: "$inventory_docs.orderDate" },
                  { $year: new Date(Date.now()) },
                ],
              },
              "$inventory_docs.orderDate",
              0,
            ],
          },
        },
      },
      { $match: { "date": { "$ne": 0 }}},
      { $unwind: "$inventory_docs.cart" },
      {
        $addFields: {
          check: {
            $cond: [
              {
                $eq: [
                  "$_id.idCategory_product",
                    "$inventory_docs.cart.id_product",
                ],
              },
              1,
              0,
            ],
          },
        },
      },
      { $match: { check: { "$eq":  1 }}},
          {
            $group: {
              _id:{
                _id:"$_id.idCategory_product",
                image:"$_id.image",
                count:"$count",
              },
              total:{
                $sum:"$inventory_docs.cart.totalprice"
              },
              quantity:{
                  $sum:1
              }
            },
          },
          {
            $sort: { "_id.count": -1 },
          },
      ]);
      res.json(getdata);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = favoriteproductandhotCtrl;
