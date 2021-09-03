import React, { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBetraiApi() {
    const [product_betrai, setproduct_betrai] = useState([])
    const [sort, setSort] = useState(' ')

    useEffect(() => {
        const getproducbetrai = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_betrai/?${sort}`)
            setproduct_betrai(res.data)
        }
        getproducbetrai()

    }, [sort])
    return {
        product_betrai: [product_betrai, setproduct_betrai],
        sort: [sort, setSort]
    }
}
export default ProductBetraiApi