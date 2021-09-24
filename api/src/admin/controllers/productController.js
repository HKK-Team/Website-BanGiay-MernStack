const Products =  require('../../user/models/productModels')
const productCtrl = {
    // create product from admin
    createProduct: async(req, res) =>{
        try {
            const {idCategory_product, nameProduct, color, nameCategoryProduct, price, image,images1,images2,images3,images4,images5,size1,size2,size3,size4,size5, detailCategory} = req.body;
            if(!image) return res.status(400).json({msg: "No image upload"})

            const product = await Products.findOne({idCategory_product})
            if(product) return res.status(400).json({msg: "This product already exists."})

            const newProduct = new Products({
                idCategory_product, nameProduct,color,
                size :{
                    size1,
                    size2,
                    size3,
                    size4,
                    size5
                }, nameCategoryProduct,price,
                detailImages : {
                    images1,
                    images2,
                    images3,
                    images4,
                    images5
                }
                ,image, detailCategory
            })
            // save mongodb
            await newProduct.save()
            res.json({msg: "Created a product"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // update product from admin
    updateProduct: async(req, res) =>{
        try {
            // check image exist or not exist
            const {nameProduct,idCategory_product,color,size1,size2,size3,size4,size5, price,image} = req.body;
            if(!image) return res.status(400).json({msg: "No image upload"})
            // search id product and update to mongodb
            await Products.findOneAndUpdate({_id: req.body._id}, {
                nameProduct,idCategory_product,color,size :{
                    size1,
                    size2,
                    size3,
                    size4,
                    size5
                }, price,image
            })
            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
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